// Topic slugs in one place. Content files and links should import these instead of typing the slug.

/**
 * Botulinum toxin page slug. Option B (generic name) is the default; the lawyer decides on "/botox-treatment".
 * Changing it is this one line. next.config.ts redirects the other spelling to this one.
 */
export const TOXIN_SLUG = "botulinum-toxin-injections";
export const TOXIN_ALT_SLUG = TOXIN_SLUG === "botulinum-toxin-injections" ? "botox-treatment" : "botulinum-toxin-injections";

export const SLUGS = {
  acne: "acne-treatment",
  hydrafacial: "hydrafacial",
  toxin: TOXIN_SLUG,
  antiAging: "anti-aging-treatment",
  prp: "prp-treatment",
  hairTransplant: "hair-transplant",
} as const;

/** The four cities every skin and hair topic has a page for. */
export const SKIN_HAIR_CITY_SLUGS = ["delhi", "gurgaon", "lucknow", "kanpur"] as const;

// ------------------------------------------------------------------ plastic surgery expansion (release 4)
/** Operations with a hub (/<slug>), a national cost page and, for the approved pairs below, city pages. */
export const PLASTIC_PILLAR_SLUGS = ["tummy-tuck", "rhinoplasty", "breast-augmentation", "breast-reduction", "blepharoplasty", "otoplasty"] as const;
/** Operations with a national cost page only: no hub, no city pages. */
export const PLASTIC_COST_ONLY_SLUGS = ["arm-lift", "thigh-lift", "neck-lift", "brow-lift", "body-lift", "scar-revision"] as const;

/**
 * The only plastic surgery city pages that exist. Everything else (for example /tummy-tuck-in-delhi) is a 404.
 * Cap set by the keyword plan (17-plastic-surgery-keywords/01-consolidated-shortlist.md): no full grid, doorway risk.
 * Gynecomastia, liposuction and the skin and hair topics keep their four city pages each.
 */
export const PLASTIC_CITY_PAGE_SLUGS = [
  "breast-augmentation-in-kanpur",
  "tummy-tuck-in-kanpur",
  "rhinoplasty-in-kanpur",
  "breast-reduction-in-kanpur",
  "tummy-tuck-in-lucknow",
  "rhinoplasty-in-lucknow",
  "breast-reduction-in-lucknow",
  "breast-augmentation-in-lucknow",
  "otoplasty-in-delhi",
  "blepharoplasty-in-delhi",
  "blepharoplasty-in-gurgaon",
] as const;

export const isPlasticPillar = (slug: string): boolean => (PLASTIC_PILLAR_SLUGS as readonly string[]).includes(slug);
export const isCostOnly = (slug: string): boolean => (PLASTIC_COST_ONLY_SLUGS as readonly string[]).includes(slug);

/** The (treatment, city) pairs behind PLASTIC_CITY_PAGE_SLUGS, split at the last "-in-". */
export const PLASTIC_CITY_PAIRS: readonly { treatmentSlug: string; citySlug: string }[] = PLASTIC_CITY_PAGE_SLUGS.map((s) => {
  const i = s.lastIndexOf("-in-");
  return { treatmentSlug: s.slice(0, i), citySlug: s.slice(i + 4) };
});

/** True when a city page may exist for this pair. Topics outside the plastic expansion keep every city. */
export function cityPageAllowed(treatmentSlug: string, citySlug: string): boolean {
  if (isCostOnly(treatmentSlug)) return false;
  if (!isPlasticPillar(treatmentSlug)) return true;
  return (PLASTIC_CITY_PAGE_SLUGS as readonly string[]).includes(`${treatmentSlug}-in-${citySlug}`);
}

/** Reviewer slots (content/reviewers.ts). Unassigned placeholders until a real reviewer is appointed. */
export const REVIEWER_IDS = {
  plasticSurgeon: "reviewer-plastic-surgeon",
  dermatologist: "reviewer-dermatologist",
  hairSpecialist: "reviewer-hair-specialist",
  legacySample: "sample-reviewer",
} as const;
