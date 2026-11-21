-- Release 3: skin, hair and injectable topics. Idempotent: safe to run more than once
-- (also run by supabase/seed-add.sql and supabase/seed-add-skin-hair.sql).
-- category groups topics in menus and hubs; care_kind and include_keys let non-surgical topics skip surgery-only blocks and fields.

alter table public.treatments add column if not exists category     text  not null default 'surgery';
alter table public.treatments add column if not exists care_kind    text;
alter table public.treatments add column if not exists include_keys jsonb;
alter table public.treatments add column if not exists seo          jsonb;

do $$
begin
  if not exists (select 1 from pg_constraint where conname = 'treatments_category_check') then
    alter table public.treatments add constraint treatments_category_check check (category in ('surgery', 'skin', 'hair', 'injectables'));
  end if;
  if not exists (select 1 from pg_constraint where conname = 'treatments_care_kind_check') then
    alter table public.treatments add constraint treatments_care_kind_check check (care_kind is null or care_kind in ('surgical', 'non-surgical'));
  end if;
end $$;

-- Topic-specific cost page text and the extra city page fields.
alter table public.treatments           add column if not exists cost_page jsonb;
alter table public.treatment_city_pages add column if not exists seo_title text;
alter table public.treatment_city_pages add column if not exists h1        text;
alter table public.treatment_city_pages add column if not exists intro     text;
alter table public.treatment_city_pages add column if not exists sections  jsonb;
