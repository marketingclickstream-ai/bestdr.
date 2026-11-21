import type { Metadata } from "next";
import type { City, CityTreatmentPage, Treatment } from "@/content/types";
import { absoluteUrl, HI_ENABLED, INDEXING_ON, SITE_URL } from "./env";
import { inrRange } from "./format";
import { costUnitOf, isNonSurgical } from "./topic";

export const TITLE_MAX = 60;
export const DESCRIPTION_MAX = 160;

export function clip(text: string, max: number): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[,.;:]$/, "") + ".";
}

export interface MetaInput {
  title: string;
  description: string;
  path: string;
  /** Page is allowed in search: published, gate-passing, and NEXT_PUBLIC_INDEXING=on. */
  index: boolean;
}

export function buildMetadata({ title, description, path, index }: MetaInput): Metadata {
  const canonical = absoluteUrl(path);
  const robots = index && INDEXING_ON ? { index: true, follow: true } : { index: false, follow: false };
  const languages = HI_ENABLED
    ? { "en-IN": canonical, "hi-IN": absoluteUrl(`/hi${path === "/" ? "" : path}`), "x-default": canonical }
    : undefined;
  return {
    metadataBase: new URL(SITE_URL),
    title: { absolute: clip(title, TITLE_MAX) },
    description: clip(description, DESCRIPTION_MAX),
    alternates: { canonical, ...(languages ? { languages } : {}) },
    robots,
    openGraph: { type: "website", url: canonical, title: clip(title, TITLE_MAX), description: clip(description, DESCRIPTION_MAX), siteName: "Bestdoctorsin", locale: "en_IN" },
  };
}

/** Title and description for a treatment x city page (rules from 03-seo-strategy.md 3.1). */
export function cityTreatmentMeta(t: Treatment, c: City, p: CityTreatmentPage): { title: string; description: string } {
  const nonSurgical = isNonSurgical(t);
  const long = t.seo?.cityTitle ? t.seo.cityTitle.replace("{city}", c.name) : `${t.name} in ${c.name}: Cost, ${nonSurgical ? "Downtime" : "Recovery"}, Risks`;
  const title = long.length <= TITLE_MAX ? long : `${t.name} in ${c.name}`;
  const unit = costUnitOf(t);
  const priceOk = p.price && !p.price.isSample && p.price.dataPoints >= 3;
  const description =
    p.metaDescription ??
    (priceOk
      ? `${t.name} in ${c.name} costs about Rs ${inrRange(p.price!.minInr, p.price!.maxInr)}. Price lines, recovery, risks and travel notes, reviewed by a surgeon.`
      : nonSurgical
        ? `${t.name} in ${c.name}: what ${unit === "course" ? "a course" : "a session"} costs, downtime, risks and how to compare written quotes.`
        : `${t.name} in ${c.name}: price lines, recovery, risks and how we check surgeons.`);
  return { title, description: clip(description, DESCRIPTION_MAX) };
}

/** Title and description for a /[treatment] page. */
export function treatmentMeta(t: Treatment): { title: string; description: string } {
  if (isNonSurgical(t)) {
    const title = t.seo?.title ?? `${t.name}: Downtime, Risks, Cost Factors`;
    return { title, description: clip(t.seo?.description ?? `${t.name} explained: who it suits, how it works, downtime, risks to ask about and what changes the price.`, DESCRIPTION_MAX) };
  }
  const long = t.seo?.title ?? `${t.name}: Procedure, Cost Factors, Recovery, Risks`;
  const title = long.length <= TITLE_MAX ? long : `${t.name}: Procedure, Recovery, Risks`;
  return { title, description: clip(t.seo?.description ?? `${t.name} explained: who it suits, how it is done, recovery by week, risks to ask about and what changes the price.`, DESCRIPTION_MAX) };
}

/** Title and description for /cost/[treatment]. */
export function costMeta(t: Treatment): { title: string; description: string } {
  const unit = costUnitOf(t);
  const what = unit === "session" ? "what one session costs" : unit === "course" ? "what a course costs" : "the usual range";
  return {
    title: `${t.name} Cost in India: What Changes the Price`,
    description: `${t.name} cost in India: ${what}, the factors that change it, what a quote should list and what is left out.`,
  };
}
