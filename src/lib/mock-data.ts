// Mock editorial data. Realistic crypto news for a premium financial publication.

export type Author = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
};

export type Article = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  author: string; // author slug
  date: string;
  readingTime: number;
  excerpt: string;
  image: string;
  featured?: boolean;
  body?: string[]; // paragraphs
  pullQuote?: string;
};

export const AUTHORS: Author[] = [
  {
    slug: "eleanor-vance",
    name: "Eleanor Vance",
    role: "Rédactrice des marchés",
    bio: "Eleanor couvre les marchés de capitaux mondiaux et les actifs numériques. Elle a précédemment passé une décennie au Financial Times à rédiger des articles sur la macroeconomie et les banques centrales.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80&auto=format&fit=crop",
  },
  {
    slug: "marcus-chen",
    name: "Marcus Chen",
    role: "Correspondant senior, Asie",
    bio: "Marcus rapporte depuis Singapour sur les développements réglementaires asiatiques, les échanges et les flux institutionnels à travers l'économie des actifs numériques.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop",
  },
  {
    slug: "isabelle-laurent",
    name: "Isabelle Laurent",
    role: "Rédactrice technologie",
    bio: "Isabelle écrit sur la cryptographie, la mise à l'échelle et l'intersection de l'intelligence artificielle et des systèmes distribués.",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80&auto=format&fit=crop",
  },
  {
    slug: "james-okonkwo",
    name: "James Okonkwo",
    role: "Investigations",
    bio: "James dirige des reportages d'investigation approfondis sur la criminalité financière, la gouvernance des échanges et la forensique on-chain.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&auto=format&fit=crop",
  },
  {
    slug: "sofia-reyes",
    name: "Sofia Reyes",
    role: "Chroniqueuse d'opinion",
    bio: "Sofia écrit une chronique hebdomadaire sur la politique monétaire, la théorie de la monnaie saine et les dimensions sociales de la décentralisation.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80&auto=format&fit=crop",
  },
  {
    slug: "henry-sutton",
    name: "Henry Sutton",
    role: "Responsable de la recherche",
    bio: "Henry produit des recherches trimestrielles sur la structure du marché et des analyses de données on-chain pour les lecteurs institutionnels.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80&auto=format&fit=crop",
  },
];

const IMG = {
  trading: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1600&q=80&auto=format&fit=crop",
  bitcoin: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=1600&q=80&auto=format&fit=crop",
  ethereum: "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=1600&q=80&auto=format&fit=crop",
  charts: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=1600&q=80&auto=format&fit=crop",
  city: "https://images.unsplash.com/photo-1444041654-fb0e4ad5d976?w=1600&q=80&auto=format&fit=crop",
  capitol: "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?w=1600&q=80&auto=format&fit=crop",
  server: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=80&auto=format&fit=crop",
  meeting: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&q=80&auto=format&fit=crop",
  newsroom: "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=1600&q=80&auto=format&fit=crop",
  podcast: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1600&q=80&auto=format&fit=crop",
  research: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=80&auto=format&fit=crop",
  defi: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1600&q=80&auto=format&fit=crop",
  asia: "https://images.unsplash.com/photo-1538485399081-7c8970d22f49?w=1600&q=80&auto=format&fit=crop",
  mining: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=1600&q=80&auto=format&fit=crop",
  conference: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1600&q=80&auto=format&fit=crop",
  abstract: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=1600&q=80&auto=format&fit=crop",
};

