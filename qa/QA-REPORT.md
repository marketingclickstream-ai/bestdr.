# QA report: bestdoctorsin-site

Date: 2026-11-09. Build under test: `npm run build` + `npm start` (Next 15.5.29, port 3100), plus a second build with `NEXT_PUBLIC_INDEXING=on` (and a third with a mock Supabase REST endpoint) for env behaviour. Browser: system Google Chrome via Playwright (the bundled chromium-1243 would not launch with the installed playwright version). Test scripts: `qa/work/*.js`. Screenshots: `qa/shots/`. Lighthouse report: `qa/work/lh-gurgaon.report.html`.

## Verdict

**GO for staging** (private, noindex, prototype banner on), on two conditions that take minutes:
1. Set `NEXT_PUBLIC_WHATSAPP_NUMBER` to a real number (QA-01). Today every WhatsApp button opens `https://wa.me/91`, which is not a valid chat.
2. Set the Supabase env vars, or tell testers that leads are NOT saved (QA-02). Today the form says "Thank you. A coordinator will reach out" while nothing is stored.

**NO-GO for production indexing** until QA-03 to QA-08 are resolved and the content placeholders in the engineering report are replaced with real data. The engineer's honest publish gate works as designed: the Gurgaon page stays noindex and out of the sitemap even with indexing on.

No blockers found. 8 major, 15 minor, 4 informational.

## Pass/fail matrix

| Area | Result | Notes |
|---|---|---|
| 1. Visual parity (390, 768, 1024, 1366x768, 1920) | PASS with 2 majors | Header, H1, logo, hero, price and CTA positions match the approved page to the pixel at all 5 widths. No sideways scroll on any of 56 routes at 390, 768, 1366, 1920. Logo loads by URL (`/_next/image` of `/assets/logo.png`, 200), not clipped. Fold at 1366x768 shows H1, price, both CTAs (CTA bottom 706 of 768). Margins too large at 1920 (QA-03) and inner pages misaligned (QA-04). 1 minor sideways scroll at 320 (QA-11). |
| 2. Functional | PASS | Desktop menu: hover, click, caret keyboard, ArrowDown, Escape returns focus, click-outside closes. Mobile menu: opens, search filters ("cost" finds 2 links, "zzzz" shows empty state), accordion, focus trap, Escape returns focus to burger, page behind made inert. Sticky bar hidden at top, shows after hero, buttons 52px tall. Dialog: modal, focus on name, Escape returns focus. FAQ (34 details) toggles by mouse and keyboard. Both video facades load nothing from YouTube until clicked, close returns focus. Cost checker works. Tick table: 8 checkboxes with labels. Crawl of every href on 56 routes: 0 broken, 0 redirecting hrefs, 0 empty hrefs, 0 bad anchors. Redirects `/blog`, `/blog/x`, `/how-we-work` are single-hop 308. Fails: QA-01, QA-02, QA-10. |
| Lead form and API | PASS with issues | Empty submit shows 3 errors and posts nothing; bad phone, no consent blocked client and server (422); honeypot returns 200 and stores nothing; rate limit trips on request 6 of 5 per 10 min (429 plus Retry-After); GET/PUT/DELETE/HEAD return 405, OPTIONS lists POST; bad JSON 400; 80-char name cap, source pattern, city enum enforced; XSS and SQL strings are accepted as text and are only ever sent as parameters. With a mock PostgREST: insert payload correct (`consent_at` set by server, `consent_version`), `stored:true`. Indexing on and no Supabase: 503 with WhatsApp fallback message (good). Issues: QA-02, QA-09, QA-10. |
| 3. SEO | PASS | All 56 pages: 1 H1, titles 28 to 60 chars (max 59), descriptions 65 to 148, no duplicate titles or descriptions, canonical correct and absolute, no heading level skips, 0 images without alt, `lang="en-IN"`. JSON-LD parses on every page. FAQPage (14 Q&A) equals the visible text word for word. Gurgaon page types: Organization, BreadcrumbList, MedicalWebPage, FAQPage, 2x VideoObject, ItemList. robots: off = `Disallow: /`, empty sitemap, every page `noindex, nofollow`; on = `Allow: /` + `Disallow: /api/`, sitemap lists 9 gate-passing static pages, Gurgaon page and all treatment pages stay noindex and unlisted, link mode switches to live (menus show only live pages). Gurgaon body links: 38 (plan 38, cap 40), 23 unique targets, 0 anchor text used more than 3 times. Issues: QA-06, QA-14, QA-15, QA-16, QA-17. |
| 4. Compliance | PASS with minor | 0 hits in rendered HTML, meta, alt text, aria-labels, JSON-LD and seed.sql for: best (except brand), guaranteed, safe, painless, permanent, success rate, lowest price, cheapest, affordable, world-class, discount, 100%. 0 hits for Kalosa, Khare, USFDA, 3000+, 8000+, 99%, 97%, 4.8, 4.9, scar-free, zero recurrence, VASER/MicroAire/Thermi, phone numbers, emails, street addresses, hospital or clinic names (only the generic "partner hospital"), registration numbers. Repo-wide grep also clean. Disclaimer, reviewer slot ("Reviewed by [Reviewer name]") and consent text present. Sample/To be confirmed/Pending chips: 27 on the Gurgaon page. Issues: QA-13, QA-18. |
| 5. Accessibility | PASS with minor | axe-core 4 (wcag2a, 2aa, 21aa, 22aa, best-practice), light theme, 11 pages at 1366 and 390: only 1 moderate finding per page (prototype banner outside landmarks, QA-19). Lighthouse a11y 100. Skip link is first tab stop and works. 172 tab stops walked on the Gurgaon page: every one has a visible focus style. Reduced motion: transitions and animations are all off. All inputs labelled. Tap targets at 390: only footnote links fail (QA-12). SVG label contrast could not be computed by axe (see "not tested"). |
| 6. Performance | PASS | Lighthouse mobile (simulated 4G, `/gynecomastia-surgery-in-gurgaon`): Performance 98, A11y 100, Best practices 100, SEO 69 (only because the page is noindex, expected). FCP 1.2 s, **LCP 2.1 s** (target < 2.5, aim < 1.5 not met), **CLS 0**, TBT 100 ms, **JS 125 to 128 KB transferred** (target < 150), 24 requests, 411 KB total, 0 third-party requests, 0 cookies, nothing in storage, no request while typing in the form. DOM 1,630 elements. See QA-23. |
| 7. Security | PASS with majors | Headers present: X-Content-Type-Options, X-Frame-Options DENY, Referrer-Policy, Permissions-Policy; no X-Powered-By. Missing: CSP (QA-05); HSTS is expected from Vercel. `/api/revalidate`: 401 without secret, constant-time compare, GET 405. No secret or anon key in the client bundle (checked both builds). `.env.example` has no real values; `.env*` ignored by git. npm audit: 8 (1 high, 7 moderate), QA-22. |
| 8. Data / SQL | PASS with minor | Ran `0001_init.sql` then `seed.sql` on PostgreSQL 16 with emulated Supabase roles and default grants: both apply cleanly, seed is idempotent. Verified as role `anon`: SELECT on leads denied; INSERT works; UPDATE/DELETE on leads denied; unpublished treatments, pages, blog posts and costs return 0 rows; published cities (4) readable; content tables cannot be written. Check constraints reject bad mobile and city. Findings QA-08 and QA-21. |

