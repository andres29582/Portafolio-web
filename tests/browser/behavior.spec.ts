import { expect, test } from "@playwright/test";

const LANGUAGE_STORAGE_KEY = "portfolio-language-v2";

test.use({ viewport: { width: 390, height: 844 } });

test.beforeEach(async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.addInitScript((key) => {
    if (!window.localStorage.getItem(key)) {
      window.localStorage.setItem(key, "pt");
    }
  }, LANGUAGE_STORAGE_KEY);
  await page.goto("/");
});

test("opens and closes the mobile menu", async ({ page }) => {
  const menuButton = page.getByRole("button", { name: "Abrir navegação" });
  const mobileNavigation = page.getByRole("navigation", { name: "Navegação móvel" });

  await expect(mobileNavigation).toBeHidden();
  await menuButton.click();
  await expect(page.getByRole("button", { name: "Fechar navegação" })).toHaveAttribute(
    "aria-expanded",
    "true",
  );
  await expect(mobileNavigation).toBeVisible();

  await page.getByRole("button", { name: "Fechar navegação" }).click();
  await expect(mobileNavigation).toBeHidden();
});

test("closes the mobile menu with Escape and restores focus", async ({ page }) => {
  const menuButton = page.getByRole("button", { name: "Abrir navegação" });

  await menuButton.click();
  await page.keyboard.press("Escape");

  await expect(page.getByRole("navigation", { name: "Navegação móvel" })).toBeHidden();
  await expect(menuButton).toBeFocused();
});

test("closes the mobile menu after selecting an anchor", async ({ page }) => {
  await page.getByRole("button", { name: "Abrir navegação" }).click();
  await page.getByRole("navigation", { name: "Navegação móvel" }).getByRole("link", {
    name: "Projetos",
  }).click();

  await expect(page).toHaveURL(/#projects$/);
  await expect(page.getByRole("navigation", { name: "Navegação móvel" })).toBeHidden();
});

test("changes and persists the selected language", async ({ page }) => {
  await expect(page.locator("html")).toHaveAttribute("lang", "pt-BR");
  await expect(page.locator('nav[aria-label="Navegação principal"]')).toHaveCount(1);
  await expect(page.getByRole("group", { name: "Seletor de idioma" })).toBeVisible();

  await page.getByRole("button", { name: "ES", exact: true }).click();
  await expect(page.locator("html")).toHaveAttribute("lang", "es");
  await expect(page.locator('nav[aria-label="Navegación principal"]')).toHaveCount(1);
  await expect(page.getByRole("group", { name: "Selector de idioma" })).toBeVisible();

  await page.getByRole("button", { name: "EN", exact: true }).click();

  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(page.locator('nav[aria-label="Main navigation"]')).toHaveCount(1);
  await expect(page.getByRole("group", { name: "Language selector" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Open navigation" })).toBeVisible();
  await expect
    .poll(() => page.evaluate((key) => window.localStorage.getItem(key), LANGUAGE_STORAGE_KEY))
    .toBe("en");

  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(page.getByRole("button", { name: "Open navigation" })).toBeVisible();
});

test("opens a project disclosure", async ({ page }) => {
  const disclosure = page.locator("#projects details").first();

  await disclosure.getByText("Ver detalhes", { exact: true }).click();

  await expect(disclosure).toHaveAttribute("open", "");
});

test("navigates through page anchors", async ({ page }) => {
  await page.getByRole("link", { name: "Ver projetos", exact: true }).click();

  await expect(page).toHaveURL(/#projects$/);
  await expect(page.locator("#projects")).toBeInViewport();
});

test("downloads the CV with the expected filename", async ({ page }) => {
  const downloadPromise = page.waitForEvent("download");
  await page.getByRole("link", { name: "Baixar CV" }).click();
  const download = await downloadPromise;

  expect(download.suggestedFilename()).toBe("cv-andres-pignoloni.docx");
});

test("exposes email and external contact links", async ({ page }) => {
  const contact = page.locator("#contact");

  await expect(contact.getByRole("link", { name: "andres-omega@hotmail.com" })).toHaveAttribute(
    "href",
    "mailto:andres-omega@hotmail.com",
  );

  for (const name of ["LinkedIn", "GitHub"]) {
    const link = contact.getByRole("link", { name, exact: true });
    await expect(link).toHaveAttribute("target", "_blank");
    await expect(link).toHaveAttribute("rel", "noreferrer");
    await expect(link).toHaveAttribute("href", /^https:\/\//);
  }
});

test("keeps the mobile navigation accessibility structure stable", async ({ page }) => {
  await page.getByRole("button", { name: "Abrir navegação" }).click();

  await expect(page.getByRole("navigation", { name: "Navegação móvel" })).toMatchAriaSnapshot(`
    - navigation "Navegação móvel":
      - link "Sobre mim"
      - link "Habilidades"
      - link "Projetos"
      - link "Arquitetura"
      - link "Formação"
      - link "Experiência"
      - link "Contato"
  `);
});

for (const viewport of [
  { width: 390, height: 844 },
  { width: 768, height: 1024 },
  { width: 1440, height: 900 },
]) {
  test(`has no horizontal overflow at ${viewport.width}x${viewport.height}`, async ({ page }) => {
    await page.setViewportSize(viewport);

    const dimensions = await page.evaluate(() => ({
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
    }));

    expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth);
  });
}
