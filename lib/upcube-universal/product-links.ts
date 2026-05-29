export const UPCUBE_CHAT_URL = "https://ethen.upcube.ai";
export const UPCUBE_BOOKS_URL = "https://books.upcube.ai";
export const UPCUBE_PLANET_URL = "https://planet.upcube.ai";
export const UPCUBE_JOBS_URL = "https://jobs.upcube.ai";
export const UPCUBE_GAMES_URL = "https://games.upcube.ai";
export const UPCUBE_CLOUD_URL = "https://cloud.upcube.ai";
export const UPCUBE_QUANTUM_URL = "https://quantum.upcube.ai";
export const UPCUBE_VENTARI_URL = "https://ventari.net";
export const UPCUBE_UNIVERSITY_URL = "https://university.upcube.ai";
export const UPCUBE_NEWS_URL = "https://news.upcube.ai";
export const UPCUBE_RESEARCH_URL = "https://research.upcube.ai";
export const UPCUBE_AVATAR_URL = "https://avatar.upcube.ai";

export type UpcubeProductLink = {
  id: string;
  label: string;
  description: string;
  productHref: string;
  launchHref?: string;
};

export const upcubeProductLinks: UpcubeProductLink[] = [
  {
    id: "upcube-ai",
    label: "AI",
    description: "Chat, tools, research, and workspace intelligence.",
    productHref: "/products/upcube-ai",
    launchHref: UPCUBE_CHAT_URL,
  },
  {
    id: "books",
    label: "Books",
    description: "Book discovery, previews, and reading paths.",
    productHref: "/products/books",
    launchHref: UPCUBE_BOOKS_URL,
  },
  {
    id: "earth",
    label: "Earth",
    description: "Maps, terrain, layers, and shareable globe views.",
    productHref: "/products/earth",
    launchHref: UPCUBE_PLANET_URL,
  },
  {
    id: "games",
    label: "Games",
    description: "Game discovery, releases, and recommendation flows.",
    productHref: "/products/games",
    launchHref: UPCUBE_GAMES_URL,
  },
  {
    id: "news",
    label: "News",
    description:
      "Live news intelligence, AI summaries, topic discovery, and editorial briefing.",
    productHref: "/products/news",
    launchHref: UPCUBE_NEWS_URL,
  },
  {
    id: "jobs",
    label: "Jobs",
    description: "Career and opportunity workflows across Upcube.",
    productHref: "/products/jobs",
    launchHref: UPCUBE_JOBS_URL,
  },
  {
    id: "cloud",
    label: "Cloud",
    description: "Developer tools, cloud workflows, and compute access.",
    productHref: "/products/cloud",
    launchHref: UPCUBE_CLOUD_URL,
  },
  {
    id: "quantum",
    label: "Quantum",
    description:
      "Guided quantum experiments, templates, and visual result charts.",
    productHref: "/products/quantum",
    launchHref: UPCUBE_QUANTUM_URL,
  },
  {
    id: "robotics",
    label: "Robotics",
    description:
      "Mission replay, fleet observability, incident evidence, and robotics operations software.",
    productHref: "/products/robotics",
  },
  {
    id: "ventari",
    label: "Commerce",
    description:
      "Commerce technology, catalog discovery, and brand storefront infrastructure.",
    productHref: "/products/shopping",
    launchHref: UPCUBE_VENTARI_URL,
  },
  {
    id: "vm",
    label: "Cloud VM",
    description: "Virtual machines, networking, storage, and operations.",
    productHref: "/products/vm",
    launchHref: UPCUBE_CLOUD_URL,
  },
  {
    id: "upcube-os",
    label: "OS",
    description: "AI-first desktop operating system overview.",
    productHref: "/products/upcube-os",
  },
  {
    id: "upcube-mobile-os",
    label: "Mobile OS",
    description: "AI-first mobile operating system overview.",
    productHref: "/products/upcube-mobile-os",
  },
  {
    id: "voice",
    label: "Voice",
    description: "AI voice platform for future Upcube devices.",
    productHref: "/products/voice",
  },
  {
    id: "university",
    label: "Education",
    description:
      "AI education, product training, and guided learning paths across the Upcube ecosystem.",
    productHref: "/products/university",
    launchHref: UPCUBE_UNIVERSITY_URL,
  },
  {
    id: "research",
    label: "Research",
    description:
      "AI-native research workspace for evidence synthesis, projects, briefs, and connected knowledge workflows.",
    productHref: "/products/research",
    launchHref: UPCUBE_RESEARCH_URL,
  },
  {
    id: "avatar",
    label: "Avatar",
    description: "AI avatars, studio video, interactive pages, and avatar API.",
    productHref: "/products/avatar",
    launchHref: UPCUBE_AVATAR_URL,
  },
];

