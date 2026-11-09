import { describe, expect, it } from "vitest";
import { fixtures } from "@/lib/data/fixtures";
import { cityPageStatus, resolveSlug, sitemapPaths } from "@/lib/pages";
import { costLines, uniqueCostLines } from "@/lib/data";
import { convertInline, parseBody, postFaqs } from "@/lib/blog-body";
import { faqPage, plainText } from "@/lib/schema";
import { findBannedWords } from "@/lib/banned-words";
import { liposuctionContent } from "@/content/liposuction";
import { liposuctionPosts } from "@/content/blog/liposuction";
import { gynecomastiaPosts } from "@/content/blog/gynecomastia";

const NOW = new Date("2026-11-10");
const written = fixtures.pages.filter((p) => !p.isPlaceholder);

describe("city pages as data", () => {
  it("has 8 written pages: gynecomastia and liposuction in four cities", () => {
    expect(written.map((p) => `${p.treatmentSlug}/${p.citySlug}`).sort()).toEqual([
      "gynecomastia-surgery/delhi", "gynecomastia-surgery/gurgaon", "gynecomastia-surgery/kanpur", "gynecomastia-surgery/lucknow",
      "liposuction/delhi", "liposuction/gurgaon", "liposuction/kanpur", "liposuction/lucknow",
    ]);
  });

  it("every written page resolves, has 4+ city-only FAQs, and none can pass the gate yet", () => {
    for (const p of written) {
      const t = fixtures.treatments.find((x) => x.slug === p.treatmentSlug)!;
      const c = fixtures.cities.find((x) => x.slug === p.citySlug)!;
      expect(resolveSlug(fixtures, `${t.slug}-in-${c.slug}`)?.kind).toBe("city-treatment");
      const own = fixtures.faqs.filter((f) => f.treatmentSlug === t.slug && f.citySlug === c.slug);
      expect(own.length, `${t.slug} ${c.slug}`).toBeGreaterThanOrEqual(4);
      const s = cityPageStatus(fixtures, t, c, p, NOW);
      expect(s.live).toBe(false); // sample price, sample reviewer, no sign-offs
      expect(s.gate.failed.map((f) => f.id)).toEqual(expect.arrayContaining(["G1", "G7", "G10", "G11", "G13"]));
      const g6 = s.gate.results.find((r) => r.id === "G6")!;
      const sim = Number(/similarity (\d+)%/.exec(g6.detail)?.[1]);
      expect(sim, `${t.slug} ${c.slug} similarity`).toBeLessThanOrEqual(50);
    }
  });

  it("unknown local facts are flagged NEEDS REAL DATA and carry no source, so G8 cannot pass on them", () => {
    for (const p of written.filter((x) => x.citySlug !== "gurgaon" || x.treatmentSlug === "liposuction")) {
      expect(p.localContext.length).toBeGreaterThan(0);
      for (const lc of p.localContext) { expect(lc.text).toMatch(/NEEDS REAL DATA/); expect(lc.source).toBe(""); }
    }
  });

  it("no city page shows a hospital name, a doctor or an outcome claim", () => {
    const all = JSON.stringify([written, fixtures.faqs, liposuctionContent]);
    expect(all).not.toMatch(/Kalosa|Dr\.? [A-Z]|USFDA|VASER|MicroAire|Thermi|success rate|rated/i);
    expect(findBannedWords(all)).toEqual([]);
  });
});

describe("liposuction content", () => {
  it("has the sections the plan asks for", () => {
    const c = liposuctionContent;
    expect(c.areas?.rows.length).toBeGreaterThanOrEqual(6);
    expect(c.techniques?.rows.length).toBeGreaterThanOrEqual(4);
    expect(c.compare?.tummyTuck.length).toBeGreaterThan(3);
    expect(c.compare?.nonSurgical.length).toBeGreaterThan(3);
    expect(c.recovery.timeline.length).toBeGreaterThanOrEqual(5);
    expect(c.recovery.lead).toMatch(/\{pending\}/);
    expect(c.sources.every((s) => s.href.startsWith("https://"))).toBe(true);
  });
  it("treatment-level FAQs number 8 to 10", () => {
    const n = fixtures.faqs.filter((f) => f.treatmentSlug === "liposuction" && f.citySlug === null).length;
    expect(n).toBeGreaterThanOrEqual(8);
    expect(n).toBeLessThanOrEqual(10);
  });
  it("has no headline floor price: the cost lines are separate cases, with no total row figure", () => {
    const lines = costLines(fixtures, "liposuction", null);
    expect(lines).toHaveLength(5);
    expect(lines.every((l) => l.minInr !== null && l.maxInr !== null)).toBe(true);
    expect(fixtures.treatments.find((t) => t.slug === "liposuction")?.display?.costMode).toBe("options");
  });
});

