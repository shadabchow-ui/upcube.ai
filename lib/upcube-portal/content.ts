import {
  UPCUBE_AVATAR_URL,
  UPCUBE_BOOKS_URL,
  UPCUBE_CHAT_URL,
  UPCUBE_CLOUD_URL,
  UPCUBE_GAMES_URL,
  UPCUBE_JOBS_URL,
  UPCUBE_NEWS_URL,
  UPCUBE_PLANET_URL,
  UPCUBE_QUANTUM_URL,
  UPCUBE_RESEARCH_URL,
  UPCUBE_VENTARI_URL,
  ecosystemGroups,
  getProductsByGroup,
  upcubeProductLinks,
} from "lib/upcube-universal/product-links";
import { researchLongformPages } from "lib/upcube-portal/longform-pages";

export type PortalTheme = "dark" | "light" | "enterprise" | "safety";

export type PortalNavItem = {
  id: string;
  label: string;
  href: string;
  placeholder?: boolean;
};

export type PortalCardItem = {
  id: string;
  title: string;
  description: string;
  href: string;
  tag?: string;
  status?: "live" | "preview" | "external" | "planned" | "not_provided";
  category?:
    | "Work"
    | "Discovery"
    | "Infrastructure"
    | "Future Platforms"
    | "Learning"
    | "Commerce";
  ctaLabel?: string;
};

export type PortalFooterGroup = {
  id: string;
  title: string;
  links: PortalNavItem[];
};

export type PortalRoutePlan = {
  id: string;
  title: string;
  href: string;
  status: "live" | "planned";
};

export type PortalStatItem = {
  label: string;
  value: string;
  note?: string;
};

export type PortalChecklistItem = {
  title: string;
  description: string;
};

export type PortalFeatureItem = {
  title: string;
  description: string;
};

export type PortalTrustLink = {
  title: string;
  description: string;
  href: string;
};

export type PortalFaqItem = {
  question: string;
  answer: string;
};

export type PortalPrivacySection = {
  title: string;
  body: string[];
};

export type PortalMenuItem = {
  id: string;
  label: string;
  href: string;
  description?: string;
  placeholder?: boolean;
};

export type PortalMenuColumn = {
  id: string;
  label: string;
  items: PortalMenuItem[];
};

export type PortalMenuGroup = {
  id: string;
  title: string;
  items: PortalMenuItem[];
  columns?: PortalMenuColumn[];
};

export type ChatExample = {
  id: string;
  title: string;
  prompt: string;
  outcome: string;
};

export type ChatFeature = {
  id: string;
  title: string;
  description: string;
};

export type ResearchFocusArea = {
  id: string;
  label: string;
  detail: string;
};

export type ResearchCard = {
  id: string;
  tag: string;
  label: string;
  summary: string;
  href: string;
  placeholder?: boolean;
};

export type PortalNewsItem = {
  id: string;
  title: string;
  summary: string;
  statusLabel: string;
  href: string;
};

export type PortalBullet = {
  id: string;
  label: string;
  detail: string;
};

export type PortalHeroCopy = {
  eyebrow: string;
  title: string;
  description: string;
};

export type ProductScaleStat = {
  id: string;
  label: string;
  value: string;
};

export const productScaleStats: ProductScaleStat[] = [
  { id: "books-scale", label: "Books", value: "50M books" },
  { id: "games-scale", label: "Games", value: "400K games" },
  { id: "ventari-scale", label: "Commerce", value: "1B product scale" },
  { id: "jobs-scale", label: "Jobs", value: "8M jobs" },
  { id: "university-scale", label: "Education", value: "100K courses" },
];

export type UpcubeCompanyIdentity = {
  descriptor: string;
  tagline: string;
  oneLiner: string;
  mission: string;
  vision: string;
  belief: string;
  promise: string;
  pillars: string[];
};

export type PortalRoleCard = {
  id: string;
  team: string;
  title: string;
  summary: string;
  mode: string;
};

export type PortalArticleSection = {
  id: string;
  heading: string;
  body: string[];
};

export type PortalArticleLink = {
  id: string;
  label: string;
  href: string;
};

export type PortalArticle = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  author: string;
  publishedLabel: string;
  readTime: string;
  heroNote: string;
  sections: PortalArticleSection[];
  related: PortalArticleLink[];
};

export {
  UPCUBE_AVATAR_URL,
  UPCUBE_BOOKS_URL,
  UPCUBE_CHAT_URL,
  UPCUBE_CLOUD_URL,
  UPCUBE_GAMES_URL,
  UPCUBE_JOBS_URL,
  UPCUBE_NEWS_URL,
  UPCUBE_PLANET_URL,
  UPCUBE_QUANTUM_URL,
  UPCUBE_RESEARCH_URL,
  UPCUBE_VENTARI_URL,
  ecosystemGroups,
};

export const upcubeCompanyIdentity: UpcubeCompanyIdentity = {
  descriptor: "Technology company",
  tagline:
    "A connected family of products across AI, cloud, robotics, education, commerce, and discovery.",
  oneLiner:
    "A technology company building a connected family of products across AI, cloud, robotics, education, commerce, spatial exploration, entertainment, jobs, books, voice, and next-generation operating systems.",
  mission:
    "Make advanced technology feel clear, connected, and useful across the products people rely on every day.",
  vision:
    "Build a connected product ecosystem for work, learning, commerce, infrastructure, robotics, discovery, entertainment, and future computing.",
  belief:
    "The future is not one app. It is a family of focused products that work together.",
  promise:
    "Build premium products with clear interfaces, honest capability framing, and practical value.",
  pillars: [
    "AI & Intelligence",
    "Cloud & Infrastructure",
    "Robotics & Physical AI",
    "Commerce",
    "Discovery",
    "Education & Knowledge",
    "Entertainment",
    "Future Operating Systems",
  ],
};

export const portalPrimaryNav: PortalNavItem[] = [
  { id: "products", label: "Products", href: "/products" },
  { id: "news", label: "News", href: "/news" },
  { id: "research", label: "Research", href: "/research" },
  { id: "trust", label: "Trust", href: "/trust" },
  { id: "company", label: "Company", href: "/company" },
];

export const portalActionNav: PortalNavItem[] = [
  { id: "chat", label: "Try Ethen", href: UPCUBE_CHAT_URL },
  { id: "account", label: "Account", href: "/account" },
];

export const portalNav = portalPrimaryNav;
export const portalFooterLinks: PortalNavItem[] = [
  ...portalPrimaryNav,
  { id: "storefront-footer", label: "Storefront", href: "/search" },
];

export const portalAppLinks: PortalNavItem[] = [
  { id: "app-ethen", label: "Ethen", href: UPCUBE_CHAT_URL },
  { id: "app-account", label: "Account", href: "/account" },
  { id: "app-earth", label: "Earth", href: UPCUBE_PLANET_URL },
  { id: "app-news", label: "News", href: UPCUBE_NEWS_URL },
  { id: "app-books", label: "Books", href: UPCUBE_BOOKS_URL },
  { id: "app-games", label: "Games", href: UPCUBE_GAMES_URL },
  { id: "app-jobs", label: "Jobs", href: UPCUBE_JOBS_URL },
  { id: "app-cloud", label: "Cloud", href: UPCUBE_CLOUD_URL },
  { id: "app-quantum", label: "Quantum", href: UPCUBE_QUANTUM_URL },
  { id: "app-ventari", label: "Commerce", href: UPCUBE_VENTARI_URL },
];

