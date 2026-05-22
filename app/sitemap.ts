import type { MetadataRoute } from "next";

export const dynamic = "force-static";

import { upcubeNewsArticles } from "lib/upcube-news/news";
import { portalRoutePlan } from "lib/upcube-portal/content";
import { researchLongformPages } from "lib/upcube-portal/longform-pages";
import { CANONICAL_BASE_URL } from "lib/upcube-seo/metadata";
import { upcubeProductLinks } from "lib/upcube-universal/product-links";

type SitemapEntryInput = {
  path: string;
  changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority?: number;
};

const coreRoutes: SitemapEntryInput[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/products", changeFrequency: "weekly", priority: 0.95 },
  { path: "/account", changeFrequency: "monthly", priority: 0.8 },
  { path: "/account/profile", changeFrequency: "monthly", priority: 0.7 },
  { path: "/account/security", changeFrequency: "monthly", priority: 0.7 },
  { path: "/account/apps", changeFrequency: "monthly", priority: 0.75 },
  { path: "/account/privacy", changeFrequency: "monthly", priority: 0.7 },
  { path: "/account/billing", changeFrequency: "monthly", priority: 0.7 },
  { path: "/account/storage", changeFrequency: "monthly", priority: 0.65 },
  { path: "/account/help", changeFrequency: "monthly", priority: 0.65 },
  { path: "/apps", changeFrequency: "monthly", priority: 0.8 },
  { path: "/developers", changeFrequency: "monthly", priority: 0.75 },
  { path: "/docs", changeFrequency: "monthly", priority: 0.75 },
  { path: "/pricing", changeFrequency: "monthly", priority: 0.8 },
  { path: "/signin", changeFrequency: "monthly", priority: 0.5 },
  { path: "/signup", changeFrequency: "monthly", priority: 0.5 },
  { path: "/search", changeFrequency: "monthly", priority: 0.55 },
  { path: "/search/all", changeFrequency: "monthly", priority: 0.5 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.45 },
  { path: "/terms-of-service", changeFrequency: "yearly", priority: 0.45 },
  { path: "/security-privacy", changeFrequency: "yearly", priority: 0.5 },
];

const productAliasRoutes: SitemapEntryInput[] = [
  { path: "/products/education", changeFrequency: "monthly", priority: 0.75 },
  { path: "/products/ventari", changeFrequency: "monthly", priority: 0.6 },
];

const legalRoutes: SitemapEntryInput[] = [
  { path: "/legal/privacy", changeFrequency: "yearly", priority: 0.45 },
  { path: "/legal/terms", changeFrequency: "yearly", priority: 0.45 },
  { path: "/legal/other-policies", changeFrequency: "yearly", priority: 0.4 },
];

const generatedPlaceholderRoutes: SitemapEntryInput[] = [
  { path: "/page-placeholder", changeFrequency: "yearly", priority: 0.2 },
  {
    path: "/product/product-placeholder",
    changeFrequency: "yearly",
    priority: 0.2,
  },
  {
    path: "/updates/platform-iteration-placeholder",
    changeFrequency: "monthly",
    priority: 0.35,
  },
];

function normalizePath(path: string) {
  if (!path || path.startsWith("http") || path.includes("[")) {
    return null;
  }

  const normalized = path.startsWith("/") ? path : `/${path}`;
  return normalized.length > 1 ? normalized.replace(/\/$/, "") : normalized;
}

function toUrl(path: string) {
  return new URL(path, CANONICAL_BASE_URL).toString();
}

function uniqueRoutes(routes: SitemapEntryInput[]) {
  const seen = new Set<string>();

  return routes.flatMap((route) => {
    const path = normalizePath(route.path);

    if (!path || seen.has(path)) {
      return [];
    }

    seen.add(path);
    return [{ ...route, path }];
  });
}

export default function sitemap(): MetadataRoute.Sitemap {
  const portalRoutes = portalRoutePlan.map((route) => ({
    path: route.href,
    changeFrequency: "monthly" as const,
    priority: route.href === "/" ? 1 : 0.65,
  }));

  const productRoutes = upcubeProductLinks.map((product) => ({
    path: product.productHref,
    changeFrequency: "monthly" as const,
    priority: product.id === "upcube-ai" ? 0.95 : 0.8,
  }));

  const newsRoutes = upcubeNewsArticles.map((article) => ({
    path: article.href,
    changeFrequency: "monthly" as const,
    priority: article.featured ? 0.8 : 0.7,
  }));

  const researchRoutes = researchLongformPages.map((page) => ({
    path: `/research/${page.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  return uniqueRoutes([
    ...coreRoutes,
    ...portalRoutes,
    ...productRoutes,
    ...productAliasRoutes,
    ...newsRoutes,
    ...researchRoutes,
    ...legalRoutes,
    ...generatedPlaceholderRoutes,
  ]).map((route) => ({
    url: toUrl(route.path),
    lastModified: new Date(),
    changeFrequency: route.changeFrequency ?? "monthly",
    priority: route.priority ?? 0.5,
  }));
}
