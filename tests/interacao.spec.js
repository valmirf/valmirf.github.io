// @ts-check
const { test, expect } = require("@playwright/test");
const { SitePage } = require("./site-page");

test("a navegação leva à aba certa e marca a aba atual", async ({ page }) => {
  const site = new SitePage(page);
  await site.goto("index.html");

  await site.openMenu();
  await site.nav.getByRole("link", { name: "Publicações" }).click();
  await expect(page).toHaveURL(/publicacoes\.html$/);

  await site.openMenu();
  await expect(site.nav.getByRole("link", { name: "Publicações" })).toHaveClass(/is-active/);
});

test("o filtro por tema recorta a lista de publicações", async ({ page }) => {
  const site = new SitePage(page);
  await site.goto("publicacoes.html");

  const todas = page.getByRole("button", { name: /^Todas/ });
  const manuscrito = page.getByRole("button", { name: /^Reconhecimento de manuscrito/ });
  await expect(todas).toBeVisible();

  const total = await page.locator(".pub").count();
  await manuscrito.click();
  await expect(page).toHaveURL(/#ocr$/);
  const recorte = await page.locator(".pub").count();

  expect(recorte).toBe(7);
  expect(recorte).toBeLessThan(total);
  await expect(manuscrito).toHaveClass(/is-on/);
});

test("o tema escuro liga e sobrevive à navegação", async ({ page }) => {
  const site = new SitePage(page);
  await site.goto("index.html");
  const antes = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);

  await site.themeToggle.click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  const depois = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
  expect(depois).not.toBe(antes);

  await site.goto("perfil.html");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
});

test("o idioma troca o conteúdo, não só os rótulos", async ({ page }) => {
  const site = new SitePage(page);
  await site.goto("projetos.html");
  await expect(site.heading()).toHaveText("Projetos");

  await site.langToggle.click();
  await expect(site.heading()).toHaveText("Projects");
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
});

test("o atalho de teclado pula para o conteúdo", async ({ page }) => {
  const site = new SitePage(page);
  await site.goto("index.html");
  await page.keyboard.press("Tab");
  const atalho = page.getByRole("link", { name: /Ir para o conteúdo|Skip to content/ });
  await expect(atalho).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#view$/);
});

test("os controles da barra têm alvo de toque de 40px", async ({ page }) => {
  const site = new SitePage(page);
  await site.goto("index.html");
  for (const ctrl of [site.themeToggle, site.langToggle]) {
    const { w, h } = await site.hitArea(ctrl);
    expect(Math.round(w), "largura do alvo").toBeGreaterThanOrEqual(40);
    expect(Math.round(h), "altura do alvo").toBeGreaterThanOrEqual(40);
  }
});

test("o herói mostra a figura de assinatura enquanto não há foto", async ({ page }) => {
  const site = new SitePage(page);
  await site.goto("index.html");
  const slot = page.locator(".portrait--wide");
  await expect(slot).toHaveClass(/is-empty/);
  await expect(slot.locator(".portrait__fig svg")).toBeVisible();
});