const longBody = (topic: string): string[] => [
  `Au cours du dernier trimestre, ${topic.toLowerCase()} est devenu un point focal pour les allocateurs institutionnels et les décideurs politiques. Les desks de trading à Londres, Singapour et New York signalent un changement marqué dans les flux, avec des capitaux se déplaçant des satellites spéculatifs vers les actifs numériques les plus grands et les plus liquides.`,
  `Les responsables de plusieurs grandes banques centrales ont, dans des remarques privées et de plus en plus dans des témoignages publics, signalé que les marchés des actifs numériques ne peuvent plus être traités comme une préoccupation périphérique. La classe d'actifs a franchi des seuils de taille, de qualité de conservation et d'intégration des contreparties qui exigent un cadre de supervision plus délibéré.`,
  `Les dirigeants de l'industrie interviewés pour cet article décrivent un marché qui mûrit par étapes ingales. L'infrastructure de conservation et de règlement s'est améliorée au-delà de toute reconnaissance depuis le cycle de 2022 ; les plateformes de négociation se consolident ; et une génération d'intermédiaires axés sur la conformité a émergé pour faire le lien entre la finance traditionnelle et l'économie on-chain.`,
  `Pourtant, les questions structurelles restent non résolues. Comment le régime de divulgation pour les émetteurs de jetons doit-il être conçu ? Où se situe la frontière entre un instrument financier et un élément d'infrastructure numérique ? Et quelles juridictions accueilleront, en temps voulu, les plateformes où aura lieu la prochaine décennie de formation des prix ?`,
  `Pour l'instant, les réponses sont négociées discrètement, dans des groupes de travail et des réunions bilatérales qui font rarement surface dans la presse. Ce qui est de plus en plus clair, c'est que la conversation n'est plus de savoir si les actifs numériques feront partie du système financier mondial, mais plutôt les conditions auxquelles ils le feront.`,
  `Des analystes de plusieurs grandes banques ont commencé à publier des recherches dédiées sur l'émission de stablecoins, le crédit on-chain et les bons du Trésor tokennisés. Les rapports, autrefois traités comme une niche, circulent maintenant aux côtés des notes conventionnelles sur les revenus fixes sur les planchers de trading matinaux.`,
  `Si cette adoption institutionnelle marque le début d'un cycle plus long d'intégration, ou simplement un autre tour d'une roue familière, dépendra en partie de l'architecture réglementaire qui émergera dans l'année à venir.`,
];

