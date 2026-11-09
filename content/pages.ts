import type { CityTreatmentPage, CostLine, IncludeKey, IncludeState } from "./types";
import { cities } from "./cities";
import { treatments } from "./treatments";

const unknown: Record<IncludeKey, IncludeState> = {
  surgeon: "unknown", anaesthesia: "unknown", theatre: "unknown", stay: "unknown",
  consumables: "unknown", followups: "unknown", medicines: "unknown",
};

const placeholder = (treatmentSlug: string, citySlug: string): CityTreatmentPage => ({
  treatmentSlug, citySlug, isPlaceholder: true, published: false, reviewerId: null, price: null,
  includes: unknown, facilities: null, travel: null, localContext: [], usefulness: "", signoffs: {},
  lighthouseOk: false, beforeAfter: [], localCopy: [],
});

/** The one fully written city page: gynecomastia surgery in Gurgaon (sample data, not yet gate-passing). */
const gynecomastiaGurgaon: CityTreatmentPage = {
  treatmentSlug: "gynecomastia-surgery",
  citySlug: "gurgaon",
  isPlaceholder: false,
  published: false,
  reviewerId: "sample-reviewer",
  metaDescription: "Gynecomastia surgery in Gurgaon: price lines, recovery calendar, risks, getting there and how we check surgeons.",
  price: {
    minInr: 62000,
    maxInr: 94000,
    fromInr: 45000,
    validAsOf: "2026-11",
    collectedOn: "2026-11-09",
    dataPoints: 1,
    sourceType: "founder_published",
    isSample: true,
    chipLabel: "To be confirmed",
    basis: "Working range, dated 09 Nov 2026, from one source. It covers the three fees listed below. Bills from about Rs 45,000 are possible for small cases.",
  },
  includes: { surgeon: "included", anaesthesia: "included", theatre: "included", stay: "varies", consumables: "unknown", followups: "unknown", medicines: "unknown" },
  facilities: {
    intro: "The operation is done at a partner facility in Gurgaon, also written Gurugram. We do not name it on this page. Whatever the facility, check the same things.",
    partners: [{ type: "Partner facility (day care or hospital)", count: null }],
    accreditation: null,
    checks: [
      { check: "Registration", why: "The facility and the surgeon should both be registered", ask: "May I see the facility's certificate and proof that the surgeon is registered with a medical council?" },
      { check: "Accreditation", why: "Shows an outside body has checked its processes", ask: "Which body, and until when is it valid?" },
      { check: "Day care or beds", why: "Decides whether you can stay a night if needed", ask: "Is an overnight bed kept for me if the surgeon asks?" },
      { check: "Emergency plan", why: "A complication needs a plan, not a phone call", ask: "Where would I be taken if I needed more care?" },
      { check: "Billing", why: "Every fee and every extra, before you decide", ask: "Can I have the estimate in writing, with every line?" },
    ],
  },
  travel: {
    intro: "Most people come from Delhi, Noida, Faridabad or Rewari. Plan for one attendant and a ride home that avoids peak traffic.",
    airport: "Indira Gandhi International Airport, Delhi (to be verified)",
    station: "HUDA City Centre (Yellow Line) and Sikandarpur (Rapid Metro)",
    stayDays: "Day care for most; one night if the surgeon asks",
    metro: "The Delhi Metro Yellow Line runs into Gurugram as far as HUDA City Centre, and Rapid Metro joins it at Sikandarpur. {sample} Nearest station and drive time to the partner facility are added once the facility is confirmed.",
    roadTimes: [
      { from: "South Delhi", time: "40 to 70 min", tip: "Leave before the morning peak" },
      { from: "Noida", time: "70 to 110 min", tip: "Plan a night's stay if the operation is late in the day" },
      { from: "Faridabad", time: "60 to 100 min", tip: "Plan the ride home away from peak hour" },
      { from: "Rewari", time: "60 to 90 min", tip: "Highway ride, a seat that reclines helps" },
    ],
    privacyNote: "Ask the coordinator which entrance is quietest for drop-off. No building name is printed on any message we send. Staying one night is a surgeon's decision, and your attendant can stay with you.",
    mapCaption: "Travel from nearby areas, no building shown.",
  },
  localContext: [],
  usefulness: "",
  signoffs: {},
  lighthouseOk: false,
  beforeAfter: [],
  localCopy: [
    "Most people come from Delhi, Noida, Faridabad or Rewari.",
    "The Delhi Metro Yellow Line runs into Gurugram as far as HUDA City Centre, and Rapid Metro joins it at Sikandarpur.",
  ],
};

export const pages: CityTreatmentPage[] = treatments.flatMap((t) =>
  cities.map((c) =>
    t.slug === "gynecomastia-surgery" && c.slug === "gurgaon" ? gynecomastiaGurgaon : placeholder(t.slug, c.slug),
  ),
);

const line = (position: number, component: string, note: string): CostLine => ({
  treatmentSlug: "gynecomastia-surgery", citySlug: "gurgaon", position, component, minInr: null, maxInr: null, note,
});

// The source gives one range for three fees, not a split by fee, so no separate figures are shown.
export const costs: CostLine[] = [
  line(1, "Surgeon's fee", "Method and grade"),
  line(2, "Anaesthesia fee", "General costs more than local with sedation"),
  line(3, "Facility fee", "Operating theatre and day-care stay; one night in a room costs more"),
];