const portalHomepageStatusById: Record<
  string,
  "live" | "preview" | "external" | "planned" | "not_provided"
> = {
  "upcube-ai": "live",
  books: "live",
  earth: "live",
  games: "live",
  news: "live",
  jobs: "live",
  cloud: "live",
  quantum: "live",
  ventari: "external",
  vm: "planned",
  "upcube-os": "planned",
  "upcube-mobile-os": "planned",
  voice: "preview",
  university: "live",
  research: "preview",
  avatar: "preview",
};

const portalHomepageCardsById: Record<string, PortalCardItem> = {
  "upcube-ai": {
    id: "chat",
    title: "AI",
    description:
      "An AI workspace for chat, research, artifacts, and execution that turns questions into durable work and reusable output.",
    href: "/products/upcube-ai",
    tag: "AI workspace",
    category: "Work",
    ctaLabel: "Open Ethen",
  },
  earth: {
    id: "globe",
    title: "Earth",
    description:
      "A spatial discovery product for maps, terrain, cities, and shareable world exploration.",
    href: "/products/earth",
    tag: "Spatial discovery",
    category: "Discovery",
    ctaLabel: "Explore Earth",
  },
  games: {
    id: "games",
    title: "Games",
    description:
      "Discover across 400K games with releases, genres, platforms, and recommendation paths designed for momentum.",
    href: "/products/games",
    tag: "Entertainment",
    category: "Discovery",
    ctaLabel: "Explore Games",
  },
  books: {
    id: "books",
    title: "Books",
    description:
      "Explore 50M books with previews, saved titles, and a calmer path to discovery.",
    href: "/products/books",
    tag: "Knowledge discovery",
    category: "Discovery",
    ctaLabel: "Browse Books",
  },
  jobs: {
    id: "jobs",
    title: "Jobs",
    description:
      "Browse an 8M-job discovery surface for career exploration and clearer opportunity workflows.",
    href: "/products/jobs",
    tag: "Opportunity",
    category: "Work",
    ctaLabel: "Explore Jobs",
  },
  cloud: {
    id: "cloud",
    title: "Cloud",
    description:
      "The cloud infrastructure and tooling layer behind Upcube builders, systems, and product delivery, made easier to understand.",
    href: "/products/cloud",
    tag: "Cloud infrastructure",
    category: "Infrastructure",
    ctaLabel: "Open Cloud",
  },
  quantum: {
    id: "quantum",
    title: "Quantum",
    description:
      "A beginner-friendly quantum workspace for guided experiments, visual runs, and clear result charts.",
    href: "/products/quantum",
    tag: "Future computing",
    category: "Future Platforms",
    ctaLabel: "Explore Quantum",
  },
  ventari: {
    id: "ventari",
    title: "Commerce",
    description:
      "Commerce technology for marketplace-scale product discovery. Designed to support up to 1 billion products with AI-powered search, PDPs, reviews, recommendations, and brand storefront infrastructure.",
    href: "/products/shopping",
    tag: "AI commerce",
    category: "Commerce",
    ctaLabel: "Explore Commerce",
  },
  vm: {
    id: "vm",
    title: "Cloud VM",
    description:
      "Cloud VMs, networking, storage, and compute workflows for the systems layer behind the Upcube ecosystem.",
    href: "/products/vm",
    tag: "Cloud Infrastructure",
    category: "Infrastructure",
    ctaLabel: "Explore Cloud VMs",
  },
  "upcube-os": {
    id: "upcube-os",
    title: "OS",
    description:
      "An AI operating system direction for desktop computing with visible control, trust, and clarity.",
    href: "/products/upcube-os",
    tag: "AI operating system",
    category: "Future Platforms",
    ctaLabel: "View preview",
  },
  "upcube-mobile-os": {
    id: "upcube-mobile-os",
    title: "Mobile OS",
    description:
      "An AI-native mobile computing direction focused on privacy, trust, and clear interaction.",
    href: "/products/upcube-mobile-os",
    tag: "Future computing",
    category: "Future Platforms",
    ctaLabel: "View preview",
  },
  voice: {
    id: "voice",
    title: "Voice",
    description:
      "AI voice platform for future Upcube devices: headphones, earbuds, home audio, car audio, and companion devices.",
    href: "/products/voice",
    tag: "AI & Voice",
    category: "Future Platforms",
    ctaLabel: "View preview",
  },
  university: {
    id: "university",
    title: "Education",
    description:
      "100K courses with simple $5 course pricing for AI education, product training, and guided learning paths.",
    href: "/products/university",
    tag: "Education & Learning",
    category: "Learning",
    ctaLabel: "Explore Education",
  },
  research: {
    id: "research",
    title: "Research",
    description:
      "A research console for gathering sources, organizing findings, generating briefs, and turning scattered information into clear decisions.",
    href: "/products/research",
    tag: "AI research",
    category: "Work",
    ctaLabel: "Open Research",
  },
  avatar: {
    id: "avatar",
    title: "Avatar",
    description:
      "Create live AI avatars and avatar-led video experiences for websites, demos, training, sales, support, and creator workflows.",
    href: "/products/avatar",
    tag: "AI avatars",
    category: "Work",
    ctaLabel: "Try Avatar",
  },
};

function derivePortalCardStatus(
  productId: string,
  launchHref?: string,
): "live" | "preview" | "external" | "planned" | "not_provided" {
  const forcedStatus = portalHomepageStatusById[productId];
  if (forcedStatus) {
    return forcedStatus;
  }

  if (!launchHref) {
    return "not_provided";
  }

  if (launchHref.includes("ventari.net")) {
    return "external";
  }

  return "live";
}

export const portalHomepageCards: PortalCardItem[] = upcubeProductLinks.flatMap(
  (product) => {
    const baseCard = portalHomepageCardsById[product.id];
    if (!baseCard) {
      return [];
    }

    return [
      {
        ...baseCard,
        status: derivePortalCardStatus(product.id, product.launchHref),
      },
    ];
  },
);

const portalProductPageLinks: PortalNavItem[] = upcubeProductLinks.map(
  (product) => ({
    id: `${product.id}-footer`,
    label: product.label,
    href: product.productHref,
  }),
);

function ecosystemFooterLinks(groupId: string): PortalNavItem[] {
  return getProductsByGroup(groupId).map((product) => ({
    id: `${product.id}-footer`,
    label: product.label,
    href: product.productHref,
  }));
}

