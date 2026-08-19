// @ts-check
const { test, expect } = require("@playwright/test");
const { SitePage, ALL } = require("./site-page");

test.describe("Todas as páginas", () => {
  for (const path of ALL) {
    test(`${path} monta, sem erro e sem estouro horizontal`, async ({ page }) => {
      const site = new SitePage(page);
      await site.goto(path);

      await expect(site.heading()).toHaveCount(1);
      await expect(site.heading()).not.toBeEmpty();
      await expect(page).toHaveTitle(/\S/);
      expect(site.errors, `erros de console em ${path}`).toEqual([]);
      expect(await site.overflow(), "estouro horizontal").toBeLessThanOrEqual(0);
    });
  }
});

test.describe("Hierarquia de títulos", () => {
  test("nenhum nível de título é pulado", async ({ page }) => {
    const site = new SitePage(page);
    for (const path of ALL) {
      await site.goto(path);
      const niveis = await page.locator("main :is(h1,h2,h3,h4,h5,h6)")
        .evaluateAll((els) => els.map((e) => Number(e.tagName[1])));
      let anterior = 0;
      for (const n of niveis) {
        expect(n - anterior, `${path}: salto de h${anterior} para h${n}`).toBeLessThanOrEqual(1);
        anterior = n;
      }
    }
  });
});
