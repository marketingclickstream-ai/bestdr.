import { cache } from "react";
import type { BlogPost, City, CityTreatmentPage, CostLine, FaqRow, Reviewer, SiteData, Treatment, VideoItem } from "@/content/types";
import { HAS_SUPABASE } from "../env";
import { fixtures } from "./fixtures";

/** A connected database that returns no treatments is almost always "rows not published" or a stale read. Say so in the logs. */
function warnIfEmpty(site: SiteData): void {
  const problems: string[] = [];
  if (site.treatments.length === 0) problems.push("0 published treatments (treatments.published is false, or the read is stale)");
  if (site.cities.length === 0) problems.push("0 published cities");
  if (site.pages.length === 0) problems.push("0 published treatment_city_pages");
  if (problems.length) {
    console.error(`[bestdoctorsin] Supabase is connected but returned: ${problems.join("; ")}. Every treatment page will 404. Run supabase/fix-publish.sql and check /api/health.`);
  }
}

/**
 * One call returns the whole (small) site dataset. With Supabase configured it comes from the
 * database (RLS keeps unpublished rows out); without it, from the built-in sample data.
 * Pages are statically generated and revalidated, so this runs at build time and on revalidation.
 */
export const getSite = cache(async (): Promise<SiteData> => {
  if (!HAS_SUPABASE) return fixtures;
  const { loadFromSupabase } = await import("./supabase");
  try {
    const site = await loadFromSupabase();
    warnIfEmpty(site);
    return site;
  } catch (err) {
    // In production a failed read must not replace good published pages with sample data.
    // Throwing makes the build fail, and during ISR revalidation Next keeps the last good page.
    if (process.env.NODE_ENV === "production") throw err;
    console.error("Supabase read failed, using sample data (development only):", err instanceof Error ? err.message : err);
    return fixtures;
  }
});

// Pages export `revalidate = 3600` (one hour) as a literal, which Next.js requires.
export const REVALIDATE_SECONDS = 3600;

export function findTreatment(site: SiteData, slug: string): Treatment | undefined {
  return site.treatments.find((t) => t.slug === slug);
}
export function findCity(site: SiteData, slug: string): City | undefined {
  return site.cities.find((c) => c.slug === slug);
}
export function findPage(site: SiteData, treatmentSlug: string, citySlug: string): CityTreatmentPage | undefined {
  return site.pages.find((p) => p.treatmentSlug === treatmentSlug && p.citySlug === citySlug);
}
export function findReviewer(site: SiteData, id: string | null): Reviewer | null {
  return (id && site.reviewers.find((r) => r.id === id)) || null;
}
export function findPost(site: SiteData, slug: string): BlogPost | undefined {
  return site.posts.find((p) => p.slug === slug);
}
export function findVideo(site: SiteData, slug: string): VideoItem | undefined {
  return site.videos.find((v) => v.slug === slug);
}
/** One line per (position, component). Guards against duplicate rows if a seed script was run twice. */
export function uniqueCostLines(lines: CostLine[]): CostLine[] {
  const seen = new Set<string>();
  return lines
    .filter((l) => {
      const key = `${l.position}|${l.component}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .sort((a, b) => a.position - b.position);
}

/** Cost lines for a city page. A city with no lines of its own shows the national lines (same figures until local quotes exist). */
export function costLines(site: SiteData, treatmentSlug: string, citySlug: string | null): CostLine[] {
  const pick = (city: string | null) => site.costs.filter((c) => c.treatmentSlug === treatmentSlug && c.citySlug === city);
  const own = pick(citySlug);
  return uniqueCostLines(own.length > 0 || citySlug === null ? own : pick(null));
}
export function faqsFor(site: SiteData, treatmentSlug: string, citySlug: string | null): FaqRow[] {
  return site.faqs
    .filter((f) => f.treatmentSlug === treatmentSlug && (f.citySlug === null || f.citySlug === citySlug))
    .sort((a, b) => a.order - b.order);
}
