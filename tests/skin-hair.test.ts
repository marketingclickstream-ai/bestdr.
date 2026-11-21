import { describe, expect, it } from "vitest";
import { fixtures } from "@/lib/data/fixtures";
import { allRootSlugs, buildRegistry, cityPageStatus, resolveSlug, sitemapPaths } from "@/lib/pages";
import { careKindOf, costUnitOf, groupByCategory, hasCostPage, includeKeysOf, isNonSurgical } from "@/lib/topic";
import { findBannedWords } from "@/lib/banned-words";
import { SLUGS, TOXIN_ALT_SLUG, TOXIN_SLUG } from "@/content/slugs";

const NEW = Object.values(SLUGS) as string[];
const CITIES = ["delhi", "gurgaon", "lucknow", "kanpur"];

describe("skin, hair and injectable topics", () => {
  it("registers all six topics with a category", () => {
    for (const slug of NEW) {
      const t = fixtures.treatments.find((x) => x.slug === slug);
      expect(t, slug).toBeTruthy();
      expect(["skin", "hair", "injectables"]).toContain(t!.category);
    }
    expect(SLUGS.toxin).toBe(TOXIN_SLUG);
    expect(TOXIN_ALT_SLUG).not.toBe(TOXIN_SLUG);
  });
  it("hair transplant replaced the stub and no longer links to rhinoplasty", () => {
    const t = fixtures.treatments.find((x) => x.slug === "hair-transplant")!;
    expect(t.related).not.toContain("rhinoplasty");
    expect(t.category).toBe("hair");
    expect(careKindOf(t)).toBe("surgical");
  });
  it("resolves every topic, every topic x city page and every cost page", () => {
    for (const slug of NEW) {
      expect(resolveSlug(fixtures, slug)?.kind, slug).toBe("treatment");
      expect(hasCostPage(fixtures.treatments.find((x) => x.slug === slug)!)).toBe(true);
      for (const c of CITIES) {
        expect(resolveSlug(fixtures, `${slug}-in-${c}`)?.kind, `${slug}-in-${c}`).toBe("city-treatment");
        expect(allRootSlugs(fixtures)).toContain(`${slug}-in-${c}`);
      }
    }
  });
  it("non-surgical topics use per-session, per-course or per-area units and the non-surgical include keys", () => {
    for (const slug of [SLUGS.acne, SLUGS.hydrafacial, SLUGS.toxin, SLUGS.antiAging, SLUGS.prp]) {
      const t = fixtures.treatments.find((x) => x.slug === slug)!;
      expect(isNonSurgical(t), slug).toBe(true);
      expect(["session", "course", "area"]).toContain(costUnitOf(t));
      expect(includeKeysOf(t)).not.toContain("theatre");
      expect(includeKeysOf(t)).not.toContain("anaesthesia");
    }
  });
  it("groups topics by category in a fixed order", () => {
    const groups = groupByCategory(fixtures.treatments);
    expect(groups.map((g) => g.info.id)).toEqual(["surgery", "skin", "injectables", "hair"]);
  });
  it("keeps every new page noindex: nothing new reaches the sitemap while prices are samples", () => {
    const paths = sitemapPaths(fixtures, new Date("2026-11-21"));
    for (const slug of NEW) {
      expect(paths.filter((p) => p.includes(slug)), slug).toEqual([]);
    }
    expect(paths).not.toContain("/treatments");
    const reg = buildRegistry(fixtures, new Date("2026-11-21"));
    for (const slug of NEW) for (const c of CITIES) expect(reg.get(`/${slug}-in-${c}`), `${slug}-in-${c}`).toBe(false);
  });
  it("gate failures name a price or reviewer reason for every written new city page", () => {
    for (const p of fixtures.pages.filter((x) => NEW.includes(x.treatmentSlug) && !x.isPlaceholder)) {
      const t = fixtures.treatments.find((x) => x.slug === p.treatmentSlug)!;
      const c = fixtures.cities.find((x) => x.slug === p.citySlug)!;
      const s = cityPageStatus(fixtures, t, c, p, new Date("2026-11-21"));
      expect(s.live).toBe(false);
      expect(s.gate.failed.map((f) => f.id)).toContain("G1");
    }
  });
  it("registry copy has no banned words", () => {
    expect(findBannedWords(JSON.stringify(fixtures.treatments.filter((t) => NEW.includes(t.slug))))).toEqual([]);
  });
});