export const ARTICLES: Article[] = [
  {
    slug: "bitcoin-institutional-allocation-crosses-threshold",
    title: "Le Bitcoin franchit un seuil alors que les allocateurs institutionnels réécrivent discrètement leurs mandats",
    subtitle:
      "Les fonds de pension et les gestionnaires de fonds souverains ne se demandent plus s'il faut détenir des actifs numériques, mais combien, où et par qui.",
    category: "Bitcoin",
    author: "eleanor-vance",
    date: "19 juin 2026",
    readingTime: 9,
    excerpt:
      "Un changement discret mais indiscutable est en cours dans les bureaux des plus grands allocateurs d'actifs du monde, où la question n'est plus de savoir si les actifs numériques appartiennent au bilan.",
    image: IMG.trading,
    featured: true,
    body: longBody("Bitcoin"),
    pullQuote:
      "Nous sommes passés au-delà du débat sur l'existence des actifs numériques. La conversation porte maintenant sur la construction du portefeuille.",
  },
  {
    slug: "ethereum-restaking-rewires-yield-curve",
    title: "L'économie de restaking d'Ethereum reconfigure discrètement la courbe de rendement crypto",
    subtitle:
      "Une nouvelle couche de sécurité programmable remodule la façon dont le capital est tarié dans l'écosystème Ethereum.",
    category: "Ethereum",
    author: "isabelle-laurent",
    date: "18 juin 2026",
    readingTime: 11,
    excerpt:
      "Le restaking est passé d'une curiosité à un primitif fondamental, avec des milliards en garantie soutenant maintenant une constellation croissante de services.",
    image: IMG.ethereum,
    featured: true,
    body: longBody("Ethereum"),
    pullQuote:
      "Le restaking est devenu l'équivalent d'une structure de terme pour le capital natif crypto.",
  },
  {
    slug: "brussels-mica-second-wave",
    title: "Bruxelles prépare une deuxième vague de règles sur les actifs numériques alors que les limites du MiCA apparaissent",
    subtitle:
      "Les responsables reconnaissent que le cadre phare du bloc, à peine deux ans, aura besoin de révisions ciblées.",
    category: "Regulation",
    author: "marcus-chen",
    date: "17 juin 2026",
    readingTime: 8,
    excerpt:
      "Les décideurs européens rédigent des amendements pour combler les lacunes en matière de réserves de stablecoins, de finance décentralisée et de conservation transfrontière.",
    image: IMG.capitol,
    body: longBody("Réglementation européenne"),
  },
  {
    slug: "stablecoin-treasury-bills",
    title: "Les émetteurs de stablecoins deviennent un acheteur discret mais important de bons du Trésor à court terme",
    subtitle:
      "Les réserves combinées des plus grands jetons ancrés au dollar dépassent maintenant celles de nombreux souverains de taille moyenne.",
    category: "Markets",
    author: "henry-sutton",
    date: "17 juin 2026",
    readingTime: 7,
    excerpt:
      "Une classe d'actifs autrefois ignorée exerce maintenant une influence mesurable sur le marché américain à court terme.",
    image: IMG.charts,
    body: longBody("Stablecoins"),
  },
  {
    slug: "singapore-licensing-regime-tightens",
    title: "Singapour resserre son régime de licences pendant que Hong Kong courtise les échanges mondiaux",
    subtitle: "Un réordonnancement subtil des capitales crypto asiatiques est en cours.",
    category: "Regulation",
    author: "marcus-chen",
    date: "16 juin 2026",
    readingTime: 6,
    excerpt:
      "Les responsables du MAS réétalonnent des règles qui faisaient autrefois de la cité-état le foyer par défaut des opérations asiatiques de l'industrie.",
    image: IMG.asia,
    body: longBody("Réglementation asiatique"),
  },
  {
    slug: "the-quiet-rise-of-tokenised-funds",
    title: "La montée discrète des fonds tokennisés au sein des plus grands gestionnaires d'actifs du monde",
    subtitle:
      "Ce qui a commencé comme un pilote chez une firme de Wall Street est devenu une poussée coordonnée dans toute l'industrie.",
    category: "Markets",
    author: "eleanor-vance",
    date: "15 juin 2026",
    readingTime: 10,
    excerpt:
      "Au coeur d'un effort de plusieurs mois pour transférer des milliards de dollars d'exposition aux marchés monétaires on-chain.",
    image: IMG.city,
    featured: true,
    body: longBody("Tokenisation"),
    pullQuote: "La tokenisation est la révolution ennuyeuse. C'est précisément pourquoi elle aura de l'importance.",
  },
  {
    slug: "an-interview-with-the-architect-of-the-merge",
    title: "Un entretien avec l'architecte discret des décisions les plus difficiles d'Ethereum",
    subtitle:
      "Sur le consensus, le conflit et la responsabilité de concevoir un système monétaire en public.",
    category: "Interviews",
    author: "isabelle-laurent",
    date: "14 juin 2026",
    readingTime: 14,
    excerpt:
      "Une conversation inhabituellement candide sur le poids de la gouvernance d'une infrastructure sécurisant des centaines de milliards de dollars.",
    image: IMG.meeting,
    body: longBody("Gouvernance Ethereum"),
    pullQuote: "On ne choisit pas si son travail a des conséquences politiques. On choisit seulement si on les affronte.",
  },
  {
    slug: "the-case-against-perpetual-stimulus",
    title: "Opinion : L'argument contre le stimulus perpétuel n'a jamais été présenté aussi clairement",
    subtitle: "La monnaie saine n'est pas un slogan. C'est, de plus en plus, une circonscription.",
    category: "Opinion",
    author: "sofia-reyes",
    date: "13 juin 2026",
    readingTime: 5,
    excerpt:
      "Une génération venue au monde après la crise financière a construit un système financier parallèle. Nous devons prendre ses arguments au sérieux.",
    image: IMG.abstract,
    body: longBody("Politique monétaire"),
  },
  {
    slug: "defi-credit-markets-quietly-mature",
    title: "Les marchés de crédit DeFi mûrissent discrètement à mesure que les prêteurs institutionnels interviennent",
    subtitle:
      "Le crédit on-chain est passé au-delà de l'agriculture de rendement réflexive vers quelque chose ressemblant à un vrai marché à revenu fixe.",
    category: "Altcoins",
    author: "henry-sutton",
    date: "12 juin 2026",
    readingTime: 9,
    excerpt:
      "Le dernier cycle de plateformes de prêt décentralisé a attiré un type de contrepartie différent.",
    image: IMG.defi,
    body: longBody("Finance décentralisée"),
  },
  {
    slug: "mining-power-consumption-grid-deal",
    title: "Les mineurs du Texas concluent un nouvel accord avec le réseau électrique alors que les pressions de la demande augmentent",
    subtitle: "Les opérateurs sont payés pour s'éteindre. Les implications vont plus loin qu'elles n'y paraissent.",
    category: "Technology",
    author: "james-okonkwo",
    date: "11 juin 2026",
    readingTime: 7,
    excerpt:
      "Un arrangement précédemment informel est en train de devenir une caractéristique structurelle du marché de l'électricité en gros.",
    image: IMG.mining,
    body: longBody("Minage et énergie"),
  },
  {
    slug: "the-exchange-that-rebuilt-itself",
    title: "La plateforme qui s'est reconstruite : Dans les coulisses d'une refonte de la conformité sur dix-huit mois",
    subtitle: "Une étude de cas sur la manière dont un lieu autrefois controversé a tenté de regagner la confiance.",
    category: "Editorials",
    author: "james-okonkwo",
    date: "10 juin 2026",
    readingTime: 12,
    excerpt:
      "Des documents internes, des lettres de supervision et des dizaines d'entretiens décrivent une transformation coûteuse encore en cours.",
    image: IMG.newsroom,
    body: longBody("Gouvernance des échanges"),
    pullQuote: "La confiance, une fois perdue, ne se reconstruit qu'à un coût considérable et sur des années, pas des trimestres.",
  },
  {
    slug: "podcast-the-week-in-markets",
    title: "Podcast : La semaine sur les marchés - Volatilité, flux et la Fed",
    subtitle: "Episode 142 de notre podcast phare sur les marchés mondiaux des actifs numériques.",
    category: "Podcasts",
    author: "eleanor-vance",
    date: "09 juin 2026",
    readingTime: 38,
    excerpt:
      "Une conversation de 38 minutes avec deux traders seniors sur les mouvements les plus importants de la semaine.",
    image: IMG.podcast,
    body: longBody("Podcast marchés"),
  },
  {
    slug: "research-q2-market-structure",
    title: "Rapport de recherche : Structure du marché au T2 et le remodelage de la liquidité",
    subtitle: "Notre revue trimestrielle de la concentration des plateformes, des spreads et de la montée de l'exécution on-chain.",
    category: "Research",
    author: "henry-sutton",
    date: "08 juin 2026",
    readingTime: 22,
    excerpt:
      "Soixante-huit pages de données, graphiques et entretiens sur l'évolution de la structure du marché des actifs numériques.",
    image: IMG.research,
    body: longBody("Structure du marché"),
  },
  {
    slug: "ai-and-onchain-data-pipelines",
    title: "Comment l'IA devient discrètement le lecteur le plus important des données on-chain",
    subtitle: "L'inférence à grande échelle change ce que signifie surveiller un registre public.",
    category: "Technology",
    author: "isabelle-laurent",
    date: "07 juin 2026",
    readingTime: 8,
    excerpt:
      "Une nouvelle génération de sociétés d'analyse utilise de grands modèles de langage pour interpréter l'activité blockchain en temps quasi réel.",
    image: IMG.server,
    body: longBody("IA et blockchain"),
  },
  {
    slug: "conference-davos-side-meetings",
    title: "En marge de Davos : Les conversations plus discrètes sur la monnaie numérique",
    subtitle: "Des responsables et des dirigeants décrivent un ton sensiblement différent à huis clos.",
    category: "Markets",
    author: "marcus-chen",
    date: "06 juin 2026",
    readingTime: 6,
    excerpt:
      "Les communiqués publics disent une chose. Les réunions bilatérales, de plus en plus, en disent une autre.",
    image: IMG.conference,
    body: longBody("Davos et la monnaie numérique"),
  },
];

