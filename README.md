# Bestdoctorsin site

Patient-first plastic surgery guide for Delhi, Gurgaon, Kanpur and Lucknow. Pages are generated from data, so a new treatment or city is a data change, not a new template.

## Tech and why
- Next.js 15 App Router with React Server Components: pages are static HTML, client JS is limited to the menu, forms, cost checker and video facade (shared first-load JS 103 kB, pages 109 to 111 kB).
- Strict TypeScript, plain CSS (global tokens plus CSS Modules), no Tailwind: small CSS, no build plugin, easy to read.
- Supabase (Postgres plus row level security) for content and leads. Without env vars the site runs from fixtures in `content/`.
- Zod validates leads on the server only; the browser uses small plain helpers so Zod is not downloaded.
- Vercel ISR: pages are prerendered and revalidated hourly, or on demand through `/api/revalidate`.

## Run
```
npm install
cp .env.example .env.local
npm run dev            # http://localhost:3000
npm run build && npm start
```
Checks: `npm run lint`, `npm run typecheck`, `npm test` (Vitest), `npm run build && npm run check:html` (banned words, FAQ JSON-LD equals visible FAQ), `npm run test:e2e` (Playwright; needs a build, uses system Chrome at `CHROME_PATH` or `/usr/bin/google-chrome`).

