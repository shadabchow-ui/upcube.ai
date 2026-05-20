export type HomeLinkItem = {
  title: string;
  description?: string;
  href: string;
  tag?: string;
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

export const homeBuildSectionIntro =
  "Upcube is an AI technology company building a connected family of premium products across AI, voice, education, commerce, discovery, cloud infrastructure, entertainment, and future computing. The product family shows how that company story extends from the workspace into learning, retail-scale discovery, infrastructure, and AI-native computing.";

export const homeProofPoints: HomeProofPoint[] = [
  {
    title: "AI & Voice",
    description:
      "A connected intelligence layer for work, creation, and conversation. UpcubeAI and Ethen bring chat, research, artifacts, and governed tool flows into one AI workspace, while Upcube Voice extends that assistant experience into future devices.",
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
      "AI commerce, built for scale. Ventari brings Upcube into premium commerce with large-catalog search, richer product detail, cleaner category browsing, and recommendation-led discovery.",
    href: "/products/ventari",
    links: [
      { label: "Ventari", href: "/products/ventari" },
      { label: "Commerce story", href: "/news/ventari-launch" },
    ],
  },
  {
    title: "Discovery",
    description:
      "New ways to explore knowledge, places, and entertainment. Earth, Books, and Games extend Upcube into AI-powered discovery across the world, reading, and interactive entertainment.",
    href: "/products/earth",
    links: [
      { label: "Earth", href: "/products/earth" },
      { label: "Books", href: "/products/books" },
      { label: "Games", href: "/products/games" },
    ],
  },
  {
    title: "Education & Learning",
    description:
      "Learning designed for the AI era. Upcube University brings AI education, product training, technical courses, and guided learning paths into the ecosystem.",
    href: "/products/university",
    links: [
      { label: "Upcube University", href: "/products/university" },
      {
        label: "University preview",
        href: "/news/upcube-university-preview",
      },
    ],
  },
  {
    title: "Cloud & infrastructure",
    description:
      "The foundation behind every product. Upcube Cloud provides the shared infrastructure, developer tools, and delivery layer that power the Upcube product family.",
    href: "/products/cloud",
    links: [
      { label: "Cloud", href: "/products/cloud" },
      { label: "Compute", href: "/products/vm" },
    ],
  },
  {
    title: "Entertainment",
    description:
      "Consumer discovery at ambitious scale. Games and other entertainment surfaces show how Upcube pairs bold interfaces with broad, intelligent discovery experiences.",
    href: "/products/games",
    links: [
      { label: "Games", href: "/products/games" },
      { label: "Recent launches", href: "/news" },
    ],
  },
  {
    title: "Computing",
    description:
      "A future direction for intelligent systems. VM Compute, Upcube OS, and Upcube Mobile OS define a broader path toward AI-native operating systems, virtualization, and next-generation computing.",
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
      "A connected intelligence layer for work, creation, and conversation. UpcubeAI, Ethen, and Upcube Voice bring chat, research, artifacts, execution, and future private voice interaction into one seamless AI platform direction.",
    href: "/products/upcube-ai",
    cta: "Explore UpcubeAI",
    tone: "green",
  },
  {
    title: "Commerce",
    description:
      "Commerce discovery, reimagined for scale. Ventari is a premium AI commerce product line built for large catalogs, smarter discovery, and more confident product decisions.",
    href: "/products/ventari",
    cta: "Explore Ventari",
    tone: "amber",
  },
  {
    title: "Discovery",
    description:
      "New ways to explore knowledge, places, and entertainment. Earth, Books, and Games extend Upcube into AI-powered discovery across the world, reading, and interactive entertainment.",
    href: "/products/earth",
    cta: "Explore discovery products",
    tone: "teal",
  },
  {
    title: "Education & Learning",
    description:
      "Learning designed for the AI era. Upcube University brings AI education, product training, technical courses, and guided learning paths into the ecosystem.",
    href: "/products/university",
    cta: "Explore University",
    tone: "green",
  },
  {
    title: "Cloud & Infrastructure",
    description:
      "The foundation behind every product. Upcube Cloud provides the shared infrastructure, developer tools, and delivery layer that power the Upcube product family.",
    href: "/products/cloud",
    cta: "Explore Cloud",
    tone: "blue",
  },
  {
    title: "Computing",
    description:
      "A future direction for intelligent systems. VM Compute, Upcube OS, and Upcube Mobile OS define a broader path toward AI-native operating systems, virtualization, and next-generation computing.",
    href: "/products/vm",
    cta: "View computing products",
    tone: "blue",
  },
  {
    title: "Entertainment",
    description:
      "Consumer discovery at ambitious scale. Games and other entertainment surfaces show how Upcube pairs bold interfaces with broad, intelligent discovery experiences.",
    href: "/products/games",
    cta: "Explore Games",
    tone: "green",
  },
];

export const stories: HomeLinkItem[] = [
  {
    title: "UpcubeAI workspace launch",
    description:
      "How Ethen brings research, artifacts, execution, and governed tool flows together in one serious AI workspace.",
    href: "/news/upcube-ai-launch",
    tag: "AI workspace",
  },
  {
    title: "Ventari commerce launch",
    description:
      "A premium commerce story built around large-scale search, richer product detail, and discovery momentum.",
    href: "/news/ventari-launch",
    tag: "AI commerce",
  },
  {
    title: "Upcube Earth launch story",
    description:
      "A spatial discovery experience designed for 3D globe exploration, intelligent layers, terrain, and place search.",
    href: "/news/upcube-earth-launch",
    tag: "Discovery",
  },
  {
    title: "Upcube Books launch story",
    description:
      "A calmer, more thoughtful way to discover books through previews, saved titles, and guided reading paths.",
    href: "/news/upcube-books-launch",
    tag: "Books",
  },
  {
    title: "Upcube Voice preview",
    description:
      "A voice platform direction for future Upcube devices, centered on private push-to-talk, real-time assistance, and trusted interaction.",
    href: "/news/upcube-voice-preview",
    tag: "AI & Voice",
  },
  {
    title: "Upcube University preview",
    description:
      "Learning paths, product training, and ecosystem education designed for the AI age.",
    href: "/news/upcube-university-preview",
    tag: "Education & Learning",
  },
  {
    title: "Research direction",
    description:
      "Editorial work on architecture, evaluation, and systems thinking across the Upcube product family.",
    href: "/research",
    tag: "Research",
  },
  {
    title: "Research notes refresh",
    description:
      "Fresh editorial summaries covering architecture, evaluation, workflow experiments, and product development progress.",
    href: "/research",
    tag: "Updates",
  },
];
