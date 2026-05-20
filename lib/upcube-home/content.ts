export type HomeLinkItem = {
  title: string;
  description?: string;
  href: string;
  tag?: string;
};

export type HomeNarrativeSection = {
  eyebrow: string;
  title: string;
  body: string;
  links: Array<{
    label: string;
    href: string;
  }>;
};

export type HomeProofPoint = {
  title: string;
  description: string;
  href: string;
  links: Array<{
    label: string;
    href: string;
  }>;
};

export type FeatureBand = {
  title: string;
  description: string;
  href: string;
  cta: string;
  tone: "teal" | "amber" | "blue" | "green";
};

export const homeNarrativeSections: HomeNarrativeSection[] = [
  {
    eyebrow: "Company",
    title: "What UpCubeAI is building",
    body: "UpCubeAI is an AI and voice technology company building a connected product ecosystem for the next era of computing. The portfolio already spans AI workspaces, voice platforms, commerce, discovery, cloud infrastructure, entertainment, and operating systems, with each surface designed to feel premium, useful, and clearly connected to the broader company direction.",
    links: [
      { label: "Visit the company page", href: "/company" },
      { label: "Explore all products", href: "/products/upcube-ai" },
    ],
  },
  {
    eyebrow: "Ecosystem",
    title:
      "Intelligence across work, voice, commerce, discovery, cloud, and computing",
    body: "The product family is meant to show how intelligence can move beyond a single assistant and into everyday software and device categories. UpcubeAI and Ethen focus on work, research, and execution, Upcube Voice brings that assistant relationship into future devices, Ventari brings AI commerce and product discovery into retail-scale browsing, Earth and Books expand discovery into place and knowledge, and Cloud, VM Compute, OS, and Mobile OS extend the company story into infrastructure and future computing systems.",
    links: [
      { label: "Read launch stories", href: "/news" },
      { label: "View research", href: "/research" },
    ],
  },
];

export const homeProofPoints: HomeProofPoint[] = [
  {
    title: "AI & Voice",
    description:
      "UpcubeAI and Ethen combine chat, research, artifacts, and governed tool flows into a serious AI workspace, while Upcube Voice extends that assistant relationship into future device experiences.",
    href: "/products/upcube-ai",
    links: [
      { label: "UpcubeAI", href: "/products/upcube-ai" },
      { label: "Upcube Voice", href: "/products/voice" },
      { label: "Ethen launch story", href: "/news/upcube-ai-launch" },
    ],
  },
  {
    title: "Commerce",
    description:
      "Ventari extends the company into AI commerce with large-catalog search, stronger product detail, cleaner category browsing, and recommendation-led discovery.",
    href: "/products/ventari",
    links: [
      { label: "Ventari", href: "/products/ventari" },
      { label: "Commerce story", href: "/news/ventari-launch" },
    ],
  },
  {
    title: "Discovery",
    description:
      "Earth, Books, and Games show how AI discovery can feel clearer across maps, reading, and entertainment, with each product built around navigation, context, and return-worthy browsing.",
    href: "/products/earth",
    links: [
      { label: "Earth", href: "/products/earth" },
      { label: "Books", href: "/products/books" },
      { label: "Games", href: "/products/games" },
    ],
  },
  {
    title: "Cloud & infrastructure",
    description:
      "Upcube Cloud and VM Compute represent the cloud infrastructure layer behind the ecosystem, connecting developer tooling, compute workflows, and systems operations to the consumer-facing products.",
    href: "/products/cloud",
    links: [
      { label: "Cloud", href: "/products/cloud" },
      { label: "VM Compute", href: "/products/vm" },
    ],
  },
  {
    title: "Entertainment",
    description:
      "Games gives the portfolio a dedicated entertainment surface, proving the company can apply product craft and structured discovery patterns beyond work software.",
    href: "/products/games",
    links: [
      { label: "Games", href: "/products/games" },
      { label: "Recent launches", href: "/news" },
    ],
  },
  {
    title: "Computing",
    description:
      "Upcube OS and Upcube Mobile OS represent the long-range computing ambition: AI operating systems designed around trust, clarity, and visible control.",
    href: "/products/upcube-os",
    links: [
      { label: "Upcube OS", href: "/products/upcube-os" },
      { label: "Mobile OS", href: "/products/upcube-mobile-os" },
    ],
  },
];

export const featureBands: FeatureBand[] = [
  {
    title: "AI & Voice",
    description:
      "UpcubeAI, Ethen, and Upcube Voice turn chat, research, artifacts, execution, and future private voice interaction into one connected AI and voice platform direction.",
    href: "/products/upcube-ai",
    cta: "Explore UpcubeAI",
    tone: "green",
  },
  {
    title: "Commerce",
    description:
      "Ventari represents a premium AI commerce product line built for discovery, scale, and stronger product decision-making.",
    href: "/products/ventari",
    cta: "Explore Ventari",
    tone: "amber",
  },
  {
    title: "Discovery",
    description:
      "Earth, Books, and Games extend the company into AI discovery across geospatial, reading, and entertainment experiences.",
    href: "/products/earth",
    cta: "Explore discovery products",
    tone: "teal",
  },
  {
    title: "Cloud & Infrastructure",
    description:
      "Upcube Cloud provides the shared cloud infrastructure and developer layer behind product delivery across the ecosystem.",
    href: "/products/cloud",
    cta: "Explore Cloud",
    tone: "blue",
  },
  {
    title: "Computing",
    description:
      "VM Compute, Upcube OS, and Upcube Mobile OS describe the company’s broader systems, AI operating systems, and future computing direction.",
    href: "/products/vm",
    cta: "View computing products",
    tone: "blue",
  },
  {
    title: "Entertainment",
    description:
      "Games and other consumer-facing surfaces show the company can pair ambitious interfaces with broad entertainment discovery ambition.",
    href: "/products/games",
    cta: "Explore Games",
    tone: "green",
  },
];

export const stories: HomeLinkItem[] = [
  {
    title: "UpcubeAI workspace launch",
    description:
      "How Ethen, research, artifacts, and tool flows come together in one AI workspace.",
    href: "/news/upcube-ai-launch",
    tag: "AI workspace",
  },
  {
    title: "Ventari commerce launch",
    description:
      "A premium commerce story focused on large-scale search, product detail, and discovery momentum.",
    href: "/news/ventari-launch",
    tag: "AI commerce",
  },
  {
    title: "Upcube Earth launch story",
    description:
      "A spatial discovery surface built around 3D globe exploration, layers, and place search.",
    href: "/news/upcube-earth-launch",
    tag: "Discovery",
  },
  {
    title: "Upcube Books launch story",
    description:
      "A calmer approach to book discovery, previews, and saved reading paths.",
    href: "/news/upcube-books-launch",
    tag: "Books",
  },
  {
    title: "Upcube Voice preview",
    description:
      "The voice platform direction for future Upcube devices, built around private push-to-talk and real-time assistance.",
    href: "/news/upcube-voice-preview",
    tag: "AI & Voice",
  },
  {
    title: "Research direction",
    description:
      "Editorial work on architecture, evaluation, and systems thinking across the product family.",
    href: "/research",
    tag: "Research",
  },
  {
    title: "Research notes refresh",
    description:
      "Editorial summaries for architecture, evaluation, and workflow experiments.",
    href: "/research",
    tag: "Updates",
  },
];
