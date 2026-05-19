export type HomeLinkItem = {
  title: string;
  description?: string;
  href: string;
  tag?: string;
};

export type FeatureBand = {
  title: string;
  description: string;
  href: string;
  cta: string;
  tone: "teal" | "amber" | "blue" | "green";
};

export const featureBands: FeatureBand[] = [
  {
    title: "AI",
    description:
      "UpcubeAI and Ethen turn chat, research, artifacts, and execution into one serious artificial intelligence workspace.",
    href: "https://ethen.upcube.ai",
    cta: "Try Ethen",
    tone: "green",
  },
  {
    title: "Commerce",
    description:
      "Ventari represents a premium commerce product line built for discovery, scale, and stronger product decision-making.",
    href: "/products/ventari",
    cta: "Explore Ventari",
    tone: "amber",
  },
  {
    title: "Discovery",
    description:
      "Earth, Books, and Games extend the company into geospatial, reading, and entertainment discovery experiences.",
    href: "https://planet.upcube.ai",
    cta: "Explore Earth",
    tone: "teal",
  },
  {
    title: "Cloud & Infrastructure",
    description:
      "Upcube Cloud provides the shared developer and infrastructure layer behind product delivery across the ecosystem.",
    href: "https://cloud.upcube.ai",
    cta: "Open Cloud",
    tone: "blue",
  },
  {
    title: "Computing",
    description:
      "VM Compute, Upcube OS, and Upcube Mobile OS describe the company’s broader systems and computing direction.",
    href: "/products/vm",
    cta: "View computing products",
    tone: "blue",
  },
  {
    title: "Entertainment",
    description:
      "Games and other consumer-facing surfaces show the company can pair ambitious interfaces with broad product ambition.",
    href: "https://games.upcube.ai",
    cta: "Open Games",
    tone: "green",
  },
];

export const stories: HomeLinkItem[] = [
  {
    title: "Upcube Earth interface refresh",
    description: "A faster map shell with clearer overlays and search state.",
    href: "https://planet.upcube.ai",
  },
  {
    title: "Games directory launch",
    description: "A new index for curated games, creators, and releases.",
    href: "https://games.upcube.ai",
  },
  {
    title: "Upcube Books storefront",
    description: "Editorial shelves and smart collections for book discovery.",
    href: "https://books.upcube.ai",
  },
  {
    title: "UpcubeAI workspace update",
    description: "Unified chat, planning, and execution panels for builders.",
    href: "https://ethen.upcube.ai",
  },
  {
    title: "Developer template pack",
    description:
      "Starter templates for internal tools, APIs, and commerce apps.",
    href: "https://cloud.upcube.ai",
  },
  {
    title: "Research notes refresh",
    description:
      "Editorial summaries for architecture, evaluation, and workflow experiments.",
    href: "/research",
  },
];
