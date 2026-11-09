/**
 * Writes two SQL files from the built-in content (content/*.ts):
 *   supabase/seed.sql      first-time seed. Rows are unpublished (published = false) except reviewers, cities, FAQs and
 *                          videos, so a real site shows nothing unreviewed. Safe to run repeatedly.
 *   supabase/seed-add.sql  release 2 for staging. Runs the 0002 migration, then UPSERTS every table (on conflict do update)
 *                          and publishes the written pages and guides (published = true). Safe to run repeatedly.
 *   npm run seed:sql
 */
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fixtures } from "../lib/data/fixtures";

const q = (v: unknown): string => {
  if (v === null || v === undefined) return "null";
  if (typeof v === "number") return String(v);
  if (typeof v === "boolean") return v ? "true" : "false";
  if (typeof v === "object") return `'${JSON.stringify(v).replace(/'/g, "''")}'::jsonb`;
  return `'${String(v).replace(/'/g, "''")}'`;
};

/** conflict: the conflict target; set: columns to overwrite on conflict (empty = do nothing). */
const table = (name: string, cols: string[], data: unknown[][], conflict: string, update: string[]): string => {
  if (data.length === 0) return "";
  const tail = update.length === 0
    ? `on conflict ${conflict} do nothing;`
    : `on conflict ${conflict} do update set ${update.map((c) => `${c} = excluded.${c}`).join(", ")};`;
  return `insert into public.${name} (${cols.join(", ")}) values\n${data.map((r) => `  (${r.map(q).join(", ")})`).join(",\n")}\n${tail}\n\n`;
};

const f = fixtures;
const written = (p: { isPlaceholder: boolean }) => !p.isPlaceholder;