## Defects, sorted by severity

### Major

**QA-01 WhatsApp buttons point to an invalid number by default**
- Where: every page, hero, sticky bar, mobile menu, form, footer. `lib/env.ts` line 10.
- Steps: `npm run build && npm start` with no env, or with `.env.example` copied as is (`91XXXXXXXXXX`). Inspect any WhatsApp link.
- Expected (README): "Unset means the buttons have no number." Actual: href is `https://wa.me/91?text=...` because the placeholder is stripped to digits (`91XXXXXXXXXX` becomes `91`). The primary CTA silently fails.
- Fix: if the cleaned number is not 11 to 15 digits, hide or disable the WhatsApp buttons (or show "WhatsApp number to be confirmed" chip); fail the build when `NEXT_PUBLIC_INDEXING=on` and the number is invalid; remove the placeholder from `.env.example` or leave it empty.

**QA-02 Lead form says "Thank you" when nothing was stored**
- Where: any lead form, no Supabase env (also in `lib/leads-store.ts`, `app/api/leads/route.ts`).
- Steps: fill valid name, 9876543210, tick consent, submit. Response `{"ok":true,"stored":false}`; UI shows "A coordinator will reach out".
- Expected: a prototype must not imply a lead was captured. Actual: lead is silently dropped (this is the "fixture mode").
- Fix: return a distinct status (for example 202 with `stored:false`) and show "Prototype: your details were not saved. Use WhatsApp." when not stored; or return 503 whenever Supabase is not configured outside an explicit demo flag.

