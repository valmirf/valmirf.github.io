# Sistema visual

Registro escolhido pelo dono depois de duas recusas: **a página canônica de
pesquisador sênior — Jon Barron, Chelsea Finn, Alexei Efros — levada ao teto de
acabamento**, jogada limpa, sem ironia e sem invenção contrabandeada. O que
diferencia não é o estilo, é a densidade: figura em toda linha de publicação,
coautor linkado, resumo de uma frase onde há número verificado, lista completa
sem paginação, destaque por fundo amarelo pálido.

Fora do escopo, por decisão: cartão com sombra, gradiente, contador de citação
em destaque, sobrancelha acima de título, numeração de seção.

## Tokens

Tudo vive em `:root`, em [assets/css/style.css](assets/css/style.css). Nenhum
valor novo entra solto: ou existe um token, ou o token é criado.

**Cor.** `--ink` `--ink-2` `--ink-3` `--num` para texto; `--line` `--line-2`
para régua; `--bg` `--bg-soft` para superfície; `--link` `--link-h` para ação;
`--mark` `--mark-line` para a linha destacada. O tema escuro redefine os mesmos
nomes, então nenhum componente sabe em que tema está.

**Tipo.** `--t-1` a `--t-10`, do rótulo em caixa alta ao nome no perfil. Antes
eram 38 tamanhos avulsos, nove deles separados por menos de um pixel — variação
acidental, não hierarquia.

**Espaço.** `--s-1` a `--s-9`.

**Raio.** `--r-1` figura e etiqueta, `--r-2` controle e bloco, `--r-3` pílula.

**Movimento.** `--d-1` para mudança de estado, `--d-2` para a entrada única.
`--ease` é o mesmo em tudo.

## Faces

- **Source Serif 4** no corpo e nos títulos. Algarismo antigo por padrão
  (`oldstyle-num`), que é o que dá o tom de texto impresso.
- **IBM Plex Sans** no metadado: barra, autoria, filtro, rótulo, ano. Vem da
  linhagem de documentação técnica, que é o mundo do trabalho dele — documento,
  laboratório, notação. Substituiu Lato, que era neutra demais para dizer algo.
- Número que alinha em coluna ou muda de valor usa `tabular-nums`; o resto do
  corpo mantém o algarismo antigo.

## Figuras

Geometria desenhada, nunca ilustração: formas que dá para especificar
exatamente. Vivem em `FIGS`, em [assets/js/main.js](assets/js/main.js), usam as
variáveis CSS de cor e por isso mudam junto com o tema. Para trocar por uma
figura real de artigo, basta definir `img: "assets/img/..."` no projeto, em
`data.js`.

A figura da home é a assinatura da página: um recorte de manuscrito sendo lido —
pauta, traço inclinado, caixas de detecção que não são inclinadas. É a diferença
entre o que foi escrito à mão e o que foi medido, que é o eixo do trabalho dele.
Ela ocupa o lugar do retrato; quando `person.photo` for preenchido em `data.js`,
a foto entra no lugar e nenhuma requisição de imagem é feita antes disso.

## Piso de acabamento

- Contraste mínimo verificado: 6,03:1 no claro, 7,04:1 no escuro.
- Alvo de toque de 40px em todo controle, expandido por pseudo-elemento para não
  inchar o desenho.
- Foco visível, atalho para o conteúdo, hierarquia de títulos sem salto de nível.
- Uma entrada animada só (`.rv`), respeitando `prefers-reduced-motion`.
- Superfícies do navegador tematizadas: seleção, cursor, barra de rolagem, anel
  de foco.

## Verificação

`npm test` roda a suíte Playwright em [tests/](tests/), no desktop e no celular:
as 16 páginas montam sem erro de console e sem estouro horizontal, a hierarquia
de títulos não pula nível, navegação, filtro por tema, troca de tema e de idioma
funcionam, o atalho de teclado leva ao conteúdo, e os controles têm o alvo de
toque mínimo. O site em si não tem build — o Playwright é ferramenta de
verificação e não vai para o repositório publicado.
