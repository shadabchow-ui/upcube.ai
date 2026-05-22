import { upcubeNewsArticles } from "lib/upcube-news/news";
import { foundationRoutePaths } from "lib/upcube-portal/foundation-pages";
import { researchLongformPages } from "lib/upcube-portal/longform-pages";
import { policyPageSlugs } from "lib/upcube-portal/policy-pages";
import { upcubeProducts } from "lib/upcube-products/products";
import { CANONICAL_BASE_URL } from "lib/upcube-seo/metadata";
import type { MetadataRoute } from "next";

const canonicalBaseUrl = CANONICAL_BASE_URL;
const generatedAt = new Date().toISOString();

export const dynamic = "force-static";

type SitemapRoute = {
  url: string;
  lastModified: string;
  changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority?: number;
};

const portalRouteConfigs: Array<
  Pick<SitemapRoute, "url" | "changeFrequency" | "priority">
> = [
  { url: "", changeFrequency: "daily", priority: 1 },
  { url: "/about", changeFrequency: "monthly", priority: 0.6 },
  { url: "/brand", changeFrequency: "monthly", priority: 0.5 },
  { url: "/builders", changeFrequency: "weekly", priority: 0.7 },
  { url: "/business", changeFrequency: "weekly", priority: 0.7 },
  { url: "/capabilities", changeFrequency: "weekly", priority: 0.8 },
  { url: "/careers", changeFrequency: "weekly", priority: 0.6 },
  { url: "/charter", changeFrequency: "monthly", priority: 0.5 },
  { url: "/chat", changeFrequency: "weekly", priority: 0.5 },
  { url: "/company", changeFrequency: "weekly", priority: 0.8 },
  { url: "/contact", changeFrequency: "monthly", priority: 0.7 },
  { url: "/developers", changeFrequency: "weekly", priority: 0.7 },
  { url: "/enterprise", changeFrequency: "weekly", priority: 0.8 },
  { url: "/explore", changeFrequency: "weekly", priority: 0.8 },
  { url: "/faq", changeFrequency: "monthly", priority: 0.6 },
  { url: "/foundation", changeFrequency: "monthly", priority: 0.5 },
  { url: "/how-it-works", changeFrequency: "weekly", priority: 0.8 },
  { url: "/legal", changeFrequency: "monthly", priority: 0.4 },
  { url: "/news", changeFrequency: "weekly", priority: 0.9 },
  { url: "/platform", changeFrequency: "weekly", priority: 0.8 },
  { url: "/policies", changeFrequency: "monthly", priority: 0.4 },
  { url: "/policy", changeFrequency: "monthly", priority: 0.5 },
  { url: "/pricing", changeFrequency: "monthly", priority: 0.6 },
  { url: "/principles", changeFrequency: "monthly", priority: 0.7 },
  { url: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { url: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { url: "/research", changeFrequency: "weekly", priority: 0.8 },
  { url: "/apps", changeFrequency: "weekly", priority: 0.7 },
  { url: "/docs", changeFrequency: "weekly", priority: 0.7 },
  { url: "/research/economic", changeFrequency: "monthly", priority: 0.6 },
  { url: "/research/residency", changeFrequency: "monthly", priority: 0.6 },
  { url: "/safety", changeFrequency: "monthly", priority: 0.7 },
  { url: "/security", changeFrequency: "monthly", priority: 0.7 },
  { url: "/security-privacy", changeFrequency: "monthly", priority: 0.7 },
  { url: "/status", changeFrequency: "weekly", priority: 0.6 },
  { url: "/teams", changeFrequency: "weekly", priority: 0.7 },
  { url: "/terms", changeFrequency: "yearly", priority: 0.3 },
  { url: "/terms-of-service", changeFrequency: "yearly", priority: 0.3 },
  { url: "/trust", changeFrequency: "weekly", priority: 0.8 },
  { url: "/trust-transparency", changeFrequency: "monthly", priority: 0.6 },
  { url: "/vision", changeFrequency: "monthly", priority: 0.7 },
];

const buildSitemapRoute = (
  path: string,
  config: Omit<SitemapRoute, "url" | "lastModified"> = {},
): SitemapRoute => ({
  url: `${canonicalBaseUrl}${path}`,
  lastModified: generatedAt,
  ...config,
});

const dedupeRoutes = (routes: SitemapRoute[]) =>
  Array.from(new Map(routes.map((route) => [route.url, route])).values());

export default function sitemap(): MetadataRoute.Sitemap {
  const foundationRoutes = foundationRoutePaths.map((path) =>
    buildSitemapRoute(path, { changeFrequency: "monthly", priority: 0.5 }),
  );

  const portalRoutes = portalRouteConfigs.map(
    ({ url, changeFrequency, priority }) =>
      buildSitemapRoute(url, { changeFrequency, priority }),
  );

  const productRoutes = upcubeProducts.map((product) =>
    buildSitemapRoute(`/products/${product.slug}`, {
      changeFrequency: "weekly",
      priority: 0.8,
    }),
  );

  const newsRoutes = upcubeNewsArticles.map((article) =>
    buildSitemapRoute(article.href, {
      changeFrequency:
        article.category === "Product Launch" ? "monthly" : "yearly",
      priority: article.featured ? 0.9 : 0.7,
    }),
  );

  const researchRoutes = researchLongformPages.map((page) =>
    buildSitemapRoute(`/research/${page.slug}`, {
      changeFrequency: "monthly",
      priority: 0.6,
    }),
  );

  const policyRoutes = policyPageSlugs.map((slug) =>
    buildSitemapRoute(`/policy/${slug}`, {
      changeFrequency: "monthly",
      priority: 0.5,
    }),
  );

  return dedupeRoutes([
    ...portalRoutes,
    ...foundationRoutes,
    ...productRoutes,
    ...newsRoutes,
    ...researchRoutes,
    ...policyRoutes,
  ]);
}
