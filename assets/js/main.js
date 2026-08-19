/* =============================================================
   main.js — uma aba por seção, uma página por projeto.
   Cada .html declara <body data-page="..."> e este arquivo
   monta a página a partir de data.js.
   ============================================================= */

(function () {
  "use strict";

  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  const PAGE = document.body.dataset.page || "home";
  const PROJECT_ID = document.body.dataset.project || null;
  const ROOT = document.body.dataset.root || "";

  const STORE_LANG = "vmf.lang";
  const STORE_THEME = "vmf.theme";

  let lang = localStorage.getItem(STORE_LANG)
    || ((navigator.language || "pt").toLowerCase().startsWith("pt") ? "pt" : "en");

  const t = (k) => (UI[lang] && UI[lang][k]) || k;
  const L = (f) => (f && typeof f === "object" && !Array.isArray(f) ? (f[lang] ?? f.pt) : f);
  const url = (p) => ROOT + p;

  const savedTheme = localStorage.getItem(STORE_THEME);
  if (savedTheme) document.documentElement.setAttribute("data-theme", savedTheme);

  const NAV = [
    { key: "home",         href: "index.html",       i18n: "nav.home" },
    { key: "profile",      href: "perfil.html",      i18n: "nav.profile" },
    { key: "research",     href: "pesquisa.html",    i18n: "nav.research" },
    { key: "projects",     href: "projetos.html",    i18n: "nav.projects" },
    { key: "publications", href: "publicacoes.html", i18n: "nav.publications" },
    { key: "students",     href: "orientandos.html", i18n: "nav.students" },
    { key: "teaching",     href: "ensino.html",      i18n: "nav.teaching" },
    { key: "contact",      href: "contato.html",     i18n: "nav.contact" },
  ];

  /* =============================================================
     Figuras. Geometria desenhada, não ilustração.
     Para usar a figura real de um artigo, defina img: "assets/img/..."
     no projeto, em data.js.
     ============================================================= */
  const A = 'var(--link)', G = 'var(--line-2)', I = 'var(--ink-3)';
  const svg = (inner) =>
    `<svg viewBox="0 0 400 300" role="img" aria-hidden="true" preserveAspectRatio="xMidYMid slice">${inner}</svg>`;
  const SERIF = "Source Serif 4, Georgia, serif";

  const FIGS = {
    /* Praia: faixas de céu, mar e areia, banhistas detectados com caixa e rótulo. */
    detect: svg(`
      <rect x="0" y="0" width="400" height="104" fill="${I}" opacity=".07"/>
      <rect x="0" y="104" width="400" height="118" fill="${A}" opacity=".13"/>
      <rect x="0" y="222" width="400" height="78" fill="${I}" opacity=".13"/>
      <path d="M0 104h400" stroke="${G}" stroke-width="3"/>
      <path d="M0 222 q40 -8 80 0 t80 0 t80 0 t80 0 t80 0" fill="none" stroke="${G}" stroke-width="3"/>
      ${[0,1,2].map(r=>`<path d="M0 ${132+r*30} q30 -7 60 0 t60 0 t60 0 t60 0 t60 0 t60 0 t60 0"
        fill="none" stroke="${A}" stroke-width="2" opacity="${.34 - r*.08}"/>`).join("")}
      ${[[86,158,1],[196,192,1],[300,146,1],[344,238,0]].map(([x,y,on])=>`
        <ellipse cx="${x}" cy="${y+10}" rx="9" ry="7" fill="${I}" opacity=".5"/>
        <circle cx="${x}" cy="${y-2}" r="8" fill="${I}" opacity=".72"/>
        <rect x="${x-26}" y="${y-24}" width="52" height="52" fill="none"
              stroke="${on?A:G}" stroke-width="${on?4:3}"/>
        <rect x="${x-26}" y="${y-38}" width="${on?34:26}" height="14" fill="${on?A:G}"/>`).join("")}
    `),

    /* Folha fotografada: soma armada, região detectada, painel de erro ao lado. */
    equation: svg(`
      <rect x="24" y="26" width="228" height="248" fill="${I}" opacity=".05" stroke="${G}" stroke-width="3"/>
      ${[0,1,2,3].map(i=>`<path d="M40 ${104+i*54}h196" stroke="${G}" stroke-width="2" opacity=".5"/>`).join("")}
      <g font-family="${SERIF}" font-size="54" fill="${I}" text-anchor="end">
        <text x="212" y="98">47</text><text x="212" y="152">25</text>
      </g>
      <text x="118" y="152" font-family="${SERIF}" font-size="54" fill="${I}">+</text>
      <path d="M104 170h112" stroke="${I}" stroke-width="5"/>
      <text x="212" y="226" font-family="${SERIF}" font-size="54" fill="${A}" text-anchor="end">72</text>
      <rect x="88" y="46" width="140" height="200" fill="${A}" opacity=".08"/>
      <rect x="88" y="46" width="140" height="200" fill="none" stroke="${A}" stroke-width="4"/>
      <rect x="88" y="28" width="86" height="18" fill="${A}"/>
      <rect x="272" y="86" width="104" height="128" fill="${I}" opacity=".07" stroke="${G}" stroke-width="2.5"/>
      ${[0,1,2].map(i=>`<rect x="288" y="${106+i*34}" width="${[72,54,64][i]}" height="10" rx="5" fill="${I}" opacity=".3"/>`).join("")}
      <rect x="288" y="140" width="54" height="10" rx="5" fill="${A}" opacity=".9"/>
      <path d="M252 150h20" stroke="${A}" stroke-width="3"/>
    `),

    /* Prato segmentado: regiões irregulares com tom próprio e legenda. */
    plate: svg(`
      <circle cx="196" cy="140" r="126" fill="${I}" opacity=".05" stroke="${G}" stroke-width="3"/>
      <circle cx="196" cy="140" r="106" fill="none" stroke="${G}" stroke-width="2" opacity=".6"/>
      <path d="M196 140 L196 36 A104 104 0 0 1 288 92 Z" fill="${A}" opacity=".34" stroke="${A}" stroke-width="3"/>
      <path d="M196 140 L288 92 A104 104 0 0 1 268 218 Z" fill="${A}" opacity=".18" stroke="${A}" stroke-width="3"/>
      <path d="M196 140 L268 218 A104 104 0 0 1 132 236 Z" fill="${I}" opacity=".22" stroke="${G}" stroke-width="3"/>
      <path d="M196 140 L132 236 A104 104 0 0 1 196 36 Z" fill="${I}" opacity=".1" stroke="${G}" stroke-width="3"/>
      <circle cx="222" cy="86" r="13" fill="${A}" opacity=".5"/>
      <circle cx="246" cy="150" r="10" fill="${A}" opacity=".35"/>
      <circle cx="168" cy="196" r="12" fill="${I}" opacity=".3"/>
      ${[0,1,2,3].map(i=>`<rect x="336" y="${86+i*30}" width="20" height="20" rx="3"
        fill="${i<2?A:I}" opacity="${[.34,.18,.22,.1][i]}" stroke="${i<2?A:G}" stroke-width="2"/>`).join("")}
    `),

    /* Metáfase: cromossomos com preenchimento, um recortado em detalhe. */
    chromo: svg(`
      <circle cx="150" cy="150" r="140" fill="${I}" opacity=".05"/>
      ${[[76,80,-18],[150,132,26],[220,74,8],[236,200,-34],[92,206,42],[164,246,-12],[46,150,66]]
        .map(([x,y,rot],i)=>`<g transform="translate(${x} ${y}) rotate(${rot})" opacity="${i===1?1:.5}">
          <path d="M-16 -34 Q-5 0 -16 34 M16 -34 Q5 0 16 34" fill="none"
                stroke="${i===1?A:I}" stroke-width="13" stroke-linecap="round"/>
          <path d="M-16 -34 Q-5 0 -16 34 M16 -34 Q5 0 16 34" fill="none"
                stroke="${i===1?A:I}" stroke-width="5" stroke-linecap="round" opacity=".45"/>
        </g>`).join("")}
      <rect x="116" y="94" width="68" height="76" fill="none" stroke="${A}" stroke-width="3.5"/>
      <path d="M184 132 L272 108" stroke="${A}" stroke-width="2.5" stroke-dasharray="7 5"/>
      <rect x="272" y="52" width="106" height="118" fill="${A}" opacity=".08" stroke="${A}" stroke-width="3"/>
      <g transform="translate(325 111) rotate(26) scale(1.5)">
        <path d="M-16 -34 Q-5 0 -16 34 M16 -34 Q5 0 16 34" fill="none" stroke="${A}" stroke-width="9" stroke-linecap="round"/>
      </g>
    `),

    /* Gestos: quatro posturas de mão, uma reconhecida com caixa e rótulo. */
    hands: (() => {
      /* mão em coordenadas locais: palma na origem, dedos para cima.
         ext = [mindinho, anelar, médio, indicador]; polegar à parte. */
      const hand = (c, ext, thumb) => {
        const dedos = ext.map((on, i) => {
          const x = -26 + i * 13;
          return on
            ? `<rect x="${x}" y="-46" width="11" height="54" rx="5.5" fill="${c}"/>`
            : `<rect x="${x}" y="-10" width="11" height="18" rx="5.5" fill="${c}"/>`;
        }).join("");
        const pol = thumb
          ? `<rect x="-46" y="4" width="13" height="34" rx="6.5" fill="${c}" transform="rotate(-32 -40 21)"/>`
          : `<rect x="-26" y="14" width="30" height="13" rx="6.5" fill="${c}"/>`;
        return `<rect x="-30" y="0" width="60" height="52" rx="15" fill="${c}"/>${dedos}${pol}`;
      };

      const POSES = [
        { ext: [0, 0, 0, 0], thumb: false },  // punho
        { ext: [1, 1, 1, 1], thumb: true },   // palma aberta
        { ext: [0, 0, 1, 1], thumb: false },  // dois dedos
        { ext: [0, 0, 0, 1], thumb: false },  // apontar
      ];

      return svg(POSES.map((p, i) => {
        const x = 42 + (i % 2) * 166, y = 14 + Math.floor(i / 2) * 144;
        const on = i === 2;
        return `
          <rect x="${x}" y="${y}" width="150" height="128" rx="6"
                fill="${on ? A : I}" opacity="${on ? .14 : .05}"/>
          <rect x="${x}" y="${y}" width="150" height="128" rx="6" fill="none"
                stroke="${on ? A : G}" stroke-width="${on ? 4.5 : 2.5}"/>
          ${on ? `<rect x="${x}" y="${y}" width="62" height="16" rx="2" fill="${A}"/>` : ""}
          <g transform="translate(${x + 75} ${y + 54}) scale(1.05)">
            ${hand(on ? A : I, p.ext, p.thumb)}
          </g>`;
      }).join(""));
    })(),

    /* Redação: a página manuscrita à esquerda, com uma região reconhecida,
       e a grade de critérios à direita sendo pontuada. Visão de um lado,
       PLN do outro, ligados pela linha de chamada. */
    text: (() => {
      const LINHAS = [
        { y: 56,  p: [28, 20, 40, 24, 34] },
        { y: 90,  p: [22, 38, 16, 42, 28] },
        { y: 124, p: [34, 26, 44, 22] },
        { y: 158, p: [26, 44, 20, 36, 28] },
        { y: 192, p: [30, 24, 40, 32, 26] },
        { y: 226, p: [22, 46, 28, 38] },
        { y: 260, p: [34, 26, 30] },
      ];
      const LIDA = 2;   /* a linha dentro da caixa de reconhecimento */

      /* palavras como barras curtas: é assim que texto se lê em miniatura */
      const texto = LINHAS.map((l, li) => {
        let x = 36;
        return l.p.map((w) => {
          const r = `<rect x="${x}" y="${l.y - 7}" width="${w}" height="7" rx="3.5"
                      fill="${li === LIDA ? A : I}" opacity="${li === LIDA ? .95 : .34}"/>`;
          x += w + 6;
          return r;
        }).join("");
      }).join("");

      /* critérios: rótulo curto e a barra de pontuação atribuída */
      const NOTAS = [.92, .68, .84, .45, .74];
      const criterios = NOTAS.map((n, i) => {
        const y = 44 + i * 46;
        return `
          <rect x="266" y="${y}" width="42" height="6" rx="3" fill="${I}" opacity=".4"/>
          <rect x="266" y="${y + 13}" width="104" height="9" rx="4.5" fill="${I}" opacity=".14"/>
          <rect x="266" y="${y + 13}" width="${Math.round(104 * n)}" height="9" rx="4.5"
                fill="${A}" opacity="${.45 + n * .5}"/>`;
      }).join("");

      return svg(`
        <rect x="18" y="18" width="214" height="264" rx="3" fill="${I}" opacity=".06"
              stroke="${G}" stroke-width="3"/>
        ${LINHAS.map(l => `<path d="M30 ${l.y + 4}h190" stroke="${G}" stroke-width="1.6" opacity=".38"/>`).join("")}
        <rect x="30" y="${LINHAS[LIDA].y - 20}" width="190" height="30" fill="${A}" opacity=".1"/>
        <rect x="30" y="${LINHAS[LIDA].y - 20}" width="190" height="30" fill="none"
              stroke="${A}" stroke-width="3.5"/>
        <rect x="30" y="${LINHAS[LIDA].y - 20}" width="66" height="15" rx="2" fill="${A}"/>
        ${texto}
        <path d="M220 ${LINHAS[LIDA].y - 5}h32" stroke="${A}" stroke-width="2.5"
              stroke-dasharray="7 5" fill="none"/>
        <rect x="252" y="24" width="132" height="252" rx="3" fill="${I}" opacity=".05"
              stroke="${G}" stroke-width="2.5"/>
        ${criterios}
      `);
    })(),

    /* Prancha de CAA: tira de sentença acima, grade de pictogramas, um selecionado.
       Os símbolos são desenhados no registro do ARASAAC: traço grosso, forma cheia,
       sem sombra — legíveis a 96px. */
    board: (() => {
      const PICTO = {
        pessoa: (c) => `<circle cx="0" cy="-15" r="10" fill="${c}"/>
          <path d="M-13 20 q0 -21 13 -21 t13 21 z" fill="${c}"/>`,
        casa: (c) => `<path d="M-20 -2 L0 -19 L20 -2 z" fill="${c}"/>
          <rect x="-15" y="-2" width="30" height="21" fill="${c}"/>
          <rect x="-5" y="6" width="10" height="13" fill="var(--bg-soft)"/>`,
        copo: (c) => `<path d="M-13 -17 h26 l-4 36 h-18 z" fill="none" stroke="${c}" stroke-width="5"/>
          <path d="M-11 -2 h22 l-2.6 21 h-16.8 z" fill="${c}"/>`,
        sol: (c) => `<circle cx="0" cy="0" r="10" fill="${c}"/>
          ${[0,45,90,135,180,225,270,315].map(a=>`<path d="M0 -16 v-6" stroke="${c}" stroke-width="5"
            stroke-linecap="round" transform="rotate(${a})"/>`).join("")}`,
        livro: (c) => `<path d="M0 -14 q-11 -6 -20 -4 v29 q9 -2 20 4 z" fill="${c}"/>
          <path d="M0 -14 q11 -6 20 -4 v29 q-9 -2 -20 4 z" fill="${c}" opacity=".62"/>`,
        coracao: (c) => `<path d="M0 19 C-22 5 -19 -14 -8 -14 C-3 -14 0 -10 0 -7 C0 -10 3 -14 8 -14
          C19 -14 22 5 0 19 z" fill="${c}"/>`,
        mao: (c) => `<rect x="-13" y="-3" width="26" height="22" rx="7" fill="${c}"/>
          ${[-9,-3,3,9].map((x,i)=>`<rect x="${x-2.6}" y="${-18+Math.abs(i-1.5)*3}" width="5.2"
            height="${17-Math.abs(i-1.5)*3}" rx="2.6" fill="${c}"/>`).join("")}`,
        fala: (c) => `<path d="M-19 -14 h38 v24 h-22 l-9 10 v-10 h-7 z" fill="${c}"/>`,
      };
      const cell = (x, y, w, h, key, on) => `
        <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="7"
              fill="${on ? A : I}" opacity="${on ? .2 : .07}"/>
        <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="7" fill="none"
              stroke="${on ? A : G}" stroke-width="${on ? 4 : 2.5}"/>
        <g transform="translate(${x + w / 2} ${y + h / 2 - 3})">${PICTO[key](on ? A : I)}</g>`;

      const grid = ["pessoa", "mao", "copo", "casa", "sol", "livro", "coracao", "fala"];
      return svg(`
        <rect x="28" y="18" width="344" height="60" rx="7" fill="${I}" opacity=".06"/>
        <rect x="28" y="18" width="344" height="60" rx="7" fill="none" stroke="${G}" stroke-width="2.5"/>
        ${["pessoa", "mao", "copo"].map((k, i) => `
          <g transform="translate(${64 + i * 62} 48) scale(.78)">${PICTO[k](A)}</g>`).join("")}
        <path d="M262 48h84" stroke="${G}" stroke-width="2.5" stroke-dasharray="6 5"/>
        ${grid.map((k, i) => cell(28 + (i % 4) * 88, 96 + Math.floor(i / 4) * 96, 80, 80, k, i === 2)).join("")}
      `);
    })(),

    /* Agrupamento fuzzy: fronteiras difusas, centroides e faixa de pertinência. */
    cluster: svg(`
      <ellipse cx="118" cy="98" rx="72" ry="58" fill="${A}" opacity=".16"/>
      <ellipse cx="118" cy="98" rx="72" ry="58" fill="none" stroke="${A}" stroke-width="3" stroke-dasharray="9 7"/>
      <ellipse cx="278" cy="92" rx="62" ry="52" fill="${I}" opacity=".1"/>
      <ellipse cx="278" cy="92" rx="62" ry="52" fill="none" stroke="${G}" stroke-width="3" stroke-dasharray="9 7"/>
      <ellipse cx="192" cy="196" rx="78" ry="54" fill="${I}" opacity=".1"/>
      <ellipse cx="192" cy="196" rx="78" ry="54" fill="none" stroke="${G}" stroke-width="3" stroke-dasharray="9 7"/>
      ${[[92,80],[128,66],[146,110],[104,124],[140,90],[80,108]].map(([x,y])=>
        `<circle cx="${x}" cy="${y}" r="8" fill="${A}"/>`).join("")}
      ${[[262,74],[294,88],[274,116],[302,58],[250,108]].map(([x,y])=>
        `<circle cx="${x}" cy="${y}" r="8" fill="${I}" opacity=".5"/>`).join("")}
      ${[[166,186],[204,174],[224,210],[174,218],[208,196],[236,182]].map(([x,y])=>
        `<circle cx="${x}" cy="${y}" r="8" fill="${I}" opacity=".5"/>`).join("")}
      ${[[118,98],[278,92],[192,196]].map(([x,y])=>
        `<path d="M${x-11} ${y}h22M${x} ${y-11}v22" stroke="${A}" stroke-width="4"/>`).join("")}
      <circle cx="188" cy="140" r="8" fill="none" stroke="${A}" stroke-width="3"/>
      <circle cx="214" cy="132" r="8" fill="none" stroke="${A}" stroke-width="3"/>
      ${[0,1,2,3,4,5].map(i=>`<rect x="${34+i*56}" y="266" width="48" height="14" rx="3"
        fill="${A}" opacity="${[.85,.6,.4,.28,.18,.1][i]}"/>`).join("")}
    `),
  };

  const FIG_FOR = {
    mathaide: "equation", banhistas: "detect", myfood: "plate",
    cromossomos: "chromo", gestos: "hands", "nlp-pt": "text", clustering: "cluster", aac: "board",
  };

  const projFigure = (p) => p.img
    ? `<img src="${url(p.img)}" alt="${L(p.title)}" loading="lazy">`
    : (FIGS[FIG_FOR[p.id]] || "");

  /* Marca genérica, para artigos que não pertencem a um projeto. */
  const GENERIC_FIG = svg(`
    <rect x="76" y="52" width="248" height="196" fill="none" stroke="${G}" stroke-width="4"/>
    ${[0,1,2,3].map(i=>`<rect x="108" y="${92+i*38}" width="${[184,150,168,116][i]}" height="12" rx="6" fill="${I}" opacity=".22"/>`).join("")}
    <rect x="108" y="92" width="72" height="12" rx="6" fill="${A}" opacity=".85"/>`);

  const UNUSED_TOPIC_FIGS = {
    vision: svg(`<rect x="70" y="58" width="118" height="118" fill="none" stroke="${A}" stroke-width="5"/>
      <rect x="70" y="40" width="72" height="18" fill="${A}"/>
      <rect x="212" y="124" width="118" height="118" fill="none" stroke="${G}" stroke-width="5"/>
      <rect x="212" y="106" width="72" height="18" fill="${G}"/>`),
    ml: svg(`<path d="M64 236 L136 172 L208 200 L280 96 L336 130" fill="none" stroke="${A}" stroke-width="5"/>
      ${[[64,236],[136,172],[208,200],[280,96],[336,130]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="10" fill="${A}"/>`).join("")}
      <path d="M52 262h300" stroke="${G}" stroke-width="4"/>`),
    nlp: svg(`${[0,1,2,3].map(i=>{const y=84+i*46,w=[236,282,198,258][i];
      return `<rect x="72" y="${y}" width="${w}" height="14" rx="7" fill="${I}" opacity=".24"/>`;}).join("")}
      <rect x="72" y="130" width="72" height="14" rx="7" fill="${A}"/>`),
    aied: svg(`<rect x="96" y="56" width="208" height="188" fill="none" stroke="${G}" stroke-width="5"/>
      ${[0,1,2].map(i=>`<path d="M128 ${106+i*46}h144" stroke="${I}" stroke-width="5" opacity=".35"/>`).join("")}
      <path d="M136 176 l30 30 l60 -74" fill="none" stroke="${A}" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>`),
  };

  /* Publicação: figura própria se houver; senão a do projeto; senão a marca do tema. */
  function pubFigure(pub) {
    if (pub.img) return `<img src="${url(pub.img)}" alt="" loading="lazy">`;
    const proj = pub.proj && SITE.projects.find((x) => x.id === pub.proj);
    if (proj) return projFigure(proj);
    return GENERIC_FIG;
  }

  const LINK_LABELS = {
    lattes: "Lattes", scholar: "Google Scholar", researchgate: "ResearchGate",
    github: "GitHub", linkedin: "LinkedIn", vcl: "VCL", aibox: "AIBox Lab", nees: "NEES/UFAL",
  };

  const slash = (parts) => parts.join('<span class="sep"> / </span>');

  /* Coautores: cada nome vira busca no Google Acadêmico; o dele fica em negrito. */
  function authors(str) {
    return str.split(/,\s*/).map((name) => {
      if (/^V\.\s?Macario/.test(name)) return `<strong>${name}</strong>`;
      if (/^et al\.?$/i.test(name.trim()) || name.trim().length < 4) return name;
      const q = encodeURIComponent(name.replace(/\./g, "").trim());
      return `<a href="https://scholar.google.com/citations?hl=en&view_op=search_authors&mauthors=${q}" target="_blank" rel="noopener">${name}</a>`;
    }).join(", ");
  }

  const profileLinks = () => {
    const p = SITE.person;
    return slash([`<a href="mailto:${p.email}">${t("link.email")}</a>`].concat(
      Object.entries(p.links).map(([k, u]) =>
        `<a href="${u}" target="_blank" rel="noopener">${LINK_LABELS[k] || k}</a>`)));
  };

  const stripTags = (h) => h.replace(/<[^>]+>/g, "");

  /* Ordem dos projetos: em andamento primeiro, depois por tempo de duração. */
  const NOW = new Date().getFullYear();
  const span = (p) => (p.to || NOW) - p.from;
  const rank = (p) => (p.dormant ? 2 : p.status === "active" ? 0 : 1);
  const ordered = () => SITE.projects.slice().sort((a, b) =>
    rank(a) - rank(b) || span(b) - span(a));

  /* ---------- Barra e rodapé ---------- */
  function renderChrome() {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    /* O <head> é estático em português; em inglês o título e a descrição
       precisam acompanhar, senão a aba e a prévia social ficam trocadas. */
    if (lang === "en") {
      const en = document.body.dataset.titleEn;
      if (en) document.title = en;
      const d = document.body.dataset.descEn;
      const meta = document.querySelector('meta[name="description"]');
      if (d && meta) meta.setAttribute("content", d);
    }

    $("#topbar").className = "topbar";
    $("#topbar").innerHTML = `
      <div class="wrap topbar__in">
        <a class="topbar__brand" href="${url("index.html")}">Valmir Macario</a>
        <nav class="topbar__nav" aria-label="${t("nav.aria")}">
          ${NAV.map((n) => {
            const on = n.key === PAGE || (PAGE === "project" && n.key === "projects");
            return `<a href="${url(n.href)}" class="${on ? "is-active" : ""}"${on ? ' aria-current="page"' : ""}>${t(n.i18n)}</a>`;
          }).join("")}
        </nav>
        <div class="topbar__tools">
          <button class="tbtn" id="langToggle" type="button">${lang === "pt" ? "EN" : "PT"}</button>
          <button class="tbtn tbtn--ico" id="themeToggle" type="button" aria-label="${t("theme.toggle")}">
            <svg class="ico-sun" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M21 12h-2M5 12H3M18.4 5.6l-1.4 1.4M7 17l-1.4 1.4M18.4 18.4L17 17M7 7L5.6 5.6"/></svg>
            <svg class="ico-moon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.5A8.3 8.3 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z"/></svg>
          </button>
          <button class="nav-burger" id="burger" type="button" aria-label="Menu" aria-expanded="false"><span></span><span></span></button>
        </div>
      </div>`;

    /* Caixas de continuação: quem terminou de ler tem para onde ir.
       Ficam no fim, não no topo — não empurram o conteúdo.
       Numa página de projeto, o que interessa é o projeto seguinte,
       não a aba Ensino. */
    let navTitle, navItems, navTail = "";
    if (PAGE === "project") {
      navTitle = t("pagenav.projects");
      navItems = ordered().filter((p) => p.id !== PROJECT_ID).map((p) => ({
        href: "projetos/" + p.id + "/",
        name: L(p.title),
        desc: L(p.periodLabel) + " · " + t("projects.status." + p.status),
      }));
      navTail = `<p class="linkrow"><a href="${url("projetos.html")}">${t("pagenav.allProjects")} →</a></p>`;
    } else {
      navTitle = t("pagenav.title");
      navItems = NAV.filter((n) => n.key !== PAGE).map((n) => ({
        href: n.href, name: t(n.i18n), desc: t(n.i18n + ".d"),
      }));
    }

    $("#foot").className = "foot";
    $("#foot").innerHTML = `
      <div class="wrap">
        <nav class="pagenav" aria-label="${navTitle}">
          <h2 class="pagenav__t">${navTitle}</h2>
          <div class="pagenav__grid">
            ${navItems.map((n) => `
              <a class="pagenav__item" href="${url(n.href)}">
                <span class="pagenav__n">${n.name}</span>
                <span class="pagenav__d">${n.desc}</span>
              </a>`).join("")}
          </div>
          ${navTail}
        </nav>
      </div>
      <div class="wrap foot__in">
        <p>© ${new Date().getFullYear()} Valmir Macario Filho · ${t("footer.built")}</p>
        <p class="linkrow linkrow--foot">${profileLinks()}</p>
      </div>`;

    $("#langToggle").addEventListener("click", () => {
      lang = lang === "pt" ? "en" : "pt";
      localStorage.setItem(STORE_LANG, lang);
      render();
    });
    $("#themeToggle").addEventListener("click", () => {
      const cur = document.documentElement.getAttribute("data-theme")
        || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      const next = cur === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem(STORE_THEME, next);
    });
    const burger = $("#burger"), nav = $(".topbar__nav");
    burger.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", String(open));
    });
  }

  /* ---------- Páginas ---------- */
  const degreeItem = (e) => `
    <li><span class="deg__y">${e.period}</span>
      <p class="deg__d">${L(e.degree)}</p>
      <p class="deg__i">${L(e.inst)}</p>
      <p class="deg__m">${t("education.work." + (e.work || "thesis"))}: ${L(e.thesis)}.
         ${t("education.advisor")}: ${e.advisor}${e.funding ? ` · ${L(e.funding)}` : ""}.</p></li>`;

  const projRow = (p) => `
    <article class="row">
      <a class="fig" href="${url("projetos/" + p.id + "/")}" aria-label="${L(p.title)}">${projFigure(p)}</a>
      <div>
        <h3 class="row__t"><a href="${url("projetos/" + p.id + "/")}">${L(p.title)}</a></h3>
        <p class="row__meta">${L(p.periodLabel)}<span class="dot">·</span>${L(p.role)}</p>
        <p class="row__desc">${L(p.blurb)}</p>
        <p class="row__more"><a href="${url("projetos/" + p.id + "/")}">${t("projects.open")} →</a></p>
      </div>
    </article>`;

  /* A home é vitrine: nome, uma linha, e as sete figuras. O texto vive em Perfil. */
  function pageHome() {
    const tiles = ordered().map((p) => `
      <a class="tile" href="${url("projetos/" + p.id + "/")}">
        <span class="tile__fig">${projFigure(p)}</span>
        <span class="tile__body">
          <span class="tile__t">${L(p.title)}</span>
          <span class="tile__m">${L(p.periodLabel)}</span>
        </span>
      </a>`).join("");

    return `
      <section class="stage">
        <div class="wrap stage__in">
          <div class="stage__text">
            <p class="stage__sig">${t("home.signature")}</p>
            <h1 class="stage__thesis">${t("home.thesis")}</h1>
            <p class="stage__support">${t("home.support")}</p>
            <p class="stage__acts">
              <a class="stage__cta" href="${url("projetos.html")}">${t("home.toProjects")} →</a>
              <a class="stage__alt" href="${url("perfil.html")}">${t("home.toProfile")}</a>
            </p>
          </div>
          <figure class="portrait portrait--wide is-empty">
            <img src="${url("assets/img/valmir.jpg")}" alt="Prof. Valmir Macario"
                 onload="this.closest('.portrait').classList.remove('is-empty')"
                 onerror="this.closest('.portrait').classList.add('is-empty')">
            <span class="portrait__initials" aria-hidden="true">VM</span>
          </figure>
        </div>
      </section>

      <section class="block block--tight">
        <div class="wrap">
          <h2 class="sr-only">${t("projects.title")}</h2>
          <div class="tiles">${tiles}</div>
          <p class="linkrow"><a href="${url("publicacoes.html")}">${t("home.toPubs")} →</a></p>
        </div>
      </section>`;
  }

  /* Perfil: a bio longa, a formação e a trajetória. */
  function pageProfile() {
    return `
      <section class="ident">
        <div class="wrap ident__in">
          <div>
            <h1 class="ident__name">Valmir Macario Filho</h1>
            <p class="ident__role">${L(SITE.person.role)}</p>
            <div class="ident__bio">${SITE.about[lang].map((x) => `<p>${x}</p>`).join("")}</div>
            <p class="linkrow">${profileLinks()}</p>
            <p class="ident__note">${L(SITE.metrics.line)}</p>
          </div>
          <div class="ident__photo">
            <figure class="portrait is-empty">
              <img src="${url("assets/img/valmir.jpg")}" alt="Valmir Macario Filho"
                   onload="this.closest('.portrait').classList.remove('is-empty')"
                 onerror="this.closest('.portrait').classList.add('is-empty')">
              <span class="portrait__initials" aria-hidden="true">VM</span>
            </figure>
          </div>
        </div>
      </section>

      <section class="block block--soft">
        <div class="wrap">
          <h2 class="h2">${t("education.title")}</h2>
          <div class="cols">
            <ul class="degrees">${SITE.education.map(degreeItem).join("")}</ul>
            <div>
              <h2 class="h3 h3--flush">${t("positions.title")}</h2>
              <ul class="degrees degrees--terse">${SITE.positions.map((p) => `
                <li>${p.period ? `<span class="deg__y">${L(p.period)}</span>` : ""}
                  <p class="deg__d">${L(p.title)}</p>
                  <p class="deg__i">${L(p.org)}</p></li>`).join("")}</ul>
            </div>
          </div>
        </div>
      </section>`;
  }

  function pageResearch() {
    const areas = Object.entries(SITE.topicLabels).map(([k, label]) => {
      const n = SITE.publications.filter((p) => p.topic === k).length;
      return `<li><a href="${url("publicacoes.html#" + k)}">${L(label)} <span class="chipnum">${n}</span></a></li>`;
    }).join("");
    return `
      <section class="block">
        <div class="wrap">
          <h1 class="h2">${t("research.title")}</h1>
          <div class="prose prose--lead">${SITE.research[lang].map((x) => `<p>${x}</p>`).join("")}</div>
          <h2 class="h3">${t("research.areas")}</h2>
          <ul class="topics">${areas}</ul>
        </div>
      </section>`;
  }

  const pageProjects = () => `
    <section class="block">
      <div class="wrap">
        <h1 class="h2">${t("projects.title")}</h1>
        <p class="head__lead">${t("projects.lead")}</p>
        <div class="rows">${ordered().map((p) => projRow(p)).join("")}</div>
      </div>
    </section>`;

  function pubRow(p) {
    const award = p.award ? ` <span class="pub__award">(${t("pubs.award")})</span>` : "";
    const scholar = "https://scholar.google.com/scholar?q=" + encodeURIComponent(p.t);
    const out = [];
    if (p.doi)  out.push(`<a href="https://doi.org/${p.doi}" target="_blank" rel="noopener">doi</a>`);
    if (p.data) out.push(`<a href="${p.data}" target="_blank" rel="noopener">${t("pubs.dataset")}</a>`);
    out.push(`<a href="${scholar}" target="_blank" rel="noopener">${t("pubs.scholar")}</a>`);
    if (p.proj) out.push(`<a href="${url("projetos/" + p.proj + "/")}">${t("pubs.project")}</a>`);
    return `
      <li class="pub ${p.hl ? "pub--hl" : ""}">
        <span class="fig">${pubFigure(p)}</span>
        <div>
          <h3 class="pub__t">${p.t}</h3>
          <p class="pub__a">${authors(p.a)}</p>
          <p class="pub__v"><em>${p.v}</em>, ${p.y}${award}</p>
          ${p.s ? `<p class="pub__s">${L(p.s)}</p>` : ""}
          <p class="pub__links">${out.join('<span class="sep">/</span>')}</p>
        </div>
      </li>`;
  }

  function pageProject() {
    const p = SITE.projects.find((x) => x.id === PROJECT_ID);
    if (!p) return `<section class="block"><div class="wrap"><p>${t("projects.missing")}</p></div></section>`;

    const related = SITE.publications.filter((x) => x.proj === p.id);
    const contribs = p.contributions ? `
      <h2 class="h3 h3--flush">${t("projects.contributions")}</h2>
      <ul class="bullets">${p.contributions[lang].map((c) => `<li>${c}</li>`).join("")}</ul>` : "";
    const outputs = p.outputs ? `
      <h2 class="h3">${t("projects.outcomes")}</h2>
      <div class="prose"><p>${L(p.outputs)}</p>${p.collab ? `<p>${L(p.collab)}</p>` : ""}</div>` : "";

    return `
      <section class="block">
        <div class="wrap">
          <p class="crumb"><a href="${url("projetos.html")}">← ${t("projects.title")}</a></p>
          <div class="projhead__in">
            <div>
              <h1 class="projhead__t">${L(p.title)}</h1>
              <p class="projhead__m">${L(p.periodLabel)}<span class="dot">·</span><span class="st--${p.status}">${t("projects.status." + p.status)}</span><span class="dot">·</span>${L(p.role)}</p>
              <div class="prose prose--lead">${L(p.desc)}</div>
              <div class="tags">${(p.tags || []).map((x) => `<span class="tag">${x}</span>`).join("")}</div>
            </div>
            <figure class="projhead__fig fig">${projFigure(p)}</figure>
          </div>
        </div>
      </section>
      ${contribs || outputs ? `<section class="block block--soft"><div class="wrap">${contribs}${outputs}</div></section>` : ""}
      ${related.length ? `<section class="block"><div class="wrap">
        <h2 class="h2">${t("projects.related")} <span class="h3__n">${related.length}</span></h2>
        <ol class="pubs">${related.map(pubRow).join("")}</ol></div></section>` : ""}`;
  }

  let pubFilter = "all";

  const pagePublications = () => `
    <section class="block">
      <div class="wrap">
        <h1 class="h2">${t("pubs.title")}</h1>
        <p class="head__lead">${t("pubs.lead")}</p>
        <div class="tabs" id="pubFilters" role="group" aria-label="${t("pubs.filterLabel")}"></div>
        <div id="pubs-list"></div>
      </div>
    </section>`;

  function renderPubs() {
    const counts = { all: SITE.publications.length };
    SITE.publications.forEach((p) => { counts[p.topic] = (counts[p.topic] || 0) + 1; });
    const tabs = [["all", t("pubs.filter.all")]].concat(
      Object.keys(SITE.topicLabels).map((k) => [k, L(SITE.topicLabels[k])]));

    $("#pubFilters").innerHTML = tabs.map(([k, label]) =>
      `<button class="tab ${k === pubFilter ? "is-on" : ""}" data-kf="${k}" aria-pressed="${k === pubFilter}">${label}<span class="tab__n">${counts[k] || 0}</span></button>`).join("");

    const list = SITE.publications.filter((p) => pubFilter === "all" || p.topic === pubFilter);
    const byYear = [];
    for (const p of list) {
      if (!byYear.length || byYear[byYear.length - 1].y !== p.y) byYear.push({ y: p.y, items: [] });
      byYear[byYear.length - 1].items.push(p);
    }
    $("#pubs-list").innerHTML = byYear.map((g) => `
      <section aria-labelledby="y${g.y}">
        <h2 class="pubyear" id="y${g.y}">${g.y}</h2>
        <ol class="pubs">${g.items.map(pubRow).join("")}</ol>
      </section>`).join("");

    $$("#pubFilters .tab").forEach((b) => b.addEventListener("click", () => {
      pubFilter = b.dataset.kf; renderPubs(); reveal();
    }));
  }

  function pageStudents() {
    const s = SITE.supervision;
    const li = (x, when) => `
      <li><span class="people__n">${x.name}</span><span class="people__m">${L(x.level)}${when ? " · " + when : ""}</span>
        ${x.topic ? `<p class="people__t">${L(x.topic)}</p>` : ""}
        ${x.note ? `<p class="people__x">${L(x.note)}</p>` : ""}</li>`;
    return `
      <section class="block">
        <div class="wrap">
          <h1 class="h2">${t("students.title")}</h1>
          <p class="head__lead">${L(s.intro)}</p>
          ${s.current.length ? `
            <h2 class="h3 h3--flush">${t("students.current")}</h2>
            <ul class="people">${s.current.map((x) => li(x, t("students.since") + " " + x.since)).join("")}</ul>` : ""}
          <h2 class="h3 ${s.current.length ? "" : "h3--flush"}">${t("students.alumni")}</h2>
          <ul class="people">${s.alumni.map((x) => li(x, x.year)).join("")}</ul>
          <p class="note">${L(s.note)}</p>
        </div>
      </section>`;
  }

  const pageTeaching = () => `
    <section class="block">
      <div class="wrap">
        <h1 class="h2">${t("teaching.title")}</h1>
        <p class="head__lead">${L(SITE.teaching.intro)}</p>
        <ul class="courses">${SITE.teaching.courses.map((c) => `
          <li><span>${L(c.name)}</span><span class="course__l">${L(c.level)}</span>
            ${c.repo ? `<a class="course__r" href="${c.repo}" target="_blank" rel="noopener">${t("teaching.material")}</a>` : ""}</li>`).join("")}</ul>
        <h2 class="h3 h3--sp">${t("service.title")}</h2>
        <ul class="bullets">${SITE.service[lang].map((x) => `<li>${x}</li>`).join("")}</ul>
      </div>
    </section>`;

  const pageContact = () => `
    <section class="block">
      <div class="wrap">
        <h1 class="h2">${t("contact.title")}</h1>
        <div class="prose prose--lead">${t("contact.body")}</div>
        <dl class="contact">
          <dt>${t("contact.emailLabel")}</dt>
          <dd><a class="contact__mail" href="mailto:${SITE.person.email}">${SITE.person.email}</a></dd>
          <dt>${t("contact.addressLabel")}</dt>
          <dd>${t("contact.address")}</dd>
          <dt>${t("contact.profilesLabel")}</dt>
          <dd class="linkrow linkrow--flush">${profileLinks()}</dd>
        </dl>
      </div>
    </section>`;

  const PAGES = {
    home: pageHome, profile: pageProfile, research: pageResearch, projects: pageProjects, project: pageProject,
    publications: pagePublications, students: pageStudents, teaching: pageTeaching, contact: pageContact,
  };

  /* ---------- Render ---------- */
  function render() {
    renderChrome();
    $("#view").innerHTML = (PAGES[PAGE] || pageHome)();
    if (PAGE === "publications") {
      const hash = location.hash.slice(1);
      if (hash && SITE.topicLabels[hash]) pubFilter = hash;
      renderPubs();
    }
    reveal();
  }

  let io;
  function reveal() {
    if (!("IntersectionObserver" in window)) return;
    if (!io) {
      io = new IntersectionObserver((entries) => {
        entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
      }, { rootMargin: "0px 0px -4% 0px", threshold: 0.02 });
    }
    /* Só anima o que está abaixo da primeira dobra: nada acima dela
       chega escondido, e o movimento fica sendo um momento só. */
    const fold = window.innerHeight;
    $$(".row, .pub, .tile").forEach((el) => {
      if (el.classList.contains("rv") || el.classList.contains("in")) return;
      if (el.getBoundingClientRect().top < fold) { el.classList.add("in"); return; }
      el.classList.add("rv"); io.observe(el);
    });
  }

  window.addEventListener("scroll", () => {
    const tb = $("#topbar");
    if (tb) tb.classList.toggle("is-stuck", window.scrollY > 8);
  }, { passive: true });

  render();
})();