**QA-03 Side margins at 1920 are about 196 px, founder asked for about 150 px**
- Where: all pages, `styles/globals.css` line 25-26 (`.wrap{max-width:1640px}` plus clamp padding up to 56px).
- Steps: open the Gurgaon page at 1920x1080. Content starts at x=196 and ends at x=1724. Pristyn at 1903 is about 150. (Approved `page.html` has the same value, so parity passes but the founder complaint is not resolved. At 1366 the margin is 48, fine.)
- Fix: raise the wrap to about 1720 (content about 1600) so the margin is about 150 at 1903; re-check the hero text measure and screenshot at 1536 and 1920. Screenshot: `qa/shots/site-1920x1080-fold.png`.

**QA-04 Home, hubs, placeholders, cost, learn, videos and static pages use a narrow centred column that does not align with the header**
- Where: 13 of 15 sampled page types, for example `/`, `/cost`, `/liposuction-in-gurgaon`, `/learn`, `/about`.
- Steps: open at 1366x768. H1 and content start at x=281 (width 804) while the header logo is at x=48. Only the Gurgaon and `/gynecomastia-surgery` pages start at x=48. Margins are 6 times larger than the page the founder approved, which is the complaint he already raised.
- Fix: use the same `.wrap` container for inner pages, keeping only long paragraphs to a 65 to 75 character measure. Screenshots: `qa/shots/page-home-1366.png`, `page-placeholder-city-1366.png`.

**QA-05 No Content-Security-Policy header**
- Where: all responses (`next.config.ts` `headers()`).
- Expected: CSP listed in the security brief. Actual: absent. The site has no third-party scripts, so a strict policy is feasible (`default-src 'self'`; `frame-src https://www.youtube-nocookie.com`; `img-src 'self' data:`; nonce or hash for Next inline scripts, or `'unsafe-inline'` for scripts as the starting point).
- Fix: add CSP in report-only first, then enforce. Not a staging blocker.

**QA-06 With indexing on, home and static pages with placeholders become indexable and listed in the sitemap**
- Where: `/`, `/about`, `/contact`, `/privacy`, `/terms`, `/editorial-policy`, `/how-we-verify-surgeons`, `/medical-disclaimer`, `/medical-review-board` (9 URLs in sitemap, `index, follow`).
- Steps: build with `NEXT_PUBLIC_INDEXING=on`. `/privacy` still shows 6 "To be confirmed" chips (retention period, grievance officer, how we are paid, company registration). Home still shows "Sample data" and "Draft" labels.
- Fix: apply a gate to static pages too: noindex any page that renders a Sample/To-be-confirmed chip or has `isSample` content; add a launch checklist line.

**QA-07 Silent fallback to sample data when Supabase fails**
- Where: `lib/data/index.ts` (`catch` returns `fixtures`).
- Steps: build with Supabase env pointing at an unreachable host. Build succeeds and pages contain sample data. During an hourly revalidation outage the same fallback would replace good published pages with sample data.
- Fix: in production (or when `INDEXING_ON`), rethrow so ISR keeps the last good page and the build fails loudly; keep the fallback for local dev only.

**QA-08 Anon can insert arbitrary column values into `leads`**
- Where: `supabase/migrations/0001_init.sql`, leads policy and grants.
- Steps (run on local PG16 as role anon): insert with `status='closed'`, `created_at='1999-01-01'`, fixed `id`, `consent_at='1970-01-01'`, a 100,000-character `source`. All 3 inserts succeeded. Read, update and delete are correctly denied.
- Impact: anyone holding the anon key can write directly to the table, skipping the API honeypot, rate limit and consent stamping, and can poison status or dates. The key is not in the client bundle today (checked), so severity is bounded, but the design relies on it staying secret although it is named `NEXT_PUBLIC_`.
- Fix: write leads from the API with a server-only service-role key and revoke anon INSERT; or `grant insert (name,mobile,city,treatment,source,consent_at,consent_version)` only, add length checks on `treatment` and `source`, and make `consent_at` default to `now()` with a trigger that overrides it.

### Minor

**QA-09 Rate limit is spoofable and the endpoint accepts cross-site form posts.** Rotating `x-forwarded-for` made 8 of 8 requests succeed (limit is 5). `Content-Type: text/plain` bodies are parsed as JSON, so a third-party page can post leads without a CORS preflight. Fix: take the IP from the platform header (Vercel: use the rightmost trusted value or `request.ip`), require `application/json`, check `Origin` or `Sec-Fetch-Site`, and move the limit to Upstash or the Vercel WAF as the report already says.

