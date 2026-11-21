import { expect, test } from "@playwright/test";

// Release 4: plastic surgery expansion. Approved city pages return 200 and stay noindex; everything else is a 404.
const PILLARS = ["tummy-tuck", "rhinoplasty", "breast-augmentation", "breast-reduction", "blepharoplasty", "otoplasty"];
const COST_ONLY = ["arm-lift", "thigh-lift", "neck-lift", "brow-lift", "body-lift", "scar-revision"];
const APPROVED = [
  "breast-augmentation-in-kanpur", "tummy-tuck-in-kanpur", "rhinoplasty-in-kanpur", "breast-reduction-in-kanpur",
  "tummy-tuck-in-lucknow", "rhinoplasty-in-lucknow", "breast-reduction-in-lucknow", "breast-augmentation-in-lucknow",
  "otoplasty-in-delhi", "blepharoplasty-in-delhi", "blepharoplasty-in-gurgaon",
];
const CITIES = ["delhi", "gurgaon", "lucknow", "kanpur"];
const OK = ["/plastic-surgery", "/treatments", "/cost", ...PILLARS.flatMap((s) => [`/${s}`, `/cost/${s}`]), ...COST_ONLY.map((s) => `/cost/${s}`), ...APPROVED.map((s) => `/${s}`)];
const MISSING = [
  ...COST_ONLY.map((s) => `/${s}`),
  ...[...PILLARS, ...COST_ONLY].flatMap((s) => CITIES.map((c) => `${s}-in-${c}`)).filter((s) => !APPROVED.includes(s)).map((s) => `/${s}`),
  "/cost/facelift",
];

test.describe("release 4 at 375px", () => {
  test.use({ viewport: { width: 375, height: 800 } });

  for (const r of OK) {
    test(`${r} loads, is noindex and has no sideways scroll`, async ({ page }) => {
      const errors: string[] = [];
      page.on("pageerror", (e) => errors.push(e.message));
      const res = await page.goto(r);
      expect(res?.status()).toBe(200);
      expect(await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)).toBeLessThanOrEqual(0);
      await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
      expect(errors).toEqual([]);
    });
  }

  for (const r of MISSING) {
    test(`${r} is a 404`, async ({ request }) => {
      expect((await request.get(r)).status()).toBe(404);
    });
  }

  test("a placeholder reviewer never shows a credential", async ({ page }) => {
    await page.goto("/gynecomastia-surgery");
    const text = (await page.locator("main").innerText()).toLowerCase();
    expect(text).not.toContain("[reviewer");
    expect(text).not.toContain("plastic surgeon,");
    expect(text).not.toContain("not reviewed yet,");
    expect(text).toContain("medical review is pending");
  });

  test("the menu groups the new operations under plastic surgery", async ({ page }) => {
    await page.goto("/");
    const html = await page.content();
    for (const s of PILLARS) expect(html).toContain(`href="/${s}"`);
    for (const s of COST_ONLY) expect(html).toContain(`href="/cost/${s}"`);
    for (const s of COST_ONLY) expect(html).not.toContain(`href="/${s}"`);
  });
});
