# Bestdoctorsin: Vercel deploy checklist (step by step)

Rule of the first deploy: the site goes live as a PRIVATE-LOOKING STAGING copy (noindex, prototype banner on, sample data chips visible). Google must not index it until the real data is in. Do the steps in order and tick each one.

## A. Before you start (accounts, 20 minutes)
- [ ] GitHub account (free). Create a PRIVATE repository, e.g. `bestdoctorsin-site`.
- [ ] Vercel account: sign up with GitHub (Hobby plan is fine for staging; Pro is needed for commercial use at launch).
- [ ] Supabase account: create a project (region: Mumbai `ap-south-1`, closest to your patients). Save the database password in a password manager.
- [ ] Hostinger login where bestdoctorsin.com DNS is managed.
- [ ] Node 20 or newer on the computer you use (check: `node -v`).

## B. Put the code on GitHub
1. Unzip the code folder. Open a terminal inside it.
2. `npm install`
3. `npm run build` must finish with no errors. (If it fails, stop and send me the message.)
4. `git init && git add . && git commit -m "Initial site"`
5. `git remote add origin https://github.com/<you>/bestdoctorsin-site.git`
6. `git branch -M main && git push -u origin main`
7. Check on GitHub that `.env.local` is NOT in the repo (it must never be).

## C. Supabase (database for pages and leads)
1. Supabase dashboard, SQL editor: paste and run `supabase/migrations/0001_init.sql`.
2. Then run `supabase/seed.sql`.
3. Settings, API: copy the Project URL and the `anon` public key. Do NOT use the `service_role` key anywhere in this site.
4. Check Table editor, `leads`: the table exists and RLS is ON. Anonymous users may only insert.
5. Test: after deploy, submit the call-back form once. A row must appear in `leads`.
6. Optional later: Database, Webhooks: on publish, call `https://www.bestdoctorsin.com/api/revalidate` with the header secret (see env var REVALIDATE_SECRET).

## D. Vercel project
1. Vercel dashboard, Add New, Project, import the GitHub repo. Framework: Next.js (auto-detected). Build command and output: leave default.
2. Environment variables (Production AND Preview):

| Name | Value for STAGING |
|---|---|
| NEXT_PUBLIC_SITE_URL | https://www.bestdoctorsin.com |
| NEXT_PUBLIC_INDEXING | off |
| NEXT_PUBLIC_LINK_MODE | all |
| NEXT_PUBLIC_PROTOTYPE_BANNER | on |
| NEXT_PUBLIC_WHATSAPP_NUMBER | digits with country code, e.g. 91XXXXXXXXXX (leave empty to hide WhatsApp buttons) |
| NEXT_PUBLIC_HI_ENABLED | off |
| NEXT_PUBLIC_ANALYTICS | off |
| NEXT_PUBLIC_SUPABASE_URL | from step C3 |
| NEXT_PUBLIC_SUPABASE_ANON_KEY | from step C3 |
| REVALIDATE_SECRET | a long random string (generate: `openssl rand -hex 32`) |

3. Deploy. Open the `*.vercel.app` URL and check: `/gynecomastia-surgery-in-gurgaon` loads, logo shows, menu works, page has the prototype banner.
4. View source: `<meta name="robots" content="noindex">` must be present. Open `/robots.txt`: it must say `Disallow: /`.

## E. Domain (Hostinger DNS)
1. Vercel, Project, Settings, Domains: add `bestdoctorsin.com` and `www.bestdoctorsin.com`. Make `www` the primary; the bare domain redirects to www.
2. Vercel shows the exact records. Use the values Vercel shows (typically A `@` = 76.76.21.21 and CNAME `www` = cname.vercel-dns.com).
3. Hostinger, Domains, DNS / Nameservers, DNS records: delete any old A record for `@` and old CNAME for `www`, then add the two new ones. Do NOT touch MX (email) records.
4. Wait 5 to 60 minutes (up to 24 h). Vercel shows a green tick when ready; HTTPS certificate is automatic.
5. Check both `https://bestdoctorsin.com` (redirects) and `https://www.bestdoctorsin.com`.

## F. Staging checks (30 minutes, on your phone and laptop)
- [ ] Gurgaon page at 390 px phone and 1366 px laptop looks like the approved page; logo not cut.
- [ ] Header menu, mobile menu, search, sticky bar work.
- [ ] Form: empty submit shows errors; submit without consent is blocked; valid submit shows success and a row appears in Supabase `leads`.
- [ ] WhatsApp button opens a chat with the right number (or is hidden if no number set).
- [ ] Every footer and menu link opens a page (no 404). Placeholder pages show "coming soon" style content.
- [ ] Run Lighthouse (Chrome DevTools, mobile). Target: LCP under 2.5 s, CLS under 0.1.
- [ ] Search page source for words: best, guaranteed, painless, permanent, 100%. Only the brand name "Bestdoctorsin" may appear.
- [ ] No clinic or hospital name, address, doctor name, phone or registration number appears anywhere.

## G. Before real launch (do NOT skip; Google rules for medical pages)
- [ ] Real price range from written partner quotes with a date; remove "To be confirmed".
- [ ] Reviewer: real name, qualification, review date; surgeon has actually reviewed the recovery table and risks.
- [ ] Real reply time you can keep; real WhatsApp and call numbers; grievance contact; company details in the footer.
- [ ] Privacy policy and retention period approved (DPDP Act 2023); consent text approved by your lawyer.
- [ ] Legal opinion on the brand name "Bestdoctorsin" (the word "best") and the hospital-ownership disclosure.
- [ ] Verified source links (NHS, Mayo, NMC) and any study citations.
- [ ] Pages pass the publish gate (G1 to G13).
- [ ] Rate limit: add a shared limiter (Upstash Redis or Vercel firewall) before traffic grows.
- [ ] Then set: NEXT_PUBLIC_INDEXING=on, NEXT_PUBLIC_PROTOTYPE_BANNER=off, NEXT_PUBLIC_LINK_MODE=live. Redeploy.
- [ ] Google Search Console: add property, submit `https://www.bestdoctorsin.com/sitemap.xml`, request indexing for the first page.
- [ ] Set up uptime monitor and database backups (Supabase daily backup on paid plan).

## H. If something goes wrong
| Problem | Fix |
|---|---|
| Build fails on Vercel | Open the build log, copy the first red error; most often a missing env var or Node version (set Node 20 in Project Settings). |
| Site shows sample data in production | Supabase env vars missing or wrong; by design a failed Supabase read fails the build instead of showing sample data. |
| Logo or images missing | Check `public/assets/` was committed. |
| Domain not working | DNS not propagated yet, or old A/CNAME record still present at Hostinger. |
| Form says "Demo mode: nothing was saved" | Supabase env vars not set in Vercel; add them and redeploy. |
| WhatsApp buttons missing | NEXT_PUBLIC_WHATSAPP_NUMBER empty or not 11 to 15 digits. |
