const typeData = {
  citacao: {
    name: "Citação",
    icon: "❝",
    desc: "A citação é o método mais direto de intertextualidade: o autor reproduz um trecho de outro texto, reconhecendo a fonte. Pode ser direta (cópia literal, entre aspas) ou indireta (paráfrase com indicação do autor).",
    rules: "Curta (até 3 linhas): entre aspas, integrada ao texto. Longa (4+ linhas): parágrafo distinto, recuo de 4 cm, fonte 10, espaçamento simples.",
    example: "Segundo Sócrates: 'Sábio é aquele que conhece os limites da própria ignorância.'",
    multimeio: "Em vídeos, insere trechos de discursos reais. Em games, reproduz falas de personagens clássicos."
  },
  parodia: {
    name: "Paródia",
    icon: "🎭",
    desc: "A paródia é uma imitação cômica ou crítica de um texto anterior. Mantém a estrutura reconhecível do original, mas subverte seu sentido — geralmente com humor, ironia ou crítica social.",
    rules: "O leitor precisa conhecer o original para captar o efeito. Quanto mais fiel à estrutura, mais eficaz o contraste.",
    example: "Minha terra tem wi-fi / Onde tuitam os influencers — (paródia da Canção do Exílio, de Gonçalves Dias)",
    multimeio: "Memes, sketches, vídeos que recriam cenas famosas com novo contexto. Muito presente no humor digital."
  },
  parafraseie: {
    name: "Paráfrase",
    icon: "↔️",
    desc: "A paráfrase reescreve o conteúdo do texto original com novas palavras, mantendo o mesmo sentido. Não há ironia ou subversão — o objetivo é confirmar e expandir as ideias originais com nova linguagem.",
    rules: "Difere da cópia por ser uma reescrita autêntica. Difere da paródia por não alterar o sentido — só a forma.",
    example: "Carlos Drummond parafraseou a Canção do Exílio evocando saudade da terra e buscando os versos de Gonçalves Dias na memória.",
    multimeio: "Em podcasts, apresentadores parafraseiam pesquisas científicas. Em jogos, tutoriais parafraseiam manuais complexos."
  },
  alusao: {
    name: "Alusão",
    icon: "💡",
    desc: "A alusão menciona ou insinua outro texto de forma indireta e superficial, sem citar explicitamente a fonte. Exige que o leitor já conheça a referência para compreender o sentido.",
    rules: "Quanto mais implícita, maior o desafio para o leitor — e maior o efeito quando reconhecida.",
    example: "'Como diria o poeta, amanhã é outro dia.' — alusão à frase de Scarlett O'Hara em E o Vento Levou.",
    multimeio: "Games indie que inserem elementos visuais de clássicos (ex: pixel art de Mario). Apps que copiam levemente interfaces famosas."
  },
  epigrafe: {
    name: "Epígrafe",
    icon: "📜",
    desc: "A epígrafe é um trecho curto de outro texto posicionado no início de uma obra (livro, capítulo, artigo). Ela não integra o corpo do texto, mas estabelece um diálogo temático ou conceitual com ele.",
    rules: "Posicionada no canto direito, em itálico, antes do início do texto. Deve ter relação clara com o conteúdo.",
    example: "'Apesar de você / amanhã há de ser / outro dia.' — Chico Buarque (usada como epígrafe em textos sobre resistência)",
    multimeio: "Em apresentações digitais, citações de abertura que contextualizam o tema do slide. Em vídeos, intertítulos com frases de efeito."
  },
  remix: {
    name: "Remix / Releitura",
    icon: "🔀",
    desc: "O remix combina criativamente elementos de obras diferentes para gerar um novo sentido. A releitura recria uma obra sob nova linguagem, mídia ou perspectiva — como HQs viradas em filmes ou pinturas recriadas com novos estilos.",
    rules: "Difere da paródia por não precisar ser cômica. O novo sentido pode ser de qualquer natureza — político, estético, afetivo.",
    example: "A Última Ceia recriada com robôs (releitura visual). Mashup que mistura trilhas de filmes distintos (remix sonoro).",
    multimeio: "Fanfics, cosplay, fanart, video mashups, covers musicais, HQs de universos cruzados (crossovers)."
  }
};

