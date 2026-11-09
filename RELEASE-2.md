# Release 2: exact steps

Adds liposuction, 8 city pages (noindex until the gate passes), 24 guides, image slots, cost-list duplicate fix, mobile bar fix and an optional chat launcher.

## 1. Upload files (GitHub web UI)
1. Unzip `bestdoctorsin-release-2.zip`. The folder `release-2/` holds only new or changed files at their repo paths.
2. In your repo choose Add file, Upload files, and drag the folders in (`app`, `components`, `content`, `lib`, `public`, `scripts`, `styles`, `supabase`, `tests`, `e2e`, plus the root files). Commit.
3. **Bracket folder (cannot be uploaded):** `app/learn/[slug]/page.tsx` changed. Open that file in the repo, click the pencil (edit), select all, paste the contents of `release-2/BRACKET-FILES/app-learn-slug-page.tsx`, commit.
4. **Delete the old file `content/blog.ts`** (it was moved to `content/blog/base.ts`). Open it, click the bin icon, commit. If you skip this the build breaks.
5. Optional env vars in Vercel: `NEXT_PUBLIC_CHATBOT_SRC` (and `CHATBOT_ORIGINS`) only when you have a chat widget. Leave unset for none.

## 2. Run the SQL
Supabase, SQL editor: paste all of `supabase/seed-add.sql` and Run. It is safe to run again. It applies the 0002 migration, removes duplicate cost lines (this fixes the doubled "Facility fee"), adds a unique index, upserts content and publishes the new rows for staging. The last lines are a check: expect treatments 2, pages 8, guides 24 or more, cost lines 8 for gynecomastia and 5 for liposuction.

## 3. Redeploy
Vercel, Deployments, Redeploy (untick build cache). Or call `/api/revalidate` with your secret.

## 4. URLs to check on staging
`/liposuction`, `/liposuction-in-gurgaon`, `/liposuction-in-delhi`, `/liposuction-in-lucknow`, `/liposuction-in-kanpur`, `/gynecomastia-surgery-in-delhi`, `/gynecomastia-surgery-in-lucknow`, `/gynecomastia-surgery-in-kanpur`, `/cost/liposuction`, `/cost/gynecomastia-surgery` ("Facility fee" once), `/learn` (try the treatment filter), `/learn/liposuction-recovery-timeline`, `/plastic-surgery`. All new city pages and guides stay noindex: expected. On a 360 px phone the bottom bar shows WhatsApp and Call me back.

## 5. /api/health
Open `/api/health`. Expect `hasSupabase: true`, `buildTime`, `resolvedGurgaonSlug: true`, and under `fresh` and the cached counts: treatments 6 (publishedTreatments 2), cities 4, pages 24 (publishedPages 8), faqs 52, posts 26 or more, reviewers 1. If `fresh` and the cached counts differ, redeploy.

## Notes
Nothing here changes the publish gate. Prices stay "Sample data / To be confirmed".
