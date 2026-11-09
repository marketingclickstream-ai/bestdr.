import { describe, expect, it } from "vitest";
import { evaluatePublishGate, jaccard, shingles, type GateContext, type GateInput } from "@/lib/publish-gate";
import type { CityTreatmentPage } from "@/content/types";
import { fixtures } from "@/lib/data/fixtures";
import { cityPageStatus } from "@/lib/pages";

const NOW = new Date("2026-11-09T00:00:00Z");
const signed = { by: "Editor", on: "2026-11-01" };
const longText = (seed: string, n: number) => Array.from({ length: n }, (_, i) => `${seed}${i * 7 + (i % 5)}`).join(" ");

function goodPage(): CityTreatmentPage {
  return {
    treatmentSlug: "gynecomastia-surgery", citySlug: "gurgaon", isPlaceholder: false, published: true, reviewerId: "r1",
    price: { minInr: 60000, maxInr: 90000, validAsOf: "2026-10", collectedOn: "2026-10-15", dataPoints: 4, sourceType: "partner_quote", isSample: false, chipLabel: "", basis: "" },
    includes: { surgeon: "included", anaesthesia: "included", theatre: "included", stay: "varies", consumables: "excluded", followups: "unknown", medicines: "unknown" },
    facilities: { intro: "x", partners: [{ type: "day care", count: 1 }], accreditation: null, checks: [] },
    travel: { intro: "x", airport: "A", station: "S", stayDays: "1", metro: "m", roadTimes: [{ from: "a", time: "1", tip: "t" }, { from: "b", time: "1", tip: "t" }, { from: "c", time: "1", tip: "t" }], privacyNote: "", mapCaption: "" },
    localContext: [{ text: "a", source: "s", asOf: "2026-10" }, { text: "b", source: "s", asOf: "2026-10" }],
    usefulness: "Explains the Rewari and Faridabad road times that the Delhi page does not cover.",
    signoffs: { g1: signed, g3: signed, g4: signed, g5: signed, g7: signed, g8: signed, g13: signed },
    lighthouseOk: true, beforeAfter: [], localCopy: [],
  };
}

function input(page = goodPage()): GateInput {
  const faq = (i: number) => ({ id: `f${i}`, treatmentSlug: "gynecomastia-surgery", citySlug: "gurgaon", order: i, question: `City question number ${i} about route ${i * 3}?`, answer: `A local answer about road ${i} and station ${i * 11}.` });
  return {
    page, treatmentName: "Gynecomastia surgery", cityName: "Gurgaon", title: "Gynecomastia Surgery in Gurgaon: Cost, Recovery, Risks",
    description: "Gynecomastia surgery in Gurgaon: price lines, recovery, risks.",
    reviewer: { id: "r1", name: "Dr Real", credential: "plastic surgeon", reviewedOn: "2026-09-01", isSample: false, photoConsent: false },
    cityFaqs: [1, 2, 3, 4].map(faq), faqText: "city faq text", uniqueText: longText("gurgaonword", 700), pageText: "Plain words about the operation.",
    hasDisclaimer: true, hasConsentText: true, jsonLdValid: true,
  };
}

const ctx = (over: Partial<GateContext> = {}): GateContext => ({
  now: NOW, siblingCities: [{ citySlug: "delhi", uniqueText: longText("delhiword", 700), faqText: "other text entirely", price: { minInr: 70000, maxInr: 100000 } }],
  siblingTreatments: [], otherTitles: [], ...over,
});

