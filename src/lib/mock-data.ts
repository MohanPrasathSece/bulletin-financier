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
    role: "Markets Editor",
    bio: "Eleanor covers global capital markets and digital assets. She previously spent a decade at the Financial Times reporting on macroeconomics and central banking.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80&auto=format&fit=crop",
  },
  {
    slug: "marcus-chen",
    name: "Marcus Chen",
    role: "Senior Correspondent, Asia",
    bio: "Marcus reports from Singapore on Asian regulatory developments, exchanges, and institutional flows across the digital asset economy.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop",
  },
  {
    slug: "isabelle-laurent",
    name: "Isabelle Laurent",
    role: "Technology Editor",
    bio: "Isabelle writes about cryptography, scaling, and the intersection of artificial intelligence and distributed systems.",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80&auto=format&fit=crop",
  },
  {
    slug: "james-okonkwo",
    name: "James Okonkwo",
    role: "Investigations",
    bio: "James leads long-form investigative reporting into financial crime, exchange governance, and on-chain forensics.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&auto=format&fit=crop",
  },
  {
    slug: "sofia-reyes",
    name: "Sofia Reyes",
    role: "Opinion Columnist",
    bio: "Sofia writes a weekly column on monetary policy, sound money theory, and the social dimensions of decentralisation.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80&auto=format&fit=crop",
  },
  {
    slug: "henry-sutton",
    name: "Henry Sutton",
    role: "Research Lead",
    bio: "Henry produces quarterly market structure research and on-chain data analysis for institutional readers.",
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
  `In the past quarter, ${topic.toLowerCase()} has become a focal point for institutional allocators and policy makers alike. Trading desks in London, Singapore and New York report a marked shift in flows, with capital rotating from speculative satellites toward the largest, most liquid digital assets.`,
  `Officials at several major central banks have, in private remarks and increasingly in public testimony, signalled that digital asset markets can no longer be treated as a peripheral concern. The asset class has crossed thresholds of size, custody quality and counterparty integration that demand a more deliberate supervisory framework.`,
  `Industry executives interviewed for this article describe a market that is maturing in uneven steps. Custody and settlement infrastructure has improved beyond recognition since the cycle of 2022; trading venues are consolidating; and a generation of compliance-led intermediaries has emerged to bridge traditional finance and the on-chain economy.`,
  `Still, the structural questions remain unresolved. How should the disclosure regime for token issuers be designed? Where does the boundary between a financial instrument and a piece of digital infrastructure sit? And which jurisdictions will, in time, host the venues where the next decade of price discovery takes place?`,
  `For now, the answers are being negotiated quietly, in working groups and bilateral meetings that rarely surface in the press. What is increasingly clear is that the conversation has moved on from whether digital assets will form part of the global financial system, and turned instead to the terms on which they will do so.`,
  `Analysts at several large banks have begun publishing dedicated research on stablecoin issuance, on-chain credit, and tokenised treasuries. The reports, once treated as niche, now circulate alongside conventional fixed income notes on the morning trading floors.`,
  `Whether this institutional embrace marks the beginning of a longer cycle of integration, or simply another turn of a familiar wheel, will depend in part on the regulatory architecture that emerges in the coming year.`,
];

