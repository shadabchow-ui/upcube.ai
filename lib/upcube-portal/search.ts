import type { PortalMenuGroup } from "lib/upcube-portal/content";
import { portalRoutePlan } from "lib/upcube-portal/content";
import { upcubeNewsArticles } from "lib/upcube-news/news";
import { upcubeProductLinks } from "lib/upcube-universal/product-links";

export type SearchGroup = {
  id: string;
  title: string;
  links: SearchLink[];
};

export type SearchLink = {
  id: string;
  label: string;
  href: string;
  detail?: string;
};

export type SearchSuggestion = SearchLink;

const productSearchLinks: SearchLink[] = upcubeProductLinks.map((p) => ({
  id: p.id,
  label: p.label,
  href: p.productHref,
  detail: p.description,
}));

const researchSearchLinks: SearchLink[] = portalRoutePlan
  .filter((r) => r.id.startsWith("research"))
  .map((r) => ({
    id: r.id,
    label: r.title,
    href: r.href,
    detail: undefined,
  }));

const companyTrustSearchLinks: SearchLink[] = [
  { id: "about", label: "About Upcube", href: "/about" },
  { id: "company", label: "Company", href: "/company" },
  { id: "vision", label: "Vision", href: "/vision" },
  { id: "foundation", label: "Foundation", href: "/foundation" },
  { id: "careers", label: "Careers", href: "/careers" },
  { id: "charter", label: "Our Charter", href: "/charter" },
  {
    id: "working-together",
    label: "Working Together",
    href: "/working-together",
  },
  {
    id: "societal-impact",
    label: "Societal Impact",
    href: "/societal-impact",
  },
  {
    id: "founder-letter",
    label: "Founder Letter",
    href: "/founder-letter",
  },
  { id: "trust", label: "Trust Overview", href: "/trust" },
  { id: "safety", label: "Safety Approach", href: "/safety" },
  {
    id: "security-privacy",
    label: "Security & Privacy",
    href: "/security-privacy",
  },
  {
    id: "trust-transparency",
    label: "Trust & Transparency",
    href: "/trust-transparency",
  },
  {
    id: "principles",
    label: "AI Principles",
    href: "/principles",
  },
  {
    id: "for-organizations",
    label: "For Organizations",
    href: "/for-organizations",
  },
  { id: "legal", label: "Legal Index", href: "/legal" },
  { id: "contact", label: "Contact Us", href: "/contact" },
  {
    id: "enterprise",
    label: "Enterprise",
    href: "/enterprise",
  },
  { id: "privacy", label: "Privacy", href: "/privacy" },
  {
    id: "brand",
    label: "Brand Help Center",
    href: "/brand",
  },
];

const newsSearchLinks: SearchLink[] = upcubeNewsArticles.map((a) => ({
  id: a.slug,
  label: a.productName,
  href: a.href,
  detail: a.headline,
}));

const portalPageSearchLinks: SearchLink[] = [
  { id: "explore", label: "Explore Upcube", href: "/explore" },
  { id: "news", label: "News", href: "/news" },
  { id: "platform", label: "Platform Overview", href: "/platform" },
  { id: "business", label: "Business", href: "/business" },
  { id: "capabilities", label: "Capabilities", href: "/capabilities" },
  { id: "chat", label: "Chat Overview", href: "/chat" },
  { id: "builders", label: "Builders", href: "/builders" },
  { id: "teams", label: "Teams", href: "/teams" },
  { id: "how-it-works", label: "How It Works", href: "/how-it-works" },
  { id: "faq", label: "FAQ", href: "/faq" },
  {
    id: "terms",
    label: "Terms of Service",
    href: "/terms",
  },
];

export const searchGroups: SearchGroup[] = [
  {
    id: "products",
    title: "Products",
    links: productSearchLinks,
  },
  {
    id: "research",
    title: "Research",
    links: researchSearchLinks,
  },
  {
    id: "news",
    title: "News",
    links: newsSearchLinks,
  },
  {
    id: "company-trust",
    title: "Company & Trust",
    links: companyTrustSearchLinks,
  },
  {
    id: "pages",
    title: "Portal",
    links: portalPageSearchLinks,
  },
];

function normalize(value: string) {
  return value.toLowerCase().replace(/\s+/g, " ").trim();
}

export function filterSearchLinks(query: string): SearchLink[] {
  if (!query.trim()) {
    return [];
  }

  const terms = normalize(query).split(" ");
  const allLinks = searchGroups.flatMap((group) => group.links);

  return allLinks.filter((link) => {
    const searchable = normalize(
      `${link.label} ${link.href} ${link.detail ?? ""}`,
    );
    return terms.every((term) => searchable.includes(term));
  });
}

export function getFirstSearchResult(query: string): SearchLink | null {
  const results = filterSearchLinks(query);
  return results[0] ?? null;
}