describe("publish gate", () => {
  it("passes when every gate is satisfied", () => {
    const r = evaluatePublishGate(input(), ctx());
    expect(r.failed.map((f) => `${f.id}: ${f.detail}`)).toEqual([]);
    expect(r.passed).toBe(true);
    expect(r.results).toHaveLength(13);
  });

  it("G1 fails on sample price, too few points, stale data, or copied sibling range", () => {
    const sample = goodPage(); sample.price!.isSample = true;
    const few = goodPage(); few.price!.dataPoints = 2;
    const stale = goodPage(); stale.price!.collectedOn = "2026-03-01";
    const copied = goodPage(); copied.signoffs.g1 = undefined;
    for (const p of [sample, few, stale]) expect(evaluatePublishGate(input(p), ctx()).failed.map((f) => f.id)).toContain("G1");
    const same = ctx({ siblingCities: [{ citySlug: "delhi", uniqueText: "z", faqText: "z", price: { minInr: 60000, maxInr: 90000 } }] });
    expect(evaluatePublishGate(input(copied), same).failed.map((f) => f.id)).toContain("G1");
  });

  it("G2 needs 5 of 7 include lines answered", () => {
    const p = goodPage(); p.includes = { ...p.includes, consumables: "unknown", stay: "unknown" };
    expect(evaluatePublishGate(input(p), ctx()).failed.map((f) => f.id)).toContain("G2");
  });

  it("G6 fails on short text and on near-duplicate siblings", () => {
    const short = input(); short.uniqueText = "only a few words here";
    expect(evaluatePublishGate(short, ctx()).failed.map((f) => f.id)).toContain("G6");
    const dup = ctx({ siblingCities: [{ citySlug: "delhi", uniqueText: input().uniqueText, faqText: "x", price: null }] });
    expect(evaluatePublishGate(input(), dup).failed.map((f) => f.id)).toContain("G6");
  });

  it("G7 fails for a placeholder reviewer or an old review", () => {
    const sample = input(); sample.reviewer!.isSample = true;
    const old = input(); old.reviewer!.reviewedOn = "2024-01-01";
    expect(evaluatePublishGate(sample, ctx()).failed.map((f) => f.id)).toContain("G7");
    expect(evaluatePublishGate(old, ctx()).failed.map((f) => f.id)).toContain("G7");
  });

  it("G9 blocks banned words but allows the brand name", () => {
    const bad = input(); bad.pageText = "We are the best clinic with a discount";
    expect(evaluatePublishGate(bad, ctx()).results.find((r) => r.id === "G9")!.passed).toBe(false);
    const brand = input(); brand.pageText = "Bestdoctorsin is a name, not a ranking.";
    expect(evaluatePublishGate(brand, ctx()).results.find((r) => r.id === "G9")!.passed).toBe(true);
  });

  it("G10 needs a consent id on every before/after image", () => {
    const p = goodPage(); p.beforeAfter = [{ imageId: "i1", consentId: null }];
    expect(evaluatePublishGate(input(p), ctx()).failed.map((f) => f.id)).toContain("G10");
  });

  it("G12 checks length, names and duplicates", () => {
    const long = input(); long.title = "Gynecomastia Surgery in Gurgaon: Cost, Recovery, Risks, Hospitals, Travel";
    const dup = ctx({ otherTitles: ["Gynecomastia Surgery in Gurgaon: Cost, Recovery, Risks"] });
    expect(evaluatePublishGate(long, ctx()).failed.map((f) => f.id)).toContain("G12");
    expect(evaluatePublishGate(input(), dup).failed.map((f) => f.id)).toContain("G12");
  });

  it("G13 fails when the usefulness note only repeats the city name", () => {
    const p = goodPage(); p.usefulness = "Gurgaon";
    expect(evaluatePublishGate(input(p), ctx()).failed.map((f) => f.id)).toContain("G13");
  });

  it("human gates fail without a sign-off", () => {
    const p = goodPage(); p.signoffs = {};
    const ids = evaluatePublishGate(input(p), ctx()).failed.map((f) => f.id);
    expect(ids).toEqual(expect.arrayContaining(["G1", "G3", "G4", "G5", "G7", "G8", "G13"]));
  });
});

describe("shingle similarity", () => {
  it("is 1 for identical text and 0 for disjoint text", () => {
    const a = shingles("one two three four five six seven");
    expect(jaccard(a, a)).toBe(1);
    expect(jaccard(a, shingles("alpha beta gamma delta epsilon zeta eta"))).toBe(0);
  });
});

describe("the Gurgaon sample page", () => {
  it("is not live: sample data fails the gate, so it stays noindex", () => {
    const t = fixtures.treatments[0]!, c = fixtures.cities.find((x) => x.slug === "gurgaon")!;
    const p = fixtures.pages.find((x) => x.treatmentSlug === t.slug && x.citySlug === "gurgaon")!;
    const s = cityPageStatus(fixtures, t, c, p, NOW);
    expect(s.live).toBe(false);
    expect(s.gate.failed.map((f) => f.id)).toEqual(expect.arrayContaining(["G1", "G7"]));
    expect(s.title.length).toBeLessThanOrEqual(60);
    expect(s.description.length).toBeLessThanOrEqual(160);
  });
});