export const ARTICLES: Article[] = [
  {
    slug: "bitcoin-institutional-allocation-crosses-threshold",
    title: "Bitcoin Crosses a Threshold as Institutional Allocators Quietly Rewrite Their Mandates",
    subtitle:
      "Pension funds and sovereign wealth managers are no longer asking whether to hold digital assets, but how much, where and through whom.",
    category: "Bitcoin",
    author: "eleanor-vance",
    date: "June 19, 2026",
    readingTime: 9,
    excerpt:
      "A quiet but unmistakable shift is underway in the offices of the world's largest asset allocators, where the question is no longer whether digital assets belong on the balance sheet.",
    image: IMG.trading,
    featured: true,
    body: longBody("Bitcoin"),
    pullQuote:
      "We are past the point of debating whether digital assets exist. The conversation now is about portfolio construction.",
  },
  {
    slug: "ethereum-restaking-rewires-yield-curve",
    title: "Ethereum's Restaking Economy Is Quietly Rewiring the Crypto Yield Curve",
    subtitle:
      "A new layer of programmable security is reshaping how capital is priced across the Ethereum ecosystem.",
    category: "Ethereum",
    author: "isabelle-laurent",
    date: "June 18, 2026",
    readingTime: 11,
    excerpt:
      "Restaking has matured from a curiosity into a foundational primitive, with billions in collateral now backing a growing constellation of services.",
    image: IMG.ethereum,
    featured: true,
    body: longBody("Ethereum"),
    pullQuote:
      "Restaking has become the equivalent of a term structure for crypto-native capital.",
  },
  {
    slug: "brussels-mica-second-wave",
    title: "Brussels Prepares a Second Wave of Digital Asset Rules as MiCA's Limits Emerge",
    subtitle:
      "Officials acknowledge that the bloc's landmark framework, barely two years old, will need targeted revisions.",
    category: "Regulation",
    author: "marcus-chen",
    date: "June 17, 2026",
    readingTime: 8,
    excerpt:
      "European policy makers are drafting amendments to address stablecoin reserves, decentralised finance and cross-border custody gaps.",
    image: IMG.capitol,
    body: longBody("European regulation"),
  },
  {
    slug: "stablecoin-treasury-bills",
    title: "Stablecoin Issuers Become a Quiet but Material Buyer of Short-Dated Treasuries",
    subtitle:
      "The combined reserve holdings of the largest dollar-pegged tokens now exceed those of many mid-sized sovereigns.",
    category: "Markets",
    author: "henry-sutton",
    date: "June 17, 2026",
    readingTime: 7,
    excerpt:
      "An asset class once dismissed as marginal is now exerting a measurable influence on the U.S. front-end.",
    image: IMG.charts,
    body: longBody("Stablecoins"),
  },
  {
    slug: "singapore-licensing-regime-tightens",
    title: "Singapore Tightens Its Licensing Regime as Hong Kong Courts Global Exchanges",
    subtitle: "A subtle reordering of Asia's crypto capitals is under way.",
    category: "Regulation",
    author: "marcus-chen",
    date: "June 16, 2026",
    readingTime: 6,
    excerpt:
      "MAS officials are recalibrating rules that once made the city-state the default home for the industry's Asia operations.",
    image: IMG.asia,
    body: longBody("Asian regulation"),
  },
  {
    slug: "the-quiet-rise-of-tokenised-funds",
    title: "The Quiet Rise of Tokenised Funds Inside the World's Largest Asset Managers",
    subtitle:
      "What began as a pilot at one Wall Street firm has become a coordinated push across the industry.",
    category: "Markets",
    author: "eleanor-vance",
    date: "June 15, 2026",
    readingTime: 10,
    excerpt:
      "Inside a months-long effort to move billions of dollars of money-market exposure on-chain.",
    image: IMG.city,
    featured: true,
    body: longBody("Tokenisation"),
    pullQuote: "Tokenisation is the boring revolution. That is precisely why it will matter.",
  },
  {
    slug: "an-interview-with-the-architect-of-the-merge",
    title: "An Interview with the Quiet Architect Behind Ethereum's Hardest Decisions",
    subtitle:
      "On consensus, conflict, and the responsibility of designing a monetary system in public.",
    category: "Interviews",
    author: "isabelle-laurent",
    date: "June 14, 2026",
    readingTime: 14,
    excerpt:
      "An unusually candid conversation about the weight of governing infrastructure that secures hundreds of billions of dollars.",
    image: IMG.meeting,
    body: longBody("Ethereum governance"),
    pullQuote: "You do not get to choose whether your work has political consequences. You only choose whether you face them.",
  },
  {
    slug: "the-case-against-perpetual-stimulus",
    title: "Opinion: The Case Against Perpetual Stimulus Has Never Been Made More Clearly",
    subtitle: "Sound money is not a slogan. It is, increasingly, a constituency.",
    category: "Opinion",
    author: "sofia-reyes",
    date: "June 13, 2026",
    readingTime: 5,
    excerpt:
      "A generation that came of age after the financial crisis has built a parallel financial system. We should take its arguments seriously.",
    image: IMG.abstract,
    body: longBody("Monetary policy"),
  },
  {
    slug: "defi-credit-markets-quietly-mature",
    title: "DeFi Credit Markets Quietly Mature as Institutional Lenders Step In",
    subtitle:
      "On-chain credit has moved beyond reflexive yield farming into something resembling a real fixed income market.",
    category: "Altcoins",
    author: "henry-sutton",
    date: "June 12, 2026",
    readingTime: 9,
    excerpt:
      "The latest cycle of decentralised lending platforms has attracted a different kind of counterparty.",
    image: IMG.defi,
    body: longBody("Decentralised finance"),
  },
  {
    slug: "mining-power-consumption-grid-deal",
    title: "Texas Miners Strike a New Bargain with the Grid as Demand Pressures Mount",
    subtitle: "Operators are being paid to switch off. The implications run further than they appear.",
    category: "Technology",
    author: "james-okonkwo",
    date: "June 11, 2026",
    readingTime: 7,
    excerpt:
      "A previously informal arrangement is becoming a structural feature of the wholesale electricity market.",
    image: IMG.mining,
    body: longBody("Mining and energy"),
  },
  {
    slug: "the-exchange-that-rebuilt-itself",
    title: "The Exchange That Rebuilt Itself: Inside an Eighteen-Month Compliance Overhaul",
    subtitle: "A case study in how a once-controversial venue tried to earn back trust.",
    category: "Editorials",
    author: "james-okonkwo",
    date: "June 10, 2026",
    readingTime: 12,
    excerpt:
      "Internal documents, supervisory letters and dozens of interviews describe a costly transformation still in progress.",
    image: IMG.newsroom,
    body: longBody("Exchange governance"),
    pullQuote: "Trust, once lost, is rebuilt only at considerable expense and over years, not quarters.",
  },
  {
    slug: "podcast-the-week-in-markets",
    title: "Podcast: The Week in Markets — Volatility, Flows, and the Fed",
    subtitle: "Episode 142 of our flagship podcast on global digital asset markets.",
    category: "Podcasts",
    author: "eleanor-vance",
    date: "June 09, 2026",
    readingTime: 38,
    excerpt:
      "A 38-minute conversation with two senior traders on the week's most consequential moves.",
    image: IMG.podcast,
    body: longBody("Markets podcast"),
  },
  {
    slug: "research-q2-market-structure",
    title: "Research Report: Q2 Market Structure and the Reshaping of Liquidity",
    subtitle: "Our quarterly review of venue concentration, spreads and the rise of on-chain execution.",
    category: "Research",
    author: "henry-sutton",
    date: "June 08, 2026",
    readingTime: 22,
    excerpt:
      "Sixty-eight pages of data, charts and interviews on how digital asset market structure is evolving.",
    image: IMG.research,
    body: longBody("Market structure"),
  },
  {
    slug: "ai-and-onchain-data-pipelines",
    title: "How AI Is Quietly Becoming the Most Important Reader of On-Chain Data",
    subtitle: "Inference at scale is changing what it means to monitor a public ledger.",
    category: "Technology",
    author: "isabelle-laurent",
    date: "June 07, 2026",
    readingTime: 8,
    excerpt:
      "A new generation of analytics firms is using large language models to interpret blockchain activity in near real time.",
    image: IMG.server,
    body: longBody("AI and blockchain"),
  },
  {
    slug: "conference-davos-side-meetings",
    title: "From the Sidelines of Davos: The Quieter Conversations About Digital Money",
    subtitle: "Officials and executives describe a markedly different tone behind closed doors.",
    category: "Markets",
    author: "marcus-chen",
    date: "June 06, 2026",
    readingTime: 6,
    excerpt:
      "The public communiqués say one thing. The bilateral meetings, increasingly, say another.",
    image: IMG.conference,
    body: longBody("Davos and digital money"),
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
  { label: "Latest", to: "/latest" },
  { label: "Bitcoin", slug: "bitcoin" },
  { label: "Ethereum", slug: "ethereum" },
  { label: "Altcoins", slug: "altcoins" },
  { label: "Markets", slug: "markets" },
  { label: "Regulation", slug: "regulation" },
  { label: "Technology", slug: "technology" },
  { label: "Opinion", slug: "opinion" },
  { label: "Research", slug: "research" },
  { label: "Interviews", slug: "interviews" },
  { label: "Podcasts", slug: "podcasts" },
];

export const FEAR_GREED = { value: 68, label: "Greed" };

export const EVENTS = [
  { date: "Jun 24", title: "FOMC Rate Decision" },
  { date: "Jul 02", title: "ETH Pectra Mainnet Activation" },
  { date: "Jul 09", title: "Token2049 Singapore" },
  { date: "Jul 18", title: "EU MiCA Article 45 Consultation Closes" },
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