**QA-10 Pasting "+91 98765 43210" into the mobile field gives "9198765".** `maxLength={10}` truncates before the digit filter runs. Mobile page, any form. Fix: handle `onPaste`/`onChange` by stripping `+91`, `91` prefix and a leading 0 before truncating; server also rejects 12-digit input. Screenshot: `qa/shots/m390-form-errors.png`.

**QA-11 `/learn/pseudogynecomastia` clips its H1 and scrolls sideways at 320 px (scrollWidth 357).** The long word "Pseudogynecomastia:" does not wrap. Fix: `overflow-wrap:anywhere` or `hyphens:auto` on H1, or a smaller clamp minimum. Screenshot: `qa/shots/overflow-320-pseudogynecomastia.png`.

**QA-12 Footnote reference links are 11x10 px (up to 19x16).** WCAG 2.2 target size (2.5.8, 24 px minimum) fails for 7 links on the Gurgaon page at 390. Fix: pad the superscript links to at least 24x24 with negative margin so layout does not move.

**QA-13 Dummy figures without a nearby chip.** (a) Desktop sticky rail: "Replies within 30 minutes" has no chip. (b) "The short answers" row "Desk work after about a week, driving after about two, chest training after six or more" repeats pending recovery timings without "Pending surgeon review". (c) The Related treatments cards show "Rs 62,000 to 94,000" and "3 to 7 days" with only a section-level chip; acceptable but borderline. Brief says a chip on every dummy figure. Screenshot: `qa/shots/chip-missing-related-card.png`.

**QA-14 Sample VideoObject JSON-LD points at non-existent resources.** `thumbnailUrl` `/assets/video-*.jpg` is 404, `url` `/videos/<slug>` is 404 (no detail pages), `embedUrl` ends in `SAMPLE_ID`. The SEO plan says sample titles never go to schema and VideoObject only for videos that exist. Fix: never emit VideoObject while `isSample` or `youtubeId` is null.

**QA-15 hreflang scaffolding emits `hi-IN` to URLs that 404** when `NEXT_PUBLIC_HI_ENABLED=on`, and does so on noindex pages. Default is off, so low risk. Fix: emit only for routes that exist and are indexable; also add a reciprocal check.

**QA-16 `/gynecomastia-surgery` is linked 5 times from the Gurgaon body copy.** The plan allows at most 2 body links per target. Total body links (38) match the plan.

**QA-17 Small SEO hygiene.** `sitemap.xml` `lastmod` is the build time for all URLs; no `og:image`; `/favicon.ico` returns 404 (an icon link exists, crawlers still ask); with indexing off `robots.txt` says `Disallow: /` while pages say `noindex`, so crawlers never see the noindex (fine for staging, note for launch); empty sitemap has no `<url>`.

**QA-18 Banned words appear in the policy copy in negated form, and the engineer's checker would not catch variants.** `/editorial-policy`: "safety guarantees". `/about`: "fake offers". The checker (`lib/banned-words.ts`) uses whole-word matches, so "guarantees", "offers", "safely" are not detected. Fix: reword or get the founder's OK; use stems in the checker.

**QA-19 Prototype banner is outside any landmark** (axe `region`, moderate, every page). Fix: put it inside `<header>` or give it `role="region"` with a label.

**QA-20 Direct load of a hash URL animates a 1.4 s scroll** (`/gynecomastia-surgery-in-gurgaon#recovery` ends at y=7452 after about 2 s; reduced motion is respected). Fix: `scroll-behavior:auto` for the initial navigation, smooth only on in-page clicks. Also the skip link leaves `document.activeElement` on BODY because `<main>` has no `tabindex="-1"`.

**QA-21 SQL hardening (not exploitable through PostgREST).**
- anon holds default TRUNCATE, TRIGGER, REFERENCES, INSERT, UPDATE and DELETE grants on all content tables; I confirmed `TRUNCATE faqs` succeeds as anon on a direct connection because TRUNCATE ignores RLS. Fix: `revoke all ... from anon, authenticated; grant select ...` on content tables.
- `faqs`, `videos` policies do not check that the parent treatment is published (14 FAQ rows are visible while all treatments are unpublished).
- A published treatment or page can point at an unpublished reviewer; the join then returns null silently.
- Migration is not idempotent (`create table` without `if not exists`).
- Nothing implements the promise "your details are deleted if you say stop" (no retention job or deletion procedure for `leads`).