const galleryData = [
  {
    cat: "literatura",
    type: "Paródia",
    icon: "🎭",
    bg: "#fff0f0",
    title: "Murilo Mendes & Gonçalves Dias",
    desc: "Paródia modernista da 'Canção do Exílio' — elementos absurdos inseridos no esquema métrico original.",
    detail: "Murilo Mendes manteve a forma poética da Canção do Exílio mas inseriu imagens surrealistas e absurdas, como 'gaturanos de Veneza' e 'filósofos polacos', subvertendo completamente o sentido nostálgico original.",
    example: "'Minha terra tem macieiras da Califórnia / onde cantam gaturanos de Veneza.' — Murilo Mendes"
  },
  {
    cat: "literatura",
    type: "Paráfrase",
    icon: "↔️",
    bg: "#f0fff0",
    title: "Drummond & Gonçalves Dias",
    desc: "Drummond relembra com nostalgia e esquecimento os versos da 'Canção do Exílio', parafraseando-a.",
    detail: "Em 'Meus olhos brasileiros se fecham saudosos', Drummond não parodia mas parafraseou — confirmou o sentimento de saudade do original enquanto confessa não lembrar os versos exatos. O sentido permanece, a forma muda.",
    example: "'Meus olhos brasileiros se fecham saudosos / Minha boca procura a Canção do Exílio.' — Drummond"
  },
  {
    cat: "visual",
    type: "Releitura Visual",
    icon: "🖼️",
    bg: "#f0f0ff",
    title: "Mona Lisa — Releituras",
    desc: "A Mona Lisa é uma das obras com mais releituras no mundo — cubismo, pop art, memes digitais.",
    detail: "Da versão com bigode de Marcel Duchamp à Mona Lisa de máscara durante a pandemia, cada releitura preserva elementos icônicos (posição, cabelo, mãos) enquanto insere novo contexto que gera novo sentido.",
    example: "Duchamp adicionou bigode à Mona Lisa em 1919 — releitura iconoclasta e inaugural do conceito de arte conceitual."
  },
  {
    cat: "visual",
    type: "Releitura Visual",
    icon: "🤖",
    bg: "#f5f0ff",
    title: "Última Ceia com Robôs",
    desc: "Releitura de Leonardo da Vinci com robôs no lugar dos apóstolos — tecnologia e espiritualidade.",
    detail: "A composição mantém o número de personagens, a disposição à mesa e a figura central com braços abertos (referência ao Cristo). A substituição por robôs cria tensão entre sagrado e tecnologia — novo sentido via releitura.",
    example: "A posição das mãos, a paleta de cores, o cabelo, a posição do corpo — todos os elementos constroem a referência."
  },
  {
    cat: "digital",
    type: "Intertextualidade Digital",
    icon: "😂",
    bg: "#fff8e0",
    title: "Memes como Remix Multimodal",
    desc: "Memes combinam imagens, frases e contextos variados para criar novos significados compartilháveis.",
    detail: "Um meme típico combina uma imagem reconhecível (de filme, série ou cultura pop) com texto novo que ressignifica a imagem original. Cada compartilhamento acrescenta mais camadas intertextuais — é remix em estado puro.",
    example: "'Distracted Boyfriend' (foto original de 2015) virou template mundial para expressar situações de troca de foco."
  },
  {
    cat: "digital",
    type: "Hipertexto",
    icon: "🔗",
    bg: "#e8f8f5",
    title: "Hiperlinks — Intertextualidade Dinâmica",
    desc: "Cada link em um artigo online cria uma rede de intertextualidade instantânea e não-linear.",
    detail: "Theodor H. Nelson cunhou 'hipertexto' nos anos 1960 como 'escritas associadas não-sequenciais'. Hoje, cada hyperlink em um artigo conecta a outros textos, criando redes de significado que o leitor navega de forma não-linear.",
    example: "Wikipedia é o maior exemplo: cada verbete contém dezenas de links para outros verbetes — uma teia intertextual colaborativa."
  },
  {
    cat: "musica",
    type: "Citação Musical",
    icon: "🎵",
    bg: "#fff0e8",
    title: "Sampling no Hip-Hop",
    desc: "O sampling é uma forma de citação musical: um trecho de outra música é incorporado a uma nova produção.",
    detail: "O hip-hop consolidou o sampling como linguagem — DJ's citam riffs, batidas e melodias de soul, funk e jazz, criando diálogos entre gerações musicais. É uma forma de citação com transformação criativa.",
    example: "James Brown é o artista mais sampleado da história — seus ritmos aparecem em centenas de músicas de rap e eletrônico."
  },
  {
    cat: "musica",
    type: "Paródia Musical",
    icon: "🎸",
    bg: "#fdf0ff",
    title: "Paródia em Propaganda",
    desc: "Anúncios usam melodias conhecidas com letras novas — a familiaridade cria conexão imediata com o consumidor.",
    detail: "Quando uma marca usa a melodia de uma música famosa com letra nova (sobre o produto), está fazendo paródia musical com fins publicitários. O reconhecimento da melodia original cria uma ponte afetiva instantânea.",
    example: "A Ortifru usou referências culturais populares como 'Pepino Maluquinho' (ref. ao Menino Maluquinho de Ziraldo) em seus anúncios."
  },
  {
    cat: "visual",
    type: "Alusão Cinematográfica",
    icon: "🎬",
    bg: "#fff5f0",
    title: "O Iluminado em Toy Story",
    desc: "O carpete assustador do hotel de 'O Iluminado' aparece na casa do vilão Sid em Toy Story.",
    detail: "Os animadores da Pixar colocaram exatamente o mesmo padrão hexagonal do tapete do Overlook Hotel na casa de Sid. Isso constrói uma atmosfera de terror psicológico para quem reconhece a alusão.",
    example: "A alusão é visual e não verbal, conversando apenas com os espectadores adultos que conhecem a obra de Stanley Kubrick."
  },
  {
    cat: "digital",
    type: "Easter Egg / Alusão",
    icon: "👾",
    bg: "#f0f8ff",
    title: "Easter Eggs em Videogames",
    desc: "Segredos escondidos pelos programadores que fazem referências a outros jogos, filmes ou memes.",
    detail: "Em The Witcher 3, o jogador pode encontrar um corpo usando um capuz branco ao lado de uma carroça de feno quebrada — uma alusão cômica ao famoso 'Salto de Fé' da franquia Assassin's Creed que deu errado.",
    example: "O Easter Egg é uma recompensa intertextual para o jogador atento que consome cultura pop."
  },
  {
    cat: "literatura",
    type: "Paródia Literária",
    icon: "📖",
    bg: "#fcf0ff",
    title: "Dom Quixote",
    desc: "A obra-prima de Cervantes nasceu como uma grande paródia dos romances de cavalaria.",
    detail: "Cervantes usou toda a estrutura dos contos heroicos (o cavaleiro, a donzela, as aventuras), mas esvaziou a glória ao colocar um protagonista delirante em um mundo prosaico. Ele subverte os ideais medievais de glória.",
    example: "A luta contra os moinhos de vento em vez de gigantes é a quintessência da quebra de expectativa paródica."
  }
];