export const portalFooterGroups: PortalFooterGroup[] = [
  {
    id: "core",
    title: "Core",
    links: [
      { id: "products-footer", label: "All Products", href: "/products" },
      ...ecosystemFooterLinks("core"),
    ],
  },
  {
    id: "build",
    title: "Build",
    links: ecosystemFooterLinks("build"),
  },
  {
    id: "learn",
    title: "Learn",
    links: ecosystemFooterLinks("learn"),
  },
  {
    id: "explore",
    title: "Explore",
    links: ecosystemFooterLinks("explore"),
  },
  {
    id: "company",
    title: "Company",
    links: [
      { id: "about-footer", label: "Company", href: "/about" },
      { id: "charter-footer", label: "Product Principles", href: "/charter" },
      { id: "foundation-footer", label: "Mission", href: "/foundation" },
      { id: "careers-footer", label: "Careers", href: "/careers" },
      { id: "brand-footer", label: "Brand", href: "/brand" },
      { id: "contact-footer", label: "Contact", href: "/contact" },
      { id: "account-footer", label: "Account", href: "/account" },
      {
        id: "working-together-footer",
        label: "Building With Communities",
        href: "/working-together",
      },
      {
        id: "societal-impact-footer",
        label: "Public Impact",
        href: "/societal-impact",
      },
      {
        id: "founder-letter-footer",
        label: "Founder Letter",
        href: "/founder-letter",
      },
    ],
  },
  {
    id: "trust",
    title: "Trust",
    links: [
      { id: "legal-footer", label: "Legal", href: "/legal" },
      { id: "terms-footer", label: "Terms", href: "/terms" },
      { id: "privacy-footer", label: "Privacy", href: "/privacy" },
      { id: "policies-footer", label: "Policies", href: "/policies" },
      {
        id: "principles-footer",
        label: "Commitments",
        href: "/principles",
      },
      {
        id: "for-organizations-footer",
        label: "For Teams & Builders",
        href: "/for-organizations",
      },
      { id: "safety-footer", label: "Safety", href: "/safety" },
      {
        id: "security-footer",
        label: "Security",
        href: "/security",
      },
      {
        id: "trust-transparency-footer",
        label: "Trust",
        href: "/trust-transparency",
      },
      { id: "status-footer", label: "Status", href: "/status" },
    ],
  },
];

export const portalSocialLinks: PortalNavItem[] = [
  {
    id: "facebook-social",
    label: "Facebook",
    href: "https://www.facebook.com/upcubeinc/",
  },
  {
    id: "linkedin-social",
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/35441477",
  },
  {
    id: "instagram-social",
    label: "Instagram",
    href: "https://www.instagram.com/upcubeai/",
  },
  {
    id: "x-social",
    label: "X",
    href: "https://x.com/upcubeai",
  },
  {
    id: "youtube-social",
    label: "YouTube",
    href: "https://www.youtube.com/@upcubeai",
  },
];

export const portalRoutePlan: PortalRoutePlan[] = [
  { id: "home", title: "Portal Home", href: "/", status: "live" },
  {
    id: "products-overview",
    title: "All Products",
    href: "/products",
    status: "live",
  },
  { id: "core", title: "Core", href: "/core", status: "live" },
  { id: "build", title: "Build", href: "/build", status: "live" },
  { id: "learn", title: "Learn", href: "/learn", status: "live" },
  { id: "explore", title: "Explore", href: "/explore", status: "live" },
  { id: "platform", title: "Platform", href: "/platform", status: "live" },
  { id: "business", title: "Business", href: "/business", status: "live" },
  {
    id: "capabilities",
    title: "Capabilities",
    href: "/capabilities",
    status: "live",
  },
  { id: "news", title: "News", href: "/news", status: "live" },
  { id: "builders", title: "Builders", href: "/builders", status: "live" },
  { id: "teams", title: "Teams", href: "/teams", status: "live" },
  { id: "chat", title: "Chat Overview", href: "/chat", status: "live" },
  {
    id: "research",
    title: "Research Home",
    href: "/research",
    status: "live",
  },
  ...researchLongformPages.map((page) => ({
    id: `research-${page.slug}`,
    title: page.title,
    href: `/research/${page.slug}`,
    status: "live" as const,
  })),
  {
    id: "research-residency",
    title: "Research Fellowship",
    href: "/research/residency",
    status: "live",
  },
  {
    id: "research-economic",
    title: "Economy & Markets",
    href: "/research/economic",
    status: "live",
  },
  {
    id: "enterprise",
    title: "Enterprise",
    href: "/enterprise",
    status: "live",
  },
  { id: "safety", title: "Safety", href: "/safety", status: "live" },
  { id: "faq", title: "FAQ", href: "/faq", status: "live" },
  { id: "privacy", title: "Privacy", href: "/privacy", status: "live" },
  { id: "contact", title: "Contact", href: "/contact", status: "live" },
  { id: "signin", title: "Sign In", href: "/signin", status: "live" },
  { id: "signup", title: "Sign Up", href: "/signup", status: "live" },
  { id: "account", title: "Account", href: "/account", status: "live" },
  {
    id: "account-profile",
    title: "Account Profile",
    href: "/account/profile",
    status: "live",
  },
  {
    id: "account-security",
    title: "Account Security",
    href: "/account/security",
    status: "live",
  },
  {
    id: "account-apps",
    title: "Connected Apps",
    href: "/account/apps",
    status: "live",
  },
  {
    id: "account-privacy",
    title: "Account Privacy",
    href: "/account/privacy",
    status: "live",
  },
  {
    id: "account-billing",
    title: "Account Billing",
    href: "/account/billing",
    status: "live",
  },
  {
    id: "account-storage",
    title: "Account Storage",
    href: "/account/storage",
    status: "live",
  },
  {
    id: "account-help",
    title: "Account Help",
    href: "/account/help",
    status: "live",
  },
  { id: "company", title: "Company", href: "/company", status: "live" },
  { id: "careers", title: "Careers", href: "/careers", status: "live" },
  {
    id: "principles",
    title: "Commitments",
    href: "/principles",
    status: "live",
  },
  {
    id: "legal",
    title: "Legal",
    href: "/legal",
    status: "live",
  },
  {
    id: "working-together",
    title: "Building With Communities",
    href: "/working-together",
    status: "live",
  },
  {
    id: "societal-impact",
    title: "Public Impact",
    href: "/societal-impact",
    status: "live",
  },
  {
    id: "founder-letter",
    title: "Founder Note",
    href: "/founder-letter",
    status: "live",
  },
  {
    id: "for-organizations",
    title: "For Teams & Builders",
    href: "/for-organizations",
    status: "live",
  },
  {
    id: "blog",
    title: "Blog Article",
    href: "/blog/[slug]",
    status: "planned",
  },
];

export const enterpriseStats: PortalStatItem[] = [
  {
    label: "Delivery posture",
    value: "Specification-first",
    note: "Operational controls and contractual commitments are not provided here.",
  },
  {
    label: "Deployment stance",
    value: "Architecture planning",
    note: "Hosting topology and regional controls require confirmed implementation details.",
  },
  {
    label: "Trust posture",
    value: "Claim-limited",
    note: "This page avoids compliance and security guarantees not present in the repo.",
  },
];

export const enterpriseChecklist: PortalChecklistItem[] = [
  {
    title: "Security and privacy review",
    description:
      "Plan procurement, security review, and privacy review as separate workstreams until confirmed controls are documented.",
  },
  {
    title: "Deployment coordination",
    description:
      "Use this page as a routing surface for evaluation and platform discussions, not as a final deployment specification.",
  },
  {
    title: "Commercial readiness",
    description:
      "Pricing, SLAs, procurement steps, and contracting language are not provided in this repo and remain placeholders.",
  },
];