export const PRICES = [
  { sym: "BTC", name: "Bitcoin", price: 71284.42, d1: 1.84, d7: 3.12, mcap: "1.41T", vol: "38.2B" },
  { sym: "ETH", name: "Ethereum", price: 3842.15, d1: -0.62, d7: 2.04, mcap: "461.8B", vol: "19.6B" },
  { sym: "SOL", name: "Solana", price: 174.21, d1: 2.41, d7: 6.13, mcap: "82.9B", vol: "4.1B" },
  { sym: "XRP", name: "XRP", price: 0.62, d1: -1.12, d7: -0.84, mcap: "33.6B", vol: "1.9B" },
  { sym: "BNB", name: "BNB", price: 612.04, d1: 0.31, d7: 1.16, mcap: "90.4B", vol: "2.0B" },
  { sym: "ADA", name: "Cardano", price: 0.48, d1: 1.04, d7: -2.21, mcap: "16.8B", vol: "612M" },
  { sym: "AVAX", name: "Avalanche", price: 34.72, d1: 3.18, d7: 5.40, mcap: "13.4B", vol: "504M" },
  { sym: "DOT", name: "Polkadot", price: 7.18, d1: -0.41, d7: 1.92, mcap: "9.6B", vol: "287M" },
];

export const CATEGORIES = [
  "Latest",
  "Bitcoin",
  "Ethereum",
  "Altcoins",
  "Markets",
  "Regulation",
  "Technology",
  "Opinion",
  "Research",
  "Interviews",
  "Podcasts",
  "Editorials",
];