function build(mode: "seed" | "add"): string {
  const upsert = mode === "add";
  const U = (cols: string[]) => (upsert ? cols : []);
  // seed.sql keeps content unpublished; seed-add.sql publishes what has real copy so staging shows it.
  const pubTreatment = (t: { content: unknown }) => (upsert ? Boolean(t.content) : false);
  const pubPage = (p: { isPlaceholder: boolean }) => (upsert ? written(p) : false);
  const pubPost = (p: { body: string[] }) => (upsert ? p.body.length > 2 : false);

  let sql = "";
  sql += table("reviewers", ["id", "name", "credential", "reviewed_on", "is_sample", "photo_consent", "published"],
    f.reviewers.map((r) => [r.id, r.name, r.credential, r.reviewedOn, r.isSample, r.photoConsent, true]),
    "(id)", U(["name", "credential", "reviewed_on", "is_sample", "photo_consent", "published"]));
  sql += table("cities", ["slug", "name", "alt_name", "state", "areas", "summary", "nearby", "published"],
    f.cities.map((c) => [c.slug, c.name, c.altName ?? null, c.state, c.areas, c.summary, c.nearby, true]),
    "(slug)", U(["name", "alt_name", "state", "areas", "summary", "nearby", "published"]));
  const tCols = ["slug", "name", "menu_name", "alternate_name", "summary", "procedure", "national_range", "cost_factors", "desk_work", "card_blurb", "icon", "related", "read_slugs", "video_slugs", "reviewer_id", "content", "display", "images", "published"];
  sql += table("treatments", tCols,
    f.treatments.map((t) => [t.slug, t.name, t.menuName, t.alternateName ?? null, t.summary, t.procedure, t.nationalRange ?? null, t.costFactors, t.deskWork, t.cardBlurb, t.icon, t.related, t.readSlugs, t.videoSlugs, t.reviewerId, t.content, t.display ?? null, t.images ?? null, pubTreatment(t)]),
    "(slug)", U(tCols.filter((c) => c !== "slug")));
  const pCols = ["treatment_slug", "city_slug", "is_placeholder", "published", "reviewer_id", "meta_description", "price_min_inr", "price_max_inr", "price_from_inr", "price_valid_as_of", "price_collected_on", "price_data_points", "price_source_type", "price_is_sample", "price_chip_label", "price_basis", "includes", "facilities", "travel", "local_context", "usefulness", "signoffs", "lighthouse_ok", "before_after", "local_copy", "images", "local_notes"];
  sql += table("treatment_city_pages", pCols,
    f.pages.map((p) => [p.treatmentSlug, p.citySlug, p.isPlaceholder, pubPage(p), p.reviewerId, p.metaDescription ?? null, p.price?.minInr ?? null, p.price?.maxInr ?? null, p.price?.fromInr ?? null, p.price?.validAsOf ?? null, p.price?.collectedOn ?? null, p.price?.dataPoints ?? null, p.price?.sourceType ?? null, p.price?.isSample ?? true, p.price?.chipLabel ?? null, p.price?.basis ?? null, p.includes, p.facilities, p.travel, p.localContext, p.usefulness, p.signoffs, p.lighthouseOk, p.beforeAfter, p.localCopy, p.images ?? null, p.localNotes ?? []]),
    "(treatment_slug, city_slug)", U(pCols.filter((c) => c !== "treatment_slug" && c !== "city_slug")));
  // Costs: the unique index costs_unique_line (migration 0002) makes this safe to repeat.
  sql += table("costs", ["treatment_slug", "city_slug", "position", "component", "min_inr", "max_inr", "note"],
    f.costs.map((c) => [c.treatmentSlug, c.citySlug, c.position, c.component, c.minInr, c.maxInr, c.note]),
    "(treatment_slug, (coalesce(city_slug, '')), position)", ["component", "min_inr", "max_inr", "note"]);
  sql += table("faqs", ["id", "treatment_slug", "city_slug", "position", "question", "answer", "published"],
    f.faqs.map((x) => [x.id, x.treatmentSlug, x.citySlug, x.order, x.question, x.answer, true]),
    "(id)", U(["treatment_slug", "city_slug", "position", "question", "answer", "published"]));
  const bCols = ["slug", "title", "excerpt", "minutes", "thumb", "treatment_slug", "body", "reviewer_id", "published", "date_published", "date_modified", "cover", "next_cities"];
  sql += table("blog_posts", bCols,
    f.posts.map((p) => [p.slug, p.title, p.excerpt, p.minutes, p.thumb, p.treatmentSlug, p.body, p.reviewerId, pubPost(p), p.datePublished, p.dateModified, p.cover ?? null, p.nextCities ?? null]),
    "(slug)", U(bCols.filter((c) => c !== "slug")));
  sql += table("videos", ["slug", "title", "duration", "iso_duration", "description", "transcript", "poster", "poster_alt", "youtube_id", "upload_date", "is_sample", "published"],
    f.videos.map((v) => [v.slug, v.title, v.duration, v.isoDuration, v.description, v.transcript, v.poster, v.posterAlt, v.youtubeId, v.uploadDate, v.isSample, true]),
    "(slug)", U(["title", "duration", "iso_duration", "description", "transcript", "poster", "poster_alt", "youtube_id", "upload_date", "is_sample", "published"]));
  return sql;
}

const migration = readFileSync(join(process.cwd(), "supabase/migrations/0002_release2.sql"), "utf8");

const seed = `-- Generated by \`npm run seed:sql\` from content/*.ts. Sample data only. Do not edit by hand.
-- Run supabase/migrations/0001_init.sql and 0002_release2.sql first. Safe to run repeatedly (every table has a conflict rule).

${build("seed")}`;

const add = `-- Release 2 for staging. Generated by \`npm run seed:sql\`. Safe to run repeatedly.
-- Run supabase/migrations/0001_init.sql first (already done on the live database).
-- This file: (1) applies the 0002 changes, (2) upserts all content, (3) publishes the written pages and guides.
-- Published pages still stay noindex on the site: sample prices, a placeholder reviewer and missing sign-offs fail the publish gate.

${migration}
${build("add")}-- Check: expect treatments 2, pages 8, guides 24 or more, cost lines 8 for gynecomastia and 5 for liposuction.
select 'published treatments' as what, count(*) from public.treatments where published
union all select 'published pages', count(*) from public.treatment_city_pages where published
union all select 'published guides', count(*) from public.blog_posts where published
union all select 'cost lines', count(*) from public.costs;
`;

writeFileSync(join(process.cwd(), "supabase/seed.sql"), seed);
writeFileSync(join(process.cwd(), "supabase/seed-add.sql"), add);
console.log(`supabase/seed.sql ${seed.length} bytes, supabase/seed-add.sql ${add.length} bytes`);