export const enterpriseUseCases: PortalFeatureItem[] = [
  {
    title: "Workspace operations",
    description:
      "Coordinate writing, analysis, and execution workflows inside one product narrative without claiming unverified admin features.",
  },
  {
    title: "Commerce teams",
    description:
      "Support merchandising, launch planning, and catalog coordination with shared AI assistance and clear review checkpoints.",
  },
  {
    title: "Research programs",
    description:
      "Organize experiments, notes, and model evaluations in one environment while leaving evaluation methodology subject to project-specific proof.",
  },
];

export const enterprisePlatformNotes: PortalFeatureItem[] = [
  {
    title: "Shared platform layer",
    description:
      "The repo provides a shared portal shell for product and trust-heavy pages. It does not provide a finalized enterprise platform specification.",
  },
  {
    title: "Extensible route model",
    description:
      "Inner pages are implemented as static App Router routes so they can coexist with the existing commerce storefront and Shopify-backed content pages.",
  },
];

export const safetyPrinciples: PortalChecklistItem[] = [
  {
    title: "Truthful capability framing",
    description:
      "Describe current product behavior conservatively and leave unsupported claims marked as pending or not provided.",
  },
  {
    title: "Human review where needed",
    description:
      "Position UpcubeAI as a tool for assisted work, with responsibility for domain-specific review remaining with the operating team.",
  },
  {
    title: "Continuous improvement",
    description:
      "Evaluation, feedback, and operational safeguards should evolve with the product rather than being treated as one-time guarantees.",
  },
];

export const safetyQualityNotes: PortalFeatureItem[] = [
  {
    title: "Evaluation and quality",
    description:
      "This repo does not include a public benchmark suite or formal safety report, so quality claims are limited to process-oriented language.",
  },
  {
    title: "Security and privacy",
    description:
      "Security controls, data handling rules, and retention policies require confirmed documentation before they can be represented as commitments.",
  },
  {
    title: "Product change management",
    description:
      "Trust-sensitive copy should be updated only when the underlying implementation or reviewed policy text exists in the repo.",
  },
];

export const trustLinks: PortalTrustLink[] = [
  {
    title: "Read the FAQ",
    description:
      "Common questions about current scope, placeholders, and route intent.",
    href: "/faq",
  },
  {
    title: "Review privacy placeholder",
    description:
      "Current privacy page status and the legal text still missing from the repo.",
    href: "/privacy",
  },
  {
    title: "Enterprise overview",
    description:
      "Conservative enterprise positioning without unsupported platform guarantees.",
    href: "/enterprise",
  },
];

export const faqItems: PortalFaqItem[] = [
  {
    question: "What does this FAQ cover today?",
    answer:
      "It covers the current portal implementation, route intent, and areas where legal, compliance, or enterprise details were not provided in the repo.",
  },
  {
    question: "Does the repo provide enterprise compliance claims?",
    answer:
      "No. Certifications, security standards, contractual terms, and admin-control claims were not provided, so this implementation leaves them out.",
  },
  {
    question: "Is there a final privacy policy in this repo?",
    answer:
      "No. The privacy page is a placeholder structure only and should not be treated as binding legal text.",
  },
  {
    question: "Why are some links and promises intentionally limited?",
    answer:
      "The implementation follows a no-guessing rule: unsupported claims, unconfirmed links, and future capabilities remain clearly marked instead of being implied.",
  },
  {
    question: "How do these routes interact with the storefront?",
    answer:
      "They are static App Router pages that sit alongside the commerce storefront. Product, catalog, cart, and checkout behavior remain untouched.",
  },
];

export const privacySections: PortalPrivacySection[] = [
  {
    title: "Placeholder status",
    body: [
      "This page is a placeholder policy-style surface for Upcube products and websites. Reviewed legal text, effective dates, company details, and contact channels were not provided in this repo.",
      "Until approved copy exists in source control, this page should be treated as informational structure only and not as a binding privacy policy.",
    ],
  },
  {
    title: "Data handling notes",
    body: [
      "The repo does not provide a finalized statement for what data is collected, how it is retained, or whether content is used for model training.",
      "Those topics should be filled only from reviewed legal or product documentation, not inferred from design references.",
    ],
  },
  {
    title: "Access and controls",
    body: [
      "User rights workflows, administrative controls, deletion processes, and retention schedules are not documented here.",
      "Any public commitments in these areas require confirmed operational and legal backing before publication.",
    ],
  },
];

export const portalMenuGroups: PortalMenuGroup[] = [
  {
    id: "ecosystem",
    title: "Solutions",
    items: [
      {
        id: "core-menu",
        label: "Core",
        href: "/core",
        description:
          "The shared intelligence and platform layer: AI, workspace, identity, search, and projects.",
      },
      {
        id: "build-menu",
        label: "Build",
        href: "/build",
        description:
          "Cloud infrastructure, compute, robotics, operating systems, and voice platform.",
      },
      {
        id: "learn-menu",
        label: "Learn",
        href: "/learn",
        description:
          "Education, books, and quantum computing: learning paths across the ecosystem.",
      },
      {
        id: "explore-menu",
        label: "Explore",
        href: "/explore",
        description:
          "Earth, News, Games, Commerce, and Jobs: discovery surfaces across Upcube.",
      },
      {
        id: "products-overview-menu",
        label: "All Products",
        href: "/products",
        description: "Every product in the Upcube family grouped by ecosystem.",
      },
    ],
  },
  {
    id: "products",
    title: "Products",
    items: upcubeProductLinks.map((product) => ({
      id: `${product.id}-menu`,
      label: product.label,
      href: product.productHref,
      description: product.description,
    })),
  },
  {
    id: "news",
    title: "News",
    items: [
      {
        id: "news-overview-menu",
        label: "All News",
        href: "/news",
        description: "Latest updates and announcements.",
      },
    ],
  },
  {
    id: "research",
    title: "Research",
    items: [
      {
        id: "research-overview-menu",
        label: "Research Overview",
        href: "/research",
        description: "Research areas and publications.",
      },
      {
        id: "research-residency-menu",
        label: "Research Fellowship",
        href: "/research/residency",
        description: "Research program and fellowship details.",
      },
    ],
  },
  {
    id: "trust",
    title: "Trust",
    items: [
      {
        id: "trust-overview-menu",
        label: "Trust Overview",
        href: "/trust",
        description: "Trust and safety approach.",
      },
      {
        id: "trust-safety-menu",
        label: "Safety",
        href: "/safety",
        description: "Safety approach and principles.",
      },
      {
        id: "trust-security-menu",
        label: "Security",
        href: "/security",
        description: "Security practices and posture.",
      },
      {
        id: "trust-privacy-menu",
        label: "Privacy",
        href: "/privacy",
        description: "Privacy policy and data handling.",
      },
    ],
  },
  {
    id: "company",
    title: "Company",
    items: [
      {
        id: "company-overview-menu",
        label: "Company Overview",
        href: "/company",
        description: "About Upcube and what we build.",
      },
      {
        id: "company-about-menu",
        label: "About",
        href: "/about",
        description: "Our mission, story, and team.",
      },
      {
        id: "company-careers-menu",
        label: "Careers",
        href: "/careers",
        description: "Join the team.",
      },
      {
        id: "company-account-menu",
        label: "Account",
        href: "/account",
        description: "Manage your account settings and preferences.",
      },
    ],
  },
];

