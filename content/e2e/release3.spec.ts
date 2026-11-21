import { expect, test } from "@playwright/test";

const TOPICS = ["acne-treatment", "hydrafacial", "botulinum-toxin-injections", "anti-aging-treatment", "prp-treatment", "hair-transplant"];
const CITIES = ["delhi", "gurgaon", "lucknow", "kanpur"];
const NON_SURGICAL = TOPICS.filter((t) => t !== "hair-transplant");
const ROUTES = ["/treatments", ...TOPICS.flatMap((t) => [`/${t}`, `/cost/${t}`, ...CITIES.map((c) => `/${t}-in-${c}`)])];

test.describe("release 3 at 375px", () => {
  test.use({ viewport: { width: 375, height: 800 } });

  for (const r of ROUTES) {
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

  for (const t of NON_SURGICAL) {
    for (const c of CITIES) {
      test(`${t}-in-${c} shows no surgery-only block`, async ({ page }) => {
        await page.goto(`/${t}-in-${c}`);
        const text = (await page.locator("main").innerText()).toLowerCase();
        expect(text).not.toContain("check the range for your case");
        expect(text).not.toContain("compression garment");
        expect(text).not.toContain("day care means");
        expect(text).not.toContain("usual total bill");
      });
    }
  }

  test("the old botulinum toxin spelling redirects to the one live slug", async ({ page }) => {
    const res = await page.goto("/botox-treatment");
    expect(page.url()).toContain("/botulinum-toxin-injections");
    expect(res?.status()).toBe(200);
  });
});
