# Release 3: exact steps

Adds six skin, hair and injectable topics (acne treatment, hydrafacial, botulinum toxin injections, anti-aging treatment, PRP, hair transplant), their 24 city pages and 6 cost pages, 48 new guides, a copy checker script and a new menu and hub structure. Every new city page and cost page stays noindex through the unchanged publish gate. Prices stay "Sample data / To be confirmed".

The zip `bestdoctorsin-release-3.zip` holds only files that are new or changed since `bestdoctorsin-release-2.zip`, at their repo paths, inside the folder `release-3/`.

## 1. Upload files (GitHub web UI)
1. Unzip `bestdoctorsin-release-3.zip`.
2. In your repo choose Add file, Upload files. Drag in these folders: `app`, `components`, `content`, `e2e`, `lib`, `scripts`, `supabase`, `tests`. Then drag in the root files: `package.json`, `next.config.ts`, `README.md`, `RELEASE-3.md`. Commit.
3. Bracket folder (cannot be uploaded): `app/cost/[treatment]/page.tsx` changed. The GitHub upload page drops folders named with square brackets, so edit that file in the web editor. Open `app/cost/[treatment]/page.tsx` in the repo, click the pencil, select all, paste the contents of `release-3/BRACKET-FILES/app-cost-treatment-page.tsx`, commit.
4. `app/[slug]/page.tsx` and `app/learn/[slug]/page.tsx` are unchanged in this release, so nothing to edit there. If a build error ever points at either file, open it the same way (pencil, select all, paste) and use the copy from release 2 (`BRACKET-FILES/app-learn-slug-page.tsx` is in `bestdoctorsin-release-2.zip`).
5. Files deleted by this release: none. (The old `content/blog.ts` was deleted in release 2. If it is still in your repo, delete it now with the bin icon or the build breaks.)
6. No new environment variables.

## 2. Run the SQL
Supabase, SQL editor: paste all of `supabase/seed-add-skin-hair.sql` and Run. Run `0001` and `0002` first only if they were never applied. This file applies migration 0003 (adds category, care kind, include keys and the page text columns) and upserts only the six new topics, their 24 city pages, cost text, FAQs and 48 guides. It is safe to run again and never unpublishes anything. The last statement is a check: expect 6 rows (one per topic), each with `city_pages` 4 and `published_city_pages` 0. The city pages are hidden from the public by design until the publish gate passes.

`supabase/seed.sql` and `supabase/seed-add.sql` are regenerated too (same content, full set). You do not need to run them for this release.

To look at the written city pages on staging, the SQL file ends with an optional statement (commented out) that publishes them by hand. Set them back to false before launch.

## 3. Redeploy
Vercel, Deployments, Redeploy (untick build cache). Or call `/api/revalidate` with your secret.

## 4. /api/health
Open `/api/health`. Expect `ok: true`, `hasSupabase: true`, `buildTime`, `resolvedGurgaonSlug: true`, and for both `fresh` and `cached`: treatments 11 (publishedTreatments 8), cities 4, pages 44 (publishedPages 8), faqs 208, posts 74, reviewers 1. The counts come from the sample data in the repo, so treat the SQL check query as the final word on the new pages. If `fresh` and `cached` differ, redeploy.

## 5. URLs to check on staging
Hubs: `/acne-treatment`, `/hydrafacial`, `/botulinum-toxin-injections`, `/anti-aging-treatment`, `/prp-treatment`, `/hair-transplant`.
City pages (4 per topic, for example): `/acne-treatment-in-delhi`, `/hydrafacial-in-gurgaon`, `/botulinum-toxin-injections-in-lucknow`, `/anti-aging-treatment-in-kanpur`, `/prp-treatment-in-delhi`, `/hair-transplant-in-gurgaon`.
Cost pages: `/cost/acne-treatment`, `/cost/hydrafacial`, `/cost/botulinum-toxin-injections`, `/cost/anti-aging-treatment`, `/cost/prp-treatment`, `/cost/hair-transplant`, and the `/cost` index.
Guides: `/learn` (try the topic filter) and one from each topic, for example `/learn/acne-grades-when-to-see-doctor`, `/learn/read-hydrafacial-quote`, `/learn/how-long-wrinkle-injections-last`, `/learn/home-remedies-skin-ageing`, `/learn/prp-for-hair-loss-evidence`, `/learn/hair-transplant-recovery-calendar`.
Expected: all new city pages and cost pages carry noindex and are not in `/sitemap.xml`. Guides also stay noindex until `INDEXING_ON` is enabled. Check the menu and footer on a 375 px phone.

## 6. Copy checker
`npm run check:copy` scans `content/**/*.ts` for banned words, dashes, hospital and doctor names, regulated terms and not-X-but-Y patterns. It exits 1 on errors. Warnings (possible triads, post length and link checks, title-case headings) do not fail the run unless you add `--strict`. The 48 new guides pass with zero errors. Findings in other files are listed in the engineering notes; run the command to see them.

## 7. Founder to-do list
1. Prices. Every figure is a pending slot. For each topic collect at least 3 dated quotes (under 183 days old) per line from separate sources, and enter source type, number of data points and date. Do not copy a competitor figure.
2. Partner facilities. Name a real partner type per city (no hospital name is shown on the site) and confirm that it provides the service. City pages stay noindex until a partner and local data exist.
3. Reviewer. Appoint a registered dermatologist (and a hair surgeon for hair transplant) and replace the `sample-reviewer` record. Its credential says "plastic surgeon", which is wrong for skin and hair pages. The isotretinoin guide needs two reviewers.
4. Sources. The 48 guides carry about 157 `TODO-VERIFY` comments. A person must open each Sources line, name two peer-reviewed papers for the PRP and hair guides, confirm every day, month and range (recovery calendar, session gaps, onset and duration of botulinum toxin), and replace the placeholder sources in the three quote guides (hydrafacial, PRP cost, hair transplant cost) with a named consumer-protection source. Then switch the guides from staging to reviewed.
5. Images. Fill the image slots: cover images, the acne grade and scar diagrams, the Norwood chart (redraw it, do not copy), the face-area diagram. No before and after images.
6. Lawyer decisions (see `16-skin-hair-expansion/seo-2-botox-antiaging.md`, section 7.4):
   - Botulinum toxin slug. Option B (`botulinum-toxin-injections`) is live. Option A (`/botox-treatment`) is a one-line change of `TOXIN_SLUG` in `content/slugs.ts`, and `next.config.ts` redirects the other spelling. Decide before the pages are indexed. The common name appears only in plain body text of the toxin guides and pages, never in a title, slug, nav label or anchor.
   - Whether a sample price range per area is allowed, or only the factor table.
   - Wording for finasteride and minoxidil (generic names only), the "hydrafacial" trademark note, filler regulation, and any approval statements (none are used).
   - Consent text for the call-back form and the complaint and reporting channel for suspected fake products (the check-product guide has a placeholder).
7. SERP check (60 minutes per brief) and keyword volumes, then replace draft FAQ wording with real People Also Ask questions.
8. Decide when to switch on indexing. Nothing here changes the publish gate.