export type EcosystemGroupItem = {
  id: string;
  label: string;
  description?: string;
  productHref?: string;
  launchHref?: string;
};

export type EcosystemGroup = {
  id: string;
  label: string;
  title: string;
  items: EcosystemGroupItem[];
};

export const ecosystemGroups: EcosystemGroup[] = [
  {
    id: "core",
    label: "Core",
    title: "Core",
    items: [
      {
        id: "upcube-ai",
        label: "AI",
        description: "Chat, tools, research, and workspace intelligence.",
        productHref: "/products/upcube-ai",
        launchHref: UPCUBE_CHAT_URL,
      },
      {
        id: "research",
        label: "Research",
        description:
          "AI-native research workspace for evidence synthesis, projects, briefs, and connected knowledge workflows.",
        productHref: "/products/research",
        launchHref: UPCUBE_RESEARCH_URL,
      },
      { id: "account", label: "Account" },
      { id: "billing", label: "Billing" },
      { id: "workspace", label: "Workspace" },
      { id: "identity", label: "Identity" },
      { id: "search", label: "Search" },
      { id: "projects", label: "Projects" },
    ],
  },
  {
    id: "build",
    label: "Build",
    title: "Build",
    items: [
      {
        id: "cloud",
        label: "Cloud",
        description: "Developer tools, cloud workflows, and compute access.",
        productHref: "/products/cloud",
        launchHref: UPCUBE_CLOUD_URL,
      },
      {
        id: "robotics",
        label: "Robotics",
        description:
          "Mission replay, fleet observability, incident evidence, and policy-aware operations.",
        productHref: "/products/robotics",
      },
      {
        id: "vm",
        label: "Cloud VM",
        description: "Virtual machines, networking, storage, and operations.",
        productHref: "/products/vm",
        launchHref: UPCUBE_CLOUD_URL,
      },
      {
        id: "upcube-os",
        label: "OS",
        description: "AI-first desktop operating system overview.",
        productHref: "/products/upcube-os",
      },
      {
        id: "upcube-mobile-os",
        label: "Mobile OS",
        description: "AI-first mobile operating system overview.",
        productHref: "/products/upcube-mobile-os",
      },
      {
        id: "voice",
        label: "Voice",
        description: "AI voice platform for future Upcube devices.",
        productHref: "/products/voice",
      },
      {
        id: "avatar",
        label: "Avatar",
        description:
          "AI avatars, studio video, interactive pages, and avatar API.",
        productHref: "/products/avatar",
        launchHref: UPCUBE_AVATAR_URL,
      },
    ],
  },
  {
    id: "learn",
    label: "Learn",
    title: "Learn",
    items: [
      {
        id: "university",
        label: "Education",
        description:
          "AI education, product training, and guided learning paths across the Upcube ecosystem.",
        productHref: "/products/university",
        launchHref: UPCUBE_UNIVERSITY_URL,
      },
      {
        id: "books",
        label: "Books",
        description: "Book discovery, previews, and reading paths.",
        productHref: "/products/books",
        launchHref: UPCUBE_BOOKS_URL,
      },
      {
        id: "quantum",
        label: "Quantum",
        description:
          "Guided quantum experiments, templates, and visual result charts.",
        productHref: "/products/quantum",
        launchHref: UPCUBE_QUANTUM_URL,
      },
    ],
  },
  {
    id: "explore",
    label: "Explore",
    title: "Explore",
    items: [
      {
        id: "earth",
        label: "Earth",
        description: "Maps, terrain, layers, and shareable globe views.",
        productHref: "/products/earth",
        launchHref: UPCUBE_PLANET_URL,
      },
      {
        id: "news",
        label: "News",
        description:
          "Live news intelligence, AI summaries, topic discovery, and editorial briefing.",
        productHref: "/products/news",
        launchHref: UPCUBE_NEWS_URL,
      },
      {
        id: "games",
        label: "Games",
        description: "Game discovery, releases, and recommendation flows.",
        productHref: "/products/games",
        launchHref: UPCUBE_GAMES_URL,
      },
      {
        id: "ventari",
        label: "Commerce",
        description:
          "Commerce technology, catalog discovery, and brand storefront infrastructure.",
        productHref: "/products/shopping",
        launchHref: UPCUBE_VENTARI_URL,
      },
      {
        id: "jobs",
        label: "Jobs",
        description: "Career and opportunity workflows across Upcube.",
        productHref: "/products/jobs",
        launchHref: UPCUBE_JOBS_URL,
      },
    ],
  },
];