**QA-22 npm audit: 8 issues (1 high, 7 moderate).** Production-relevant: `next` 15.5.29 depends on `postcss` (GHSA-r28c-9q8g-f849 source-map disclosure, `</style>` stringify XSS); the suggested fix is next 16.4.5 (major). The rest are dev-only (typescript-eslint, minimatch). Fix: schedule the Next upgrade; build-time CSS only, no runtime exposure here.

**Cosmetic.** On mobile the breadcrumb wraps and leaves a dangling "/" at the end of line 1 ("Home / Plastic surgery / Gynecomastia surgery /" then "In Gurgaon"). Screenshot: `qa/shots/site-390x844-fold.png`.

### Informational

- **QA-23** LCP is 2.1 s on simulated slow 4G (LCP element is the hero paragraph, so it depends on the self-hosted font swap); the project aim of under 1.5 s is not met. Lighthouse flags render-blocking CSS (about 280 ms), legacy JavaScript (about 11 KB) and DOM size 1,630. HTML is 239 KB uncompressed.
- **QA-24** Playwright's bundled chromium would not start with the installed playwright; the repo's e2e tests rely on system Chrome (`/usr/bin/google-chrome`). CI needs `CHROME_PATH` or `npx playwright install`.
- **QA-25** The Gurgaon page is 2,200 px taller than the approved `page.html` at 1366 (21,349 vs 19,131), because the recovery section and FAQs grew from 8 to 14 Q&A. Section order and all H2s match the approved page; "Insurance and EMI" was renamed "Insurance and payment".
- **QA-26** `generate-seed.ts` rewrote `supabase/seed.sql` during my check. Content is the same (same date, no diff in the banned-word and phone scans), but it is worth re-running `npm run seed:sql` in the repo and committing.

## Engineer's own tests, re-run

- `npm run lint`: clean. `npm test`: 4 files, 43 tests pass. `npm run check:html`: 56 pages, 0 failures. `npx playwright test`: 7 of 7 pass. `npm run build`: 62 pages, shared JS 103 kB, pages 109 to 111 kB.
- Gap: none of these tests cover WhatsApp number validity, the fixture-mode success message, phone paste, 320 px width, or JSON-LD URLs, which is where defects were found.

## What could not be tested, and why

| Item | Why |
|---|---|
| Live Supabase (RLS through PostgREST, real insert, database webhook to `/api/revalidate`, anon key behaviour) | No Supabase project in the sandbox. Covered instead by a mock PostgREST endpoint (request shape) and PostgreSQL 16 with emulated `anon`/`authenticated`/`service_role` roles (RLS and grants). Supabase's own default grants and PostgREST header handling are emulated, not exercised. |
| Safari, Firefox, real iOS and Android devices | Only Chrome was available. Sticky bar with the on-screen keyboard, `inert`, `<dialog>` and 100vh behaviour need a real-device pass. |
| Real fonts and licensing check | Fonts are self-hosted woff2 (Inter, Source Serif 4) and render, but I did not verify licences or compare against a Google Fonts render; the approved `page.html` uses Google Fonts, which the sandbox blocks, so its screenshots use fallback fonts and pixel-level text comparison was not meaningful (layout positions matched exactly). |
| External source links (NHS, Mayo Clinic, NMC) | The sandbox proxy blocked those hosts. The page shows them as "for the reviewer to confirm". Medical accuracy of all copy needs the reviewing surgeon. |
| Colour contrast of SVG plate labels and text on the illustrated backgrounds | axe reports 17 to 35 "incomplete" nodes per page for SVG text; no manual contrast measurement was done. HTML text passes. Dark theme does not exist (not required). |
| Production behaviour on Vercel (ISR, edge headers, HSTS, image optimiser, IP headers) | Tested only with `next start` locally. |
| Real-network LCP | Lighthouse used simulated throttling on localhost, not a deployed URL. |
| Screen reader pass (NVDA, VoiceOver) | Automated and keyboard testing only. |
| Hindi pages | Scaffolding only; no `/hi/` routes exist. |
| Email or SMS to patients, OTP, analytics | Not built (analytics stub off). |

## Suggested fix order

1. Before staging: QA-01, QA-02 (env and messaging).
2. Before founder review: QA-03, QA-04 (margins and container), QA-11, QA-13, QA-10.
3. Before any public URL: QA-05, QA-06, QA-07, QA-08, QA-09, QA-14, QA-18.
4. Before launch: QA-15, QA-16, QA-17, QA-20, QA-21, QA-22, real Lighthouse on the deployed URL, real-device test.
