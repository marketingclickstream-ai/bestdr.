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
