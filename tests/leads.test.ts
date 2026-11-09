import { beforeEach, describe, expect, it } from "vitest";
import { leadSchema } from "@/lib/lead-schema";
import { validateLeadFields, digitsOnly } from "@/lib/lead-fields";
import { rateLimit, resetRateLimit } from "@/lib/rate-limit";
import { POST } from "@/app/api/leads/route";

const valid = { name: " Amit ", mobile: "98765 43210", city: "gurgaon", treatment: "gynecomastia-surgery", source: "/gynecomastia-surgery-in-gurgaon", consent: true, website: "" };

describe("lead schema (server)", () => {
  it("accepts a valid lead and normalises it", () => {
    const r = leadSchema.parse(valid);
    expect(r.name).toBe("Amit");
    expect(r.mobile).toBe("9876543210");
  });
  it("requires consent to be true", () => {
    expect(leadSchema.safeParse({ ...valid, consent: false }).success).toBe(false);
    expect(leadSchema.safeParse({ ...valid, consent: undefined }).success).toBe(false);
  });
  it("rejects bad mobile numbers, empty names and unknown cities", () => {
    expect(leadSchema.safeParse({ ...valid, mobile: "12345" }).success).toBe(false);
    expect(leadSchema.safeParse({ ...valid, mobile: "5876543210" }).success).toBe(false);
    expect(leadSchema.safeParse({ ...valid, name: "  " }).success).toBe(false);
    expect(leadSchema.safeParse({ ...valid, city: "mars" }).success).toBe(false);
  });
  it("rejects a source that is not a site path", () => {
    expect(leadSchema.safeParse({ ...valid, source: "https://evil.example" }).success).toBe(false);
  });
});

describe("lead fields (browser)", () => {
  it("returns an error per bad field", () => {
    expect(validateLeadFields({ name: "", phone: "1", consent: false })).toEqual({ name: expect.any(String), phone: expect.any(String), consent: expect.any(String) });
    expect(validateLeadFields({ name: "A", phone: "9876543210", consent: true })).toEqual({});
    expect(digitsOnly("98-76 abc")).toBe("9876");
  });
});

describe("rate limit", () => {
  beforeEach(resetRateLimit);
  it("allows 5 in the window then blocks, then recovers", () => {
    const t0 = 1_000_000;
    for (let i = 0; i < 5; i++) expect(rateLimit("ip", 5, 60_000, t0 + i).ok).toBe(true);
    expect(rateLimit("ip", 5, 60_000, t0 + 10).ok).toBe(false);
    expect(rateLimit("other", 5, 60_000, t0 + 10).ok).toBe(true);
    expect(rateLimit("ip", 5, 60_000, t0 + 61_000).ok).toBe(true);
  });
});

describe("POST /api/leads", () => {
  beforeEach(resetRateLimit);
  const call = (body: unknown, ip = "1.1.1.1") =>
    POST(new Request("http://x/api/leads", { method: "POST", headers: { "content-type": "application/json", "x-forwarded-for": ip }, body: JSON.stringify(body) }));

  it("reports stored:false (202) when no database is configured", async () => {
    const res = await call(valid);
    expect(res.status).toBe(202);
    expect(await res.json()).toEqual({ ok: true, stored: false });
  });
  it("returns 422 with field messages when consent is missing", async () => {
    const res = await call({ ...valid, consent: false });
    expect(res.status).toBe(422);
    expect((await res.json()).fields.consent).toBeTruthy();
  });
  it("silently accepts but drops a honeypot hit", async () => {
    const res = await call({ ...valid, website: "http://spam" });
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ ok: true });
  });
  it("returns 400 for invalid JSON and 429 after too many requests", async () => {
    const bad = await POST(new Request("http://x", { method: "POST", headers: { "x-forwarded-for": "9.9.9.9" }, body: "{" }));
    expect(bad.status).toBe(400);
    for (let i = 0; i < 5; i++) await call(valid, "2.2.2.2");
    expect((await call(valid, "2.2.2.2")).status).toBe(429);
  });
});
