import { describe, expect, it } from "vitest";
import { blogPosting, breadcrumbList, faqPage, graph, itemList, medicalWebPage, organization, plainText, videoObject } from "@/lib/schema";
import { fixtures } from "@/lib/data/fixtures";
import type { Reviewer } from "@/content/types";

const t = fixtures.treatments[0]!;
const real: Reviewer = { id: "r", name: "Dr Real", credential: "plastic surgeon", reviewedOn: "2026-10-01", isSample: false, photoConsent: false };
const sample: Reviewer = { ...real, isSample: true };

describe("schema builders", () => {
  it("organization has no hospital and no address", () => {
    const o = organization();
    expect(JSON.stringify(o)).not.toMatch(/address|hospital/i);
    expect(o.name).toBe("Bestdoctorsin");
  });

  it("breadcrumbList numbers items from 1 with absolute URLs", () => {
    const b = breadcrumbList([{ name: "Home", path: "/" }, { name: "Plastic surgery", path: "/plastic-surgery" }]);
    expect(b.itemListElement.map((i) => i.position)).toEqual([1, 2]);
    expect(b.itemListElement[1]!.item).toBe("https://www.bestdoctorsin.com/plastic-surgery");
  });

  it("faqPage strips markup so the text equals what a visitor reads", () => {
    const f = faqPage([{ question: "Q?", answer: "See the [recovery guide](/x) for **detail** {sample}." }]);
    expect(f.mainEntity[0]!.acceptedAnswer.text).toBe("See the recovery guide for detail .");
    expect(plainText("a  [b](/c)")).toBe("a b");
  });

  it("medicalWebPage omits reviewedBy and lastReviewed for a placeholder reviewer", () => {
    const m = medicalWebPage({ path: "/p", name: "n", description: "d", treatment: t, reviewer: sample });
    expect(m).not.toHaveProperty("reviewedBy");
    expect(m).not.toHaveProperty("lastReviewed");
    expect(m.about["@type"]).toBe("MedicalProcedure");
  });

  it("medicalWebPage carries name, role and date for a real reviewer, and no registration number", () => {
    const m = medicalWebPage({ path: "/p", name: "n", description: "d", treatment: t, reviewer: real }) as Record<string, unknown>;
    expect(m.reviewedBy).toEqual({ "@type": "Person", name: "Dr Real", jobTitle: "plastic surgeon" });
    expect(m.lastReviewed).toBe("2026-10-01");
    expect(JSON.stringify(m)).not.toMatch(/registration/i);
  });

  it("videoObject has the fields Google needs", () => {
    const sampleVideo = fixtures.videos[0]!;
    expect(videoObject(sampleVideo)).toBeNull(); // sample or no YouTube id: never emitted
    const v = videoObject({ ...sampleVideo, isSample: false, youtubeId: "abc123" })!;
    expect(v).toMatchObject({ "@type": "VideoObject", duration: "PT4M30S" });
    expect(v.embedUrl).toContain("youtube-nocookie.com");
  });

  it("itemList and blogPosting and graph", () => {
    expect(itemList("x", [{ name: "a", path: "/a" }]).itemListElement[0]!.url).toBe("https://www.bestdoctorsin.com/a");
    expect(blogPosting(fixtures.posts[0]!, null)["@type"]).toBe("BlogPosting");
    expect(graph(organization(), null, false)["@graph"]).toHaveLength(1);
  });

  it("never emits Physician, Hospital, Review or Offer markup", () => {
    const all = JSON.stringify(graph(organization(), medicalWebPage({ path: "/p", name: "n", description: "d", treatment: t, reviewer: real }), faqPage([])));
    expect(all).not.toMatch(/Physician|Hospital|"Review"|AggregateRating|"Offer"/);
  });
});
