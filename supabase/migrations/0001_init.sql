-- Bestdoctorsin: initial schema, row level security and policies.
-- Apply in the Supabase SQL editor, or with `supabase db push`.
--
-- Access model
--   anon / authenticated  : SELECT published rows only; INSERT into leads only (no SELECT on leads)
--   service_role (server) : full access (bypasses RLS) - used by editors/CI, never shipped to the browser

create extension if not exists pgcrypto;

-- ---------------------------------------------------------------- reviewers
create table public.reviewers (
  id             text primary key,
  name           text not null,
  credential     text not null,
  reviewed_on    date not null,
  is_sample      boolean not null default true,
  photo_consent  boolean not null default false,
  published      boolean not null default false
);

-- ---------------------------------------------------------------- cities
create table public.cities (
  slug       text primary key check (slug ~ '^[a-z0-9-]+$'),
  name       text not null,
  alt_name   text,
  state      text not null,
  areas      jsonb not null default '[]',
  summary    text not null,
  nearby     jsonb not null default '[]',     -- [{citySlug, reason}]
  published  boolean not null default true
);

-- ---------------------------------------------------------------- treatments
create table public.treatments (
  slug            text primary key check (slug ~ '^[a-z0-9-]+$'),
  name            text not null,
  menu_name       text not null,
  alternate_name  text,
  summary         text not null,
  procedure       jsonb not null,             -- schema.org MedicalProcedure fields
  national_range  jsonb,                      -- {minInr, maxInr, fromInr, validAsOf, isSample}
  cost_factors    jsonb not null default '[]',
  desk_work       text not null default '',
  card_blurb      text not null default '',
  icon            smallint not null default 1,
  related         jsonb not null default '[]',
  read_slugs      jsonb not null default '[]',
  video_slugs     jsonb not null default '[]',
  reviewer_id     text references public.reviewers(id),
  content         jsonb,                      -- full editorial content (see content/types.ts)
  published       boolean not null default false
);

-- ---------------------------------------------------------------- treatment x city pages
create table public.treatment_city_pages (
  treatment_slug   text not null references public.treatments(slug) on delete cascade,
  city_slug        text not null references public.cities(slug) on delete cascade,
  is_placeholder   boolean not null default true,
  published        boolean not null default false,
  reviewer_id      text references public.reviewers(id),
  meta_description text,
  -- price (publish gate G1)
  price_min_inr    integer,
  price_max_inr    integer,
  price_from_inr   integer,
  price_valid_as_of text,                      -- YYYY-MM
  price_collected_on date,
  price_data_points smallint,
  price_source_type text check (price_source_type in ('partner_quote','price_list','patient_invoice','founder_published')),
  price_is_sample  boolean not null default true,
  price_chip_label text,
  price_basis      text,
  includes         jsonb not null default '{}',  -- G2
  facilities       jsonb,                        -- G3
  travel           jsonb,                        -- G5
  local_context    jsonb not null default '[]',  -- G8
  usefulness       text not null default '',     -- G13
  signoffs         jsonb not null default '{}',
  lighthouse_ok    boolean not null default false,
  before_after     jsonb not null default '[]',  -- G10: every image needs a consent id
  local_copy       jsonb not null default '[]',
  primary key (treatment_slug, city_slug),
  check (price_min_inr is null or price_max_inr is null or price_min_inr <= price_max_inr)
);

-- ---------------------------------------------------------------- costs (line items)
create table public.costs (
  id             bigint generated always as identity primary key,
  treatment_slug text not null references public.treatments(slug) on delete cascade,
  city_slug      text references public.cities(slug) on delete cascade,   -- null = national
  position       smallint not null,
  component      text not null,
  min_inr        integer,
  max_inr        integer,
  note           text not null default '',
  check (min_inr is null or max_inr is null or min_inr <= max_inr)
);

-- ---------------------------------------------------------------- faqs
create table public.faqs (
  id             text primary key,
  treatment_slug text not null references public.treatments(slug) on delete cascade,
  city_slug      text references public.cities(slug) on delete cascade,   -- null = every page of the treatment
  position       smallint not null,
  question       text not null,
  answer         text not null,
  published      boolean not null default true
);

