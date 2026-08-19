/* =============================================================
   data.js — Conteúdo do site / Site content
   Edite este arquivo para atualizar o site. Cada campo com
   { pt: "...", en: "..." } é bilíngue.
   ============================================================= */

const SITE = {
  /* ---------- Identidade ---------- */
  person: {
    name: "Valmir Macario Filho",
    shortName: "Valmir Macario",
    role: {
      pt: "Professor Associado · UFRPE",
      en: "Associate Professor · UFRPE",
    },
    email: "valmir.macario@ufrpe.br",
    links: {
      lattes: "http://lattes.cnpq.br/4346898674852080",
      scholar: "https://scholar.google.com.br/citations?user=-UpehpcAAAAJ",
      researchgate: "https://www.researchgate.net/profile/Valmir-Macario",
      github: "https://github.com/valmirf",
      linkedin: "https://www.linkedin.com/in/valmir-macario-filho-83b4027/",
      vcl: "https://dc.ufrpe.br/node/14",
      aibox: "https://aiboxlab.org",
      nees: "https://www.nees.ufal.br",
    },
  },

  /* ---------- Nota discreta abaixo dos links ---------- */
  metrics: {
    line: {
      pt: 'Mais de 560 citações e índice h 12, segundo o <a href="https://scholar.google.com.br/citations?user=-UpehpcAAAAJ" target="_blank" rel="noopener">Google Acadêmico</a>.',
      en: 'Over 560 citations and an h-index of 12, per <a href="https://scholar.google.com.br/citations?user=-UpehpcAAAAJ" target="_blank" rel="noopener">Google Scholar</a>.',
    },
  },

  /* ---------- Sobre ---------- */
  about: {
    pt: [
      'Sou professor associado do Departamento de Computação da <a href="https://www.ufrpe.br" target="_blank" rel="noopener">UFRPE</a>, onde leciono desde 2013, e um dos líderes do <a href="https://dc.ufrpe.br/node/14" target="_blank" rel="noopener">VCL — Visual Computing Lab</a>. Também sou membro do <a href="https://aiboxlab.org" target="_blank" rel="noopener">AIBox Lab</a>, laboratório de inteligência artificial do mesmo departamento, e membro pesquisador do <a href="https://www.nees.ufal.br" target="_blank" rel="noopener">NEES</a>, na UFAL. Fiz doutorado no <a href="https://www2.cin.ufpe.br" target="_blank" rel="noopener">CIn/UFPE</a>, orientado por Francisco de Assis Tenório de Carvalho, onde desenvolvi algoritmos de agrupamento semissupervisionado com ponderação automática de variáveis.',
      "Hoje trabalho principalmente em visão computacional e em inteligência artificial aplicada à educação e à acessibilidade. Meus projetos costumam partir da mesma situação: um problema com consequência prática — segurança de banhistas, avaliação de matemática no ensino fundamental, comunicação de quem não fala — e pouca margem computacional, porque o equipamento disponível é o celular do professor ou o computador da escola.",
      'Meus trabalhos aparecem em <em>Applied Soft Computing</em>, <em>Expert Systems with Applications</em>, <em>Machine Vision and Applications</em> e no <em>International Journal of Artificial Intelligence in Education</em>, além de IJCNN, BRACIS, SIBGRAPI, ICTAI e AIED. Recebi o prêmio de <strong>Melhor Artigo</strong> da trilha de IA na Educação do SBIE 2023. A linha de IA é financiada pelo <strong>Ministério da Educação</strong> e pela <strong>FINEP</strong>, e foi selecionada pela <strong>Fundação Itaú</strong> entre 26 iniciativas do edital nacional de Inteligência Artificial para Educação, com coautoria na Harvard Graduate School of Education e na University of Pennsylvania.',
    ],
    en: [
      'I am an Associate Professor in the Department of Computing at <a href="https://www.ufrpe.br" target="_blank" rel="noopener">UFRPE</a>, where I have taught since 2013, and one of the leaders of <a href="https://dc.ufrpe.br/node/14" target="_blank" rel="noopener">VCL — Visual Computing Lab</a>. I am also a member of <a href="https://aiboxlab.org" target="_blank" rel="noopener">AIBox Lab</a>, the artificial intelligence laboratory of the same department, and a research member of <a href="https://www.nees.ufal.br" target="_blank" rel="noopener">NEES</a>, at UFAL. I did my PhD at <a href="https://www2.cin.ufpe.br" target="_blank" rel="noopener">CIn/UFPE</a>, advised by Francisco de Assis Tenório de Carvalho, where I developed semi-supervised clustering algorithms with automatic variable weighting.',
      "I work mainly on computer vision and on artificial intelligence for education and accessibility. My projects tend to start from the same situation: a problem with practical consequence — bather safety, elementary mathematics assessment, communication for people who do not speak — and little computational headroom, because the available hardware is the teacher's phone or the school's computer.",
      'My work appears in <em>Applied Soft Computing</em>, <em>Expert Systems with Applications</em>, <em>Machine Vision and Applications</em>, and the <em>International Journal of Artificial Intelligence in Education</em>, as well as IJCNN, BRACIS, SIBGRAPI, ICTAI, and AIED. I received the <strong>Best Paper Award</strong> in the AI in Education track of SBIE 2023. The AI line is funded by the <strong>Brazilian Ministry of Education</strong> and by <strong>FINEP</strong>, and was selected by the <strong>Itaú Foundation</strong> among 26 initiatives in its national Artificial Intelligence for Education call, with co-authorship at the Harvard Graduate School of Education and the University of Pennsylvania.',
    ],
  },

  /* ---------- Texto da seção Pesquisa ---------- */
  research: {
    pt: [
      "Meu ponto de partida foi teórico: algoritmos particionais que incorporam supervisão parcial na própria função objetivo e aprendem, durante a otimização, o peso de cada variável em cada grupo. Essa ideia — deixar o modelo descobrir o que é relevante em vez de fixá-lo a priori — é o fio que liga tudo o que fiz depois.",
      "Em <strong>visão computacional</strong>, isso virou segmentação e detecção em cenários que quebram os métodos padrão: banhistas parcialmente submersos em imagens de praia, cromossomos em metáfase para dosimetria biológica, alimentos em pratos, gestos de mão em tempo real.",
      "Em <strong>IA na Educação</strong>, trabalho com o que a área chama de <strong>IA desplugada</strong>: sistemas tutores que operam sem internet e sem um dispositivo por aluno. A ideia inverte a premissa da tecnologia educacional, que quase sempre pressupõe conexão e um aparelho por criança — condição que a escola pública brasileira raramente tem. O professor passa a ser a interface: fotografa a atividade resolvida no papel, o modelo roda no próprio celular e devolve a correção. O orçamento computacional deixa de ser detalhe de engenharia e vira condição de alcance.",
      "Em <strong>linguagem natural</strong>, modelos para o português aplicados à avaliação de textos escolares. E em <strong>acessibilidade</strong>, comunicação aumentativa e alternativa — pictogramas e modelos compactos para quem não se comunica pela fala, num idioma que até então não tinha corpus público para isso.",
    ],
    en: [
      "My starting point was theoretical: partitional algorithms that embed partial supervision in the objective function itself and learn, during optimization, the weight of each variable within each cluster. That idea — letting the model discover what matters instead of fixing it a priori — is the thread running through everything since.",
      "In <strong>computer vision</strong>, it became segmentation and detection in settings that break standard methods: partially submerged bathers in beach imagery, metaphase chromosomes for biological dosimetry, food on plates, real-time hand gestures.",
      "In <strong>AI for education</strong>, I work on what the field calls <strong>AIED Unplugged</strong>: tutoring systems that run without internet and without one device per student. It inverts the premise of educational technology, which almost always assumes connectivity and a device per child — a condition Brazilian public schools rarely meet. The teacher becomes the interface: they photograph the work solved on paper, the model runs on the phone itself, and the correction comes back. The computational budget stops being an engineering detail and becomes a condition of reach.",
      "In <strong>natural language</strong>, Portuguese models applied to school essay assessment. And in <strong>accessibility</strong>, augmentative and alternative communication — pictograms and compact models for people who do not communicate through speech, in a language that until now had no public corpus for it.",
    ],
  },


  projects: [
    {
      id: "mathaide",
      from: 2022,
      to: null,
      blurb: { pt: "Tutor inteligente de matemática que roda sem internet, em celular barato: o professor fotografa a atividade e o sistema lê a equação manuscrita e classifica o erro.", en: "An intelligent mathematics tutor that runs offline on a low-cost phone: the teacher photographs the work and the system reads the handwritten equation and classifies the error." },
      featured: true,
      periodLabel: { pt: "2022 — atual", en: "2022 — present" },
      status: "active",
      title: { pt: "MathAIde — Tutor Inteligente Desplugado", en: "MathAIde — Unplugged Intelligent Tutor" },
      role: { pt: "Pesquisador principal (UFRPE)", en: "Principal investigator (UFRPE)" },
      desc: {
        pt: "Sistema tutor inteligente para matemática do ensino fundamental projetado para funcionar <strong>sem internet e em celulares de baixo custo</strong>. O professor fotografa a atividade resolvida à mão; o sistema detecta e reconhece as equações manuscritas, classifica o tipo de erro com base em teoria pedagógica e devolve recomendações. Enfrenta diretamente o problema da exclusão digital em escolas públicas brasileiras.",
        en: "An intelligent tutoring system for elementary mathematics designed to work <strong>without internet on low-cost phones</strong>. Teachers photograph handwritten work; the system detects and recognizes the handwritten equations, classifies the error type on pedagogical grounds, and returns recommendations. It tackles the digital divide in Brazilian public schools head-on.",
      },
      contributions: {
        pt: [
          "Otimização multiobjetivo de redes convolucionais para reconhecimento de expressões matemáticas manuscritas em dispositivos com restrição de memória",
          "Detecção de equações manuscritas em imagens capturadas em condições não controladas",
          "Avaliação comparativa de LLMs leves quanto a custo computacional e qualidade de saída",
          "Estudos qualitativos com professores da rede pública sobre adoção e percepção",
        ],
        en: [
          "Multi-objective optimization of CNNs for handwritten mathematical expression recognition on memory-constrained devices",
          "Handwritten equation detection in images captured under uncontrolled conditions",
          "Comparative evaluation of lightweight LLMs on computational cost versus output quality",
          "Qualitative studies with public-school teachers on adoption and perception",
        ],
      },
      tags: ["Deep Learning", "OCR", "LLM", "Edge AI", "AIED"],
      outputs: {
        pt: "Publicado em IJAIED, IJHCI, <em>Education and Information Technologies</em>, AIED, SIBGRAPI e SBIE. O artigo <em>Teacher-Centered Intelligent Tutoring Systems</em> recebeu o <strong>Prêmio de Melhor Artigo</strong> da trilha de IA na Educação do SBIE 2023. Financiamento do <strong>Ministério da Educação</strong>; o projeto de geração de questões com LLMs leves foi selecionado pela <strong>Fundação Itaú</strong> entre 26 iniciativas do edital nacional de IA para Educação, em 2024.",
        en: "Published in IJAIED, IJHCI, <em>Education and Information Technologies</em>, AIED, SIBGRAPI, and SBIE. The paper <em>Teacher-Centered Intelligent Tutoring Systems</em> received the <strong>Best Paper Award</strong> in the AI in Education track of SBIE 2023. Funded by the <strong>Brazilian Ministry of Education</strong>; the lightweight-LLM question generation project was selected by the <strong>Itaú Foundation</strong> among 26 initiatives in its national AI for Education call, in 2024.",
      },
      collab: {
        pt: "O sistema foi desenhado <em>com</em> professores, não para eles: 14 professoras participaram das sessões de concepção, e a avaliação em sala real acompanhou 3 professores e 49 alunos ao longo de 12 aulas. O trabalho integra o consórcio brasileiro de IA Desplugada, que reúne UFRPE, UFAL/NEES, USP, UFPA e UEM, com coautoria na Harvard Graduate School of Education e na University of Pennsylvania.",
        en: "The system was designed <em>with</em> teachers, not for them: 14 teachers took part in the co-design sessions, and the real-classroom evaluation followed 3 teachers and 49 students across 12 lessons. The work is part of the Brazilian AIED Unplugged consortium — UFRPE, UFAL/NEES, USP, UFPA, and UEM — with co-authorship at the Harvard Graduate School of Education and the University of Pennsylvania.",
      },
    },
    {
      id: "banhistas",
      from: 2015,
      to: 2018,
      blurb: { pt: "Detecção e rastreamento de banhistas nas praias do Recife, onde as pessoas aparecem pequenas, parcialmente submersas e sob luz que muda o tempo todo.", en: "Detecting and tracking bathers on Recife's beaches, where people appear small, partly submerged, and under constantly shifting light." },
      featured: true,
      periodLabel: { pt: "2015 — 2018", en: "2015 — 2018" },
      status: "done",
      title: { pt: "Monitoramento Automático de Banhistas", en: "Automatic Bather Monitoring" },
      role: { pt: "Coordenador · Financiamento FACEPE", en: "Coordinator · Funded by FACEPE" },
      desc: {
        pt: "Protótipo de sistema de visão computacional para detectar e rastrear banhistas nas praias da região metropolitana do Recife — uma das áreas com maior incidência de acidentes com tubarões do mundo. O desafio técnico é considerável: pessoas parcialmente submersas, escala reduzida, ondas, reflexo e variação extrema de iluminação.",
        en: "A computer vision prototype to detect and track bathers on the beaches of metropolitan Recife — one of the world's highest-incidence shark accident areas. The technical challenge is substantial: partially submerged people, small scale, waves, glare, and extreme lighting variation.",
      },
      contributions: {
        pt: [
          "Detecção de pessoas em imagens de praia com aprendizado profundo",
          "Segmentação semântica para separar banhistas de mar, areia e céu",
          "Agrupamento com seleção automática do número de grupos para segmentação de multidões",
          "Avaliação de algoritmos de rastreamento para pessoas no mar",
        ],
        en: [
          "Deep-learning person detection in beach imagery",
          "Semantic segmentation separating bathers from sea, sand, and sky",
          "Clustering with automatic selection of cluster count for crowd segmentation",
          "Evaluation of tracking algorithms for people in the water",
        ],
      },
      tags: ["Visão Computacional", "Deep Learning", "Segmentação", "Tracking"],
      outputs: {
        pt: "Publicado em IEEE ICTAI 2017 (90,31% de acurácia na detecção), BRACIS 2018 e ENIAC 2021 (F-score de 90,89% com LinkNet). Coordenei o projeto com financiamento da <strong>FACEPE</strong>, no edital de prevenção e mitigação de incidentes com tubarões conduzido com a Secretaria de Defesa Social via CEMIT — a proposta foi a única aprovada entre as seis submetidas. Gerou 4 TCCs, 3 iniciações científicas e 2 dissertações de mestrado.",
        en: "Published at IEEE ICTAI 2017 (90.31% detection accuracy), BRACIS 2018, and ENIAC 2021 (90.89% F-score with LinkNet). I coordinated the project under <strong>FACEPE</strong> funding, in the state call on shark incident prevention run with the Secretariat of Social Defence through CEMIT — the only proposal approved of the six submitted. It produced 4 undergraduate theses, 3 research fellowships, and 2 master's dissertations.",
      },
    },
    {
      id: "myfood",
      from: 2017,
      to: 2020,
      blurb: { pt: "Segmentação e classificação de alimentos em fotos de prato, com um conjunto de dados de refeições brasileiras publicado abertamente.", en: "Food segmentation and classification in plate photographs, with an openly published dataset of Brazilian meals." },
      periodLabel: { pt: "2017 — 2020", en: "2017 — 2020" },
      status: "done",
      title: { pt: "MyFood — Reconhecimento de Alimentos", en: "MyFood — Food Recognition" },
      role: { pt: "Orientador", en: "Supervisor" },
      desc: {
        pt: "Sistema de segmentação e classificação de alimentos em imagens de pratos, voltado ao monitoramento nutricional automático. O trabalho inclui a construção de um <em>dataset</em> próprio de refeições brasileiras — um recurso escasso na literatura, dominada por culinária asiática e norte-americana.",
        en: "A food segmentation and classification system for plate images, aimed at automatic nutritional monitoring. The work includes building a dedicated dataset of Brazilian meals — a scarce resource in a literature dominated by Asian and North American cuisine.",
      },
      tags: ["Segmentação", "Saúde", "Dataset"],
      outputs: {
        pt: "SIBGRAPI 2020 — um dos meus trabalhos mais citados. O conjunto de dados está público no <strong>Zenodo</strong> (1.250 imagens, 9 classes, licença CC-BY, DOI 10.5281/zenodo.4041488), já passou de 490 downloads e foi catalogado em revisão sistemática internacional publicada na <em>Healthcare</em>.",
        en: "SIBGRAPI 2020 — one of my most-cited works. The dataset is public on <strong>Zenodo</strong> (1,250 images, 9 classes, CC-BY, DOI 10.5281/zenodo.4041488), has passed 490 downloads, and is catalogued in an international systematic review published in <em>Healthcare</em>.",
      },
    },
    {
      id: "cromossomos",
      from: 2017,
      to: 2020,
      blurb: { pt: "Segmentação automática de cromossomos em metáfase para dosimetria biológica, atacando uma contagem manual que leva de 6 a 8 horas por amostra.", en: "Automatic metaphase chromosome segmentation for biological dosimetry, attacking a manual count that takes 6 to 8 hours per sample." },
      periodLabel: { pt: "2017 — 2020", en: "2017 — 2020" },
      status: "done",
      title: { pt: "Análise de Cromossomos para Dosimetria Biológica", en: "Chromosome Analysis for Biological Dosimetry" },
      role: { pt: "Pesquisador · parceria com o CRCN-NE", en: "Researcher · with CRCN-NE" },
      desc: {
        pt: "Dosimetria biológica estima a dose de radiação absorvida por uma pessoa contando aberrações em cromossomos em metáfase — um processo manual, lento e dependente de especialistas raros. Desenvolvemos abordagens fuzzy-adaptativas e de aprendizado profundo para segmentar e classificar cromossomos automaticamente.",
        en: "Biological dosimetry estimates absorbed radiation dose by counting aberrations in metaphase chromosomes — a manual, slow process dependent on scarce specialists. We developed fuzzy-adaptive and deep-learning approaches to segment and classify chromosomes automatically.",
      },
      tags: ["Imagem Médica", "Fuzzy", "Deep Learning"],
      outputs: {
        pt: "<em>Machine Vision and Applications</em> (2020), BRACIS 2018, ENIAC 2018. As imagens vêm do banco real do <strong>CRCN-NE/CNEN</strong>, em coautoria com a equipe do Serviço de Dosimetria: 74 metáfases geraram 2.174 regiões, classificadas com sensibilidade de 0,98 e especificidade de 0,99. O gargalo é concreto — o padrão internacional exige a leitura de centenas de metáfases por amostra, o que leva de 6 a 8 horas de contagem manual.",
        en: "<em>Machine Vision and Applications</em> (2020), BRACIS 2018, ENIAC 2018. The images come from the real archive of <strong>CRCN-NE/CNEN</strong>, co-authored with its Dosimetry Service team: 74 metaphases yielded 2,174 regions, classified at 0.98 sensitivity and 0.99 specificity. The bottleneck is concrete — the international standard requires reading hundreds of metaphases per sample, which takes 6 to 8 hours of manual counting.",
      },
    },
    {
      id: "gestos",
      from: 2016,
      to: 2021,
      blurb: { pt: "Reconhecimento de gestos de mão tratado como otimização multiobjetivo: a fronteira de Pareto entre custo computacional e acurácia, não a acurácia sozinha.", en: "Hand gesture recognition treated as multi-objective optimization: the Pareto frontier between computational cost and accuracy, not accuracy alone." },
      featured: true,
      periodLabel: { pt: "2016 — 2021", en: "2016 — 2021" },
      status: "done",
      title: { pt: "Reconhecimento de Gestos em Tempo Real", en: "Real-Time Gesture Recognition" },
      role: { pt: "Orientador", en: "Supervisor" },
      desc: {
        pt: "Reconhecimento de posturas de mão sob restrição dupla: alta acurácia e execução em tempo real. Tratamos o problema como <strong>otimização multiobjetivo</strong> — buscando explicitamente a fronteira de Pareto entre custo computacional e desempenho, em vez de otimizar acurácia isoladamente.",
        en: "Hand posture recognition under a dual constraint: high accuracy and real-time execution. We framed it as <strong>multi-objective optimization</strong> — explicitly seeking the Pareto frontier between computational cost and performance, rather than optimizing accuracy alone.",
      },
      tags: ["Otimização Multiobjetivo", "CNN", "Tempo Real"],
      outputs: {
        pt: "<em>Applied Soft Computing</em> (2018) e <em>Expert Systems with Applications</em> (2018) — meus dois trabalhos mais citados, ambos em periódicos Q1. São citados por grupos em mais de uma dezena de países, entre eles Índia, China, Vietnã, Turquia, Egito, Marrocos e Peru, com desdobramentos em reconhecimento de línguas de sinais, robótica e reabilitação.",
        en: "<em>Applied Soft Computing</em> (2018) and <em>Expert Systems with Applications</em> (2018) — my two most-cited works, both in Q1 journals. They are cited by groups in more than a dozen countries, including India, China, Vietnam, Turkey, Egypt, Morocco, and Peru, with follow-on work in sign language recognition, robotics, and rehabilitation.",
      },
    },
    {
      id: "nlp-pt",
      from: 2021,
      to: null,
      blurb: { pt: "Ler a redação manuscrita e avaliá-la: reconhecimento de caracteres em texto escolar e modelos de linguagem para o português.", en: "Reading the handwritten essay and assessing it: character recognition in school writing and Portuguese language models." },
      periodLabel: { pt: "2021 — atual", en: "2021 — present" },
      status: "active",
      title: { pt: "Avaliação Automática de Redações", en: "Automated Essay Assessment" },
      role: { pt: "Pesquisador", en: "Researcher" },
      desc: {
        pt: "São dois problemas encadeados, e cada um é de uma área. Primeiro é preciso <strong>ler</strong>: a redação chega manuscrita, e reconhecer caractere em texto escolar — letra irregular, papel pautado, foto tirada de celular — é visão computacional. Só depois vem <strong>avaliar</strong>: restauração e verificação de pontuação com transformers explicáveis, pontuação automática com classificadores por votação e medida de coerência temática. A qualidade da segunda etapa depende inteiramente da primeira.",
        en: "These are two chained problems, one from each field. First the text has to be <strong>read</strong>: the essay arrives handwritten, and recognising characters in school writing — irregular handwriting, ruled paper, a photo taken on a phone — is computer vision. Only then comes <strong>assessment</strong>: explainable transformer-based punctuation restoration and verification, automated scoring with voting classifiers, and thematic coherence measurement. The quality of the second stage depends entirely on the first.",
      },
      tags: ["Visão Computacional", "NLP", "OCR", "Transformers", "XAI"],
      outputs: {
        pt: "A linha nasceu de um termo de execução descentralizada do <strong>FNDE/Ministério da Educação</strong> — a <em>Plataforma Adaptativa de Avaliação e Diagnóstico Pedagógico de Textos</em>, executada pelo NEES/UFAL com a UFRPE entre 2021 e 2023, no âmbito do programa Brasil na Escola. A ferramenta ficou aberta a qualquer escola pública pela Plataforma Integrada Brasil na Escola. Publicações em <em>Expert Systems with Applications</em> (2024), PROPOR 2024, ENIAC 2023 e SBIE 2023.",
        en: "The line began with a decentralised execution agreement from the <strong>FNDE / Brazilian Ministry of Education</strong> — the <em>Adaptive Platform for Assessment and Pedagogical Diagnosis of Texts</em>, run by NEES/UFAL with UFRPE between 2021 and 2023, under the Brasil na Escola programme. The tool was open to any public school through the Plataforma Integrada Brasil na Escola. Published in <em>Expert Systems with Applications</em> (2024), PROPOR 2024, ENIAC 2023, and SBIE 2023.",
      },
    },
    {
      id: "aac",
      from: 2025,
      to: null,
      featured: true,
      blurb: {
        pt: "Modelos de linguagem e pictogramas para comunicação aumentativa e alternativa em português — a língua para a qual não existia corpus público.",
        en: "Language models and pictograms for augmentative and alternative communication in Portuguese — the language that had no public corpus.",
      },
      periodLabel: { pt: "2025 — atual", en: "2025 — present" },
      status: "active",
      title: {
        pt: "Janda.IA — Comunicação Aumentativa e Alternativa",
        en: "Janda.IA — Augmentative and Alternative Communication",
      },
      role: { pt: "Projeto FINEP · UFRPE e Livox", en: "FINEP project · UFRPE and Livox" },
      desc: {
        pt: "Comunicação aumentativa e alternativa é o conjunto de recursos que permite alguém se expressar quando a fala não está disponível — pranchas de pictogramas, seleção assistida, construção de sentenças. O levantamento que abriu o projeto chegou a um resultado que define o resto do trabalho: <strong>não existe corpus público de CAA em português brasileiro</strong>. Tudo o que havia era em inglês, ou fechado. Sem base, não há modelo — então a primeira frente foi construir a base, a partir do acervo aberto de pictogramas do <a href=\"https://arasaac.org\" target=\"_blank\" rel=\"noopener\">ARASAAC</a>.",
        en: "Augmentative and alternative communication is the set of resources that lets someone express themselves when speech is unavailable — pictogram boards, assisted selection, sentence construction. The survey that opened the project reached a result that defines everything after it: <strong>no public AAC corpus exists in Brazilian Portuguese</strong>. What existed was in English, or closed. No corpus, no model — so the first front was building the corpus, from the open pictogram collection of <a href=\"https://arasaac.org\" target=\"_blank\" rel=\"noopener\">ARASAAC</a>.",
      },
      contributions: {
        pt: [
          "Seleção e justificativa das fontes primárias, diante da ausência de corpus de CAA em português",
          "Curadoria e anotação do corpus, com taxonomia hierárquica de vocabulário nuclear e periférico",
          "Extração de pictogramas e construção de um grafo de conhecimento (PictoInstruct-KG)",
          "Sistema de recomendação de pictogramas e modelos de linguagem compactos com adaptadores LoRA",
        ],
        en: [
          "Selecting and justifying primary sources, given the absence of a Portuguese AAC corpus",
          "Curating and annotating the corpus, with a hierarchical core and fringe vocabulary taxonomy",
          "Pictogram extraction and construction of a knowledge graph (PictoInstruct-KG)",
          "A pictogram recommendation system and compact language models with LoRA adapters",
        ],
      },
      outputs: {
        pt: "Projeto de subvenção econômica da <strong>FINEP</strong>, em parceria entre a UFRPE e a <a href=\"https://livox.com.br\" target=\"_blank\" rel=\"noopener\">Livox</a>.",
        en: "An economic subvention project funded by <strong>FINEP</strong>, in partnership between UFRPE and <a href=\"https://livox.com.br\" target=\"_blank\" rel=\"noopener\">Livox</a>.",
      },
      tags: ["Acessibilidade", "LLM", "Grafo de Conhecimento", "Pictogramas"],
    },
    {
      id: "clustering",
      dormant: true,
      from: 2009,
      to: 2015,
      blurb: { pt: "A base teórica de tudo: algoritmos de agrupamento que incorporam supervisão parcial na função objetivo e aprendem o peso de cada variável.", en: "The theoretical base of everything else: clustering algorithms that embed partial supervision in the objective function and learn each variable's weight." },
      periodLabel: { pt: "2009 — 2015", en: "2009 — 2015" },
      status: "done",
      title: { pt: "Agrupamento Semissupervisionado Adaptativo", en: "Adaptive Semi-Supervised Clustering" },
      role: { pt: "Doutorado e mestrado · UFPE", en: "Doctorate and master's · UFPE" },
      desc: {
        pt: "Linha fundacional da minha pesquisa. Desenvolvi uma família de algoritmos particionais que incorporam supervisão parcial diretamente na função objetivo e aprendem <strong>pesos adaptativos por variável e por grupo</strong> durante a otimização — incluindo o NebFuzz, uma variante <em>p</em>-exponencial ajustável e versões ISODATA adaptativas.",
        en: "The foundational line of my research. I developed a family of partitional algorithms that embed partial supervision directly in the objective function and learn <strong>adaptive per-variable, per-cluster weights</strong> during optimization — including NebFuzz, an adjustable <em>p</em>-exponential variant, and adaptive ISODATA versions.",
      },
      tags: ["Fuzzy Clustering", "Otimização", "Bioinformática"],
      outputs: {
        pt: "IEEE FUZZ-IEEE, IEEE SMC, ESANN, SBRN. Aplicado à predição de funções gênicas e à segmentação de imagens coloridas.",
        en: "IEEE FUZZ-IEEE, IEEE SMC, ESANN, SBRN. Applied to gene function prediction and color image segmentation.",
      },
    },
  ],

  /* ---------- Formação ---------- */
  education: [
    {
      period: "2010 — 2015",
      work: "thesis",
      degree: { pt: "Doutorado em Ciência da Computação", en: "Ph.D. in Computer Science" },
      inst: { pt: "Universidade Federal de Pernambuco (CIn/UFPE)", en: "Federal University of Pernambuco (CIn/UFPE)" },
      thesis: {
        pt: "Algoritmos Particionais Semissupervisionados com Ponderação Automática de Variáveis",
        en: "Semi-Supervised Partitional Algorithms with Automatic Variable Weighting",
      },
      advisor: "Francisco de Assis Tenório de Carvalho",
      funding: { pt: "Bolsista FACEPE", en: "FACEPE fellowship" },
    },
    {
      period: "2007 — 2009",
      work: "dissertation",
      degree: { pt: "Mestrado em Ciência da Computação", en: "M.Sc. in Computer Science" },
      inst: { pt: "Universidade Federal de Pernambuco (CIn/UFPE)", en: "Federal University of Pernambuco (CIn/UFPE)" },
      thesis: {
        pt: "Um Novo Algoritmo de Agrupamento Semissupervisionado Baseado no Fuzzy C-Means",
        en: "A New Semi-Supervised Clustering Algorithm Based on Fuzzy C-Means",
      },
      advisor: "Francisco de Assis Tenório de Carvalho",
      funding: { pt: "Bolsista CNPq", en: "CNPq fellowship" },
    },
    {
      period: "2000 — 2006",
      work: "undergrad",
      degree: { pt: "Graduação em Engenharia da Computação", en: "B.Sc. in Computer Engineering" },
      inst: { pt: "Universidade de Pernambuco (POLI/UPE)", en: "University of Pernambuco (POLI/UPE)" },
      thesis: {
        pt: "e-Recommender: Sistema Inteligente de Recomendação para Comércio Eletrônico",
        en: "e-Recommender: An Intelligent Recommendation System for E-Commerce",
      },
      advisor: "Fernando Buarque de Lima Neto",
    },
  ],

  /* ---------- Trajetória profissional ---------- */
  positions: [
    {
      period: { pt: "2025 — atual", en: "2025 — present" },
      title: { pt: "Professor Associado", en: "Associate Professor" },
      org: { pt: "UFRPE — Departamento de Computação", en: "UFRPE — Department of Computing" },
    },
    {
      period: { pt: "2013 — 2025", en: "2013 — 2025" },
      title: { pt: "Professor Adjunto", en: "Assistant Professor" },
      org: { pt: "UFRPE — Departamento de Computação", en: "UFRPE — Department of Computing" },
    },
    {
      period: { pt: "2020 — 2024", en: "2020 — 2024" },
      title: { pt: "Professor externo — Mineração Textual", en: "External lecturer — Text Mining" },
      org: { pt: "UPE — Especialização em Ciência de Dados e Analytics", en: "UPE — Specialization in Data Science and Analytics" },
    },
    {
      /* O VCL foi criado em 2022; ele está no laboratório desde a fundação. */
      period: { pt: "2022 — atual", en: "2022 — present" },
      title: { pt: '<a href="https://dc.ufrpe.br/node/14" target="_blank" rel="noopener">VCL — Visual Computing Lab</a>', en: '<a href="https://dc.ufrpe.br/node/14" target="_blank" rel="noopener">VCL — Visual Computing Lab</a>' },
      org: { pt: "Um dos líderes · Departamento de Computação, UFRPE", en: "One of the leaders · Department of Computing, UFRPE" },
    },
    {
      period: { pt: "2021 — atual", en: "2021 — present" },
      title: { pt: '<a href="https://aiboxlab.org" target="_blank" rel="noopener">AIBox Lab</a>', en: '<a href="https://aiboxlab.org" target="_blank" rel="noopener">AIBox Lab</a>' },
      org: { pt: "Membro · Departamento de Computação, UFRPE", en: "Member · Department of Computing, UFRPE" },
    },
    {
      period: { pt: "2021 — atual", en: "2021 — present" },
      title: { pt: '<a href="https://www.nees.ufal.br" target="_blank" rel="noopener">NEES</a>', en: '<a href="https://www.nees.ufal.br" target="_blank" rel="noopener">NEES</a>' },
      org: { pt: "Membro · UFAL", en: "Member · UFAL" },
    },
  ],

  /* ---------- Ensino ---------- */
  teaching: {
    intro: {
      pt: "Ministro disciplinas de graduação e pós-graduação na UFRPE. O material de várias delas é aberto: cadernos Jupyter com o código das aulas e dos exercícios, no GitHub, livres para quem quiser usar em outra turma.",
      en: "I teach undergraduate and graduate courses at UFRPE. Material for several of them is open: Jupyter notebooks with the code from the lectures and exercises, on GitHub, free for anyone to reuse in another classroom.",
    },
    courses: [
      { name: { pt: "Inteligência Artificial", en: "Artificial Intelligence" }, level: { pt: "Graduação", en: "Undergraduate" } },
      { name: { pt: "Redes Neurais Artificiais", en: "Artificial Neural Networks" }, level: { pt: "Graduação e Mestrado", en: "Undergraduate & Master's" }, repo: "https://github.com/valmirf/redes_neurais_pos" },
      { name: { pt: "Processamento de Imagens", en: "Image Processing" }, level: { pt: "Graduação", en: "Undergraduate" }, repo: "https://github.com/valmirf/processamento_imagens" },
      { name: { pt: "Mineração Textual", en: "Text Mining" }, level: { pt: "Pós-graduação", en: "Graduate" }, repo: "https://github.com/valmirf/mineracao_textual" },
      { name: { pt: "Teoria da Computação", en: "Theory of Computation" }, level: { pt: "Graduação", en: "Undergraduate" } },
      { name: { pt: "Introdução à Programação", en: "Introduction to Programming" }, level: { pt: "Graduação", en: "Undergraduate" } },
    ],
  },

  /* ---------- Orientações ---------- */
  supervision: {
    intro: {
      pt: "Oriento no Mestrado Acadêmico em Informática Aplicada (PPGIA/UFRPE) e na graduação em Ciência da Computação. Já orientei mais de vinte trabalhos concluídos — vários deles resultaram em publicações em conferências e periódicos internacionais.",
      en: "I supervise in the Academic Master's in Applied Informatics (PPGIA/UFRPE) and in the undergraduate Computer Science program. I have supervised more than twenty completed projects — several of which led to publications at international conferences and journals.",
    },
    current: [
      /* FALTAM DOIS MESTRANDOS EM ANDAMENTO — o Valmir vai informar nome, ano de
         início e tema. Copie o modelo abaixo, preencha e apague este comentário:

      { name: "NOME", since: "ANO", level: { pt: "Mestrado", en: "Master's" },
        topic: { pt: "TEMA EM PORTUGUÊS", en: "TOPIC IN ENGLISH" } },
      */
    ],
    alumni: [
      { name: "Cicero Pereira de Lima Júnior", year: "2026", level: { pt: "Mestrado", en: "Master's" },
        topic: { pt: "Otimização multiobjetivo de algoritmos de reconhecimento de equações matemáticas do ensino fundamental", en: "Multi-objective optimization of elementary-school mathematical equation recognition" } },
      { name: "Pedro Paulo Barros Interaminense", year: "2025", level: { pt: "Mestrado", en: "Master's" },
        topic: { pt: "Reconhecimento de caracteres manuscritos em dissertações e exercícios em escolas do Brasil", en: "Handwritten character recognition in Brazilian school essays and exercises" } },
      { /* PREENCHER: ano de conclusão. */
        name: "Diego Rafael Ferreira de Souza", level: { pt: "Graduação", en: "Undergraduate" },
        topic: { pt: "Fine-tuning de algoritmos de reconhecimento de gestos", en: "Fine-tuning of gesture recognition algorithms" } },
      { name: "Charles Nícollas Cavalcante Freitas", year: "2020", level: { pt: "Mestrado", en: "Master's" },
        topic: { pt: "Sistema automático de reconhecimento de alimentos para auxílio nutricional (MyFood)", en: "Automatic food recognition system for nutritional support (MyFood)" },
        note: { pt: "Publicado no SIBGRAPI 2020.", en: "Published at SIBGRAPI 2020." } },
      { name: "Sérgio Chevtchenko", year: "2018", level: { pt: "Mestrado", en: "Master's" },
        topic: { pt: "Rede convolucional com fusão de características para reconhecimento de gestos em tempo real", en: "CNN with feature fusion for real-time hand posture recognition" },
        note: { pt: "Publicado em <em>Applied Soft Computing</em>; hoje pesquisador em aprendizado de máquina.", en: "Published in <em>Applied Soft Computing</em>; now a machine learning researcher." } },
    ],
    note: {
      pt: "Além dessas, orientei 13 trabalhos de conclusão de curso e 4 projetos de iniciação científica em Ciência da Computação na UFRPE.",
      en: "In addition, I have supervised 13 undergraduate final projects and 4 research fellowships in Computer Science at UFRPE.",
    },
  },

  /* ---------- Serviço acadêmico ---------- */
  service: {
    pt: [
      "Um dos líderes do <strong>VCL — Visual Computing Lab</strong>, laboratório de pesquisa em computação visual do Departamento de Computação da UFRPE, e membro do <strong>AIBox Lab</strong>, laboratório de inteligência artificial do mesmo departamento, e membro pesquisador do <strong>NEES</strong>, na UFAL.",
      "Membro do Conselho Técnico Administrativo do Departamento de Computação da UFRPE.",
      "Participação em mais de 30 bancas de mestrado, doutorado, qualificação e trabalhos de conclusão na UFRPE, UFPE e UPE.",
      "Membro de bancas de concurso público para professor do magistério superior (UFRPE, 2015 e 2019).",
      "Revisor e autor em BRACIS, SIBGRAPI, ENIAC, SBIE, AIED, IJCNN e ICTAI.",
    ],
    en: [
      "One of the leaders of <strong>VCL — Visual Computing Lab</strong>, the visual computing research lab of UFRPE's Department of Computing, and a member of <strong>AIBox Lab</strong>, the artificial intelligence laboratory of the same department, and a research member of <strong>NEES</strong>, at UFAL.",
      "Member of the Technical-Administrative Council of UFRPE's Department of Computing.",
      "Served on more than 30 master's, doctoral, qualifying, and undergraduate thesis committees at UFRPE, UFPE, and UPE.",
      "Member of faculty hiring committees for tenured professorship (UFRPE, 2015 and 2019).",
      "Reviewer and author at BRACIS, SIBGRAPI, ENIAC, SBIE, AIED, IJCNN, and ICTAI.",
    ],
  },

  /* ---------- Rótulos de tópico (filtros de publicação) ---------- */
  topicLabels: {
    vision: { pt: "Visão computacional", en: "Computer vision" },
    aied:   { pt: "IA na Educação", en: "AI in Education" },
    nlp:    { pt: "Linguagem natural", en: "Natural language" },
    ml:     { pt: "Aprendizado de máquina", en: "Machine learning" },
  },

  /* ---------- Publicações ---------- */
  publications: [
    { y: 2026, t: "A Mixed User-Centered Approach to Enable Augmented Intelligence in Intelligent Tutoring Systems: The Case of MathAIde App", doi: "10.1080/10447318.2025.2553778", a: "G. Guerino, L. Rodrigues, L. Bianchini, M. Alves, M. Marinho, T. Veloso, V. Macario, D. Dermeval, T. Vieira, I. I. Bittencourt, S. Isotani", v: "International Journal of Human–Computer Interaction, 42(8), 6558–6580", k: "journal", c: 2, topic: "aied", proj: "mathaide" },
    { y: 2026, t: "Redesigning the Validation of AI-Generated Content in an AIED-Unplugged System: A Participatory Design Study with Teachers", doi: "10.1007/978-3-032-29788-4_24", a: "E. Neto, M. Alves, V. Aguiar, A. Barros, M. Santos, J. Gomes, G. Silva, M. Siqueira, I. I. Bittencourt, S. Isotani, V. Macario, D. Dermeval, L. Rodrigues", v: "International Conference on Artificial Intelligence in Education (AIED)", k: "conference", topic: "aied", proj: "mathaide" },
    { y: 2025, t: "Forecasting AWS Spot Prices: Comparative Analysis of Deep Learning Architectures and Residual Auto-Correlation", doi: "10.1007/s11761-025-00475-6", a: "S. Berdine, V. Macario, R. W. A. de Medeiros", v: "Service Oriented Computing and Applications", k: "journal", topic: "ml" },
    { y: 2025, t: "“Small Device, Big Decision”: Comparing Lightweight LLMs' Computational Performance and Output Quality for AIED Unplugged", doi: "10.1007/978-3-031-99267-4_20", a: "M. Monteiro, A. Barros, L. Rodrigues, D. Dermeval, I. I. Bittencourt, S. Isotani, V. Macario", v: "International Conference on Artificial Intelligence in Education (AIED)", k: "conference", c: 4, topic: "aied", proj: "mathaide" },
    { y: 2025, t: "Geração de Questões com LLMs Leves: Um Estudo Inicial sobre a Percepção de Educadores", doi: "10.5753/sbie.2025.12574", a: "M. M. Santos, A. P. Barros, E. Santos, J. G. da Silva, S. Isotani, I. I. Bittencourt, V. Macario", v: "Simpósio Brasileiro de Informática na Educação (SBIE)", k: "conference", c: 4, topic: "aied", proj: "mathaide" },
    { y: 2025, t: "MathAIde: A Qualitative Study of Teachers' Perceptions of an ITS Unplugged for Underserved Regions", doi: "10.1007/s40593-024-00397-y", s: { pt: "Estudo em sala de aula real com 3 professores e 49 alunos ao longo de 12 aulas, avaliando um tutor inteligente que funciona sem internet.", en: "A real-classroom study with 3 teachers and 49 students across 12 lessons, evaluating an intelligent tutor that works without internet." }, a: "L. Rodrigues, G. Guerino, T. E. V. Silva, G. C. Challco, L. Oliveira, R. S. da Penha, R. F. Mello, T. Vieira, M. Marinho, V. Macario, I. I. Bittencourt, D. Dermeval, S. Isotani", v: "International Journal of Artificial Intelligence in Education, 35(1), 2–30", k: "journal", c: 31, hl: true, topic: "aied", proj: "mathaide" },
    { y: 2025, t: "Integrating Participatory Design and Dual-Track Software Development Process: A Case Study from an Intelligent Mathematics Tutoring System", doi: "10.5753/cibse.2025.35290", a: "J. V. Assis, G. Guerino, L. Rodrigues, V. Macario, M. Marinho", v: "Congresso Ibero-Americano em Engenharia de Software (CIbSE)", k: "conference", c: 2, topic: "aied", proj: "mathaide" },
    { y: 2025, t: "Remote Team Management in Educational System Development: A Work-From-Home Experience on Developing an Unplugged Mathematics Tutoring Solution", doi: "10.1109/CLEI67442.2025.11420811", a: "J. V. Assis, L. Rodrigues, V. Macario, G. Guerino, M. Marinho", v: "Latin American Computer Conference (CLEI)", k: "conference", topic: "aied", proj: "mathaide" },
    { y: 2024, t: "Towards Explainable Automatic Punctuation Restoration for Portuguese Using Transformers", doi: "10.1016/j.eswa.2024.125097", a: "T. B. de Lima, V. Rolim, A. C. A. Nascimento, P. Miranda, V. Macario, L. Rodrigues, E. Freitas, D. Gašević, R. F. Mello", v: "Expert Systems with Applications, 257, 125097", k: "journal", c: 6, hl: true, topic: "nlp", proj: "nlp-pt" },
    { y: 2024, t: "Mathematics Intelligent Tutoring Systems with Handwritten Input: A Scoping Review", doi: "10.1007/s10639-023-12245-y", a: "L. Rodrigues, F. D. Pereira, M. Marinho, V. Macario, I. I. Bittencourt, S. Isotani, D. Dermeval, R. F. Mello", v: "Education and Information Technologies, 29(9), 11183–11209", k: "journal", c: 20, hl: true, topic: "aied", proj: "mathaide" },
    { y: 2024, t: "An Optimization Approach for Elementary School Handwritten Mathematical Expression Recognition", doi: "10.1007/978-3-031-64312-5_28", a: "S. F. Chevtchenko, R. Carvalho, L. Rodrigues, E. Souza, D. Rosa, F. Cordeiro, C. Pereira, T. Vieira, M. Marinho, D. Dermeval, I. I. Bittencourt, S. Isotani, V. Macario", v: "International Conference on Artificial Intelligence in Education (AIED)", k: "conference", c: 3, topic: "vision", proj: "mathaide" },
    { y: 2024, t: "Handwritten Equation Detection in Disconnected, Low-Cost Mobile Devices", doi: "10.1007/978-3-031-64312-5_16", a: "E. Souza, E. L. Santos, L. Rodrigues, D. Rosa, F. Cordeiro, C. Pereira, S. Chevtchenko, R. Carvalho, T. Vieira, M. Marinho, D. Dermeval, I. I. Bittencourt, S. Isotani, V. Macario", v: "International Conference on Artificial Intelligence in Education (AIED)", k: "conference", topic: "vision", proj: "mathaide" },
    { y: 2024, t: "Can VLM Understand Children's Handwriting? An Analysis on Handwritten Mathematical Equation Recognition", doi: "10.1007/978-3-031-64315-6_28", a: "C. Pereira Júnior, L. Rodrigues, N. Costa, V. Macario, R. F. Mello", v: "International Conference on Artificial Intelligence in Education (AIED)", k: "conference", topic: "vision", proj: "mathaide" },
    { y: 2024, t: "Knowledge Tracing Unplugged: From Data Collection to Model Deployment", doi: "10.1007/978-3-031-64302-6_7", a: "L. Rodrigues, A. P. Avila-Santos, T. E. Silva, R. S. da Penha, C. Neto, G. Challco, E. L. dos Santos, E. Souza, G. Guerino, T. Vieira, M. Marinho, V. Macario, I. I. Bittencourt, D. Dermeval, S. Isotani", v: "International Conference on Artificial Intelligence in Education (AIED)", k: "conference", c: 3, topic: "aied", proj: "mathaide" },
    { y: 2024, t: "AESVoting: Automatic Essay Scoring with BERT and Voting Classifiers", a: "T. B. de Lima, E. Freitas, V. Macario", v: "International Conference on Computational Processing of Portuguese (PROPOR)", k: "conference", c: 4, topic: "nlp", proj: "nlp-pt" },
    { y: 2024, t: "Design, Development and Evaluation of a Lightweight Knowledge-Based System for Theoretically-Grounded Math Error Classification", doi: "10.5753/sbie.2024.242500", a: "A. P. Avila-Santos, L. Rodrigues, T. E. V. Veloso, T. Vieira, M. Marinho, V. Macario, D. Dermeval, I. I. Bittencourt, S. Isotani", v: "Simpósio Brasileiro de Informática na Educação (SBIE)", k: "conference", c: 2, topic: "aied", proj: "mathaide" },
    { y: 2024, t: "MathAIde in the Classroom: A Qualitative Analysis of Teachers' Perspectives of Intelligent Tutoring Systems Unplugged", doi: "10.5753/sbie.2024.242017", a: "L. Rodrigues, G. Guerino, T. E. V. Silva, L. Bianchini, M. X. M. Alves, T. Vieira, M. Marinho, V. Macario, D. Dermeval, I. I. Bittencourt, S. Isotani", v: "Simpósio Brasileiro de Informática na Educação (SBIE)", k: "conference", c: 9, topic: "aied", proj: "mathaide" },
    { y: 2023, t: "Recognizing Handwritten Mathematical Expressions of Vertical Addition and Subtraction", doi: "10.1109/SIBGRAPI59091.2023.10347150", a: "D. Rosa, F. R. Cordeiro, R. Carvalho, E. Souza, S. Chevtchenko, L. Rodrigues, M. Marinho, T. Vieira, V. Macario", v: "SIBGRAPI Conference on Graphics, Patterns and Images", k: "conference", c: 9, topic: "vision", proj: "mathaide" },
    { y: 2023, t: "Teacher-Centered Intelligent Tutoring Systems: Design Considerations from Brazilian Public School Teachers", doi: "10.5753/sbie.2023.235159", s: { pt: "Premiado como Melhor Artigo da trilha de IA na Educação do SBIE 2023.", en: "Best Paper of the AI in Education track at SBIE 2023." }, a: "L. Rodrigues, G. Guerino, G. C. Challco, T. E. Veloso, L. Oliveira, R. S. da Penha, R. F. Mello, T. Vieira, M. Marinho, V. Macario, I. I. Bittencourt, S. Isotani, D. Dermeval", v: "Simpósio Brasileiro de Informática na Educação (SBIE)", k: "conference", c: 11, award: true, topic: "aied", proj: "mathaide" },
    { y: 2023, t: "A Case Study on AIED Unplugged Applied to Public Policy for Learning Recovery Post-Pandemic in Brazil", doi: "10.1007/978-3-031-36336-8_120", a: "C. Portela, R. Lisbôa, K. Yasojima, T. Cordeiro, A. Silva, D. Dermeval, L. Marques, J. Santos, R. F. Mello, V. Macario, I. I. Bittencourt, S. Isotani", v: "International Conference on Artificial Intelligence in Education (AIED)", k: "conference", c: 17, topic: "aied", proj: "mathaide" },
    { y: 2023, t: "ITS Unplugged: Leapfrogging the Digital Divide for Teaching Numeracy Skills in Underserved Populations", a: "T. E. Veloso, G. C. Challco, L. Rodrigues, F. M. Versuti, R. Sena da Penha, V. Macario", v: "Workshop Towards the Future of AI-Augmented Human Tutoring in Math Learning", k: "conference", c: 13, topic: "aied", proj: "mathaide" },
    { y: 2023, t: "Automatic Punctuation Verification of School Students' Essay in Portuguese", doi: "10.5753/eniac.2023.233559", a: "T. B. de Lima, L. Rodrigues, V. Macario, E. Freitas, R. F. Mello", v: "Encontro Nacional de Inteligência Artificial e Computacional (ENIAC)", k: "conference", c: 4, topic: "nlp", proj: "nlp-pt" },
    { y: 2023, t: "Algoritmos de Reconhecimento de Dígitos para Integração de Equações Manuscritas em Sistemas Tutores Inteligentes", doi: "10.5753/sbie.2023.235237", a: "S. Chevtchenko, L. Rodrigues, D. Rosa, F. Cordeiro, R. Carvalho, E. Souza, T. Vieira, D. Dermeval, I. I. Bittencourt, S. Isotani, M. Marinho, V. Macario", v: "Simpósio Brasileiro de Informática na Educação (SBIE)", k: "conference", c: 4, topic: "vision", proj: "mathaide" },
    { y: 2023, t: "Automated Thematic Coherence Scoring of Student Essays Written in Portuguese", doi: "10.5753/sbie.2023.233447", a: "R. Pacheco, L. Rodrigues, L. Lins, P. Miranda, V. Macario, S. Isotani, T. Cordeiro, I. I. Bittencourt, D. Dermeval, D. Gašević, R. F. Mello", v: "Simpósio Brasileiro de Informática na Educação (SBIE)", k: "conference", c: 1, topic: "nlp", proj: "nlp-pt" },
    { y: 2023, t: "Clustering Evaluation", a: "V. Macario", v: "Introduction to Computational Intelligence (IEEE Computational Intelligence Society Open Access Book, vol. 1), p. 241", k: "chapter", topic: "ml", proj: "clustering" },
    { y: 2022, t: "Agrupamento Automático de Mensagens em Fóruns Educacionais", doi: "10.5753/sbie.2022.224635", a: "F. Mariano, V. Macario, R. F. Mello", v: "Simpósio Brasileiro de Informática na Educação (SBIE)", k: "conference", topic: "nlp", proj: "nlp-pt" },
    { y: 2021, t: "Semantic Segmentation for People Detection on Beach Images", doi: "10.5753/eniac.2021.18295", s: { pt: "Segmentação semântica sobre 300 imagens de praia; a LinkNet alcança F-score de 90,89% separando banhista de mar, areia e céu.", en: "Semantic segmentation over 300 beach images; LinkNet reaches a 90.89% F-score separating bathers from sea, sand, and sky." }, a: "L. A. Monte, E. G. Oliveira, F. R. Cordeiro, V. Macario", v: "Encontro Nacional de Inteligência Artificial e Computacional (ENIAC)", k: "conference", c: 1, topic: "vision", proj: "banhistas" },
    { y: 2020, t: "MyFood: A Food Segmentation and Classification System to Aid Nutritional Monitoring", data: "https://doi.org/10.5281/zenodo.4041488", doi: "10.1109/SIBGRAPI51738.2020.00039", s: { pt: "Um conjunto de 1.250 imagens de pratos brasileiros em 9 classes, com segmentação por FCN e Mask R-CNN atingindo IoU de 0,70. O dataset está público no Zenodo sob CC-BY.", en: "A dataset of 1,250 Brazilian meal images across 9 classes, segmented by FCN and Mask R-CNN at 0.70 IoU. The dataset is public on Zenodo under CC-BY." }, a: "C. N. C. Freitas, F. R. Cordeiro, V. Macario", v: "SIBGRAPI Conference on Graphics, Patterns and Images", k: "conference", c: 71, hl: true, topic: "vision", proj: "myfood" },
    { y: 2020, t: "A Study of Deep Learning Approaches for Classification and Detection Chromosomes in Metaphase Images", doi: "10.1007/s00138-020-01115-z", s: { pt: "A partir de 74 metáfases reais do laboratório de dosimetria do CRCN-NE, 2.174 regiões classificadas com VGG16 a 0,98 de sensibilidade e 0,99 de especificidade.", en: "From 74 real metaphases from the CRCN-NE dosimetry laboratory, 2,174 regions classified by VGG16 at 0.98 sensitivity and 0.99 specificity." }, a: "M. F. S. Andrade, L. V. Dias, V. Macario, F. F. Lima, S. F. Hwang, J. C. G. Silva, F. R. Cordeiro", v: "Machine Vision and Applications, 31(7), 65", k: "journal", c: 25, hl: true, topic: "vision", proj: "cromossomos" },
    { y: 2018, t: "A Convolutional Neural Network with Feature Fusion for Real-Time Hand Posture Recognition", doi: "10.1016/j.asoc.2018.09.010", s: { pt: "Fusão de características numa rede convolucional que roda em tempo real; é o trabalho mais citado da minha produção.", en: "Feature fusion in a convolutional network that runs in real time; this is my most-cited paper." }, a: "S. F. Chevtchenko, R. F. Vale, V. Macario, F. R. Cordeiro", v: "Applied Soft Computing, 73, 748–766", k: "journal", c: 127, hl: true, topic: "vision", proj: "gestos" },
    { y: 2018, t: "Multi-Objective Optimization for Hand Posture Recognition", doi: "10.1016/j.eswa.2017.09.046", s: { pt: "Trata reconhecimento de gestos como busca explícita na fronteira de Pareto entre custo computacional e acurácia, chegando a 97,63% no conjunto Massey.", en: "Frames gesture recognition as an explicit search on the Pareto frontier between computational cost and accuracy, reaching 97.63% on the Massey set." }, a: "S. F. Chevtchenko, R. F. Vale, V. Macario", v: "Expert Systems with Applications, 92, 170–181", k: "journal", c: 54, hl: true, topic: "vision", proj: "gestos" },
    { y: 2018, t: "Plant Classification Using Artificial Neural Networks", doi: "10.1109/IJCNN.2018.8489701", a: "L. D. S. Pacifico, V. Macario, J. F. L. Oliveira", v: "International Joint Conference on Neural Networks (IJCNN)", k: "conference", c: 41, hl: true, topic: "ml" },
    { y: 2018, t: "Deep Learning for People Detection on Beach Images", doi: "10.1109/BRACIS.2018.00045", a: "S. Chevtchenko, R. Vale, F. Cordeiro, V. Macario", v: "Brazilian Conference on Intelligent Systems (BRACIS)", k: "conference", c: 7, topic: "vision", proj: "banhistas" },
    { y: 2018, t: "A Fuzzy-Adaptive Approach to Segment Metaphase Chromosome Images", doi: "10.1109/BRACIS.2018.00057", a: "M. F. S. Andrade, F. R. Cordeiro, V. Macario, F. F. Lima, S. F. Hwang, J. C. G. Mendonça", v: "Brazilian Conference on Intelligent Systems (BRACIS)", k: "conference", c: 15, topic: "vision", proj: "cromossomos" },
    { y: 2018, t: "A Multi-Gaussian Fuzzy Membership Function to the Algorithm Fuzzy GrowCut Applied to Segment Lesions in Mammography Images", doi: "10.5753/eniac.2018.4426", a: "F. R. Cordeiro, B. Albuquerque, V. Macario", v: "Encontro Nacional de Inteligência Artificial e Computacional (ENIAC)", k: "conference", topic: "vision" },
    { y: 2017, t: "Detecting People from Beach Images", doi: "10.1109/ICTAI.2017.00102", s: { pt: "Detecção de banhistas em imagens da orla do Recife com 90,31% de acurácia, num cenário em que as pessoas aparecem pequenas, parcialmente submersas e sob luz variável.", en: "Bather detection in Recife shoreline imagery at 90.31% accuracy, in a scene where people appear small, partly submerged, and under shifting light." }, a: "R. L. da Silva, S. Chevtchenko, A. A. de Moura, F. R. Cordeiro, V. Macario", v: "IEEE International Conference on Tools with Artificial Intelligence (ICTAI)", k: "conference", c: 9, topic: "vision", proj: "banhistas" },
    { y: 2017, t: "A Study of Swimmers Detection in Beach Images", a: "R. L. da Silva, S. Chevtchenko, A. A. de Moura, V. Macario, F. R. Cordeiro", v: "Workshop de Visão Computacional (WVC)", k: "conference", c: 1, topic: "vision", proj: "banhistas" },
    { y: 2017, t: "Binarization Algorithms Applied to Chromosomes Image Segmentation", a: "A. L. Jesus, V. Macario, F. R. Cordeiro, S. F. Hwang, F. F. Lima", v: "Workshop de Visão Computacional (WVC)", k: "conference", topic: "vision", proj: "cromossomos" },
    { y: 2016, t: "Allocation of Volunteers in Non-Governmental Organizations Aided by Non-Supervised Learning", doi: "10.1109/BRACIS.2016.049", a: "C. M. M. Bezerra, D. R. B. Araújo, V. Macario", v: "Brazilian Conference on Intelligent Systems (BRACIS)", k: "conference", c: 5, topic: "ml" },
    { y: 2014, t: "An Adjustable p-Exponential Clustering Algorithm", a: "V. Macario Filho, F. A. T. de Carvalho", v: "European Symposium on Artificial Neural Networks (ESANN)", k: "conference", topic: "ml", proj: "clustering" },
    { y: 2013, t: "Metaclasses and Zoning for Handwritten Document Recognition", doi: "10.1109/IJCNN.2013.6707056", a: "V. Macario, G. F. P. Silva, M. R. P. Souza, C. Zanchettin, G. D. C. Cavalcanti", v: "International Joint Conference on Neural Networks (IJCNN)", k: "conference", topic: "vision" },
    { y: 2013, t: "Some Local Adaptive Semi-Supervised Clustering Algorithms", a: "V. Macario, F. A. T. de Carvalho", v: "French-Brazilian Workshop on Numerical and Symbolic Methods of Data Analysis", k: "conference", topic: "ml", proj: "clustering" },
    { y: 2012, t: "An Adaptive Semi-Supervised Fuzzy Clustering Algorithm Based on Objective Function Optimization", doi: "10.1109/FUZZ-IEEE.2012.6251345", a: "V. Macario, F. A. T. de Carvalho", v: "IEEE International Conference on Fuzzy Systems (FUZZ-IEEE)", k: "conference", c: 12, topic: "ml", proj: "clustering" },
    { y: 2012, t: "An Adaptive ISODATA Fuzzy Clustering Algorithm with Partial Supervision", doi: "10.1109/ICSMC.2012.6378028", a: "V. Macario, F. A. T. de Carvalho", v: "IEEE International Conference on Systems, Man, and Cybernetics (SMC)", k: "conference", c: 2, topic: "ml", proj: "clustering" },
    { y: 2012, t: "Predicting Gene Functions Using Semi-Supervised Clustering Algorithms with Objective Function Optimization", doi: "10.1109/SBRN.2012.33", a: "V. Macario, I. G. Costa, J. F. L. Oliveira, F. A. T. de Carvalho", v: "Brazilian Symposium on Neural Networks (SBRN)", k: "conference", c: 1, topic: "ml", proj: "clustering" },
    { y: 2011, t: "NebFuzz: Um Novo Algoritmo de Agrupamento Semi-Supervisionado Baseado no Fuzzy C-Means", a: "V. Macario, F. A. T. de Carvalho", v: "Encontro Nacional de Inteligência Artificial (ENIA)", k: "conference", topic: "ml", proj: "clustering" },
    { y: 2010, t: "A New Approach for Semi-Supervised Clustering Based on Fuzzy C-Means", doi: "10.1109/FUZZY.2010.5584306", a: "V. Macario, F. A. T. de Carvalho", v: "IEEE World Congress on Computational Intelligence (FUZZ-IEEE)", k: "conference", c: 14, topic: "ml", proj: "clustering" },
    { y: 2009, t: "Combining Text Classifiers and Hidden Markov Models for Information Extraction", doi: "10.1142/S0218213009000147", a: "F. A. Barros, E. F. A. Silva, R. B. C. Prudêncio, V. Macario, A. C. A. Nascimento", v: "International Journal on Artificial Intelligence Tools, 18, 311", k: "journal", topic: "nlp" },
    { y: 2008, t: "Automatic Information Extraction in Semi-Structured Official Journals", doi: "10.1109/SBRN.2008.36", a: "V. Macario, R. B. C. Prudêncio, F. A. T. de Carvalho, L. R. Torres, R. Rodrigues Júnior, M. G. Lima", v: "Brazilian Symposium on Neural Networks (SBRN)", k: "conference", c: 2, topic: "nlp" },
    { y: 2008, t: "Hidden Markov Models and Text Classifiers for Information Extraction on Semi-Structured Texts", doi: "10.1109/HIS.2008.63", a: "F. A. Barros, E. F. A. Silva, R. B. C. Prudêncio, V. Macario, A. C. A. Nascimento", v: "International Conference on Hybrid Intelligent Systems (HIS)", k: "conference", topic: "nlp" },
    { y: 2007, t: "An Efficient Thresholding Algorithm for Brazilian Bank Checks", doi: "10.1109/ICDAR.2007.4378702", a: "C. Mello, B. Bezerra, C. Zanchettin, V. Macario", v: "International Conference on Document Analysis and Recognition (ICDAR)", k: "conference", c: 5, topic: "vision" },
    { y: 2007, t: "Um Método de Filtragem Híbrida Baseado em Perfis Simbólicos Colaborativos", a: "B. L. D. Bezerra, F. A. T. de Carvalho, V. Macario Filho", v: "Encontro Nacional de Inteligência Artificial (ENIA)", k: "conference", c: 1, topic: "ml" },
    { y: 2006, t: "C²: A Collaborative Recommendation System Based on Modal Symbolic User Profile", doi: "10.1109/WI.2006.54", a: "B. L. D. Bezerra, F. A. T. de Carvalho, V. Macario Filho", v: "IEEE/WIC/ACM International Conference on Web Intelligence (WI)", k: "conference", c: 11, topic: "ml" },
  ],
};