export const chatExamples: ChatExample[] = [
  {
    id: "launch-plan",
    title: "Launch planning",
    prompt:
      "Draft a launch plan with milestone checkpoints and validation steps.",
    outcome:
      "Produces a structured rollout plan with review gates and follow-ups.",
  },
  {
    id: "research-synthesis",
    title: "Research synthesis",
    prompt:
      "Summarize source notes into decisions, open questions, and next experiments.",
    outcome:
      "Turns fragmented notes into a concise synthesis for product and research teams.",
  },
  {
    id: "ops-review",
    title: "Ops review",
    prompt:
      "Review workflow risks, blockers, and dependencies before a release cut.",
    outcome:
      "Highlights unresolved risks without overstating readiness or coverage.",
  },
];

export const chatFeatures: ChatFeature[] = [
  {
    id: "structured-work",
    title: "Structured work sessions",
    description:
      "Keep prompts, answers, and next actions in one workspace for repeatable execution.",
  },
  {
    id: "cross-team-context",
    title: "Cross-team context",
    description:
      "Support product, research, and commerce workflows with one shared assistant surface.",
  },
  {
    id: "reviewable-output",
    title: "Reviewable output",
    description:
      "Present plans and summaries in a format that can be reviewed before decisions are made.",
  },
];

export const researchFocusAreas: ResearchFocusArea[] = [
  {
    id: "systems",
    label: "Systems design",
    detail:
      "Implementation notes focused on real routes, components, and validation gates.",
  },
  {
    id: "evaluation",
    label: "Evaluation",
    detail:
      "Quality framing that avoids benchmark claims not present in the repo.",
  },
  {
    id: "product-research",
    label: "Product research",
    detail:
      "Editorial and design exploration grounded in active product surfaces.",
  },
];

export const researchCards: ResearchCard[] = [
  ...researchLongformPages.map((page) => ({
    id: `research-${page.slug}`,
    tag: "Research",
    label: page.title,
    summary: page.description,
    href: `/research/${page.slug}`,
  })),
  {
    id: "portal-iteration",
    tag: "Update",
    label: "Portal iteration placeholder",
    summary:
      "A template article route showing how future updates can be published in the shared portal system.",
    href: "/updates/platform-iteration-placeholder",
  },
  {
    id: "trust-language",
    tag: "Note",
    label: "Trust-language boundaries",
    summary:
      "Working notes on keeping safety, privacy, and enterprise claims conservative.",
    href: "#",
    placeholder: true,
  },
  {
    id: "research-index",
    tag: "Route",
    label: "Research overview",
    summary:
      "The current research route is a static overview that maps future research publishing surfaces.",
    href: "/research",
  },
];

export const portalNewsItems: PortalNewsItem[] = [
  {
    id: "news-quantum-launch",
    title: "Introducing Upcube Quantum",
    summary:
      "Upcube Quantum is a beginner-friendly quantum computing workspace for guided experiments, templates, visual runs, and clear result charts.",
    statusLabel: "Product addition",
    href: "/products/quantum",
  },
  {
    id: "news-portal-refresh",
    title: "UpcubeAI portal visual system refresh",
    summary:
      "Homepage and inner-shell updates focused on consistent dark styling, navigation clarity, and cleaner interaction patterns.",
    statusLabel: "Recent update",
    href: "/news",
  },
  {
    id: "news-globe-updates",
    title: "Upcube Earth spatial interface updates",
    summary:
      "Spatial interface refinements focused on map context, navigation flow, and discovery surfaces in the Earth experience.",
    statusLabel: "Recent update",
    href: "/news",
  },
  {
    id: "news-games-updates",
    title: "Upcube Games directory improvements",
    summary:
      "Directory structure and browsing updates for faster access to featured games and launch highlights.",
    statusLabel: "Recent update",
    href: "https://games.upcube.ai",
  },
  {
    id: "news-books-updates",
    title: "Upcube Books storefront updates",
    summary:
      "Storefront refinements for reading-focused discovery and better surface consistency across book collections.",
    statusLabel: "Recent update",
    href: "https://books.upcube.ai",
  },
  {
    id: "news-cloud-update",
    title: "Upcube Cloud developer tools update",
    summary:
      "Developer tool and cloud workspace improvements centered on clearer entry points and workflow readiness.",
    statusLabel: "Recent update",
    href: "https://cloud.upcube.ai",
  },
  {
    id: "news-jobs-planning",
    title: "Upcube Jobs workflow planning",
    summary:
      "Planning pass for hiring workflow surfacing and clearer pathway alignment to the jobs destination.",
    statusLabel: "Recent update",
    href: "https://jobs.upcube.ai",
  },
  {
    id: "news-avatar-preview",
    title: "Upcube Avatar Cloud preview joins the Upcube ecosystem",
    summary:
      "Live AI avatars, Studio, Interactive Pages, and Avatar API are being added as a preview product for websites, demos, training, sales, support, and creator workflows.",
    statusLabel: "Preview",
    href: "/products/avatar",
  },
  {
    id: "news-research-preview",
    title: "Upcube Research Console enters preview",
    summary:
      "A focused AI research workspace for source collection, synthesis, brief generation, saved findings, and reusable research workflows.",
    statusLabel: "Preview",
    href: "/products/research",
  },
];

export const companyMission: PortalHeroCopy = {
  eyebrow: "Company",
  title: "A technology company for the way you work, discover, and build.",
  description:
    "Upcube is a technology company building a connected family of products across AI, commerce, discovery, cloud infrastructure, entertainment, and computing.",
};

export const companyVisionBullets: PortalBullet[] = [
  {
    id: "vision-products",
    label: "One ecosystem. Many products.",
    detail:
      "AI, cloud, compute, robotics, commerce, education, discovery, and future operating systems designed to work together.",
  },
  {
    id: "vision-execution",
    label: "Products designed to connect",
    detail:
      "Each product stands on its own. Together they form a connected ecosystem for work, learning, infrastructure, and exploration.",
  },
  {
    id: "vision-trust",
    label: "Clear about what we build",
    detail:
      "Ambitious product direction paired with honest language about what is live, what is preview, and what is future.",
  },
];

export const companyWorkAreas: PortalBullet[] = [
  {
    id: "work-ai",
    label: "AI Products",
    detail:
      "Ethen brings chat, research, artifacts, and execution into one AI workspace designed for serious work.",
  },
  {
    id: "work-commerce",
    label: "Commerce Technology",
    detail:
      "Ventari delivers marketplace-scale product discovery with AI-powered search, reviews, recommendations, and brand storefront infrastructure.",
  },
  {
    id: "work-discovery",
    label: "Discovery Products",
    detail:
      "Earth, News, Books, Games, and Jobs help people explore the world, knowledge, entertainment, and opportunity.",
  },
  {
    id: "work-cloud",
    label: "Cloud Infrastructure",
    detail:
      "Developer tools, cloud workflows, storage, networking, and platform services supporting the product ecosystem.",
  },
  {
    id: "work-compute",
    label: "Cloud VMs",
    detail:
      "Virtual machines, storage, networking, and operations inside Upcube Cloud.",
  },
  {
    id: "work-robotics",
    label: "Robotics Operations",
    detail:
      "Mission replay, fleet observability, incident evidence, and policy-aware operations for robot operations teams.",
  },
  {
    id: "work-education",
    label: "Education Platform",
    detail:
      "Structured learning, AI education, product training, and guided paths across the ecosystem.",
  },
  {
    id: "work-platforms",
    label: "Future Platforms",
    detail:
      "OS, Mobile OS, Voice, and Quantum: the next generation of computing interfaces, voice interaction, and quantum exploration.",
  },
];

