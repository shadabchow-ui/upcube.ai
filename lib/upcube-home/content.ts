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
    title: "Explore the world in 3D",
    description:
      "Upcube Globe combines geospatial context with AI-native queries for teams building location-aware products.",
    href: "https://planet.upcube.ai",
    cta: "Explore Globe",
    tone: "teal",
  },
  {
    title: "Launch smarter commerce systems",
    description:
      "Use Upcube Commerce workflows to streamline catalog updates, merchandising, and storefront experimentation.",
    href: "#",
    cta: "Explore Commerce",
    tone: "amber",
  },
  {
    title: "Build with open developer rails",
    description:
      "Upcube Repos provides docs, templates, and integrations for teams shipping quickly across the ecosystem.",
    href: "https://cloud.upcube.ai",
    cta: "Open Repos",
    tone: "blue",
  },
  {
    title: "Create, learn, and publish faster",
    description:
      "From AI chat to books and research, one workspace helps teams ideate, refine, and ship faster.",
    href: "https://ethen.upcube.ai",
    cta: "Open Workspace",
    tone: "green",
  },
];

export const stories: HomeLinkItem[] = [
  {
    title: "Upcube Globe dashboard rebuild",
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
    description: "Editorial shelves and smart collections now live in preview.",
    href: "https://books.upcube.ai",
  },
  {
    title: "UpcubeAI workspace update",
    description: "Unified chat, planning, and execution panels for builders.",
    href: "https://ethen.upcube.ai",
  },
  {
    title: "Developer template pack",
    description: "Starter repos for internal tools, APIs, and commerce apps.",
    href: "https://cloud.upcube.ai",
  },
  {
    title: "Research notes refresh",
    description:
      "Editorial summaries for architecture, evaluation, and workflow experiments.",
    href: "/research",
  },
];
