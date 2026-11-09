// Typed content model. The same shapes are used by the built-in sample data (content/*.ts)
// and by the Supabase mappers (lib/data/supabase.ts), so pages never care where data came from.
//
// Text fields marked "rich" accept a tiny markup:  [link text](/path)   **bold**   {sample}
// ({sample} renders the yellow "Sample data" chip; {tbc} renders the "To be confirmed" chip).

export type IllustrationKey = "chest-section" | "technique" | "tissue-types" | "grades" | "vest" | "map";
export type PosterKey = "grades" | "recovery";
export type ThumbKey = 1 | 2 | 3;

export interface Reviewer {
  id: string;
  name: string;
  credential: string;
  reviewedOn: string; // ISO date
  isSample: boolean;
  photoConsent: boolean;
}

export interface City {
  slug: string;
  name: string;
  altName?: string;
  state: string;
  areas: string[];
  summary: string;
  /** Other cities worth a link. Sentence = lead + link to the same treatment there + tail. Shown only if that page is live. */
  nearby: { citySlug: string; lead: string; tail: string }[];
}

export interface TableRow3 {
  head: string;
  a: string;
  b: string;
}

export interface TreatmentContent {
  dek: string;
  shortAnswers: { q: string; a: string; href: string; linkText: string }[];
  operation: {
    lead: string;
    body: string;
    caption: string;
    ask: string;
    how: string[];
    whoItSuits: { term: string; text: string }[];
  };
  fatOrGland: {
    lead: string;
    body: string;
    term: string;
    tissueTable: { feature: string; gland: string; fat: string }[];
    seeDoctor: string;
    causes: string[];
    symptoms: string[];
    myths: string[];
    gradesCaption: string;
    grades: { grade: string; looks: string; approach: string }[];
  };
  recovery: {
    lead: string;
    body: string;
    highlights: { pre?: string; big: string; post?: string; text: string }[];
    timeline: { when: string; notice: string; doThis: string }[];
    grid: { cols: string[]; rows: { label: string; cells: { state: "n" | "m" | "y"; text: string }[] }[] };
    closing: string;
  };
  risks: {
    lead: string;
    rows: { risk: string; means: string; ask: string }[];
    alert: string;
    wait: string[];
    tell: string[];
  };
  patientQuestions: { q: string; href: string; linkText: string }[];
  quoteProcess: { title: string; text: string }[];
  quoteChecks: string[];
  extras: string[]; // things not in the usual range: "ask in writing"
  insurance: string;
  payment: string;
  sources: { label: string; href: string }[];
  footnotes: string[];
}

export interface Treatment {
  slug: string;
  name: string;
  /** Short label used in cards and menus. */
  menuName: string;
  alternateName?: string;
  summary: string;
  procedure: { procedureType: string; bodyLocation: string; howPerformed: string; preparation: string; followup: string };
  nationalRange?: { minInr: number; maxInr: number; fromInr?: number; validAsOf: string; isSample: boolean };
  costFactors: { factor: string; why: string }[];
  deskWork: string;
  cardBlurb: string;
  icon: 1 | 2 | 3;
  related: string[]; // treatment slugs
  readSlugs: string[]; // blog slugs, max 3
  videoSlugs: string[];
  reviewerId: string | null;
  published: boolean;
  content: TreatmentContent | null;
}

export type CostSourceType = "partner_quote" | "price_list" | "patient_invoice" | "founder_published";

export interface CostLine {
  treatmentSlug: string;
  citySlug: string | null; // null = national
  position: number;
  component: string;
  minInr: number | null; // null: part of the total, no separate figure
  maxInr: number | null;
  note: string;
}

export type IncludeState = "included" | "excluded" | "varies" | "unknown";
export const INCLUDE_KEYS = ["surgeon", "anaesthesia", "theatre", "stay", "consumables", "followups", "medicines"] as const;
export type IncludeKey = (typeof INCLUDE_KEYS)[number];

export type HumanGate = "g1" | "g3" | "g4" | "g5" | "g7" | "g8" | "g13";
export type Signoffs = Partial<Record<HumanGate, { by: string; on: string }>>;

export interface PriceMeta {
  minInr: number;
  maxInr: number;
  fromInr?: number;
  validAsOf: string; // YYYY-MM
  collectedOn: string; // ISO date
  dataPoints: number;
  sourceType: CostSourceType;
  isSample: boolean;
  /** Text on the yellow chip. */
  chipLabel: string;
  /** Short statement of what the range is made of, shown under the figure. */
  basis: string;
}

export interface TravelData {
  intro: string;
  airport: string;
  station: string;
  stayDays: string;
  metro: string;
  roadTimes: { from: string; time: string; tip: string }[];
  privacyNote: string;
  mapCaption: string;
}

export interface FacilityData {
  intro: string;
  /** Count and type of partner facilities, generic wording only (no names, no addresses). */
  partners: { type: string; count: number | null }[];
  accreditation: { claim: string; sourceUrl: string; checkedOn: string } | null;
  checks: { check: string; why: string; ask: string }[];
}

export interface CityTreatmentPage {
  treatmentSlug: string;
  citySlug: string;
  isPlaceholder: boolean;
  published: boolean;
  reviewerId: string | null;
  metaDescription?: string;
  price: PriceMeta | null;
  includes: Record<IncludeKey, IncludeState>;
  facilities: FacilityData | null;
  travel: TravelData | null;
  localContext: { text: string; source: string; asOf: string }[];
  usefulness: string;
  signoffs: Signoffs;
  lighthouseOk: boolean;
  beforeAfter: { imageId: string; consentId: string | null }[];
  /** Words written for this city only (used for the similarity check). */
  localCopy: string[];
}

export interface FaqRow {
  id: string;
  treatmentSlug: string;
  citySlug: string | null; // null = applies to every city page and the treatment page
  order: number;
  question: string;
  answer: string; // rich
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  minutes: number;
  thumb: ThumbKey;
  treatmentSlug: string | null;
  body: string[]; // rich paragraphs; stubs say so plainly
  reviewerId: string | null;
  published: boolean;
  datePublished: string;
  dateModified: string;
}

export interface VideoItem {
  slug: string;
  title: string;
  duration: string; // "4:30"
  isoDuration: string; // "PT4M30S"
  description: string;
  transcript: string;
  poster: PosterKey;
  posterAlt: string;
  youtubeId: string | null;
  uploadDate: string;
  isSample: boolean;
}

export interface SiteData {
  treatments: Treatment[];
  cities: City[];
  pages: CityTreatmentPage[];
  costs: CostLine[];
  faqs: FaqRow[];
  reviewers: Reviewer[];
  posts: BlogPost[];
  videos: VideoItem[];
}