export function getProductsByGroup(groupId: string): UpcubeProductLink[] {
  const group = ecosystemGroups.find((g) => g.id === groupId);
  if (!group) return [];
  return group.items
    .filter((item) => item.productHref)
    .map((item) => upcubeProductLinks.find((p) => p.id === item.id))
    .filter((p): p is UpcubeProductLink => p !== undefined);
}

export const upcubeLauncherApps = [
  {
    id: "chat" as const,
    label: "Ethen",
    href: UPCUBE_CHAT_URL,
    iconSrc: "/upcube-app-icons/message.png",
  },
  {
    id: "globe" as const,
    label: "Earth",
    href: UPCUBE_PLANET_URL,
    iconSrc: "/upcube-app-icons/planet.png",
  },
  {
    id: "news" as const,
    label: "News",
    href: UPCUBE_NEWS_URL,
    iconSrc: "/upcube-app-icons/book.png",
  },
  {
    id: "books" as const,
    label: "Books",
    href: UPCUBE_BOOKS_URL,
    iconSrc: "/upcube-app-icons/book.png",
  },
  {
    id: "games" as const,
    label: "Games",
    href: UPCUBE_GAMES_URL,
    iconSrc: "/upcube-app-icons/console.png",
  },
  {
    id: "jobs" as const,
    label: "Jobs",
    href: UPCUBE_JOBS_URL,
    iconSrc: "/upcube-app-icons/briefcase.png",
  },
  {
    id: "cloud" as const,
    label: "Cloud",
    href: UPCUBE_CLOUD_URL,
    iconSrc: "/upcube-app-icons/cloud.png",
  },
  {
    id: "quantum" as const,
    label: "Quantum",
    href: UPCUBE_QUANTUM_URL,
    iconSrc: "/upcube-app-icons/console.png",
  },
  {
    id: "shopping" as const,
    label: "Commerce",
    href: UPCUBE_VENTARI_URL,
    iconSrc: "/upcube-app-icons/shopping.png",
  },
  {
    id: "robotics" as const,
    label: "Robotics",
    href: "/products/robotics",
    iconSrc: "/upcube-app-icons/robot.png",
  },
  {
    id: "os" as const,
    label: "OS",
    href: "/products/upcube-os",
    iconSrc: "/upcube-app-icons/console.png",
  },
  {
    id: "mobile-os" as const,
    label: "Mobile OS",
    href: "/products/upcube-mobile-os",
    iconSrc: "/upcube-app-icons/console.png",
  },
  {
    id: "voice" as const,
    label: "Voice",
    href: "/products/voice",
    iconSrc: "/upcube-app-icons/voice.png",
  },
  {
    id: "education" as const,
    label: "Education",
    href: UPCUBE_UNIVERSITY_URL,
    iconSrc: "/upcube-app-icons/education.png",
  },
  {
    id: "research" as const,
    label: "Research",
    href: UPCUBE_RESEARCH_URL,
    iconSrc: "/upcube-app-icons/console.png",
  },
  {
    id: "avatar" as const,
    label: "Avatar",
    href: UPCUBE_AVATAR_URL,
    iconSrc: "/upcube-app-icons/robot.png",
  },
];
