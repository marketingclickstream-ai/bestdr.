import type { CityTreatmentPage, CostLine, FaqRow, PlasticTopic } from "../types";

// Shared helpers for content/plastic/*. No page copy lives here except the sample label.
//
// Prices: every price on these pages is pending. No figure is invented and none comes from a competitor.
// Cost lines carry null amounts (the template shows the "To be confirmed" chip) and the note
// "Sample data / To be confirmed". City pages have price null until real quotes exist. The publish gate stays closed on purpose.

export const SAMPLE_LABEL = "Sample data / To be confirmed";

export type { PlasticTopic };

export const faqRow = (treatmentSlug: string, citySlug: string | null, id: string, order: number, question: string, answer: string): FaqRow => ({
  id, treatmentSlug, citySlug, order, question, answer,
});

/** One pending national price line. `depends` fills the "what it depends on" column. */
export function line(treatmentSlug: string, position: number, component: string, depends: string): CostLine {
  return { treatmentSlug, citySlug: null, position, component, minInr: null, maxInr: null, note: `${depends}. ${SAMPLE_LABEL}.` };
}

/** Fields every city page shares. reviewerId stays null until a plastic surgeon reviewer exists. */
export const cityBase = (treatmentSlug: string, citySlug: string) => ({
  treatmentSlug,
  citySlug,
  isPlaceholder: false,
  published: false,
  reviewerId: null as string | null,
  price: null,
  signoffs: {},
  lighthouseOk: false,
  beforeAfter: [] as { imageId: string; consentId: string | null }[],
});

/** Surgical include rows, all unanswered until a partner quote exists. */
export const surgicalIncludes = {
  surgeon: "varies",
  anaesthesia: "varies",
  theatre: "varies",
  stay: "varies",
  consumables: "varies",
  followups: "varies",
  medicines: "varies",
} as const;

export const NMC_SOURCE = { label: "National Medical Commission: public register of doctors", href: "https://www.nmc.org.in/" };

export type { CityTreatmentPage };
