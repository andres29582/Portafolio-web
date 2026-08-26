import { expect, test } from "@playwright/test";

const viewports = [
  { width: 390, height: 844 },
  { width: 768, height: 1024 },
  { width: 1440, height: 900 },
];

for (const viewport of viewports) {
  test(`matches the ${viewport.width}x${viewport.height} baseline`, async ({ page }) => {
    await page.setViewportSize(viewport);
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.addInitScript(() => window.localStorage.setItem("portfolio-language-v2", "pt"));
    await page.goto("/");
    await page.evaluate(() => document.fonts.ready);

    await expect(page).toHaveScreenshot(`home-${viewport.width}x${viewport.height}.png`, {
      animations: "disabled",
      caret: "hide",
    });
  });
}
