# Hotfix: /gynecomastia-surgery-in-gurgaon shows the site's 404 and the footer has no treatments

## Root cause
Nothing in the mapper, RLS policy, registry, footer or routing is wrong. I rebuilt the site against Postgres 16 with the migration and seed applied, the anon role, and the same publish updates (only gynecomastia and its Gurgaon page published). Result: Gurgaon page 200, treatment page 200, footer lists the treatment, other cities 404 as designed.

The difference on Vercel is the Next.js Data Cache. Every Supabase read goes through `fetch`, and Next.js caches it (the pages use `revalidate = 3600`). That cache survives redeploys. The first build ran while `treatments.published` was still false, so it cached "0 treatments, 4 cities, 0 pages". Later deploys kept reading that cached answer. That gives exactly the symptoms: cities appear, treatments do not, `resolveSlug` fails, the page 404s, and a redeploy does not help.

I reproduced the mechanism: with the old code, after publishing rows the running site's cached read still said 1 treatment while a direct read said 6 (`/api/health` shows both).

Also hardened (not the cause, but cheap and relevant): the Supabase URL and key now tolerate stray spaces or quotes, and accept `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` or `SUPABASE_URL` as alternatives. Database side was confirmed correct by you (grant, policy, published values).

## What changed
- `lib/data/supabase.ts`: every read now has a cache key that includes the deployment id (each deploy starts clean), a 5 minute lifetime instead of 1 hour, and the tag `site-data`.
- `lib/data/index.ts`: a connected database that returns 0 treatments, cities or pages logs a clear `[bestdoctorsin] Supabase is connected but returned: ...` error.
- `lib/env.ts`: trims and unquotes the Supabase values; accepts the publishable-key name.
- `app/api/revalidate/route.ts`: also clears the `site-data` tag.
- `app/api/health/route.ts` (new): GET returns counts only: hasSupabase, treatments, publishedTreatments, cities, pages, publishedPages, faqs, posts, reviewers, buildTime, resolvedGurgaonSlug, in two blocks: `fresh` (direct read) and `cached` (what pages use). No keys, URLs or row content.
- `supabase/fix-publish.sql` (new, idempotent): publishes reviewers, cities, the gynecomastia treatment, its Gurgaon page, and its guides; prints a check.
- `tests/misc.test.ts`: one new test.

## Founder steps
1. In GitHub, upload the files from `hotfix-files/` at the same paths (the zip has the same layout), commit to the branch Vercel deploys.
2. Run `supabase/fix-publish.sql` in the Supabase SQL editor. It should end with treatments/pages/cities counts of at least 1/1/4.
3. Wait for the Vercel deploy to be Ready (the new deployment id starts with an empty cache).
4. Open `https://bestdr-flame.vercel.app/api/health`. Expect `ok:true`, `publishedTreatments` 1 or more, `publishedPages` 1, `resolvedGurgaonSlug:true`, and `fresh` equal to `cached`.
5. Open `/gynecomastia-surgery-in-gurgaon`. It should render. It stays noindex while the sample data and chips remain, by design.
6. If `fresh` and `cached` ever differ later: redeploy, or POST `/api/revalidate` with header `x-revalidate-secret` and body `{"all":true}`. Without a webhook, published changes appear within 5 minutes.
7. If `hasSupabase` is false, the env values are missing or empty in that Vercel environment (Production vs Preview). If `publishedTreatments` is 0 in `fresh`, the database rows are not published.

## Checks run
Build green (shared JS 103 kB), lint and typecheck clean, Vitest 47/47, Playwright 9/9, banned-word and FAQ check 56 pages with 0 failures. Local reproduction used a small REST shim over Postgres 16 with RLS as `anon`, not real PostgREST, so Supabase's gateway was not exercised.