describe("cost lines are unique", () => {
  it("drops duplicate (position, component) rows and counts only unique lines", () => {
    const base = costLines(fixtures, "gynecomastia-surgery", "gurgaon");
    const doubled = uniqueCostLines([...base, ...base]);
    expect(doubled).toHaveLength(3);
    expect(new Set(doubled.map((l) => l.component)).size).toBe(3);
  });
  it("a city with no lines of its own shows the national lines", () => {
    expect(costLines(fixtures, "gynecomastia-surgery", "lucknow")).toHaveLength(3);
  });
});

describe("blog integration", () => {
  it("merges 24 written posts over the stubs, no duplicate slugs", () => {
    expect(gynecomastiaPosts.length + liposuctionPosts.length).toBe(24);
    const slugs = fixtures.posts.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const p of [...gynecomastiaPosts, ...liposuctionPosts]) expect(slugs).toContain(p.slug);
    expect(slugs).toEqual(expect.arrayContaining(["questions-to-ask-your-plastic-surgeon", "how-to-compare-surgery-quotes"]));
  });
  it("parses the line markup", () => {
    const b = parseBody(["[[reviewer]]", "Intro [[link: /liposuction | liposuction guide]].", "## Heading", "- a", "- b", "> note", "[[faq: Q one? | A one.]]", "[[faq: Q two? | See [[link: /cost/liposuction | cost]].]]", "[[sources: x]]"]);
    expect(b.map((x) => x.kind)).toEqual(["reviewer", "p", "h2", "list", "note", "faqs", "sources"]);
    expect(convertInline("[[link: /a | b]]")).toBe("[b](/a)");
    expect(postFaqs(["[[faq: Q? | A [[link: /x | y]] z]]"])[0]?.answer).toBe("A [y](/x) z");
  });
  it("FAQ JSON-LD text equals the visible text for every post", () => {
    for (const p of fixtures.posts) {
      const faqs = postFaqs(p.body);
      if (faqs.length === 0) continue;
      const ld = faqPage(faqs);
      expect(ld.mainEntity.map((e) => e.acceptedAnswer.text)).toEqual(faqs.map((f) => plainText(f.answer)));
    }
  });
  it("posts with a sample reviewer are not live or in the sitemap", () => {
    const paths = sitemapPaths(fixtures);
    expect(paths.filter((x) => x.startsWith("/learn/"))).toEqual([]);
  });
  it("every internal link in a post points at a page that exists", () => {
    const exists = (href: string) => {
      const path = href.split("#")[0] ?? "";
      if (path === "" || path === "/") return true;
      if (/^\/learn\/[a-z0-9-]+$/.test(path)) return fixtures.posts.some((p) => `/learn/${p.slug}` === path);
      if (/^\/cost\/[a-z0-9-]+$/.test(path)) return fixtures.treatments.some((t) => t.nationalRange && `/cost/${t.slug}` === path);
      const slug = path.slice(1);
      return Boolean(resolveSlug(fixtures, slug)) || ["plastic-surgery", "cost", "learn", "videos", "how-we-verify-surgeons", "medical-review-board", "editorial-policy", "medical-disclaimer", "about", "contact", "privacy", "terms"].includes(slug);
    };
    const bad: string[] = [];
    for (const p of fixtures.posts) {
      for (const line of p.body) for (const m of convertInline(line).matchAll(/\]\((\/[^)]*)\)/g)) if (!exists(m[1] ?? "")) bad.push(`${p.slug}: ${m[1]}`);
    }
    expect(bad).toEqual([]);
  });
});
