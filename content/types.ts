// Typed content model. The same shapes are used by the built-in sample data (content/*.ts)
// and by the Supabase mappers (lib/data/supabase.ts), so pages never care where data came from.
//
// Text fields marked "rich" accept a tiny markup:  [link text](/path)   **bold**   {sample}
// ({sample} renders the yellow "Sample data" chip; {tbc} renders the "To be confirmed" chip).

export type IllustrationKey = "chest-section" | "technique" | "tissue-types" | "grades" | "vest" | "map";
export type PosterKey = "grades" | "recovery";
export type ThumbKey = 1 | 2 | 3;

/**
 * One image slot (spec: 15-outrank-strategy/image-slots-spec.md). Until imageSrc is set the page shows its
 * built-in SVG illustration. The file goes in public/images/ and imageSrc is its public path, e.g. "/images/lipo-hero.webp".
 * credit is the licence or photographer note, kept for our records and shown as a caption line.
 */
export interface ImageSlotData {
  imageSrc?: string;
  imageAlt?: string;
  credit?: string;
  caption?: string;
}

// ------------------------------------------------------------------ topic category and care kind (release 3)
/** Menu and hub grouping. "surgery" is the original plastic surgery set. */
export type TopicCategory = "surgery" | "skin" | "hair" | "injectables";
export const TOPIC_CATEGORIES: readonly TopicCategory[] = ["surgery", "skin", "hair", "injectables"];
/**
 * surgical: an operation (surgeon, anaesthesia, theatre). Default for category "surgery".
 * non-surgical: sessions or courses in a clinic (no theatre, no stay). Default for every other category.
 * A treatment may override its default with Treatment.careKind (hair transplant is category "hair" but "surgical").
 * Non-surgical pages never show: the grade and day-care cost checker, the compression garment plate, the
 * "surgeon" wording, or the "one bill, partner hospital" cost text.
 */
export type CareKind = "surgical" | "non-surgical";
/**
 * What one price range in the cost table covers. "total" = one whole bill (surgery package);
 * "session" or "course" = non-surgical care; "area" and "graft" = the counting unit of a hair procedure quote.
 */
export type CostUnit = "total" | "session" | "course" | "area" | "graft";

/** A free-form section for topic-specific blocks (medicines, candidacy, grafts guide, steps, who should skip...). Rendered after the operation block, with a contents entry. */
export interface ExtraSection {
  /** Anchor id, lowercase letters and hyphens, unique on the page. */
  id: string;
  heading: string;
  /** Short label in the page contents list. Defaults to heading. */
  tocLabel?: string;
  lead?: string; // rich
  paragraphs?: string[]; // rich
  table?: { caption: string; head: string[]; rows: string[][] }; // first cell of each row is the row header
  defs?: { term: string; text: string }[];
  bullets?: string[];
  note?: { label: string; text: string };
  /** Grey band background. */
  tint?: boolean;
}

/** Wording overrides for the optional blocks. Defaults match liposuction, so existing pages do not change. */
export interface SectionLabels {
  areasHeading?: string;
  areasCaption?: string;
  /** Hide the liposuction body-areas drawing (use for hair zones, face areas). */
  areasNoPlate?: boolean;
  techniquesHeading?: string;
  techniquesCaption?: string;
  compareHeading?: string;
  compareCaption?: string;
  /** Column heads of the two-column comparison table: [first column, this treatment, the other]. */
  compareColumns?: [string, string, string];
  compareAltHeading?: string;
  tocCompare?: string;
  tocTechniques?: string;
}

