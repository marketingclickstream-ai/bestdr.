import type { CityTreatmentPage, FaqRow, HumanGate, IncludeKey, Reviewer } from "@/content/types";
import { INCLUDE_KEYS } from "@/content/types";
import { findBannedWords } from "./banned-words";
import { words } from "./format";

// The publish gate G1-G13 from 03-seo-strategy.md section 2.4.
// A city x treatment page is indexable, listed in the sitemap and linked from menus only when
// every gate passes. Gates marked "human" need a named sign-off stored on the record.

export type GateId = `G${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13}`;
export interface GateResult { id: GateId; label: string; passed: boolean; detail: string }
export interface GateReport { passed: boolean; results: GateResult[]; failed: GateResult[] }

export interface GateInput {
  page: CityTreatmentPage;
  treatmentName: string;
  cityName: string;
  title: string;
  description: string;
  reviewer: Reviewer | null;
  /** FAQ rows shown on this page that belong only to this city. */
  cityFaqs: FaqRow[];
  /** All FAQ text shown on the page (used for sibling overlap). */
  faqText: string;
  /** Text written for this page alone, boilerplate removed (G6). */
  uniqueText: string;
  /** All visible copy, for the banned-word scan (G9). */
  pageText: string;
  hasDisclaimer: boolean;
  hasConsentText: boolean;
  jsonLdValid: boolean;
  /** True while the page still shows a Sample / To be confirmed / Pending chip (QA-06). */
  showsPlaceholders?: boolean;
}

export interface GateContext {
  now: Date;
  /** Same treatment, other cities. */
  siblingCities: { citySlug: string; uniqueText: string; faqText: string; price: { minInr: number; maxInr: number } | null }[];
  /** Same city, other treatments. */
  siblingTreatments: { uniqueText: string }[];
  /** Titles of every other page on the site. */
  otherTitles: string[];
}

const DAY = 86_400_000;
export const PRICE_MAX_AGE_DAYS = 183; // six months
export const REVIEW_MAX_AGE_DAYS = 365;

export function shingles(text: string, size = 5): Set<string> {
  const w = words(text);
  const out = new Set<string>();
  for (let i = 0; i + size <= w.length; i++) out.add(w.slice(i, i + size).join(" "));
  return out;
}

export function jaccard(a: Set<string>, b: Set<string>): number {
  if (a.size === 0 && b.size === 0) return 0;
  let inter = 0;
  for (const x of a) if (b.has(x)) inter++;
  return inter / (a.size + b.size - inter);
}

function signed(page: CityTreatmentPage, gate: HumanGate): boolean {
  const s = page.signoffs[gate];
  return Boolean(s && s.by.trim() && s.on.trim());
}

function ageDays(iso: string, now: Date): number {
  const t = Date.parse(iso);
  return Number.isNaN(t) ? Infinity : (now.getTime() - t) / DAY;
}

