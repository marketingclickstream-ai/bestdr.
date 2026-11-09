import { cache } from "react";
import type { City, CityTreatmentPage, FaqRow, Reviewer, SiteData, Treatment } from "@/content/types";
import { staticPages, type StaticPage } from "@/content/static-pages";
import { DISCLAIMER } from "@/content/site";
import { CONSENT_TEXT } from "./lead-fields";
import { INDEXING_ON, LINK_MODE } from "./env";
import { costLines, faqsFor, findCity, findPage, findReviewer, findTreatment, getSite } from "./data";
import { evaluatePublishGate, type GateReport } from "./publish-gate";
import { cityTreatmentMeta } from "./seo";

// ------------------------------------------------------------------ URL resolution
// Routing rule C3: a root-level slug is a page only if it matches an allow-listed
// treatment, or "<treatment|plastic-surgery>-in-<city>" built from allow-listed parts.

export type Resolved =
  | { kind: "treatment"; treatment: Treatment }
  | { kind: "city-treatment"; treatment: Treatment; city: City; page: CityTreatmentPage }
  | { kind: "city-hub"; city: City };

export function resolveSlug(site: SiteData, slug: string): Resolved | null {
  const treatment = findTreatment(site, slug);
  if (treatment) return { kind: "treatment", treatment };
  for (const city of site.cities) {
    const suffix = `-in-${city.slug}`;
    if (!slug.endsWith(suffix)) continue;
    const head = slug.slice(0, -suffix.length);
    if (head === "plastic-surgery") return { kind: "city-hub", city };
    const t = findTreatment(site, head);
    const page = t && findPage(site, t.slug, city.slug);
    if (t && page) return { kind: "city-treatment", treatment: t, city, page };
  }
  return null;
}

export function allRootSlugs(site: SiteData): string[] {
  return [
    ...site.treatments.map((t) => t.slug),
    ...site.cities.map((c) => `plastic-surgery-in-${c.slug}`),
    ...site.pages.map((p) => `${p.treatmentSlug}-in-${p.citySlug}`),
  ];
}

// ------------------------------------------------------------------ text helpers
function collectStrings(value: unknown, out: string[] = []): string[] {
  if (typeof value === "string") out.push(value);
  else if (Array.isArray(value)) value.forEach((v) => collectStrings(v, out));
  else if (value && typeof value === "object") Object.values(value).forEach((v) => collectStrings(v, out));
  return out;
}
const plain = (s: string) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*/g, "").replace(/\{(sample|tbc|pending)\}/g, "");

// ------------------------------------------------------------------ gate
export interface CityPageStatus {
  gate: GateReport;
  indexable: boolean;
  live: boolean;
  title: string;
  description: string;
}

export function cityFaqRows(site: SiteData, t: Treatment, c: City): { all: FaqRow[]; city: FaqRow[] } {
  const all = faqsFor(site, t.slug, c.slug);
  return { all, city: all.filter((f) => f.citySlug === c.slug) };
}

function uniqueTextOf(site: SiteData, p: CityTreatmentPage): string {
  const city = findCity(site, p.citySlug);
  const t = findTreatment(site, p.treatmentSlug);
  const own = [...p.localCopy, p.travel, p.facilities, p.localContext, city && t ? faqsFor(site, p.treatmentSlug, p.citySlug).filter((f) => f.citySlug === p.citySlug) : []];
  return plain(collectStrings(own).join(" "));
}

/** True when copy contains a Sample / To be confirmed / Pending chip marker. */
export function hasPlaceholderMarkers(text: string): boolean {
  return /\{(sample|tbc|pending)\}/.test(text);
}

/** Static pages with placeholder chips stay noindex and out of the sitemap (QA-06). */
export function staticIsIndexable(s: StaticPage): boolean {
  return s.published && !hasPlaceholderMarkers(JSON.stringify([s.lead, s.sections]));
}

/** The home page lists draft treatments with a Draft chip until every treatment has content. */
export function homeIsIndexable(site: SiteData): boolean {
  return site.treatments.every((t) => Boolean(t.content));
}

/** Paths that may appear in the sitemap: live, and free of placeholder chips. */
export function sitemapPaths(site: SiteData, now = new Date()): string[] {
  const reg = buildRegistry(site, now);
  const statics = new Map(staticPages.map((s) => [`/${s.slug}`, s]));
  return [...reg.entries()]
    .filter(([path, live]) => {
      if (!live) return false;
      if (path === "/") return homeIsIndexable(site);
      const s = statics.get(path);
      return s ? staticIsIndexable(s) : true;
    })
    .map(([path]) => path)
    .sort();
}