/** Per-treatment wording and picture choices, so one template serves every treatment. Defaults match gynecomastia. */
export interface TreatmentDisplay {
  /** What one range in the cost table covers. Default "total" for surgical topics and "session" for non-surgical ones. */
  costUnit?: CostUnit;
  /** Link for "compare two quotes". Default: the surgery guide for surgical topics, no link for non-surgical ones. */
  compareGuideHref?: string;
  /** Contents label for the recovery block, e.g. "Downtime". */
  recoveryTocLabel?: string;
  /** Caption above the timeline table, e.g. "What most people notice and do, by time since the session." */
  timelineCaption?: string;
  gridSummary?: string;
  /** Summary line of the "how it is done" fold. */
  operationHowLabel?: string;
  /** Heading of the risks block. */
  risksHeading?: string;
  labels?: SectionLabels;
  titleEm?: string;
  /** "none": neutral picture frame (image slot only). Default for non-surgical topics. */
  heroPlate?: "chest" | "areas" | "none";
  heroPlateCaption?: string;
  operationHeading?: string;
  operationPlate?: "technique" | "cannula" | "none";
  operationCaptions?: { title: string; text: string }[];
  recoveryHeading?: string;
  /** Link target for "risks in more detail" on city pages. */
  riskGuideHref?: string;
  priceLabel?: string; // e.g. "One area, usual total bill"
  priceLinkText?: string;
  /** "sum": the lines add up to the range. "options": each line is a separate case with its own range. */
  costMode?: "sum" | "options";
  costHeading?: string;
  costCaption?: string;
  tocLabels?: { surgery?: string; choices?: string };
}

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
  /** Gynecomastia only: gland-vs-fat table, causes, grades. */
  fatOrGland?: {
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
  /** Topic-specific blocks, rendered after the operation block in this order (acne types, medicines, steps, candidacy, grafts guide, who should skip...). */
  extraSections?: ExtraSection[];
  /** Liposuction: areas, techniques and comparisons. */
  areas?: {
    lead: string;
    body: string;
    rows: { area: string; usual: string; depends: string }[];
    note: string;
  };
  techniques?: {
    lead: string;
    rows: { name: string; how: string; often: string; ask: string }[];
    note: string;
  };
  compare?: {
    tummyTuckLead: string;
    tummyTuck: { feature: string; lipo: string; tuck: string }[];
    nonSurgicalLead: string;
    nonSurgical: { name: string; text: string }[];
    nonSurgicalNote: string;
    whoShouldWait: string[];
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
  /** Menu and hub grouping. */
  category: TopicCategory;
  /** Overrides the default taken from category (surgery = surgical, others = non-surgical). */
  careKind?: CareKind;
  /** Rows of the "what the price includes" table (5 to 8). Default: the surgical keys, or NON_SURGICAL_INCLUDE_DEFS for non-surgical topics. */
  includeKeys?: IncludeKeyDef[];
  /** National cost page text (/cost/<slug>). Without it the cost page is built from nationalRange, costFactors and the quote checks. */
  costPage?: NationalCostPage;
  /** Search title and description overrides (title is clipped to 60, description to 160). cityTitle may contain {city}. */
  seo?: { title?: string; description?: string; cityTitle?: string };
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
  display?: TreatmentDisplay;
  /** Slots: hero, operation, recovery, card. */
  images?: Record<string, ImageSlotData>;
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
/** Surgical set (the default). */
export const INCLUDE_KEYS = ["surgeon", "anaesthesia", "theatre", "stay", "consumables", "followups", "medicines"] as const;
/** A key of the "what the price includes" table. The surgical keys above, or any key a non-surgical topic defines in Treatment.includeKeys. */
export type IncludeKey = string;
/** One row definition of the include table. `ask` is the question a patient puts to the clinic. */
export interface IncludeKeyDef {
  key: string;
  label: string;
  ask: string;
}
/**
 * Default rows for non-surgical topics that do not define their own (Treatment.includeKeys: 5 to 8 rows).
 * Gate G2 needs 5 of the topic's keys answered, whichever set it uses.
 */
export const NON_SURGICAL_INCLUDE_DEFS: IncludeKeyDef[] = [
  { key: "consultation", label: "Consultation or skin check", ask: "Is the first consultation charged, and is it counted against the plan?" },
  { key: "performer", label: "Who performs it", ask: "Is it a doctor, and can I see the registration?" },
  { key: "procedure", label: "The session itself", ask: "What exactly is done in one session?" },
  { key: "consumables", label: "Consumables", ask: "Which single-use parts and products are in the price?" },
  { key: "medicines", label: "Medicines", ask: "Which medicines are included and which are bought separately?" },
  { key: "aftercare", label: "Aftercare products", ask: "Are cleanser, moisturiser and sun protection included?" },
  { key: "followups", label: "Follow-up visits", ask: "How many review visits are included?" },
];

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
  /** Only the keys listed in the treatment's includeKeys need an entry; a missing key counts as "unknown". */
  includes: Partial<Record<IncludeKey, IncludeState>>;
  facilities: FacilityData | null;
  travel: TravelData | null;
  localContext: { text: string; source: string; asOf: string }[];
  usefulness: string;
  signoffs: Signoffs;
  lighthouseOk: boolean;
  beforeAfter: { imageId: string; consentId: string | null }[];
  /** Words written for this city only (used for the similarity check). */
  localCopy: string[];
  /** Slot: travel (3:2 picture in the "Getting there" block). */
  images?: Record<string, ImageSlotData>;
  /** Short statement of what a patient here must know that the other cities do not cover (G13 text), shown as the "Local notes" block. */
  localNotes?: { heading: string; text: string }[];
  /** Search title override (clipped to 60). Must still contain the treatment and city names (G12). */
  seoTitle?: string;
  /** Replaces the page heading "<treatment> in <city>" when set. */
  h1?: string;
  /** Opening answer (first 60 words), shown as the page's lead instead of the treatment's dek. */
  intro?: string;
  /** City-only sections, heading in sentence case. Counted in the unique-text check. */
  sections?: { heading: string; paragraphs: string[] }[];
}

/** National cost page content for /cost/<slug>, used by topics that need more than the generic layout. */
export interface NationalCostPage {
  seoTitle: string;
  metaDescription: string;
  h1: string;
  /** Answer in the first 60 words. */
  answer: string;
  /** What a line is counted per. Defaults to the treatment's display.costUnit. */
  unit?: CostUnit;
  rangeHeading: string;
  rangeCaption: string;
  planner?: { heading: string; formula: string; steps: string[] };
  factors: { factor: string; why: string }[];
  notIncluded: string[];
  compareQuotes: string[];
  insurance: string;
  payment: string;
  method: string;
  faqs: { q: string; a: string }[];
  sources: { label: string; href: string }[];
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
  /** Slot: cover (16:9). */
  cover?: ImageSlotData;
  /** City slugs to link as next steps (strategy section 5). */
  nextCities?: string[];
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
  /** Slot: poster (16:9). */
  posterImage?: ImageSlotData;
}

/**
 * What Dev B delivers per topic (content/skin-hair/index.ts exports `skinHairTreatments: SkinHairTopic[]`).
 * The registry (content/treatments.ts) owns category, name, summary, procedure and related links as defaults;
 * `treatment` is merged over that entry by treatment.slug (a full Treatment object also works; its `category` is ignored
 * and the registry value is kept). Set content, display, costFactors, nationalRange, deskWork, readSlugs, images, includeKeys,
 * seo, reviewerId, costPage here.
 */
export interface SkinHairTopic {
  treatment: Partial<Omit<Treatment, "slug">> & { slug: string };
  /** Convenience: merged into treatment.display.costUnit when that is not set. */
  costUnit?: CostUnit;
  /** Convenience: merged into treatment.includeKeys when that is not set. */
  includeKeys?: IncludeKeyDef[];
  /** Convenience: merged into treatment.costPage when that is not set. */
  costPage?: NationalCostPage;
  /**
   * Cost rows: national (citySlug null) and per city. position must be unique per (treatment, city) because the
   * database has a unique index on it. A null min and max shows the "To be confirmed" chip.
   */
  costLines: CostLine[];
  /** Zero to four city pages (delhi, gurgaon, lucknow, kanpur). A missing city becomes a placeholder page. price may be null while pending. */
  cityPages: CityTreatmentPage[];
  /** Treatment-level rows (citySlug null) and city rows. Ids must be unique across the site, e.g. "acne-what". */
  faqs: FaqRow[];
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
