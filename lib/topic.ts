import type { CareKind, CostUnit, Treatment, TopicCategory } from "@/content/types";
import { INCLUDE_KEYS, NON_SURGICAL_INCLUDE_DEFS, type IncludeKeyDef } from "@/content/types";

// Helpers that answer "what kind of topic is this?" in one place, so templates never test slugs.

export function careKindOf(t: Pick<Treatment, "category" | "careKind">): CareKind {
  return t.careKind ?? (t.category === "surgery" ? "surgical" : "non-surgical");
}
export const isNonSurgical = (t: Pick<Treatment, "category" | "careKind">): boolean => careKindOf(t) === "non-surgical";

export function costUnitOf(t: Pick<Treatment, "category" | "careKind" | "display">): CostUnit {
  return t.display?.costUnit ?? (isNonSurgical(t) ? "session" : "total");
}

const SURGICAL_INCLUDE_DEFS: IncludeKeyDef[] = INCLUDE_KEYS.map((key) => ({ key, label: key, ask: "" }));

/** Rows of the include table for a topic. */
export function includeDefsOf(t: Pick<Treatment, "category" | "careKind" | "includeKeys">): readonly IncludeKeyDef[] {
  return t.includeKeys && t.includeKeys.length > 0 ? t.includeKeys : isNonSurgical(t) ? NON_SURGICAL_INCLUDE_DEFS : SURGICAL_INCLUDE_DEFS;
}
export const includeKeysOf = (t: Pick<Treatment, "category" | "careKind" | "includeKeys">): string[] => includeDefsOf(t).map((d) => d.key);

/** Label above a price range. display.priceLabel wins. */
export function priceLabelOf(t: Pick<Treatment, "category" | "careKind" | "display">): string {
  if (t.display?.priceLabel) return t.display.priceLabel;
  const unit = costUnitOf(t);
  return unit === "session" ? "Usual cost per session" : unit === "course" ? "Usual cost per course" : unit === "graft" ? "Usual cost per graft" : unit === "area" ? "Usual cost per area" : "Usual total bill";
}

/** The person who examines and decides, in the words used on the page. */
export const professionalOf = (t: Pick<Treatment, "category" | "careKind">): string => (isNonSurgical(t) ? "doctor" : "surgeon");

/** A cost page exists for every topic with a national range, and for every non-surgery topic (the range slot may be pending). */
export function hasCostPage(t: Pick<Treatment, "category" | "nationalRange">): boolean {
  return Boolean(t.nationalRange) || t.category !== "surgery";
}

export interface CategoryInfo { id: TopicCategory; label: string; menuLabel: string; blurb: string }
export const CATEGORY_INFO: Record<TopicCategory, CategoryInfo> = {
  surgery: { id: "surgery", label: "Plastic surgery", menuLabel: "Plastic surgery", blurb: "Operations: what each involves, the price line by line, recovery by week and the risks to ask about." },
  skin: { id: "skin", label: "Skin care and anti-aging", menuLabel: "Skin", blurb: "Treatments for the skin: acne, facials and the options people compare for ageing skin." },
  hair: { id: "hair", label: "Hair", menuLabel: "Hair", blurb: "Hair loss procedures: PRP sessions and hair transplant, with what each can and cannot do." },
  injectables: { id: "injectables", label: "Injectables", menuLabel: "Injectables", blurb: "Treatments given by injection in a short visit, with who should wait and what to ask." },
};
export const CATEGORY_ORDER: TopicCategory[] = ["surgery", "skin", "injectables", "hair"];

export function groupByCategory<T extends { category: TopicCategory }>(items: T[]): { info: CategoryInfo; items: T[] }[] {
  return CATEGORY_ORDER.map((c) => ({ info: CATEGORY_INFO[c], items: items.filter((i) => i.category === c) })).filter((g) => g.items.length > 0);
}

/** Parent page of a topic in breadcrumbs. */
export function hubCrumb(t: Pick<Treatment, "category">): { name: string; path: string } {
  return t.category === "surgery" ? { name: "Plastic surgery", path: "/plastic-surgery" } : { name: "Treatments", path: "/treatments" };
}