export function evaluatePublishGate(input: GateInput, ctx: GateContext): GateReport {
  const { page, reviewer } = input;
  const results: GateResult[] = [];
  const add = (id: GateId, label: string, passed: boolean, detail: string) => results.push({ id, label, passed, detail });

  // G1 local price, sourced
  {
    const p = page.price;
    let ok = true; let why = "ok";
    if (!p) { ok = false; why = "no price record"; }
    else if (p.isSample) { ok = false; why = "price is sample data"; }
    else if (p.dataPoints < 3) { ok = false; why = `only ${p.dataPoints} data point(s), need 3`; }
    else if (ageDays(p.collectedOn, ctx.now) > PRICE_MAX_AGE_DAYS) { ok = false; why = "price data older than 6 months"; }
    else if (!(p.minInr > 0 && p.maxInr > p.minInr)) { ok = false; why = "min and max are not a valid range"; }
    else if (ctx.siblingCities.some((s) => s.price && s.price.minInr === p.minInr && s.price.maxInr === p.maxInr) && !signed(page, "g1")) {
      ok = false; why = "identical to a sibling city and no human note";
    } else if (!signed(page, "g1")) { ok = false; why = "no human sign-off"; }
    add("G1", "Local price range, sourced", ok, why);
  }

  // G2 includes / excludes
  {
    const known = INCLUDE_KEYS.filter((k: IncludeKey) => page.includes[k] !== "unknown").length;
    add("G2", "What the price includes", known >= 5, `${known} of 7 answered, need 5`);
  }

  // G3 local hospital type information
  {
    const f = page.facilities;
    const ok = Boolean(f) && f!.partners.length > 0 && signed(page, "g3") && (!f!.accreditation || Boolean(f!.accreditation.sourceUrl));
    add("G3", "Local hospital-type information", ok, !f ? "no facility data" : signed(page, "g3") ? "ok" : "no human sign-off");
  }

  // G4 local FAQs
  {
    const n = input.cityFaqs.length;
    const own = shingles(input.cityFaqs.map((f) => f.question + " " + f.answer).join(" "), 3);
    const worst = ctx.siblingCities.reduce((m, s) => {
      const other = shingles(s.faqText, 3);
      if (own.size === 0) return m;
      let shared = 0;
      for (const x of own) if (other.has(x)) shared++;
      return Math.max(m, shared / own.size);
    }, 0);
    const ok = n >= 4 && worst < 0.4 && signed(page, "g4");
    add("G4", "City-specific FAQs", ok, `${n} city FAQs (need 4), overlap ${(worst * 100).toFixed(0)}% (max 40%)${signed(page, "g4") ? "" : ", no human sign-off"}`);
  }

  // G5 travel and logistics
  {
    const t = page.travel;
    const complete = Boolean(t && t.airport && t.station && t.stayDays && t.roadTimes.length >= 3);
    add("G5", "Travel and logistics", complete && signed(page, "g5"), !t ? "no travel data" : complete ? (signed(page, "g5") ? "ok" : "no human sign-off") : "fields incomplete");
  }

  // G6 similarity cap
  {
    const count = words(input.uniqueText).length;
    const mine = shingles(input.uniqueText);
    const sim = (text: string) => jaccard(mine, shingles(text));
    const worst = Math.max(0, ...ctx.siblingCities.map((s) => sim(s.uniqueText)), ...ctx.siblingTreatments.map((s) => sim(s.uniqueText)));
    add("G6", "Unique text and similarity", count >= 600 && worst <= 0.5, `${count} unique words (need 600), highest similarity ${(worst * 100).toFixed(0)}% (max 50%)`);
  }

  // G7 medical accuracy and reviewer
  {
    const r = reviewer;
    const ok = Boolean(r) && !r!.isSample && Boolean(r!.name) && ageDays(r!.reviewedOn, ctx.now) <= REVIEW_MAX_AGE_DAYS && signed(page, "g7");
    add("G7", "Named medical reviewer", ok, !r ? "no reviewer" : r.isSample ? "reviewer is a placeholder" : signed(page, "g7") ? "ok" : "no human sign-off");
  }

  // G8 local context
  {
    const good = page.localContext.filter((c) => c.text && c.source && c.asOf).length;
    add("G8", "Real local context", good >= 2 && signed(page, "g8"), `${good} sourced item(s), need 2${signed(page, "g8") ? "" : ", no human sign-off"}`);
  }

  // G9 unsupported claims
  {
    const hits = findBannedWords(input.pageText);
    add("G9", "No unsupported claims", hits.length === 0, hits.length ? `banned: ${[...new Set(hits.map((h) => h.term))].join(", ")}` : "ok");
  }

  // G10 compliance assets
  {
    const missing = page.beforeAfter.filter((b) => !b.consentId).length;
    const ok = input.hasDisclaimer && input.hasConsentText && missing === 0;
    const placeholders = Boolean(input.showsPlaceholders);
    add("G10", "Compliance assets", ok && !placeholders, ok && !placeholders ? "ok" : `disclaimer ${input.hasDisclaimer}, consent text ${input.hasConsentText}, images without consent ${missing}, sample or to-be-confirmed chips ${placeholders}`);
  }

  // G11 page works (Lighthouse CI result is stored on the record by CI)
  add("G11", "Page works", page.lighthouseOk && input.jsonLdValid, `lighthouse ${page.lighthouseOk ? "pass" : "not recorded"}, json-ld ${input.jsonLdValid ? "valid" : "invalid"}`);

  // G12 title / H1 / meta
  {
    const t = input.title, d = input.description;
    const hasNames = t.toLowerCase().includes(input.treatmentName.toLowerCase()) && t.toLowerCase().includes(input.cityName.toLowerCase());
    const dup = ctx.otherTitles.includes(t);
    add("G12", "Distinct title and meta", t.length <= 60 && d.length <= 160 && hasNames && !dup, `title ${t.length}/60, description ${d.length}/160, names ${hasNames}, duplicate ${dup}`);
  }

  // G13 differentiated usefulness
  {
    const u = page.usefulness.trim();
    const onlyName = u.toLowerCase().replace(input.cityName.toLowerCase(), "").trim().length < 20;
    add("G13", "Differentiated usefulness", u.length > 0 && !onlyName && signed(page, "g13"), u ? (signed(page, "g13") ? "ok" : "no editor sign-off") : "no statement");
  }

  const failed = results.filter((r) => !r.passed);
  return { passed: failed.length === 0, results, failed };
}
