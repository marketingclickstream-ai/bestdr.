import { describe, expect, it } from "vitest";
import { findBannedWords } from "@/lib/banned-words";
import { buildRegistry, resolveSlug, allRootSlugs } from "@/lib/pages";
import { fixtures } from "@/lib/data/fixtures";
import { inr, inrRange, longDate } from "@/lib/format";
import { buildMetadata, cityTreatmentMeta, clip } from "@/lib/seo";
import { mapPage, mapReviewer } from "@/lib/data/supabase";

describe("banned words", () => {
  it("finds each banned term", () => {
    for (const w of ["best", "guaranteed", "guarantees", "safely", "offers", "safe", "painless", "permanent", "success rate", "lowest price", "cheapest", "affordable", "world-class", "discount", "offer", "100%"]) {
      expect(findBannedWords(`some ${w} text`).length, w).toBeGreaterThan(0);
    }
  });
  it("ignores the brand, and words that only contain a banned word", () => {
    expect(findBannedWords("Bestdoctorsin is a name, not a ranking. bestdoctorsin.com")).toEqual([]);
    expect(findBannedWords("bestseller and offsite")).toEqual([]);
  });
  it("no banned word in any built-in content", () => {
    const all = JSON.stringify([fixtures.treatments, fixtures.faqs, fixtures.posts, fixtures.videos, fixtures.pages, fixtures.costs]);
    expect(findBannedWords(all)).toEqual([]);
  });
});

describe("routing (C3 allow-list)", () => {
  it("resolves treatments, city pages and city hubs", () => {
    expect(resolveSlug(fixtures, "gynecomastia-surgery")?.kind).toBe("treatment");
    expect(resolveSlug(fixtures, "gynecomastia-surgery-in-gurgaon")?.kind).toBe("city-treatment");
    expect(resolveSlug(fixtures, "plastic-surgery-in-lucknow")?.kind).toBe("city-hub");
  });
  it("returns null for junk such as a treatment in a city that does not exist", () => {
    expect(resolveSlug(fixtures, "rhinoplasty-in-mars")).toBeNull();
    expect(resolveSlug(fixtures, "unknown-treatment-in-delhi")).toBeNull();
  });
  it("has 6 treatments x 4 cities of city pages", () => {
    expect(fixtures.pages).toHaveLength(24);
    expect(allRootSlugs(fixtures).length).toBe(6 + 4 + 24);
  });
});

describe("registry", () => {
  it("marks nothing live while all content is sample or unreviewed", () => {
    const reg = buildRegistry(fixtures, new Date("2026-11-09"));
    expect(reg.get("/gynecomastia-surgery-in-gurgaon")).toBe(false);
    expect(reg.has("/cost/liposuction")).toBe(false); // no national range, so no page
    expect(reg.has("/cost/gynecomastia-surgery")).toBe(true);
  });
});

describe("seo and format helpers", () => {
  it("clips on a word boundary", () => {
    expect(clip("one two three four", 12).length).toBeLessThanOrEqual(12);
    expect(clip("short", 12)).toBe("short");
  });
  it("noindex unless indexing is on (the default env is off)", () => {
    const m = buildMetadata({ title: "t", description: "d", path: "/x", index: true });
    expect(m.robots).toEqual({ index: false, follow: false });
    expect(m.alternates?.canonical).toBe("https://www.bestdoctorsin.com/x");
    expect(m.alternates?.languages).toBeUndefined();
  });
  it("city title and description fit the limits", () => {
    const t = fixtures.treatments[0]!, c = fixtures.cities[0]!;
    const m = cityTreatmentMeta(t, c, fixtures.pages[0]!);
    expect(m.title.length).toBeLessThanOrEqual(60);
    expect(m.description.length).toBeLessThanOrEqual(160);
  });
  it("formats Indian numbers and dates", () => {
    expect(inr(120000)).toBe("1,20,000");
    expect(inrRange(62000, 94000)).toBe("62,000 to 94,000");
    expect(longDate("2026-11-09")).toBe("09 Nov 2026");
  });
});

describe("supabase row mappers", () => {
  it("maps a page row and defaults unknown include values", () => {
    const p = mapPage({ treatment_slug: "a", city_slug: "b", is_placeholder: false, published: true, price_min_inr: 1000, price_max_inr: 2000, includes: { surgeon: "included", theatre: "bogus" } });
    expect(p.price?.minInr).toBe(1000);
    expect(p.includes.surgeon).toBe("included");
    expect(p.includes.theatre).toBe("unknown");
  });
  it("a reviewer row has no registration field", () => {
    expect(Object.keys(mapReviewer({ id: "r", name: "n", credential: "c", reviewed_on: "2026-01-01" }))).not.toContain("registration");
  });
});

describe("QA fixes", () => {
  it("waLink is null without a valid number, never wa.me/91", async () => {
    const { waLink } = await import("@/lib/whatsapp");
    expect(waLink("hi")).toBeNull();
  });
  it("static pages and home with placeholder chips are not in the sitemap", async () => {
    const { sitemapPaths, staticIsIndexable, homeIsIndexable } = await import("@/lib/pages");
    const { staticPages } = await import("@/content/static-pages");
    const privacy = staticPages.find((s) => s.slug === "privacy")!;
    expect(staticIsIndexable(privacy)).toBe(false);
    expect(homeIsIndexable(fixtures)).toBe(false);
    const paths = sitemapPaths(fixtures);
    expect(paths).not.toContain("/privacy");
    expect(paths).not.toContain("/");
  });
  it("banned-word stems are caught", () => {
    for (const t of ["safety", "safely", "offers", "guarantees", "discounted"]) expect(findBannedWords(t).length, t).toBeGreaterThan(0);
  });
});