## Environment variables
| Name | Purpose |
|---|---|
| `NEXT_PUBLIC_INDEXING` | `off` (default): every page noindex, robots disallow, sitemap empty. `on`: only pages that pass the publish gate are indexed and listed. |
| `NEXT_PUBLIC_LINK_MODE` | `all`: show every planned internal link. `live`: links to pages that are not live render as plain text. |
| `NEXT_PUBLIC_PROTOTYPE_BANNER` | `on`/`off`, the top prototype banner. |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Digits with country code, e.g. 919XXXXXXXXX. Unset means the buttons have no number. |
| `NEXT_PUBLIC_HI_ENABLED` | Emits hreflang for /hi/ once Hindi pages exist. |
| `NEXT_PUBLIC_ANALYTICS`, `_SRC`, `_DOMAIN` | Analytics stub, off by default. Nothing loads unless set. |
| `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Content and lead storage. Optional in development. |
| `NEXT_PUBLIC_CHATBOT_SRC` | Optional chat widget script URL (https). Shows a "Chat with us" launcher. Nothing loads until a visitor clicks it and accepts the consent line. Unset means no launcher. |
| `CHATBOT_ORIGINS` | Extra space-separated origins (script, frame, connect) the chat widget needs. Added to the CSP in `next.config.ts` together with the origin of `NEXT_PUBLIC_CHATBOT_SRC`. |
| `REVALIDATE_SECRET` | Header secret for `POST /api/revalidate`. |

## Supabase setup
1. Create a project. In the SQL editor run `supabase/migrations/0001_init.sql`, then `supabase/seed.sql` (regenerate it with `npm run seed:sql`).
2. RLS lets the public read only rows with `published = true`, and lets anon only INSERT into `leads`. The seed inserts treatments, city pages and posts as unpublished, so the site shows fixtures-style empty content from Supabase until you publish rows. Set `published = true` per row after review.
3. Add the two Supabase env vars in Vercel. Add a database webhook that calls `/api/revalidate` with the secret on publish.

## Add a treatment or city page from data
1. Treatment: add to `content/treatments.ts`; long copy goes in its own file like `content/gynecomastia.ts`.
2. City: add to `content/cities.ts` (with `nearby`) and the city choice in `lib/lead-fields.ts`.
3. City page: add a row to `content/pages.ts` (`isPlaceholder: true` until real data exists), plus city FAQs in `content/faqs.ts`.
4. Routes (`/[treatment]`, `/[treatment]-in-[city]`, `/cost/[treatment]`, sitemap) appear automatically. A page becomes live only when it is published, not a placeholder, and passes `lib/publish-gate.ts` (G1 to G13).
5. Run `npm test && npm run build && npm run check:html`.

## Release 2 additions
- **Routes**: `/liposuction`, `/liposuction-in-{gurgaon,delhi,lucknow,kanpur}`, `/gynecomastia-surgery-in-{delhi,lucknow,kanpur}`, `/cost/liposuction`, `/learn` (filter by treatment), `/learn/[slug]` (24 written guides plus the earlier stubs). All city pages are data rows in `content/city-pages.ts`; they render fully but stay noindex until they pass the publish gate (unchanged).
- **Content layout**: `content/liposuction.ts` (treatment content), `content/faqs-more.ts` (liposuction and city FAQs), `content/blog/` (`gynecomastia.ts`, `liposuction.ts`, `base.ts` stubs, `index.ts` merge). Blog line markup is documented in `content/blog/README.md` and parsed by `lib/blog-body.ts`.
- **Images**: `components/ui/ImageSlot.tsx` gives each slot a fixed aspect ratio, an SVG default, and `next/image` once `imageSrc` is set. Every slot, size and location is listed in `public/images/README.md`. No images are generated.
- **Seed**: `npm run seed:sql` writes `supabase/seed.sql` and `supabase/seed-add.sql`. Both use `on conflict` on every table and are safe to run again. `supabase/migrations/0002_release2.sql` (embedded in seed-add) removes duplicate cost lines and adds the unique index `costs_unique_line`. Page code also de-duplicates cost lines by (position, component).
- **Mobile**: the sticky bar shows WhatsApp and Call me back (44 px targets, safe-area padding, page bottom padding equals bar height).
- **Chat launcher** (`components/layout/ChatLauncher.tsx`): driven by `NEXT_PUBLIC_CHATBOT_SRC`. No script, frame or request until the visitor clicks "Chat with us" and accepts the consent line (DPDP). Nothing typed in the page forms is read or sent. It sits above the sticky bar on mobile and bottom-right on desktop, never over Call me back or WhatsApp, and respects reduced motion. CSP change needed: set `NEXT_PUBLIC_CHATBOT_SRC` and, if the widget uses other hosts, `CHATBOT_ORIGINS`; the CSP in `next.config.ts` then allows those origins for script, frame and connect. Rule: the sticky bar and the launcher must never both pop over content; do not add an auto-open widget.

## Deploy: Vercel and Hostinger DNS
1. Import the repo in Vercel, add the env vars, deploy.
2. In Vercel add `bestdoctorsin.com` and `www.bestdoctorsin.com`; make www the primary.
3. In Hostinger DNS: A record `@` to the IP Vercel shows (currently 76.76.21.21) and CNAME `www` to the value Vercel shows (currently cname.vercel-dns.com). Use the values Vercel displays.

## Launch checklist
- [ ] Real WhatsApp number set; prototype banner off.
- [ ] Supabase env set, migration applied, rows reviewed and published.
- [ ] A real, named reviewer with qualification and review date; sign-offs recorded for G1, G3, G4, G5, G7, G8, G13.
- [ ] Real price data (at least 3 points per city page), not marked Sample.
- [ ] Lighthouse run on each page (LCP < 2.5 s, CLS < 0.1) and recorded.
- [ ] Privacy, retention period, grievance officer and "how we are paid" confirmed by the founder.
- [ ] `NEXT_PUBLIC_LINK_MODE=live`, then `NEXT_PUBLIC_INDEXING=on`.
- [ ] Submit sitemap in Search Console; set `REVALIDATE_SECRET` webhook.

## Open items needing real data
Reviewer and photo consent, founder-confirmed price (Rs 62,000 to 94,000 is still marked "to be confirmed"), partner facility facts, travel times, recovery table (pending surgeon review), sources block citations (verify each before adding), real video IDs and thumbnails, logo URL, blog posts, content for the other five treatments.
