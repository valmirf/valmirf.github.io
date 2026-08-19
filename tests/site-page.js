// @ts-check
const { expect } = require("@playwright/test");

const SECTIONS = [
  "index.html", "perfil.html", "pesquisa.html", "projetos.html",
  "publicacoes.html", "orientandos.html", "ensino.html", "contato.html",
];
const PROJECTS = [
  "mathaide", "nlp-pt", "aac", "gestos",
  "banhistas", "myfood", "cromossomos", "clustering",
];
const ALL = [...SECTIONS, ...PROJECTS.map((id) => `projetos/${id}/index.html`)];

/** Página do site. O conteúdo é montado por JS, então tudo espera o <main> render. */
class SitePage {
  constructor(page) {
    this.page = page;
    this.errors = [];
    this.nav = page.getByRole("navigation", { name: /Navegação principal|Main navigation/ });
    this.themeToggle = page.getByRole("button", { name: /Alternar tema|Toggle theme/ });
    this.langToggle = page.getByRole("button", { name: /^(EN|PT)$/ });
    this.main = page.locator("main");
    page.on("console", (m) => { if (m.type() === "error") this.errors.push(m.text()); });
    page.on("pageerror", (e) => this.errors.push(String(e)));
  }

  async goto(path) {
    await this.page.goto("/" + path);
    await expect(this.main.locator("> *").first()).toBeVisible();
  }

  /* Abaixo de 720px a navegação vive atrás do botão de menu. */
  async openMenu() {
    const burger = this.page.getByRole("button", { name: "Menu" });
    if (await burger.isVisible() && (await burger.getAttribute("aria-expanded")) !== "true") {
      await burger.click();
    }
  }

  heading() { return this.page.getByRole("heading", { level: 1 }); }

  /** Largura rolável além da janela indica estouro horizontal. */
  overflow() {
    return this.page.evaluate(() =>
      document.documentElement.scrollWidth - document.documentElement.clientWidth);
  }

  hitArea(locator) {
    return locator.evaluate((el) => {
      const r = el.getBoundingClientRect();
      const a = getComputedStyle(el, "::after");
      const w = parseFloat(a.width) || r.width, h = parseFloat(a.height) || r.height;
      return { w: Math.max(r.width, w), h: Math.max(r.height, h) };
    });
  }
}

module.exports = { SitePage, SECTIONS, PROJECTS, ALL };
