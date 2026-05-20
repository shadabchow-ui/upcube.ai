import { getCollections, getPages, getProducts } from "lib/shopify";
import { upcubeNewsArticles } from "lib/upcube-news/news";
import { foundationRoutePaths } from "lib/upcube-portal/foundation-pages";
import { researchLongformPages } from "lib/upcube-portal/longform-pages";
import { policyPageSlugs } from "lib/upcube-portal/policy-pages";
import { upcubeProducts } from "lib/upcube-products/products";
import { CANONICAL_BASE_URL } from "lib/upcube-seo/metadata";
import { validateEnvironmentVariables } from "lib/utils";
import { MetadataRoute } from "next";

const canonicalBaseUrl = CANONICAL_BASE_URL;
// Static routes use build-time date as fallback — no content-embedded dates available
// for portal pages. Shopify-backed pages (collections, products, pages) use their
// server-side updatedAt values when available.
const generatedAt = new Date().toISOString();

type SitemapRoute = {
  url: string;
  lastModified: string;
  changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority?: number;
};

export const revalidate = 86_400;

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

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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

  const baseRoutes = dedupeRoutes([
    ...portalRoutes,
    ...foundationRoutes,
    ...productRoutes,
    ...newsRoutes,
    ...researchRoutes,
    ...policyRoutes,
  ]);

  try {
    validateEnvironmentVariables();
  } catch {
    return baseRoutes;
  }

  const collectionsPromise = getCollections().then((collections) =>
    collections.map((collection) => ({
      url: `${canonicalBaseUrl}${collection.path}`,
      lastModified: collection.updatedAt,
      changeFrequency: "weekly" as const,
      priority: 0.5,
    })),
  );

  const productsPromise = getProducts({}).then((products) =>
    products.map((product) => ({
      url: `${canonicalBaseUrl}/product/${product.handle}`,
      lastModified: product.updatedAt,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
  );

  const pagesPromise = getPages().then((pages) =>
    pages.map((page) => ({
      url: `${canonicalBaseUrl}/${page.handle}`,
      lastModified: page.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  );

  let fetchedRoutes: SitemapRoute[] = [];

  try {
    fetchedRoutes = (
      await Promise.all([collectionsPromise, productsPromise, pagesPromise])
    ).flat();
  } catch {
    return baseRoutes;
  }

  return dedupeRoutes([...baseRoutes, ...fetchedRoutes]);
}
