import type { BlogPost, City, SiteData, Treatment, VideoItem } from "@/content/types";
import { inrRange } from "./format";
import { findPage, findPost, findTreatment, findVideo } from "./data";
import { isLinkVisible } from "./pages";

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
    return price
      ? { treatment: rt, rangeLabel: `${c!.name} range`, range: `Rs ${inrRange(price.minInr, price.maxInr)}` }
      : rt.nationalRange
        ? { treatment: rt, rangeLabel: "Typical range", range: `Rs ${inrRange(rt.nationalRange.minInr, rt.nationalRange.maxInr)}` }
        : { treatment: rt, rangeLabel: "Typical range", range: "To be confirmed" };
  });
}

export function treatmentRangeText(p: { price: { minInr: number; maxInr: number; isSample: boolean } | null }): string {
  return p.price ? `Usual total bill: Rs ${inrRange(p.price.minInr, p.price.maxInr)}${p.price.isSample ? " (to be confirmed)" : ""}` : "Price lines will be added when partner quotes are confirmed.";
}
