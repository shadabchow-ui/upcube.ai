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
  "The ecosystem spans AI workspaces, cloud infrastructure, robotics, education, commerce, spatial exploration, entertainment, and next-generation operating systems.";

export const homeCapabilityPoints: HomeProofPoint[] = [
  {
    title: "AI & Voice",
    description:
      "A connected intelligence layer for work, creation, and conversation. Ethen brings chat, research, artifacts, and governed tool flows into one AI workspace, while Voice extends that assistant into future device experiences.",
    href: "/products/upcube-ai",
    links: [
      { label: "AI", href: "/products/upcube-ai" },
      { label: "Voice", href: "/products/voice" },
    ],
  },
  {
    title: "Commerce",
    description:
      "Commerce technology for marketplace-scale discovery. Built for billion-product catalogs with AI-powered search, product pages, reviews, recommendations, and brand storefront infrastructure.",
    href: "/products/shopping",
    links: [{ label: "Commerce", href: "/products/shopping" }],
  },
  {
    title: "Discovery",
    description:
      "New ways to explore knowledge, places, news, and entertainment. Earth, News, Books, and Games extend into AI-powered discovery across the world, reading, news intelligence, and interactive entertainment.",
    href: "/products/earth",
    links: [
      { label: "Earth", href: "/products/earth" },
      { label: "News", href: "/products/news" },
      { label: "Books", href: "/products/books" },
      { label: "Games", href: "/products/games" },
    ],
  },
  {
    title: "Education & Learning",
    description:
      "Learning designed for the AI era. Education brings AI education, product training, technical courses, and guided learning paths into the ecosystem.",
    href: "/products/university",
    links: [{ label: "Education", href: "/products/university" }],
  },
  {
    title: "Cloud & Infrastructure",
    description:
      "The foundation behind every product. Cloud provides the shared infrastructure, developer tools, and delivery layer that power the product family.",
    href: "/products/cloud",
    links: [
      { label: "Cloud", href: "/products/cloud" },
      { label: "Cloud VM", href: "/products/vm" },
    ],
  },
  {
    title: "Entertainment",
    description:
      "Consumer discovery at ambitious scale. Games and other entertainment surfaces pair bold interfaces with broad, intelligent discovery experiences.",
    href: "/products/games",
    links: [{ label: "Games", href: "/products/games" }],
  },
  {
    title: "Platforms",
    description:
      "A future direction for intelligent systems. OS and Mobile OS define a broader path toward AI-native operating systems and next-generation computing.",
    href: "/products/upcube-os",
    links: [
      { label: "OS", href: "/products/upcube-os" },
      { label: "Mobile OS", href: "/products/upcube-mobile-os" },
    ],
  },
];

export const featureBands: FeatureBand[] = [
  {
    title: "Ethen",
    description:
      "An AI workspace for chat, research, artifacts, and execution. Turn questions into durable work and reusable output.",
    href: "/products/upcube-ai",
    cta: "Open AI",
    tone: "green",
  },
  {
    title: "Books",
    description:
      "Explore 50M books with previews, saved titles, and a calmer path to discovery.",
    href: "/products/books",
    cta: "Browse Books",
    tone: "teal",
  },
  {
    title: "Earth",
    description:
      "A 3D spatial discovery product for maps, terrain, cities, and shareable world exploration.",
    href: "/products/earth",
    cta: "Explore Earth",
    tone: "teal",
  },
  {
    title: "Games",
    description:
      "Discover across 400K games with releases, genres, platforms, and recommendation paths.",
    href: "/products/games",
    cta: "Explore Games",
    tone: "amber",
  },
  {
    title: "Jobs",
    description:
      "Browse an 8M-job discovery surface for career exploration and clearer opportunity workflows.",
    href: "/products/jobs",
    cta: "Explore Jobs",
    tone: "amber",
  },
  {
    title: "Cloud",
    description:
      "Developer tools, cloud workflows, and compute access. The infrastructure front door for the Upcube ecosystem.",
    href: "/products/cloud",
    cta: "Open Cloud",
    tone: "blue",
  },
  {
    title: "Quantum",
    description:
      "A beginner-friendly quantum workspace for guided experiments, visual runs, and clear result charts.",
    href: "/products/quantum",
    cta: "Explore Quantum",
    tone: "green",
  },
  {
    title: "Commerce",
    description:
      "Commerce technology for marketplace-scale product discovery with AI-powered search and brand storefronts.",
    href: "/products/shopping",
    cta: "Explore Commerce",
    tone: "amber",
  },
  {
    title: "Cloud VM",
    description:
      "Virtual machines, networking, storage, and operations inside Upcube Cloud.",
    href: "/products/vm",
    cta: "Explore Cloud VMs",
    tone: "blue",
  },
  {
    title: "OS",
    description:
      "An AI operating system direction for desktop computing with visible control, trust, and clarity.",
    href: "/products/upcube-os",
    cta: "View preview",
    tone: "blue",
  },
  {
    title: "Mobile OS",
    description:
      "An AI-native mobile computing direction focused on privacy, trust, and clear interaction.",
    href: "/products/upcube-mobile-os",
    cta: "View preview",
    tone: "blue",
  },
  {
    title: "Voice",
    description:
      "AI voice platform for future Upcube devices, built around private push-to-talk and real-time assistance.",
    href: "/products/voice",
    cta: "View preview",
    tone: "green",
  },
  {
    title: "Education",
    description:
      "100K courses with simple $5 course pricing for AI education, product training, and guided learning paths.",
    href: "/products/university",
    cta: "Explore Education",
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
    title: "Upcube Commerce launch",
    description:
      "A commerce technology story built around marketplace-scale search, product discovery, and brand storefront infrastructure.",
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
    title: "Upcube News launch story",
    description:
      "A live news intelligence app for AI-powered summaries, topic discovery, source-linked stories, and briefing-style reading.",
    href: "/news/upcube-news-launch",
    tag: "News intelligence",
  },
  {
    title: "Upcube Voice preview",
    description:
      "A voice platform direction for future Upcube devices, centered on private push-to-talk, real-time assistance, and trusted interaction.",
    href: "/news/upcube-voice-preview",
    tag: "AI & Voice",
  },
  {
    title: "Upcube Education preview",
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
