import { createClient } from "@supabase/supabase-js";
import type {
  BlogPost, City, CityTreatmentPage, CostLine, FaqRow, IncludeKey, IncludeState, Reviewer, SiteData, Treatment, VideoItem,
} from "@/content/types";
import { SUPABASE_ANON_KEY, SUPABASE_URL } from "../env";

// Row types follow supabase/migrations/0001_init.sql. Row level security means the anon key
// only ever sees published rows, so no published filter is repeated here.

type Row = Record<string, unknown>;
const str = (v: unknown): string => (typeof v === "string" ? v : "");
const num = (v: unknown): number | null => (typeof v === "number" ? v : null);
const bool = (v: unknown): boolean => v === true;
const arr = <T>(v: unknown): T[] => (Array.isArray(v) ? (v as T[]) : []);
const obj = <T>(v: unknown, fallback: T): T => (v && typeof v === "object" ? (v as T) : fallback);

export function mapReviewer(r: Row): Reviewer {
  return { id: str(r.id), name: str(r.name), credential: str(r.credential), reviewedOn: str(r.reviewed_on), isSample: bool(r.is_sample), photoConsent: bool(r.photo_consent) };
}

export function mapCity(r: Row): City {
  return { slug: str(r.slug), name: str(r.name), altName: str(r.alt_name) || undefined, state: str(r.state), areas: arr<string>(r.areas), summary: str(r.summary), nearby: arr(r.nearby) };
}

export function mapTreatment(r: Row): Treatment {
  return {
    slug: str(r.slug), name: str(r.name), menuName: str(r.menu_name), alternateName: str(r.alternate_name) || undefined, summary: str(r.summary),
    procedure: obj(r.procedure, { procedureType: "", bodyLocation: "", howPerformed: "", preparation: "", followup: "" }),
    nationalRange: r.national_range ? obj(r.national_range, undefined as never) : undefined,
    costFactors: arr(r.cost_factors), deskWork: str(r.desk_work), cardBlurb: str(r.card_blurb),
    icon: ([1, 2, 3].includes(Number(r.icon)) ? Number(r.icon) : 1) as 1 | 2 | 3,
    related: arr<string>(r.related), readSlugs: arr<string>(r.read_slugs), videoSlugs: arr<string>(r.video_slugs),
    reviewerId: str(r.reviewer_id) || null, published: bool(r.published), content: r.content ? obj(r.content, null) : null,
  };
}

const INCLUDE_STATES: IncludeState[] = ["included", "excluded", "varies", "unknown"];
export function mapPage(r: Row): CityTreatmentPage {
  const inc = obj<Record<string, string>>(r.includes, {});
  const keys: IncludeKey[] = ["surgeon", "anaesthesia", "theatre", "stay", "consumables", "followups", "medicines"];
  const includes = Object.fromEntries(keys.map((k) => [k, INCLUDE_STATES.includes(inc[k] as IncludeState) ? inc[k] : "unknown"])) as Record<IncludeKey, IncludeState>;
  const min = num(r.price_min_inr), max = num(r.price_max_inr);
  return {
    treatmentSlug: str(r.treatment_slug), citySlug: str(r.city_slug), isPlaceholder: bool(r.is_placeholder), published: bool(r.published),
    reviewerId: str(r.reviewer_id) || null, metaDescription: str(r.meta_description) || undefined,
    price: min !== null && max !== null ? {
      minInr: min, maxInr: max, fromInr: num(r.price_from_inr) ?? undefined, validAsOf: str(r.price_valid_as_of), collectedOn: str(r.price_collected_on),
      dataPoints: num(r.price_data_points) ?? 0, sourceType: (str(r.price_source_type) || "partner_quote") as never, isSample: bool(r.price_is_sample),
      chipLabel: str(r.price_chip_label) || "Sample data", basis: str(r.price_basis),
    } : null,
    includes, facilities: r.facilities ? obj(r.facilities, null) : null, travel: r.travel ? obj(r.travel, null) : null,
    localContext: arr(r.local_context), usefulness: str(r.usefulness), signoffs: obj(r.signoffs, {}), lighthouseOk: bool(r.lighthouse_ok),
    beforeAfter: arr(r.before_after), localCopy: arr<string>(r.local_copy),
  };
}

export function mapCost(r: Row): CostLine {
  return { treatmentSlug: str(r.treatment_slug), citySlug: str(r.city_slug) || null, position: num(r.position) ?? 0, component: str(r.component), minInr: num(r.min_inr), maxInr: num(r.max_inr), note: str(r.note) };
}

export function mapFaq(r: Row): FaqRow {
  return { id: str(r.id), treatmentSlug: str(r.treatment_slug), citySlug: str(r.city_slug) || null, order: num(r.position) ?? 0, question: str(r.question), answer: str(r.answer) };
}

export function mapPost(r: Row): BlogPost {
  return {
    slug: str(r.slug), title: str(r.title), excerpt: str(r.excerpt), minutes: num(r.minutes) ?? 4,
    thumb: ([1, 2, 3].includes(Number(r.thumb)) ? Number(r.thumb) : 1) as 1 | 2 | 3, treatmentSlug: str(r.treatment_slug) || null,
    body: arr<string>(r.body), reviewerId: str(r.reviewer_id) || null, published: bool(r.published),
    datePublished: str(r.date_published), dateModified: str(r.date_modified),
  };
}

export function mapVideo(r: Row): VideoItem {
  return {
    slug: str(r.slug), title: str(r.title), duration: str(r.duration), isoDuration: str(r.iso_duration), description: str(r.description),
    transcript: str(r.transcript), poster: r.poster === "recovery" ? "recovery" : "grades", posterAlt: str(r.poster_alt),
    youtubeId: str(r.youtube_id) || null, uploadDate: str(r.upload_date), isSample: bool(r.is_sample),
  };
}

export async function loadFromSupabase(): Promise<SiteData> {
  const db = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, { auth: { persistSession: false } });
  const get = async (table: string, order?: string): Promise<Row[]> => {
    const q = db.from(table).select("*");
    const { data, error } = await (order ? q.order(order) : q);
    if (error) throw new Error(`Supabase ${table}: ${error.message}`);
    return (data ?? []) as Row[];
  };
  const [reviewers, cities, treatments, pages, costs, faqs, posts, videos] = await Promise.all([
    get("reviewers"), get("cities"), get("treatments"), get("treatment_city_pages"), get("costs", "position"),
    get("faqs", "position"), get("blog_posts"), get("videos"),
  ]);
  return {
    reviewers: reviewers.map(mapReviewer), cities: cities.map(mapCity), treatments: treatments.map(mapTreatment),
    pages: pages.map(mapPage), costs: costs.map(mapCost), faqs: faqs.map(mapFaq), posts: posts.map(mapPost), videos: videos.map(mapVideo),
  };
}
