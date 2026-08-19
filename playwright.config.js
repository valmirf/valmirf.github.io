// @ts-check
const { defineConfig, devices } = require("@playwright/test");

/* O site é estático: o servidor é só um http.server sobre a raiz do repositório. */
module.exports = defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  reporter: [["list"]],
  use: {
    baseURL: "http://127.0.0.1:4322",
    /* O site escolhe o idioma pelo navegador; fixamos o português
       para que a suíte teste sempre a mesma superfície. */
    locale: "pt-BR",
    trace: "on-first-retry",
    screenshot: "only-on-failure",
  },
  projects: [
    { name: "desktop", use: { ...devices["Desktop Chrome"] } },
    { name: "mobile", use: { ...devices["Pixel 7"] } },
  ],
  webServer: {
    command: "python3 -m http.server 4322",
    url: "http://127.0.0.1:4322/index.html",
    reuseExistingServer: true,
    stdout: "ignore",
  },
});
