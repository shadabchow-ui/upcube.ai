import {
  UPCUBE_BOOKS_URL,
  UPCUBE_CHAT_URL,
  UPCUBE_CLOUD_URL,
  UPCUBE_GAMES_URL,
  UPCUBE_JOBS_URL,
  UPCUBE_PLANET_URL,
  UPCUBE_VENTARI_URL,
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

export type PortalMenuGroup = {
  id: string;
  title: string;
  items: PortalMenuItem[];
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
  { id: "ventari-scale", label: "Ventari", value: "100M products" },
  { id: "jobs-scale", label: "Jobs", value: "8M jobs" },
  { id: "university-scale", label: "University", value: "100K courses" },
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
  UPCUBE_BOOKS_URL,
  UPCUBE_CHAT_URL,
  UPCUBE_CLOUD_URL,
  UPCUBE_GAMES_URL,
  UPCUBE_JOBS_URL,
  UPCUBE_PLANET_URL,
  UPCUBE_VENTARI_URL,
};

export const upcubeCompanyIdentity: UpcubeCompanyIdentity = {
  descriptor: "AI technology company",
  tagline:
    "Connected intelligence for the way you work, discover, build, and imagine what's next.",
  oneLiner:
    "An AI technology company building a connected family of premium products across AI, voice, education, commerce, discovery, cloud infrastructure, entertainment, and future computing.",
  mission:
    "Upcube builds a connected family of premium products for work, discovery, commerce, cloud infrastructure, entertainment, voice, education, and the next era of computing.",
  vision:
    "The product family connects workspaces, learning, retail-scale discovery, infrastructure, and AI-native systems designed for what comes next.",
  belief:
    "Intelligence should feel useful, connected, and clear across the tools people rely on every day.",
  promise:
    "Turn powerful systems into clear, trustworthy experiences without overstating what is live.",
  pillars: [
    "AI & Voice",
    "Education & Learning",
    "Commerce",
    "Discovery",
    "Cloud & Infrastructure",
    "Computing",
    "Entertainment",
  ],
};

export const portalPrimaryNav: PortalNavItem[] = [
  { id: "products", label: "Products", href: "/products/upcube-ai" },
  { id: "news", label: "News", href: "/news" },
  { id: "research", label: "Research", href: "/research" },
  { id: "trust", label: "Trust", href: "/trust" },
  { id: "company", label: "Company", href: "/company" },
];

export const portalActionNav: PortalNavItem[] = [
  { id: "chat", label: "Try Ethen", href: UPCUBE_CHAT_URL },
];

export const portalNav = portalPrimaryNav;
export const portalFooterLinks: PortalNavItem[] = [
  ...portalPrimaryNav,
  { id: "storefront-footer", label: "Storefront", href: "/search" },
];

export const portalAppLinks: PortalNavItem[] = [
  { id: "app-ethen", label: "Ethen", href: UPCUBE_CHAT_URL },
  { id: "app-earth", label: "Earth", href: UPCUBE_PLANET_URL },
  { id: "app-books", label: "Books", href: UPCUBE_BOOKS_URL },
  { id: "app-games", label: "Games", href: UPCUBE_GAMES_URL },
  { id: "app-jobs", label: "Jobs", href: UPCUBE_JOBS_URL },
  { id: "app-cloud", label: "Cloud", href: UPCUBE_CLOUD_URL },
  { id: "app-ventari", label: "Ventari", href: UPCUBE_VENTARI_URL },
];

const portalHomepageStatusById: Record<
  string,
  "live" | "preview" | "external" | "planned" | "not_provided"
> = {
  "upcube-ai": "live",
  books: "live",
  earth: "live",
  games: "live",
  jobs: "live",
  cloud: "live",
  ventari: "external",
  vm: "planned",
  "upcube-os": "planned",
  "upcube-mobile-os": "planned",
  voice: "preview",
  university: "live",
};

const portalHomepageCardsById: Record<string, PortalCardItem> = {
  "upcube-ai": {
    id: "chat",
    title: "UpcubeAI",
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
      "The cloud infrastructure and tooling layer behind Upcube builders, systems, and product delivery — made easier to understand.",
    href: "/products/cloud",
    tag: "Cloud infrastructure",
    category: "Infrastructure",
    ctaLabel: "Open Cloud",
  },
  ventari: {
    id: "ventari",
    title: "Ventari",
    description:
      "A premium commerce product built for 100M products with large-scale search, product detail, and refined discovery.",
    href: "/products/ventari",
    tag: "AI commerce",
    category: "Commerce",
    ctaLabel: "Open Ventari",
  },
  vm: {
    id: "vm",
    title: "Compute",
    description:
      "Virtual machines, networking, storage, and compute workflows for the systems layer behind the Upcube ecosystem.",
    href: "/products/vm",
    tag: "Compute",
    category: "Infrastructure",
    ctaLabel: "Learn more",
  },
  "upcube-os": {
    id: "upcube-os",
    title: "Upcube OS",
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
      "AI voice platform for future Upcube devices — headphones, earbuds, home audio, car audio, and companion devices.",
    href: "/products/voice",
    tag: "AI & Voice",
    category: "Future Platforms",
    ctaLabel: "View preview",
  },
  university: {
    id: "university",
    title: "University",
    description:
      "100K courses with simple $5 course pricing for AI education, product training, and guided learning paths.",
    href: "/products/university",
    tag: "Education & Learning",
    category: "Learning",
    ctaLabel: "Explore University",
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

export const portalFooterGroups: PortalFooterGroup[] = [
  {
    id: "apps",
    title: "Products",
    links: portalProductPageLinks,
  },
  {
    id: "terms-policies",
    title: "Terms & Policies",
    links: [
      { id: "legal-footer", label: "Legal Index", href: "/legal" },
      { id: "terms-footer", label: "Terms of Use", href: "/terms" },
      { id: "privacy-footer", label: "Privacy Policy", href: "/privacy" },
      { id: "policies-footer", label: "Other Policies", href: "/policies" },
      {
        id: "principles-footer",
        label: "AI Principles",
        href: "/principles",
      },
      {
        id: "for-organizations-footer",
        label: "For Organizations",
        href: "/for-organizations",
      },
    ],
  },
  {
    id: "about-us",
    title: "About Us",
    links: [
      { id: "about-footer", label: "About Us", href: "/about" },
      { id: "charter-footer", label: "Our Charter", href: "/charter" },
      { id: "foundation-footer", label: "Foundation", href: "/foundation" },
      { id: "careers-footer", label: "Careers", href: "/careers" },
      { id: "brand-footer", label: "Brand Help Center", href: "/brand" },
      {
        id: "working-together-footer",
        label: "Working Together",
        href: "/working-together",
      },
      {
        id: "societal-impact-footer",
        label: "Societal Impact",
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
    id: "safety",
    title: "Safety",
    links: [
      { id: "safety-footer", label: "Safety Approach", href: "/safety" },
      {
        id: "security-footer",
        label: "Security",
        href: "/security",
      },
      {
        id: "security-privacy-footer",
        label: "Security & Privacy",
        href: "/security-privacy",
      },
      {
        id: "trust-transparency-footer",
        label: "Trust & Transparency",
        href: "/trust-transparency",
      },
      { id: "status-footer", label: "Status", href: "/status" },
    ],
  },
  {
    id: "research-index",
    title: "Research Index",
    links: [
      {
        id: "research-overview-footer",
        label: "Research Overview",
        href: "/research",
      },
      {
        id: "research-residency-footer",
        label: "Research Residency",
        href: "/research/residency",
      },
      {
        id: "research-economic-footer",
        label: "Economic Research",
        href: "/research/economic",
      },
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
    id: "products",
    title: "Products",
    href: "/products/upcube-ai",
    status: "live",
  },
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
    title: "Research Overview",
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
    title: "Research Residency",
    href: "/research/residency",
    status: "live",
  },
  {
    id: "research-economic",
    title: "Economic Research",
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
  { id: "company", title: "Company", href: "/company", status: "live" },
  { id: "careers", title: "Careers", href: "/careers", status: "live" },
  {
    id: "principles",
    title: "AI Principles",
    href: "/principles",
    status: "live",
  },
  {
    id: "legal",
    title: "Legal Index",
    href: "/legal",
    status: "live",
  },
  {
    id: "working-together",
    title: "Working Together",
    href: "/working-together",
    status: "live",
  },
  {
    id: "societal-impact",
    title: "Societal Impact",
    href: "/societal-impact",
    status: "live",
  },
  {
    id: "founder-letter",
    title: "Founder Letter",
    href: "/founder-letter",
    status: "live",
  },
  {
    id: "for-organizations",
    title: "For Organizations",
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
      "This page is a placeholder policy-style surface for UpcubeAI. Reviewed legal text, effective dates, company details, and contact channels were not provided in this repo.",
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
        id: "news-latest-menu",
        label: "Recent developments",
        href: "/news",
        description: "Launch stories and product previews.",
      },
      {
        id: "news-upcube-ai-menu",
        label: "UpcubeAI launch",
        href: "/news/upcube-ai-launch",
        description: "Workspace, research, artifacts, and tool workflows.",
      },
      {
        id: "news-os-preview-menu",
        label: "Upcube OS preview",
        href: "/news/upcube-os-preview",
        description: "Preview the 2028 desktop release path.",
      },
    ],
  },
  {
    id: "research",
    title: "Research",
    items: [
      {
        id: "research-overview-menu",
        label: "Overview",
        href: "/research",
      },
      ...researchLongformPages.map((page) => {
        let label = page.title
          .replace(/^Upcube /, "")
          .replace(/\band\b/gi, "&");
        if (label.endsWith(" AI") && label.split(" ").length > 2) {
          label = label.slice(0, -3);
        }
        return {
          id: `research-${page.slug}-menu`,
          label,
          href: `/research/${page.slug}`,
        };
      }),
      {
        id: "research-residency-menu",
        label: "Research Residency",
        href: "/research/residency",
      },
      {
        id: "research-economic-menu",
        label: "Economic Research",
        href: "/research/economic",
      },
    ],
  },
  {
    id: "trust",
    title: "Trust",
    items: [
      {
        id: "safety-menu",
        label: "Safety Approach",
        href: "/safety",
        description: "Trust and responsible product framing.",
      },
      {
        id: "security-privacy-menu",
        label: "Security & Privacy",
        href: "/security-privacy",
        description: "Current placeholder route for combined trust topics.",
      },
      {
        id: "trust-transparency-menu",
        label: "Trust & Transparency",
        href: "/trust-transparency",
        description: "How the public site handles evidence and placeholders.",
      },
      {
        id: "principles-menu",
        label: "AI Principles",
        href: "/principles",
        description: "Operating principles for AI development.",
      },
      {
        id: "for-organizations-menu",
        label: "For Organizations",
        href: "/for-organizations",
        description: "Unlock more capability with AI.",
      },
    ],
  },
  {
    id: "company",
    title: "Company",
    items: [
      {
        id: "about-page-menu",
        label: "About Us",
        href: "/about",
        description: "High-level company and platform framing.",
      },
      {
        id: "foundation-menu",
        label: "Foundation",
        href: "/foundation",
        description: "Mission-oriented direction without legal overclaim.",
      },
      {
        id: "careers-menu",
        label: "Careers",
        href: "/careers",
        description: "Builder culture and the live jobs destination.",
      },
      {
        id: "working-together-menu",
        label: "Working Together",
        href: "/working-together",
        description: "Building AI for everyone through diverse perspectives.",
      },
      {
        id: "societal-impact-menu",
        label: "Societal Impact",
        href: "/societal-impact",
        description: "AI and the next era of discovery.",
      },
      {
        id: "founder-letter-menu",
        label: "Founder Letter",
        href: "/founder-letter",
        description: "Why we focus on AI and to what end.",
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
];

export const companyMission: PortalHeroCopy = {
  eyebrow: "Company",
  title: "An AI technology company for the way you work, discover, and build.",
  description:
    "Upcube is an AI technology company building a connected family of premium products across AI, commerce, discovery, cloud infrastructure, entertainment, and computing.",
};

export const companyVisionBullets: PortalBullet[] = [
  {
    id: "vision-products",
    label: "Connected product systems",
    detail:
      "Build premium, useful products that move from intelligence to execution across a connected ecosystem.",
  },
  {
    id: "vision-execution",
    label: "Proof through products",
    detail:
      "The current portfolio shows how Upcube spans AI, commerce, discovery, infrastructure, entertainment, and computing.",
  },
  {
    id: "vision-trust",
    label: "Trust through discipline",
    detail:
      "Public language stays ambitious about product direction while remaining disciplined about unsupported claims.",
  },
];

export const companyWorkAreas: PortalBullet[] = [
  {
    id: "work-ai",
    label: "AI",
    detail:
      "Assistant-led workspaces, orchestration, and intelligence-native product experiences for modern teams.",
  },
  {
    id: "work-commerce",
    label: "Commerce",
    detail:
      "Large-scale search, product discovery, and premium commerce experiences built for modern retail.",
  },
  {
    id: "work-discovery",
    label: "Discovery",
    detail:
      "Spatial exploration, book discovery, game browsing, and surfaces that help people explore complex information clearly.",
  },
  {
    id: "work-cloud",
    label: "Cloud & Infrastructure",
    detail:
      "Developer tools, compute direction, storage, networking, and platform services supporting the broader product ecosystem.",
  },
  {
    id: "work-computing",
    label: "Computing",
    detail:
      "Operating-system and device-direction work for the next era of AI-native intelligent computing.",
  },
  {
    id: "work-entertainment",
    label: "Entertainment",
    detail:
      "Interactive products, game discovery, and media experiences that extend the platform into play and culture.",
  },
];

export const companyEcosystem: PortalCardItem[] = [
  {
    id: "eco-chat",
    title: "AI",
    description:
      "Ethen anchors the ecosystem with AI-led planning, writing, research, and execution workflows.",
    href: UPCUBE_CHAT_URL,
    tag: "AI",
  },
  {
    id: "eco-ventari",
    title: "Ventari",
    description:
      "Ventari brings commerce search and large-scale product discovery into the broader Upcube platform.",
    href: "/products/ventari",
    tag: "Commerce",
  },
  {
    id: "eco-earth",
    title: "Earth",
    description:
      "Earth extends Upcube into mapping, world data, and geospatial exploration.",
    href: "/products/earth",
    tag: "Discovery",
  },
  {
    id: "eco-cloud",
    title: "Cloud",
    description:
      "Cloud and VM Compute establish the infrastructure lane for builders and platform teams.",
    href: "/products/cloud",
    tag: "Cloud & Infrastructure",
  },
  {
    id: "eco-os",
    title: "OS",
    description:
      "OS and Mobile OS point toward the company's long-range computing direction.",
    href: "/products/upcube-os",
    tag: "Computing",
  },
  {
    id: "eco-games",
    title: "Games",
    description:
      "Games shows how the ecosystem extends into interactive entertainment and culture.",
    href: "/products/games",
    tag: "Entertainment",
  },
];

export const careersHero: PortalHeroCopy = {
  eyebrow: "Careers",
  title:
    "Careers content remains placeholder-only until hiring details are provided.",
  description:
    "This route is structured for future use but intentionally avoids role, benefit, location, and compensation claims not present in the repo.",
};

export const careersValues: PortalBullet[] = [
  {
    id: "careers-rigor",
    label: "Rigor",
    detail: "Prefer factual implementation details over aspirational claims.",
  },
  {
    id: "careers-clarity",
    label: "Clarity",
    detail: "Communicate boundaries, scope, and evidence directly.",
  },
  {
    id: "careers-speed",
    label: "Pragmatic speed",
    detail: "Ship focused improvements without widening scope unnecessarily.",
  },
];

export const careersCulture: PortalBullet[] = [
  {
    id: "culture-product",
    label: "Product-minded",
    detail:
      "Work connects design, implementation, and validation rather than separating them artificially.",
  },
  {
    id: "culture-review",
    label: "Review oriented",
    detail:
      "Changes are expected to stay testable and grounded in the live repo.",
  },
  {
    id: "culture-honesty",
    label: "Honest reporting",
    detail: "Unknown facts stay unknown until they are actually provided.",
  },
];

export const careersBenefitsPlaceholders: PortalBullet[] = [
  {
    id: "benefits-status",
    label: "Benefits",
    detail: "Not provided. Replace only with reviewed hiring material.",
  },
  {
    id: "location-status",
    label: "Location",
    detail:
      "Not provided. Work mode, geography, and visa details remain placeholders.",
  },
];

export const careersOpenRoles: PortalRoleCard[] = [
  {
    id: "role-placeholder-1",
    team: "Future team",
    title: "Role placeholder",
    summary:
      "Use this card structure when real open roles are approved for publication.",
    mode: "Hiring details not provided.",
  },
  {
    id: "role-placeholder-2",
    team: "Future team",
    title: "Another placeholder",
    summary: "Static route only. This is not a live jobs board.",
    mode: "Location and employment type not provided.",
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
  { value: "general", label: "General inquiry" },
  { value: "sales", label: "Sales inquiry" },
  { value: "product-interest", label: "Product interest" },
  { value: "partnership", label: "Partnership proposal" },
  { value: "press", label: "Press and media" },
  { value: "trust-safety", label: "Trust and safety" },
  { value: "feedback", label: "Product feedback" },
  { value: "other", label: "Other" },
];

export const contactProductOptions: ContactProductOption[] = [
  { value: "upcube-ai", label: "UpcubeAI — AI workspace" },
  { value: "books", label: "Upcube Books — Reading discovery" },
  { value: "earth", label: "Upcube Earth — 3D spatial exploration" },
  { value: "games", label: "Upcube Games — Game discovery" },
  { value: "jobs", label: "Upcube Jobs — Hiring and careers" },
  { value: "cloud", label: "Upcube Cloud — Developer infrastructure" },
  { value: "ventari", label: "Ventari — Commerce platform" },
  { value: "vm", label: "Compute — Virtual machines" },
  { value: "upcube-os", label: "Upcube OS — Desktop operating system" },
  { value: "upcube-mobile-os", label: "Mobile OS — Mobile platform" },
  { value: "voice", label: "Upcube Voice — Voice platform" },
  { value: "university", label: "University — Education and learning" },
  { value: "general", label: "Not product-specific" },
];

export const principlesSections: PortalTextSection[] = [
  {
    id: "mission",
    title: "Mission",
    paragraphs: [
      "Upcube builds practical intelligence tools for planning, analysis, and execution while keeping human judgment central.",
      "This principles page is directional and product-focused, not a legal commitment document.",
    ],
  },
  {
    id: "benefits",
    title: "Broadly useful outcomes",
    paragraphs: [
      "We prioritize workflows that improve clarity, speed, and operator control across teams.",
    ],
    bullets: [
      "Prefer inspectable outputs over opaque automation.",
      "Favor grounded, reviewable responses for high-stakes tasks.",
      "Keep user trust ahead of short-term growth claims.",
    ],
  },
  {
    id: "safety",
    title: "Safety and reliability",
    paragraphs: [
      "Risk-sensitive capabilities should ship with scoped permissions, review paths, and clear failure handling.",
    ],
    bullets: [
      "Introduce high-risk behaviors with explicit gating.",
      "Treat unknown facts as unknown and report limits directly.",
      "Iterate safeguards continuously as capabilities evolve.",
    ],
  },
  {
    id: "cooperation",
    title: "Interoperability and collaboration",
    paragraphs: [
      "Upcube should integrate cleanly with the systems teams already operate.",
    ],
    bullets: [
      "Use transparent contracts between product surfaces and supporting services.",
      "Support review workflows that can be audited by operators.",
      "Publish capability boundaries clearly in product copy.",
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
      "This page summarizes current trust posture at a high level and links to implemented safety, FAQ, and privacy routes.",
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
  "Draft placeholder: reviewed legal copy, legal entity details, effective dates, and policy contacts were not provided in this repo.";

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

export const securitySections: PortalTextSection[] = [
  {
    id: "security-overview",
    title: "Security overview",
    paragraphs: [
      "This route is a canonical security entry point for the portal.",
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
      "This route indexes current legal and policy pages published in the portal.",
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
