import { expect, test } from "@playwright/test";

const ROUTES = [
  "/liposuction", "/liposuction-in-gurgaon", "/liposuction-in-delhi", "/liposuction-in-lucknow", "/liposuction-in-kanpur",
  "/gynecomastia-surgery-in-delhi", "/gynecomastia-surgery-in-lucknow", "/gynecomastia-surgery-in-kanpur",
  "/cost/liposuction", "/cost/gynecomastia-surgery", "/learn", "/plastic-surgery",
];

test.describe("release 2 at 360px", () => {
  test.use({ viewport: { width: 360, height: 740 } });

  for (const r of ROUTES) {
    test(`${r} loads with no sideways scroll`, async ({ page }) => {
      const errors: string[] = [];
      page.on("pageerror", (e) => errors.push(e.message));
      const res = await page.goto(r);
      expect(res?.status()).toBe(200);
      expect(await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)).toBeLessThanOrEqual(0);
      expect(errors).toEqual([]);
    });
  }

  test("a learn post renders with its article schema", async ({ page }) => {
    await page.goto("/learn/liposuction-recovery-timeline");
    await expect(page.locator("h1")).toBeVisible();
    expect(await page.locator('script[type="application/ld+json"]').allTextContents().then((a) => a.join(""))).toContain("BlogPosting");
  });

  test("Facility fee appears once in the Gurgaon cost table", async ({ page }) => {
    await page.goto("/gynecomastia-surgery-in-gurgaon");
    const n = await page.locator("table tbody tr th", { hasText: /^Facility fee$/ }).count();
    expect(n).toBe(1);
  });

  test("no chat script loads by default", async ({ page }) => {
    await page.goto("/liposuction-in-gurgaon");
    expect(await page.locator("script[src*='chat']").count()).toBe(0);
    await expect(page.getByRole("button", { name: /chat with us/i })).toHaveCount(0);
  });
});
