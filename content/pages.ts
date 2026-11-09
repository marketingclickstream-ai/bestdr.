import type { CityTreatmentPage, CostLine, IncludeKey, IncludeState } from "./types";
import { cities } from "./cities";
import { treatments } from "./treatments";
import { gynecomastiaDelhi, gynecomastiaKanpur, gynecomastiaLucknow, liposuctionDelhi, liposuctionGurgaon, liposuctionKanpur, liposuctionLucknow } from "./city-pages";

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
  localNotes: [
    { heading: "Office schedules", text: "Many people who work in Gurgaon offices ask for a Thursday or Friday operation so that a weekend falls in the first days of rest. Whether that suits you is for the surgeon to say. {pending}" },
    { heading: "Which entrance", text: "Ask the coordinator which entrance is used on the day. A quiet drop-off matters to many men, and a front-opening shirt makes dressing easier after surgery." },
    { heading: "If you live in Delhi", text: "Delhi is close, but traffic is slow. See the [Delhi page](/gynecomastia-surgery-in-delhi) for planning notes from that side." },
  ],
};

/** Written pages by "treatment/city". Everything else is a placeholder. */
const written: Record<string, CityTreatmentPage> = {
  "gynecomastia-surgery/gurgaon": gynecomastiaGurgaon,
  "gynecomastia-surgery/delhi": gynecomastiaDelhi,
  "gynecomastia-surgery/lucknow": gynecomastiaLucknow,
  "gynecomastia-surgery/kanpur": gynecomastiaKanpur,
  "liposuction/gurgaon": liposuctionGurgaon,
  "liposuction/delhi": liposuctionDelhi,
  "liposuction/lucknow": liposuctionLucknow,
  "liposuction/kanpur": liposuctionKanpur,
};

export const pages: CityTreatmentPage[] = treatments.flatMap((t) =>
  cities.map((c) => written[`${t.slug}/${c.slug}`] ?? placeholder(t.slug, c.slug)),
);

const gynLine = (citySlug: string | null, position: number, component: string, note: string): CostLine => ({
  treatmentSlug: "gynecomastia-surgery", citySlug, position, component, minInr: null, maxInr: null, note,
});

// Gynecomastia: the source gives one range for three fees, not a split by fee, so no separate figures are shown.
const gynFees: [number, string, string][] = [
  [1, "Surgeon's fee", "Method and grade"],
  [2, "Anaesthesia fee", "General costs more than local with sedation"],
  [3, "Facility fee", "Operating theatre and day-care stay; one night in a room costs more"],
];

// Liposuction: each row is a separate case with its own range (sample figures from one source, to be confirmed).
// There is deliberately no headline figure that adds them up.
const lipoLine = (position: number, component: string, minInr: number, maxInr: number, note: string): CostLine => ({
  treatmentSlug: "liposuction", citySlug: null, position, component, minInr, maxInr, note,
});

export const costs: CostLine[] = [
  ...gynFees.map(([p, c, n]) => gynLine("gurgaon", p, c, n)),
  ...gynFees.map(([p, c, n]) => gynLine(null, p, c, n)),
  lipoLine(1, "One area, such as the abdomen or the arms", 60000, 80000, "How much fat, and how elastic the skin is"),
  lipoLine(2, "Two areas", 90000, 120000, "Which two, and the total fat to be removed"),
  lipoLine(3, "Ultrasound-assisted, one or more areas", 100000, 180000, "The areas treated and the equipment the facility uses"),
  lipoLine(4, "Full-body, 360-degree plan", 150000, 300000, "Number of areas, fat volume, and whether a stay is needed"),
  lipoLine(5, "Chin and neck", 40000, 60000, "Technique, and whether skin under the chin is also treated"),
];
