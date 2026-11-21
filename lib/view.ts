import type { BlogPost, City, SiteData, Treatment, VideoItem } from "@/content/types";
import { inrRange } from "./format";
import { findPage, findPost, findTreatment, findVideo } from "./data";
import { isLinkVisible } from "./pages";
import { costUnitOf } from "./topic";

/** Sentences for the "Nearby cities" block: only cities whose page for this treatment is live. */
export function nearbyLines(site: SiteData, t: Treatment, c: City): { line: string; href: string; cityName: string; lead: string }[] {
  return c.nearby
    .map((n) => {
      const target = site.cities.find((x) => x.slug === n.citySlug);
      const href = `/${t.slug}-in-${n.citySlug}`;
      if (!target || !findPage(site, t.slug, n.citySlug) || !isLinkVisible(href)) return null;
      return { href, cityName: target.name, lead: n.lead, line: `${n.lead} [${t.name} in ${target.name}](${href}) ${n.tail}`.replace(/\s+\./, ".") };
    })
    .filter((x): x is NonNullable<typeof x> => x !== null);
}

export function postsFor(site: SiteData, t: Treatment): BlogPost[] {
  return t.readSlugs.map((s) => findPost(site, s)).filter((p): p is BlogPost => Boolean(p));
}

export function videosFor(site: SiteData, t: Treatment): VideoItem[] {
  return t.videoSlugs.map((s) => findVideo(site, s)).filter((v): v is VideoItem => Boolean(v));
}

/** Cards for the "Related treatments" block, each with a range for the city when we have one. */
export function relatedCards(site: SiteData, t: Treatment, c: City | null) {
  const list = (c ? [...t.related, t.slug] : t.related)
    .filter((s, i, a) => a.indexOf(s) === i)
    .map((s) => findTreatment(site, s))
    .filter((x): x is Treatment => Boolean(x));
  return list.map((rt) => {
    const page = c ? findPage(site, rt.slug, c.slug) : undefined;
    const price = page?.price;
    const unit = costUnitOf(rt);
    const suffix = unit === "total" ? "" : ` ${unit === "session" ? "per session" : unit === "course" ? "per course" : unit === "graft" ? "per graft" : "per area"}`;
    return price
      ? { treatment: rt, rangeLabel: `${c!.name} range${suffix}`, range: `Rs ${inrRange(price.minInr, price.maxInr)}` }
      : rt.nationalRange
        ? { treatment: rt, rangeLabel: `Typical range${suffix}`, range: `Rs ${inrRange(rt.nationalRange.minInr, rt.nationalRange.maxInr)}` }
        : { treatment: rt, rangeLabel: `Typical range${suffix}`, range: "To be confirmed" };
  });
}

export function treatmentRangeText(p: { price: { minInr: number; maxInr: number; isSample: boolean } | null }, label = "Usual total bill"): string {
  return p.price ? `${label}: Rs ${inrRange(p.price.minInr, p.price.maxInr)}${p.price.isSample ? " (to be confirmed)" : ""}` : "Price lines will be added when partner quotes are confirmed.";
}

/** Which two city pages a post links as next steps (strategy section 5: rotate by post). An explicit post.nextCities wins. */
const NEXT_STEPS: Record<string, string[]> = {
  "gynecomastia-liposuction-vs-gland-removal": ["gurgaon", "delhi"],
  "gynecomastia-recovery-timeline": ["gurgaon", "delhi"],
  "gynecomastia-surgery-risks": ["lucknow", "kanpur"],
  "doctor-for-gynecomastia": ["lucknow", "kanpur"],
  "liposuction-recovery-timeline": ["gurgaon", "delhi"],
  "liposuction-risks": ["gurgaon", "delhi"],
  "liposuction-candidate": ["lucknow", "kanpur"],
  "types-of-liposuction": ["lucknow", "kanpur"],
};

const CITY_PAIRS = [["delhi", "gurgaon"], ["lucknow", "kanpur"]] as const;

/** An explicit post.nextCities wins, then the table above. Posts on a topic with city pages rotate between two pairs by slug, so one city does not get every link. */
export function nextCitiesFor(post: BlogPost): string[] {
  if (post.nextCities) return post.nextCities;
  const known = NEXT_STEPS[post.slug];
  if (known) return known;
  if (!post.treatmentSlug) return [];
  let h = 0;
  for (const ch of post.slug) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return [...CITY_PAIRS[h % CITY_PAIRS.length]!];
}

/** Two sibling guides on the same topic, the ones after this post in the list (wrapping around). */
export function siblingPosts(site: SiteData, post: BlogPost, count = 2): BlogPost[] {
  const same = site.posts.filter((p) => p.treatmentSlug === post.treatmentSlug && p.slug !== post.slug && p.body.length > 2);
  const all = site.posts.filter((p) => p.treatmentSlug === post.treatmentSlug);
  const at = all.findIndex((p) => p.slug === post.slug);
  const ordered = [...all.slice(at + 1), ...all.slice(0, Math.max(at, 0))].filter((p) => same.includes(p));
  return ordered.slice(0, count);
}