-- ---------------------------------------------------------------- blog posts
create table public.blog_posts (
  slug            text primary key check (slug ~ '^[a-z0-9-]+$'),
  title           text not null,
  excerpt         text not null,
  minutes         smallint not null default 4,
  thumb           smallint not null default 1,
  treatment_slug  text references public.treatments(slug),
  body            jsonb not null default '[]',
  reviewer_id     text references public.reviewers(id),
  published       boolean not null default false,
  date_published  date not null default current_date,
  date_modified   date not null default current_date
);

-- ---------------------------------------------------------------- videos
create table public.videos (
  slug          text primary key,
  title         text not null,
  duration      text not null,
  iso_duration  text not null,
  description   text not null,
  transcript    text not null,
  poster        text not null check (poster in ('grades','recovery')),
  poster_alt    text not null,
  youtube_id    text,
  upload_date   date not null,
  is_sample     boolean not null default true,
  published     boolean not null default true
);

-- ---------------------------------------------------------------- leads (DPDP)
create table public.leads (
  id               uuid primary key default gen_random_uuid(),
  created_at       timestamptz not null default now(),
  name             text not null check (char_length(name) between 1 and 80),
  mobile           text not null check (mobile ~ '^[6-9][0-9]{9}$'),
  city             text not null check (city in ('delhi','gurgaon','kanpur','lucknow','other')),
  treatment        text not null default '' check (char_length(treatment) <= 80),
  source           text not null default '/' check (char_length(source) <= 200),
  consent_at       timestamptz not null,
  consent_version  text not null,
  status           text not null default 'new'
);
create index leads_created_idx on public.leads (created_at desc);

-- ================================================================ row level security
alter table public.reviewers            enable row level security;
alter table public.cities               enable row level security;
alter table public.treatments           enable row level security;
alter table public.treatment_city_pages enable row level security;
alter table public.costs                enable row level security;
alter table public.faqs                 enable row level security;
alter table public.blog_posts           enable row level security;
alter table public.videos               enable row level security;
alter table public.leads                enable row level security;

-- Public read of published rows only.
create policy "public read published" on public.reviewers  for select to anon, authenticated using (published);
create policy "public read published" on public.cities     for select to anon, authenticated using (published);
create policy "public read published" on public.treatments for select to anon, authenticated using (published);
create policy "public read published" on public.faqs       for select to anon, authenticated using (published);
create policy "public read published" on public.blog_posts for select to anon, authenticated using (published);
create policy "public read published" on public.videos     for select to anon, authenticated using (published);
create policy "public read published" on public.treatment_city_pages for select to anon, authenticated using (published);
create policy "public read costs of published pages" on public.costs for select to anon, authenticated using (
  exists (select 1 from public.treatments t where t.slug = costs.treatment_slug and t.published)
  and (
    costs.city_slug is null
    or exists (select 1 from public.treatment_city_pages p
               where p.treatment_slug = costs.treatment_slug and p.city_slug = costs.city_slug and p.published)
  )
);

-- Leads: anonymous visitors may insert one row with consent recorded. Nobody can read them from the browser.
-- Only the listed columns can be written by anon. id, created_at and status always take their defaults,
-- so a holder of the public key cannot set status or back-date a row.
create policy "anon can insert lead with consent" on public.leads for insert to anon, authenticated
  with check (consent_at is not null and char_length(consent_version) > 0 and status = 'new');
revoke all on public.leads from anon, authenticated;
grant insert (name, mobile, city, treatment, source, consent_at, consent_version) on public.leads to anon, authenticated;

-- consent_at is stamped by the database, whatever the client sends.
create or replace function public.leads_stamp_consent() returns trigger language plpgsql as $$
begin
  new.consent_at := now();
  return new;
end $$;
create trigger leads_stamp_consent before insert on public.leads
  for each row execute function public.leads_stamp_consent();

-- Content tables: the browser keys may only SELECT (RLS then limits that to published rows).
revoke all on public.reviewers, public.cities, public.treatments, public.treatment_city_pages,
              public.costs, public.faqs, public.blog_posts, public.videos from anon, authenticated;
grant select on public.reviewers, public.cities, public.treatments, public.treatment_city_pages,
                public.costs, public.faqs, public.blog_posts, public.videos to anon, authenticated;
