# Engineering report: bestdoctorsin.com

## What was built
Next.js 15 (App Router, strict TS, plain CSS) site generated from data in `content/` (or Supabase). The Gurgaon gynecomastia page is rendered from the approved `page.html` design with near pixel parity at 390 and 1366 (fold and cost section compared; differences are intentional content changes only). No sideways scroll at 390, 1366 or 1920. Fonts are self-hosted (Inter, Source Serif 4).

## Routes
`/` home, `/[slug]` (allow-list: 6 treatments, 4 city hubs `plastic-surgery-in-<city>`, 24 `<treatment>-in-<city>` pages; anything else is a real 404), `/plastic-surgery`, `/cost`, `/cost/[treatment]`, `/learn`, `/learn/[slug]` (8 stubs), `/videos`, static pages (about, how-we-verify-surgeons, medical-review-board, editorial-policy, privacy, medical-disclaimer, terms, contact), `/api/leads`, `/api/revalidate`, `robots.txt`, `sitemap.xml`, custom 404.
Redirects: `/blog` to `/learn`, `/blog/:slug` to `/learn/:slug`, `/how-we-work` to `/how-we-verify-surgeons` (canonical names follow the SEO plan).

## Build output
Shared first-load JS 103 kB; pages 109 to 111 kB (target < 150 kB). 62 static pages generated, hourly ISR.

## Tests (all green)
- Vitest: 4 files, 43 tests (publish gate G1 to G13, schema builders, lead schema/fields/rate limit/API route, banned words, routing, registry, SEO helpers, Supabase mappers).
- Playwright: 7 tests (Gurgaon page at 390 and 1366, noindex and canonical, no JS errors, form validation and submit, desktop menu Enter/Escape focus return, mobile menu, 404).
- `npm run check:html`: 56 rendered pages, 0 banned words, FAQ JSON-LD equals visible FAQ. Lint and typecheck clean.
- Banned-word re-run found one real hit ("painless" in the gland-vs-fat table); fixed to "Usually not tender".

## Coordinator changes folded in
- Registration number removed everywhere: reviewer line, reviewer/sources block, reviewer components, fixtures, SQL column, mapper, JSON-LD and the gate. Reviewer shows name, qualification and review date. The sentence "We list a surgeon only after registration and accreditation are checked" is kept.
- Source facts (14-source-data) rewritten in our own words: grades, causes, symptoms, gland-vs-fat table, risks, cautious recovery table marked "pending surgeon review", 5-step process, myths ("no good evidence"), 14 FAQs. No clinic name, address, contact, doctor, brand or technique names, success rates, counts, ratings or banned claims. The 4 studies are not cited.
- Price Rs 62,000 to 94,000 (from Rs 45,000) with the Sample chip labelled "To be confirmed". Included: facility, anaesthesia, surgeon fees. Follow-up, garment, medicines, tests are "ask in writing". The cost checker returns only this range plus qualitative notes.

## Notable behaviour
- The Gurgaon page honestly fails the publish gate (sample price, 1 data point, no real reviewer or sign-offs, no Lighthouse record), so it stays noindex and out of the sitemap even with `NEXT_PUBLIC_INDEXING=on`. By design.
- Sample VideoObject JSON-LD is emitted only while indexing is off; reviewedBy/lastReviewed only for a non-sample reviewer.
- Videos nav has a single link (video detail pages not built). Sample statics (retention period, how we are paid, grievance officer) carry the "To be confirmed" chip.
- Leads: Zod, honeypot, consent required, in-memory per-IP rate limit (per server instance only), no OTP, no tracking of unsubmitted input, analytics stub off.

## Known gaps
- Supabase code paths are not tested against a live instance (mappers are unit tested). Seed rows for treatments, pages and posts are unpublished.
- Rate limit is not shared across serverless instances; use an edge or Redis limiter before scale.
- Hindi (/hi/) is scaffolding only. Lighthouse not run in this sandbox (no production URL).
- Only gynecomastia has full content; other treatments and 23 city pages are placeholders.

## Needs real data
Reviewer identity and review date, confirmed price and 3+ data points per city page, partner facility facts, travel times, surgeon-reviewed recovery table, verified source citations, WhatsApp number, real video IDs, logo URL, retention period, grievance officer, blog content.

## QA fixes (from qa/QA-REPORT.md)
Re-run after the fixes: build green (shared JS 103 kB, pages 109 to 111 kB), lint and typecheck clean, Vitest 46/46, Playwright 9/9, check:html 56 pages with 0 failures (banned-word check now also matches stems such as safely, safety, offers, guarantees).

| ID | Status | What changed |
|---|---|---|
| QA-01 | Fixed | A number that is not 11 to 15 digits counts as unset. `waLink()` returns null; the WhatsApp buttons (hero, header, sticky bar, menu, bands, form, placeholder pages) are hidden and the call-back button remains. The WhatsApp band becomes a call-back band. `.env.example` has an empty value. The build fails if indexing is on and the number is invalid. e2e asserts no `wa.me` link. |
| QA-02 | Fixed | With no database the API returns 202 `stored:false` (503 if indexing is on) and the form shows "Demo mode: nothing was saved", never "Thank you". |
| QA-03 | Fixed | `.wrap` max-width 1720px. Measured left edge: 156px at 1920, 48px at 1366, no change below 1720. |
| QA-04 | Fixed | The 900px inner column is removed from home, hubs, placeholders, cost, learn, static and 404 pages. The logo and H1 share a left edge on all sampled pages at 1920, 1366, 390 and 320. Paragraphs keep a 76-character measure. |
| QA-05 | Fixed | Enforced CSP (self, Google Fonts, YouTube no-cookie frames, inline scripts and styles allowed because a nonce would make every page dynamic), plus frame-ancestors none. X-Frame-Options and Referrer-Policy are asserted in e2e, with no CSP console violations. Note `script-src 'unsafe-inline'` is a known compromise. |
| QA-06 | Fixed | Static pages and treatment pages with Sample / To be confirmed / Pending markers are noindex and out of the sitemap; the home page stays noindex while any treatment is a Draft. Gate G10 now fails city pages that show placeholder chips or sample price or reviewer. |
| QA-07 | Fixed | In production a failed Supabase read throws (the build fails, and ISR keeps the last good page). Fixtures are used only without env or in development. |
| QA-08 | Fixed | Anon may insert only name, mobile, city, treatment, source, consent_at and consent_version (column grant); the policy requires status 'new'; a trigger stamps consent_at with now(); length checks on treatment and source. Verified on PostgreSQL 16: status, id and oversize source are rejected. Also revoked all but SELECT from anon on content tables (QA-21 part, TRUNCATE blocked). |
| QA-11 | Fixed | H1 wraps long words; no sideways scroll at 320. |
| QA-10 | Fixed | Pasted "+91 98765 43210" or a leading 0 now gives the 10-digit number. |
| QA-14 | Fixed | VideoObject is emitted only for non-sample videos with a YouTube id. |
| QA-18 | Fixed | "fake offers" and "safety guarantees" reworded; checker uses stems. |
| QA-09, QA-12, QA-13, QA-15, QA-16, QA-17, QA-19, QA-20, rest of QA-21, QA-22 | Not fixed | Outside the requested scope: need a platform IP header or shared limiter (QA-09), design review of chips and footnote targets, the Next 16 upgrade (QA-22), and launch-time items. QA-13 chips on the sticky rail and short answers still need adding. |