export const companyEcosystem: PortalCardItem[] = [
  {
    id: "eco-chat",
    title: "AI",
    description:
      "Ethen anchors the ecosystem with AI-led planning, research, artifacts, and execution workflows.",
    href: UPCUBE_CHAT_URL,
    tag: "AI Products",
  },
  {
    id: "eco-ventari",
    title: "Commerce",
    description:
      "Commerce technology with marketplace-scale product discovery, AI-powered search, and brand storefront infrastructure.",
    href: "/products/shopping",
    tag: "Commerce Technology",
  },
  {
    id: "eco-earth",
    title: "Earth",
    description:
      "Spatial discovery for maps, terrain, cities, and shareable world exploration.",
    href: "/products/earth",
    tag: "Discovery",
  },
  {
    id: "eco-cloud",
    title: "Cloud",
    description:
      "Cloud infrastructure and developer tools powering the broader Upcube product ecosystem.",
    href: "/products/cloud",
    tag: "Cloud Infrastructure",
  },
  {
    id: "eco-compute",
    title: "Cloud VM",
    description:
      "Virtual machines, networking, storage, and compute workflows for the systems layer.",
    href: "/products/vm",
    tag: "Cloud Infrastructure",
  },
  {
    id: "eco-robotics",
    title: "Robotics",
    description:
      "Mission replay, fleet observability, and operations software for robotics teams.",
    href: "/products/robotics",
    tag: "Robotics Operations",
  },
  {
    id: "eco-education",
    title: "Education",
    description:
      "Structured learning, AI education, product training, and guided learning paths.",
    href: "/products/university",
    tag: "Education Platform",
  },
  {
    id: "eco-games",
    title: "Games",
    description:
      "Game discovery across releases, genres, platforms, and recommendation paths.",
    href: "/products/games",
    tag: "Entertainment",
  },
  {
    id: "eco-os",
    title: "OS",
    description:
      "Desktop and mobile operating system directions for the next computing interface.",
    href: "/products/upcube-os",
    tag: "Future Platforms",
  },
  {
    id: "eco-quantum",
    title: "Quantum",
    description:
      "A beginner-friendly quantum workspace for guided experiments and visual runs.",
    href: "/products/quantum",
    tag: "Future Platforms",
  },
  {
    id: "eco-voice",
    title: "Voice",
    description:
      "Voice platform for future Upcube devices: headphones, earbuds, home audio, and companion devices.",
    href: "/products/voice",
    tag: "Future Platforms",
  },
  {
    id: "eco-books",
    title: "Books",
    description:
      "Explore 50M books with previews, saved titles, and calmer discovery paths.",
    href: "/products/books",
    tag: "Discovery",
  },
  {
    id: "eco-jobs",
    title: "Jobs",
    description:
      "Browse 8M jobs with clearer discovery and opportunity workflows.",
    href: "/products/jobs",
    tag: "Work",
  },
];

export const careersHero: PortalHeroCopy = {
  eyebrow: "Careers",
  title: "Build the product ecosystem.",
  description:
    "Work on products that connect software, infrastructure, learning, commerce, robotics, and future computing. The work is broad. The standard is simple: make advanced technology feel useful.",
};

export const careersValues: PortalBullet[] = [
  {
    id: "careers-craft",
    label: "Product craft",
    detail: "Care about how a product feels, not only whether it works.",
  },
  {
    id: "careers-breadth",
    label: "Broad thinking",
    detail:
      "Work across software, infrastructure, learning, commerce, robotics, and future computing.",
  },
  {
    id: "careers-clarity",
    label: "Clear standards",
    detail: "Build premium products that people can understand and trust.",
  },
  {
    id: "careers-honesty",
    label: "Honest framing",
    detail:
      "Describe what is live, what is preview, and what is future direction.",
  },
];

export const careersCulture: PortalBullet[] = [
  {
    id: "culture-product",
    label: "Design and engineering together",
    detail:
      "Product craft connects design, systems, and implementation in one continuous process.",
  },
  {
    id: "culture-review",
    label: "Review and iterate",
    detail:
      "Changes are tested, validated, and grounded in real product behavior.",
  },
  {
    id: "culture-breadth",
    label: "Technology breadth",
    detail:
      "Work spans AI, cloud, compute, robotics, commerce, education, and future platforms.",
  },
];

export const careersBenefitsPlaceholders: PortalBullet[] = [
  {
    id: "benefits-status",
    label: "Benefits",
    detail:
      "Not provided. Hiring details and compensation are not provided in current source material.",
  },
  {
    id: "location-status",
    label: "Location",
    detail:
      "Not provided. Work mode, geography, and specific location details are not provided.",
  },
];

export const careersOpenRoles: PortalRoleCard[] = [
  {
    id: "role-product-design",
    team: "Product Design",
    title: "Design the product experience",
    summary:
      "Shape how connected products look, feel, and work across the ecosystem.",
    mode: "Hiring details not provided.",
  },
  {
    id: "role-software-engineering",
    team: "Software Engineering",
    title: "Build the product systems",
    summary:
      "Develop the products, infrastructure, and platforms that power the ecosystem.",
    mode: "Hiring details not provided.",
  },
  {
    id: "role-cloud-infrastructure",
    team: "Cloud and Infrastructure",
    title: "Build the cloud layer",
    summary:
      "Design and operate the cloud infrastructure behind the product family.",
    mode: "Hiring details not provided.",
  },
  {
    id: "role-robotics",
    team: "Robotics Systems",
    title: "Build robotics operations software",
    summary:
      "Create mission replay, fleet observability, and operations tools for robotics teams.",
    mode: "Hiring details not provided.",
  },
  {
    id: "role-commerce",
    team: "Commerce and Discovery",
    title: "Build commerce and discovery products",
    summary:
      "Shape the commerce, books, games, earth, and jobs discovery experiences.",
    mode: "Hiring details not provided.",
  },
  {
    id: "role-education",
    team: "Education Systems",
    title: "Build the learning platform",
    summary:
      "Create structured learning, AI education, and guided training experiences.",
    mode: "Hiring details not provided.",
  },
];

export const portalArticles: PortalArticle[] = [
  {
    slug: "platform-iteration-placeholder",
    category: "Update",
    title: "Platform iteration placeholder",
    summary:
      "A sample update route used to keep the portal article template wired while future editorial content is still placeholder-only.",
    author: "UpcubeAI team",
    publishedLabel: "Placeholder date",
    readTime: "3 min",
    heroNote:
      "Replace this article only when reviewed editorial copy is available in the repo.",
    sections: [
      {
        id: "status",
        heading: "Current status",
        body: [
          "This article exists to keep the updates template functional inside the shared portal system.",
          "It should not be treated as a published news or policy artifact.",
        ],
      },
      {
        id: "next",
        heading: "Next step",
        body: [
          "Future updates can reuse this route shape once titles, summaries, and reviewed body copy are available.",
        ],
      },
    ],
    related: [
      { id: "related-research", label: "Research overview", href: "/research" },
      {
        id: "related-enterprise",
        label: "Enterprise page",
        href: "/enterprise",
      },
    ],
  },
];

