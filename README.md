# Site pessoal — Valmir Macario Filho

Site acadêmico estático, bilíngue (PT/EN), sem build step. É só HTML, CSS e
JavaScript.

## Estrutura

```
index.html            Início — nome, uma linha e a vitrine dos 8 projetos
perfil.html           Perfil — bio, formação e trajetória
pesquisa.html         Pesquisa
projetos.html         Lista dos projetos
publicacoes.html      As 53 publicações, com filtro por tema
orientandos.html      Orientandos atuais e concluídos
ensino.html           Disciplinas e serviço acadêmico
contato.html          Contato

projetos/<id>/index.html   Uma página por projeto (8 no total)

assets/css/style.css       Todo o visual
assets/js/data.js          ← TODO O CONTEÚDO fica aqui
assets/js/i18n.js          Rótulos fixos da interface
assets/js/main.js          Monta cada página a partir do data.js
PRODUCT.md                 Decisões de produto e restrições (não apagar)
```

**Para atualizar o site, você quase sempre vai mexer só em `assets/js/data.js`.**

Cada arquivo `.html` é uma casca de 25 linhas: declara qual página é
(`<body data-page="...">`) e o `main.js` monta o resto. Todo campo escrito como
`{ pt: "…", en: "…" }` é bilíngue — preencha os dois.

## Tarefas comuns

### Colocar sua foto

Salve uma foto **quadrada** (~800×800 px) em `assets/img/valmir.jpg`.
Enquanto o arquivo não existir, aparecem as iniciais num círculo.

### Adicionar uma publicação

Em `data.js`, no início da lista `publications`:

```js
{ y: 2026,
  t: "Título do artigo",
  a: "A. Autor, V. Macario, B. Autora",   // cada nome vira link automaticamente
  v: "Nome do Periódico, 12(3), 100–120", // ou nome da conferência
  k: "journal",                           // "journal" ou "conference"
  topic: "vision",                        // vision | aied | nlp | ml
  proj: "banhistas",                      // opcional: id do projeto
  doi: "10.1109/XXXX",                    // opcional
  data: "https://doi.org/10.5281/...",    // opcional: dataset
  hl: true,                               // opcional: fundo amarelo
  award: true,                            // opcional: marca prêmio
  s: { pt: "…", en: "…" } },              // opcional: resumo de uma frase
```

O campo `s` só deve existir quando houver **número verificável** — é o que
diferencia a lista de um currículo.

Sem `doi`, a linha de links ainda oferece busca no Google Acadêmico pelo título,
então toda publicação tem para onde levar o leitor.

### Trocar as figuras

Cada projeto tem um **desenho esquemático** próprio em SVG (no `main.js`, objeto
`FIGS`) — é ele que aparece na vitrine da home e na página do projeto. As
publicações herdam a figura do projeto a que pertencem; as 11 que não pertencem
a nenhum usam uma marca genérica (`GENERIC_FIG`).

Para usar uma figura real do artigo:

```js
// no projeto, em data.js — vale para o projeto e todas as publicações dele
img: "assets/img/projects/banhistas.jpg",

// ou numa publicação específica
img: "assets/img/papers/ictai2017.jpg",
```

Proporção 4:3 (ex.: 800×600 px). O slot aceita imagem real sem precisar mudar o
layout.

### Adicionar um projeto

1. Acrescente o objeto em `SITE.projects` no `data.js`, com `id`, `blurb`,
   `title`, `desc`, `periodLabel`, `role`, `status`, `tags`.
2. Crie `projetos/<id>/index.html` copiando qualquer pasta existente e trocando
   `data-project`, `<title>` e a meta description.
3. Se quiser um desenho novo, adicione em `FIGS` e mapeie em `FIG_FOR`, no
   `main.js`.

### Se o navegador insistir na versão antiga

Os arquivos são carregados com `?v=61`. Suba esse número em todos os `.html`
(`?v=62`) e o navegador busca a versão nova. Só é necessário quando você publica
uma alteração e ela não aparece.

## Ver localmente

```bash
python3 -m http.server 4321
```

Depois abra <http://localhost:4321>.

## Publicar no GitHub Pages

O site já está no ar em **https://valmirf.github.io**, servido pelo repositório
[valmirf/valmirf.github.io](https://github.com/valmirf/valmirf.github.io).

Para publicar uma alteração:

```bash
git add -A && git commit -m "o que mudou" && git push
```

O build do GitHub Pages leva cerca de um minuto. O `PRODUCT.md` e as notas
internas ficam fora do repositório, pelo `.gitignore`.

## Decisões de design (para não desfazer sem querer)

Estão registradas em [PRODUCT.md](PRODUCT.md). Em resumo: o site segue o padrão
canônico das páginas de pesquisadores sênior da área — Jon Barron, Chelsea Finn,
Alexei Efros — levado ao teto de acabamento.

- **Coluna única densa, sem cartões.** Separação por espaço em branco e fio de
  1px, nunca por caixa com sombra.
- **Figura em toda linha de publicação.** É o que diferencia uma página de visão
  computacional de uma lista de currículo.
- **Todo coautor é link.** Sinaliza rede real, e é barato.
- **Publicações completas, sem paginação.** O volume é parte da mensagem.
- **Destaque por fundo amarelo pálido**, nunca por selo.
- **Uma cor de link só** (verde-petróleo), com hover laranja.
- **Nada de contador de citação.** A única menção a métrica é uma linha de prosa
  discreta na home, e essa exceção foi decidida explicitamente.