const randomImagesData = [
  {
    url: "https://www.linhavermelha.com.br/wp-content/uploads/2022/11/Poster-C01P07-Pintores-Universais-L.H.O.O.Q.-Marcel-Duchamp-1080-1.jpg",
    title: "L.H.O.O.Q. (Marcel Duchamp, 1919)",
    type: "Paródia / Releitura",
    desc: "Duchamp pegou uma reprodução da famosa 'Mona Lisa' de Da Vinci e desenhou um bigode e cavanhaque nela. É um dos maiores clássicos da intertextualidade visual e do movimento Dadaísta, subvertendo um ícone sagrado da arte."
  },
  {
    url: "https://static.todamateria.com.br/upload/ul/ti/ultima_ceia_da_vinci_1_694x250_c.jpg",
    title: "A Última Ceia (Leonardo da Vinci, ~1498)",
    type: "Texto Fonte — O Mais Parodiado",
    desc: "A estrutura dramática desta pintura (13 pessoas alinhadas em uma mesa) é um dos tropos mais replicados da cultura pop. Simpsons, Sopranos, Vingadores, Looney Tunes e até smurfs já fizeram paródias ou alusões a essa cena."
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/The_Scream_Pastel.jpg/960px-The_Scream_Pastel.jpg",
    title: "O Grito (Edvard Munch, 1893)",
    type: "Alusão / Remix Visual",
    desc: "A figura com as mãos no rosto e a boca aberta em agonia inspirou inúmeras paródias (como cenas no Bob Esponja) e também o design da famosa máscara do assassino na franquia de filmes 'Pânico' (Scream)."
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/%27Adam%27s_Creation_Sistine_Chapel_ceiling%27_by_Michelangelo_JBU33cut.jpg/1280px-%27Adam%27s_Creation_Sistine_Chapel_ceiling%27_by_Michelangelo_JBU33cut.jpg",
    title: "A Criação de Adão (Michelangelo, ~1512)",
    type: "Releitura",
    desc: "A pose dos dedos indicadores quase se tocando tornou-se um símbolo universal de criação. A mesma pose aparece no pôster icônico do filme E.T. - O Extraterrestre de Spielberg, criando uma intertextualidade visual entre arte sacra e ficção científica."
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/f/fc/%C3%89douard_Manet_-_Le_D%C3%A9jeuner_sur_l%27herbe.jpg",
    title: "Almoço na Relva (Édouard Manet, 1863)",
    type: "Citação Visual Direta",
    desc: "Esta pintura escandalizou Paris em 1863, mas Manet estava citando intertextualmente os grandes mestres. A pose do trio principal é uma citação visual exata de um detalhe de uma gravura renascentista baseada em Rafael Sanzio."
  }
];