export function getPortalArticleBySlug(slug: string) {
  return portalArticles.find((article) => article.slug === slug);
}

export type PortalTextSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type ContactInquiryType = {
  value: string;
  label: string;
};

export type ContactProductOption = {
  value: string;
  label: string;
};

export const contactInquiryTypes: ContactInquiryType[] = [
  { value: "sales", label: "Sales" },
  { value: "partnership", label: "Partnership" },
  { value: "support", label: "Support" },
  { value: "press", label: "Press" },
  { value: "security", label: "Security" },
  { value: "careers", label: "Careers" },
  { value: "education", label: "Education" },
  { value: "cloud-compute", label: "Cloud" },
  { value: "ai-voice", label: "AI / Voice" },
  { value: "commerce", label: "Commerce" },
  { value: "jobs", label: "Jobs" },
  { value: "books", label: "Books" },
  { value: "earth", label: "Earth" },
  { value: "games", label: "Games" },
  { value: "news", label: "News" },
  { value: "os-mobile", label: "OS / Mobile OS" },
  { value: "robotics", label: "Robotics" },
  { value: "other", label: "Other" },
];

export const contactProductOptions: ContactProductOption[] = [
  { value: "ai", label: "AI" },
  { value: "books", label: "Books" },
  { value: "earth", label: "Earth" },
  { value: "games", label: "Games" },
  { value: "news", label: "News" },
  { value: "jobs", label: "Jobs" },
  { value: "cloud", label: "Cloud" },
  { value: "quantum", label: "Quantum" },
  { value: "shopping", label: "Commerce" },
  { value: "compute", label: "Cloud VM" },
  { value: "os", label: "OS" },
  { value: "mobile-os", label: "Mobile OS" },
  { value: "robotics", label: "Robotics" },
  { value: "voice", label: "Voice" },
  { value: "education", label: "Education" },
  { value: "multiple", label: "Multiple products" },
];

export const contactCompanySizeOptions: ContactInquiryType[] = [
  { value: "1", label: "Just me" },
  { value: "2-10", label: "2-10" },
  { value: "11-50", label: "11-50" },
  { value: "51-200", label: "51-200" },
  { value: "201-1000", label: "201-1,000" },
  { value: "1000+", label: "1,000+" },
];

export const principlesSections: PortalTextSection[] = [
  {
    id: "useful",
    title: "Useful before flashy",
    paragraphs: [
      "Every product should solve a real problem. Features should earn their place by making the experience clearer or the workflow faster.",
      "This principles page is directional and product-focused, not a legal commitment document.",
    ],
  },
  {
    id: "premium",
    title: "Premium but simple",
    paragraphs: [
      "Power should not feel complicated. Premium means refined, confident, and honest about what each product does.",
    ],
    bullets: [
      "Every product should feel clear from the first moment.",
      "Power should not come with complexity the user has to untangle.",
      "The ecosystem should make each product more useful, not more crowded.",
    ],
  },
  {
    id: "connected",
    title: "Connected, not cluttered",
    paragraphs: [
      "Products should work together without becoming a maze. Each product stands on its own, but the sum should be greater than the parts.",
    ],
    bullets: [
      "Design for real workflows that cross product boundaries.",
      "Keep navigation simple even as the ecosystem grows.",
      "Each product should have a clear job and a clear boundary.",
    ],
  },
  {
    id: "workflows",
    title: "Built for real workflows",
    paragraphs: [
      "Products should fit how people actually work, learn, discover, and operate.",
    ],
    bullets: [
      "Start with the user's task, not the technology stack.",
      "Prefer inspectable outputs over opaque automation.",
      "Support review workflows that can be audited by operators.",
    ],
  },
  {
    id: "scale",
    title: "Designed for scale",
    paragraphs: [
      "From commerce catalogs with billions of products to infrastructure serving millions of requests, scale should feel invisible.",
    ],
    bullets: [
      "Architect systems that grow without losing clarity.",
      "Plan for scale at every layer: product, data, infrastructure, and operations.",
      "Keep performance and reliability as product features, not afterthoughts.",
    ],
  },
];

export const visionSections: PortalTextSection[] = [
  {
    id: "direction",
    title: "Product direction",
    paragraphs: [
      "Upcube is evolving into a unified work surface across assistant interactions, research synthesis, and operational decision support.",
      "The near-term vision is practical: reduce context switching and increase execution quality with reliable, inspectable workflows.",
    ],
  },
  {
    id: "model",
    title: "Operating model",
    paragraphs: [
      "The current repo positions Upcube as a portal linking product surfaces such as chat, research, and trust pages.",
    ],
    bullets: [
      "Use shared design and content primitives.",
      "Keep claims tied to implemented routes and behaviors.",
      "Expand only when underlying capability and evidence are available.",
    ],
  },
  {
    id: "boundaries",
    title: "Boundaries",
    paragraphs: [
      "This vision page does not define pricing, legal terms, compliance guarantees, or contractual commitments because those facts are not provided here.",
    ],
  },
];

export const howItWorksSections: PortalTextSection[] = [
  {
    id: "flow",
    title: "Workflow loop",
    paragraphs: [
      "A typical Upcube workflow starts from intent capture, continues through structured response generation, and ends with operator review and action.",
    ],
    bullets: [
      "Interpret task intent and required constraints.",
      "Generate structured output with traceable reasoning context.",
      "Route to review, follow-up, or linked portal destinations.",
    ],
  },
  {
    id: "trust",
    title: "Trust boundary",
    paragraphs: [
      "Where certainty is limited, pages and responses should explicitly state what is not provided rather than imply unresolved facts.",
    ],
  },
  {
    id: "delivery",
    title: "Delivery stance",
    paragraphs: [
      "The current implementation is static-route oriented and optimized for clear product communication around real repository state.",
    ],
  },
];

export const contactSections: PortalTextSection[] = [
  {
    id: "status",
    title: "How to reach us",
    paragraphs: [
      "Use the form below to send a message to the Upcube team. We review inquiries across sales, product interest, partnership, press, trust and safety, and general feedback.",
      "This page prepares your request for review. A backend submission handler is not yet deployed, so messages prepared here are not transmitted until a live endpoint is connected.",
    ],
  },
  {
    id: "requests",
    title: "What happens next",
    bullets: [
      "Sales and partnership inquiries are reviewed by the product team.",
      "Product interest helps us understand which Upcube products matter to you.",
      "Trust, safety, and policy questions are reviewed before escalation.",
      "Response SLAs and support hours are not provided in current source material.",
    ],
    paragraphs: [
      "For the fastest path to existing products, use the app launcher or product pages to navigate directly to live destinations.",
    ],
  },
];