export function cityPageStatus(site: SiteData, t: Treatment, c: City, p: CityTreatmentPage, now = new Date()): CityPageStatus {
  const { title, description } = cityTreatmentMeta(t, c, p);
  const { all, city } = cityFaqRows(site, t, c);
  const reviewer = findReviewer(site, p.reviewerId);
  const pageText = plain(collectStrings([t.content, t.summary, p, all.map((f) => [f.question, f.answer]), costLines(site, t.slug, c.slug)]).join(" "));
  const otherPages = site.pages.filter((o) => !(o.treatmentSlug === p.treatmentSlug && o.citySlug === p.citySlug) && !o.isPlaceholder);
  const gate = evaluatePublishGate(
    {
      page: p, treatmentName: t.name, cityName: c.name, title, description, reviewer, cityFaqs: city,
      faqText: plain(all.map((f) => f.question + " " + f.answer).join(" ")), uniqueText: uniqueTextOf(site, p), pageText,
      hasDisclaimer: Boolean(DISCLAIMER), hasConsentText: Boolean(CONSENT_TEXT), jsonLdValid: true,
      showsPlaceholders: hasPlaceholderMarkers(collectStrings([t.content, t.summary, p, all.map((f) => [f.question, f.answer]), costLines(site, t.slug, c.slug)]).join(" ")) || Boolean(p.price?.isSample) || Boolean(reviewer?.isSample),
    },
    {
      now,
      siblingCities: otherPages.filter((o) => o.treatmentSlug === p.treatmentSlug).map((o) => ({
        citySlug: o.citySlug, uniqueText: uniqueTextOf(site, o),
        faqText: plain(faqsFor(site, o.treatmentSlug, o.citySlug).map((f) => f.question + " " + f.answer).join(" ")),
        price: o.price,
      })),
      siblingTreatments: otherPages.filter((o) => o.citySlug === p.citySlug && o.treatmentSlug !== p.treatmentSlug).map((o) => ({ uniqueText: uniqueTextOf(site, o) })),
      otherTitles: [],
    },
  );
  const live = p.published && !p.isPlaceholder && gate.passed;
  return { gate, indexable: INDEXING_ON && live, live, title, description };
}

export function reviewerForTreatment(site: SiteData, t: Treatment): Reviewer | null {
  return findReviewer(site, t.reviewerId);
}

// ------------------------------------------------------------------ link registry
/** path -> live? Every key is a page that exists. */
export type Registry = Map<string, boolean>;

export function buildRegistry(site: SiteData, now = new Date()): Registry {
  const reg: Registry = new Map();
  reg.set("/", true);
  for (const s of staticPages) reg.set(`/${s.slug}`, s.published);
  reg.set("/plastic-surgery", site.treatments.some((t) => t.published));
  reg.set("/cost", site.treatments.some((t) => t.published && t.nationalRange));
  reg.set("/learn", site.posts.some((p) => p.published));
  reg.set("/videos", site.videos.some((v) => !v.isSample));
  for (const t of site.treatments) {
    const clean = t.published && !hasPlaceholderMarkers(collectStrings([t.content, t.summary]).join(" "));
    reg.set(`/${t.slug}`, clean);
    if (t.nationalRange) reg.set(`/cost/${t.slug}`, clean && Boolean(t.content));
  }
  for (const p of site.posts) reg.set(`/learn/${p.slug}`, p.published);
  for (const c of site.cities) {
    let any = false;
    for (const p of site.pages.filter((x) => x.citySlug === c.slug)) {
      const t = findTreatment(site, p.treatmentSlug);
      if (!t) continue;
      const live = cityPageStatus(site, t, c, p, now).live;
      reg.set(`/${t.slug}-in-${c.slug}`, live);
      any = any || live;
    }
    reg.set(`/plastic-surgery-in-${c.slug}`, any);
  }
  return reg;
}

export const getRegistry = cache(async (): Promise<Registry> => buildRegistry(await getSite()));

// A per-request holder lets synchronous components (rich text) check links without async.
const holder = cache(() => ({ reg: null as Registry | null }));
export async function primeLinks(): Promise<void> {
  holder().reg = await getRegistry();
}

export function pathOf(href: string): string {
  return href.split("#")[0]!.split("?")[0]!;
}

/** True when the link should be rendered: the page exists and, in LINK_MODE=live, is live. */
export function isLinkVisible(href: string, reg: Registry | null = holder().reg): boolean {
  if (!href.startsWith("/")) return true;
  if (!reg) return true;
  const path = pathOf(href) || "/";
  if (!reg.has(path)) return false;
  return LINK_MODE === "all" ? true : reg.get(path) === true;
}
