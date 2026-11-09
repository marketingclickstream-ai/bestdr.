import { expect, test } from "@playwright/test";

const PAGE = "/gynecomastia-surgery-in-gurgaon";

for (const vp of [{ name: "mobile", width: 390, height: 844 }, { name: "desktop", width: 1366, height: 768 }]) {
  test.describe(vp.name, () => {
    test.use({ viewport: { width: vp.width, height: vp.height } });

    test("Gurgaon page renders without errors or sideways scroll", async ({ page }) => {
      const errors: string[] = [];
      page.on("pageerror", (e) => errors.push(e.message));
      const res = await page.goto(PAGE);
      expect(res?.status()).toBe(200);
      await expect(page.locator("h1")).toContainText("Gurgaon");
      await expect(page.getByText("Bestdoctorsin is a name, not a ranking.").first()).toBeVisible();
      await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", `https://www.bestdoctorsin.com${PAGE}`);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      expect(overflow).toBeLessThanOrEqual(0);
      expect(errors).toEqual([]);
    });

    test("call-back form validates, then submits", async ({ page }) => {
      await page.goto(PAGE);
      const form = page.locator("form:visible", { has: page.locator("input[name=phone]") }).first();
      await form.scrollIntoViewIfNeeded();
      await form.locator("button[type=submit]").click();
      await expect(form.locator("input[name=phone]")).toHaveAttribute("aria-invalid", "true");
      await expect(form.locator("input[name=consent]")).toHaveAttribute("aria-invalid", "true");
      await form.locator("input[name=name]").fill("Test Person");
      await form.locator("input[name=phone]").fill("9876543210");
      await form.locator("input[name=consent]").check();
      await form.locator("button[type=submit]").click();
      // No database in the test build: the form must say nothing was saved, never "Thank you".
      await expect(page.getByText("Demo mode: nothing was saved.").first()).toBeVisible();
    });
  });
}

test.describe("desktop navigation", () => {
  test.use({ viewport: { width: 1366, height: 768 } });
  test("menu opens with Enter and closes with Escape, returning focus", async ({ page }) => {
    await page.goto(PAGE);
    const trigger = page.locator('header button[aria-label$="submenu"]').first();
    await trigger.focus();
    await page.keyboard.press("Enter");
    await expect(trigger).toHaveAttribute("aria-expanded", "true");
    await page.keyboard.press("Escape");
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
    await expect(trigger).toBeFocused();
  });
});

test.describe("mobile menu", () => {
  test.use({ viewport: { width: 390, height: 844 } });
  test("opens, traps nothing behind it, and closes with Escape", async ({ page }) => {
    await page.goto(PAGE);
    await page.locator("#burger").click();
    await expect(page.locator("#mp")).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(page.locator("#mp")).toBeHidden();
  });
});

test("no WhatsApp link points at a wa.me URL without a number", async ({ page }) => {
  await page.goto(PAGE);
  expect(await page.locator('a[href*="wa.me"]').count()).toBe(0);
});

test("junk slug is a real 404", async ({ request }) => {
  expect((await request.get("/rhinoplasty-in-mars")).status()).toBe(404);
});

test("security headers and a CSP the page actually satisfies", async ({ page }) => {
  const violations: string[] = [];
  page.on("console", (m) => { if (/Content Security Policy/i.test(m.text())) violations.push(m.text()); });
  const res = await page.goto(PAGE);
  const h = res!.headers();
  expect(h["content-security-policy"]).toContain("default-src 'self'");
  expect(h["content-security-policy"]).toContain("frame-ancestors 'none'");
  expect(h["x-frame-options"]).toBe("DENY");
  expect(h["referrer-policy"]).toBe("strict-origin-when-cross-origin");
  await page.locator("#burger").isHidden();
  expect(violations).toEqual([]);
});
