-- Release 2. Idempotent: safe to run more than once (also run by supabase/seed-add.sql).
-- Adds image slots, display wording and local notes, and makes cost lines unique.

alter table public.treatments           add column if not exists display     jsonb;
alter table public.treatments           add column if not exists images      jsonb;
alter table public.treatment_city_pages add column if not exists images      jsonb;
alter table public.treatment_city_pages add column if not exists local_notes jsonb not null default '[]';
alter table public.blog_posts           add column if not exists cover       jsonb;
alter table public.blog_posts           add column if not exists next_cities jsonb;

-- Duplicate cost lines appear when a seed file is run twice. Keep the lowest id of each line, then forbid repeats.
delete from public.costs a
 using public.costs b
 where a.treatment_slug = b.treatment_slug
   and coalesce(a.city_slug, '') = coalesce(b.city_slug, '')
   and a.position = b.position
   and a.id > b.id;

create unique index if not exists costs_unique_line
  on public.costs (treatment_slug, coalesce(city_slug, ''), position);
