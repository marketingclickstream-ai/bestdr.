import { cache } from "react";
import type { BlogPost, City, CityTreatmentPage, CostLine, FaqRow, Reviewer, SiteData, Treatment, VideoItem } from "@/content/types";
import { HAS_SUPABASE } from "../env";
import { fixtures } from "./fixtures";

/**
 * One call returns the whole (small) site dataset. With Supabase configured it comes from the
 * database (RLS keeps unpublished rows out); without it, from the built-in sample data.
 * Pages are statically generated and revalidated, so this runs at build time and on revalidation.
 */
export const getSite = cache(async (): Promise<SiteData> => {
  if (!HAS_SUPABASE) return fixtures;
  const { loadFromSupabase } = await import("./supabase");
  try {
    return await loadFromSupabase();
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
export function costLines(site: SiteData, treatmentSlug: string, citySlug: string | null): CostLine[] {
  return site.costs.filter((c) => c.treatmentSlug === treatmentSlug && c.citySlug === citySlug).sort((a, b) => a.position - b.position);
}
export function faqsFor(site: SiteData, treatmentSlug: string, citySlug: string | null): FaqRow[] {
  return site.faqs
    .filter((f) => f.treatmentSlug === treatmentSlug && (f.citySlug === null || f.citySlug === citySlug))
    .sort((a, b) => a.order - b.order);
}
