export const UPCUBE_CHAT_URL = "https://ethen.upcube.ai";
export const UPCUBE_BOOKS_URL = "https://books.upcube.ai";
export const UPCUBE_PLANET_URL = "https://planet.upcube.ai";
export const UPCUBE_JOBS_URL = "https://jobs.upcube.ai";
export const UPCUBE_GAMES_URL = "https://games.upcube.ai";
export const UPCUBE_CLOUD_URL = "https://cloud.upcube.ai";
export const UPCUBE_VENTARI_URL = "https://ventari.net";

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
    id: "ventari",
    label: "Ventari",
    description: "Large-scale commerce search and product discovery.",
    productHref: "/products/ventari",
    launchHref: UPCUBE_VENTARI_URL,
  },
  {
    id: "vm",
    label: "VM Compute",
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
];

export const upcubeLauncherApps = [
  {
    id: "chat" as const,
    label: "Ethen",
    href: UPCUBE_CHAT_URL,
    iconSrc: "/upcube-app-icons/message.png",
  },
  {
    id: "globe" as const,
    label: "Planet",
    href: UPCUBE_PLANET_URL,
    iconSrc: "/upcube-app-icons/planet.png",
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
];