export const trustSections: PortalTextSection[] = [
  {
    id: "overview",
    title: "Trust and security overview",
    paragraphs: [
      "This page summarizes current trust posture for Upcube products and websites and links to implemented safety, FAQ, and privacy routes.",
      "It does not assert certifications, compliance frameworks, or audited controls.",
    ],
  },
  {
    id: "principles",
    title: "Trust principles",
    bullets: [
      "Conservative, evidence-bound product claims.",
      "Explicit placeholder status for missing legal or policy details.",
      "Continuous review of capability and risk language.",
    ],
    paragraphs: [
      "Operational and legal commitments should be added only from approved source material.",
    ],
  },
];

export const legalDraftNotice =
  "Reviewed legal copy, legal entity details, effective dates, and policy contacts are not provided in this repo.";

export const privacyPolicySections: PortalTextSection[] = [
  {
    id: "draft",
    title: "Draft privacy policy status",
    paragraphs: [
      legalDraftNotice,
      "This page provides structure only and should not be interpreted as final legal policy text.",
    ],
  },
  {
    id: "categories",
    title: "Policy sections pending source text",
    bullets: [
      "Data collection categories and purposes.",
      "Retention and deletion handling.",
      "Data subject requests and contact process.",
      "Third-party processors and transfer disclosures.",
    ],
    paragraphs: ["None of these sections are finalized in the current repo."],
  },
];

export const termsSections: PortalTextSection[] = [
  {
    id: "draft",
    title: "Draft terms status",
    paragraphs: [
      legalDraftNotice,
      "This page is a non-binding placeholder route for future reviewed terms-of-service content.",
    ],
  },
  {
    id: "topics",
    title: "Terms topics pending legal review",
    bullets: [
      "Eligibility and acceptable use.",
      "Service availability and modifications.",
      "Liability limits and dispute process.",
      "Termination and account controls.",
    ],
    paragraphs: [
      "Final wording and jurisdictional terms are not provided in this repository.",
    ],
  },
];

export const pricingSections: PortalTextSection[] = [
  {
    id: "availability",
    title: "Availability and pricing status",
    paragraphs: [
      "Public pricing tiers are not provided in this repository.",
      "Product availability and commercial terms can vary by product and release stage.",
    ],
    bullets: [
      "Use product pages to review the current public surface for each product.",
      "Use the apps page to open public launch destinations where available.",
      "Use contact and trust pages for procurement and review routing until formal pricing documentation is published.",
    ],
  },
];

export const developersSections: PortalTextSection[] = [
  {
    id: "overview",
    title: "Developer overview",
    paragraphs: [
      "This repository publishes a product-family portal and route-level navigation for developer-relevant surfaces.",
      "It does not provide a finalized public API contract in current source material.",
    ],
  },
  {
    id: "where-to-start",
    title: "Where to start",
    bullets: [
      "Cloud product overview for developer tooling and cloud workflows.",
      "Compute product overview for infrastructure-oriented workflows.",
      "Documentation hub for route-level references and product links.",
      "Status route for operational-status messaging boundaries.",
    ],
    paragraphs: [
      "Treat these routes as navigation and context surfaces until implementation-specific API docs are published.",
    ],
  },
];

export const docsSections: PortalTextSection[] = [
  {
    id: "docs-hub",
    title: "Documentation hub status",
    paragraphs: [
      "A full structured documentation system is not provided in this repository.",
      "This page links to implemented product and portal routes so teams can navigate current source-backed content quickly.",
    ],
  },
];

export const appsSections: PortalTextSection[] = [
  {
    id: "launcher",
    title: "App launcher",
    paragraphs: [
      "This page collects public app launch destinations and product overviews available from current link constants.",
      "Account-gated dashboard behavior is not implemented in this route.",
    ],
  },
];

export const signinSections: PortalTextSection[] = [
  {
    id: "signin-status",
    title: "Sign-in access status",
    paragraphs: [
      "A sign-in destination is not yet provided in this release. Account-based access, authentication, and user dashboards are not implemented in the current portal.",
      "When available, sign-in will let you access saved work, product settings, and connected ecosystem surfaces.",
    ],
    bullets: [
      "Use Ethen to explore the AI workspace without signing in.",
      "Use Contact to reach the team about account or access questions.",
      "Product-specific destinations remain available without authentication.",
    ],
  },
];

export const signupSections: PortalTextSection[] = [
  {
    id: "signup-status",
    title: "Sign-up access status",
    paragraphs: [
      "A sign-up destination is not yet provided in this release. Account creation, registration workflows, and onboarding surfaces are not implemented in the current portal.",
      "When available, sign-up will provide access to workspace features, saved settings, and connected product surfaces.",
    ],
    bullets: [
      "Use Ethen to begin exploring the AI workspace right away.",
      "Use Contact to express interest in early access or account provisioning.",
      "Product discovery pages are fully available without an account.",
    ],
  },
];

export const accountSections: PortalTextSection[] = [
  {
    id: "account-status",
    title: "Account access status",
    paragraphs: [
      "Account management features are not yet provided in this release. Authentication, profile settings, and user dashboards are not implemented in the current portal.",
      "When available, your account will provide access to saved work, product preferences, and connected ecosystem surfaces.",
    ],
    bullets: [
      "Use Ethen to explore the AI workspace without signing in.",
      "Use Contact to reach the team about account or access questions.",
      "Product overview pages remain fully available without an account.",
    ],
  },
  {
    id: "account-features",
    title: "Planned account features",
    paragraphs: [
      "The following account areas are planned but not yet implemented. They are listed here to indicate future product direction without implying current availability.",
    ],
    bullets: [
      "Profile: manage your name, contact details, and personal preferences.",
      "Security: update your password, review active sessions, and manage two-factor authentication.",
      "Notifications: configure product, security, and marketing notification preferences.",
      "Appearance: choose theme, font size, and display preferences.",
    ],
  },
];

export const securitySections: PortalTextSection[] = [
  {
    id: "security-overview",
    title: "Security overview",
    paragraphs: [
      "This route is a security entry point for Upcube products and websites.",
      "Security controls, certifications, and contractual guarantees are not provided in current repo content and are intentionally not claimed here.",
    ],
  },
  {
    id: "related-trust-routes",
    title: "Related trust routes",
    bullets: [
      "Security & Privacy combines placeholder trust language across both topics.",
      "Trust & Transparency explains claim boundaries and placeholder handling.",
      "Safety describes process-oriented product safety framing.",
    ],
    paragraphs: [
      "Use these routes for current context until reviewed policy or compliance artifacts are published.",
    ],
  },
];

export const statusSections: PortalTextSection[] = [
  {
    id: "public-status",
    title: "Public status",
    paragraphs: [
      "Automated public status monitoring is not provided in this repository.",
      "This page is a status landing route that sets expectations and points to trust and contact surfaces.",
    ],
    bullets: [
      "No live uptime dashboard is implemented here.",
      "No incident-history backend is implemented here.",
      "Operational updates should be treated as manual and source-backed when published.",
    ],
  },
];

export const legalSections: PortalTextSection[] = [
  {
    id: "legal-index",
    title: "Legal index",
    paragraphs: [
      "This route indexes current legal and policy pages published for Upcube products and websites.",
      "Reviewed legal entity text, effective dates, and contact details are not fully provided in this repo.",
    ],
    bullets: [
      "Terms of Use",
      "Terms of Service",
      "Privacy",
      "Privacy Policy",
      "Other Policies",
      "Security and trust routes for related context",
    ],
  },
];