export const NAV_LINKS: { label: string; slug?: string; to?: string }[] = [
  { label: "Dernières", to: "/latest" },
  { label: "Bitcoin", slug: "bitcoin" },
  { label: "Ethereum", slug: "ethereum" },
  { label: "Altcoins", slug: "altcoins" },
  { label: "Marchés", slug: "markets" },
  { label: "Réglementation", slug: "regulation" },
  { label: "Technologie", slug: "technology" },
  { label: "Opinion", slug: "opinion" },
  { label: "Recherche", slug: "research" },
  { label: "Entretiens", slug: "interviews" },
  { label: "Podcasts", slug: "podcasts" },
];

export const FEAR_GREED = { value: 68, label: "Avidité" };

export const EVENTS = [
  { date: "24 juin", title: "Décision sur les taux du FOMC" },
  { date: "02 juil.", title: "Activation du réseau principal ETH Pectra" },
  { date: "09 juil.", title: "Token2049 Singapour" },
  { date: "18 juil.", title: "Clôture de la consultation sur l'article 45 du MiCA de l'UE" },
];

export function getArticle(slug: string) {
  return ARTICLES.find((a) => a.slug === slug);
}
export function getAuthor(slug: string) {
  return AUTHORS.find((a) => a.slug === slug);
}
export function authorOf(article: Article) {
  return AUTHORS.find((a) => a.slug === article.author)!;
}
export function articlesByCategory(cat: string) {
  const c = cat.toLowerCase();
  return ARTICLES.filter((a) => a.category.toLowerCase() === c);
}
export function articlesByAuthor(slug: string) {
  return ARTICLES.filter((a) => a.author === slug);
}
