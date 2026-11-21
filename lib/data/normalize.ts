import type { SiteData } from "@/content/types";
import { REVIEWER_IDS, cityPageAllowed } from "@/content/slugs";
import { reviewerSlotFor } from "../reviewers";

/**
 * Rules that must hold whatever the data source is (built-in content or a database that was seeded earlier):
 *  1. City pages exist only for allowed pairs (content/slugs.ts cityPageAllowed). A leftover database row for
 *     /tummy-tuck-in-delhi or any cost-only topic in a city never becomes a page, so the URL is a 404.
 *  2. The legacy "sample-reviewer" id (its old credential said "plastic surgeon") is swapped for the unassigned slot that matches
 *     the topic: plastic surgeon for surgery, dermatologist for skin and injectables, hair specialist for hair. A guide with no topic keeps the legacy record.
 */
export function normalizeSite(site: SiteData): SiteData {
  const category = new Map(site.treatments.map((t) => [t.slug, t.category]));
  const slotFor = (id: string | null, treatmentSlug: string | null): string | null => {
    if (id !== REVIEWER_IDS.legacySample || !treatmentSlug) return id;
    const c = category.get(treatmentSlug);
    return c ? reviewerSlotFor(c) : id;
  };
  return {
    ...site,
    treatments: site.treatments.map((t) => ({ ...t, reviewerId: slotFor(t.reviewerId, t.slug) })),
    pages: site.pages
      .filter((p) => cityPageAllowed(p.treatmentSlug, p.citySlug))
      .map((p) => ({ ...p, reviewerId: slotFor(p.reviewerId, p.treatmentSlug) })),
    costs: site.costs.filter((c) => c.citySlug === null || cityPageAllowed(c.treatmentSlug, c.citySlug)),
    posts: site.posts.map((p) => ({ ...p, reviewerId: slotFor(p.reviewerId, p.treatmentSlug) })),
  };
}
