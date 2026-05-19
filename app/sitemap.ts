import { getCollections, getPages, getProducts } from "lib/shopify";
import { foundationRoutePaths } from "lib/upcube-portal/foundation-pages";
import { baseUrl, validateEnvironmentVariables } from "lib/utils";
import { MetadataRoute } from "next";

type Route = {
  url: string;
  lastModified: string;
};

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    "",
    "/business",
    "/builders",
    "/capabilities",
    "/chat",
    "/company",
    "/contact",
    "/enterprise",
    "/explore",
    "/faq",
    "/how-it-works",
    "/news",
    "/platform",
    "/principles",
    "/privacy-policy",
    "/teams",
    "/terms-of-service",
    "/trust",
    "/vision",
    ...foundationRoutePaths,
  ];

  const routesMap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));

  try {
    validateEnvironmentVariables();
  } catch {
    return routesMap;
  }

  const collectionsPromise = getCollections().then((collections) =>
    collections.map((collection) => ({
      url: `${baseUrl}${collection.path}`,
      lastModified: collection.updatedAt,
    })),
  );

  const productsPromise = getProducts({}).then((products) =>
    products.map((product) => ({
      url: `${baseUrl}/product/${product.handle}`,
      lastModified: product.updatedAt,
    })),
  );

  const pagesPromise = getPages().then((pages) =>
    pages.map((page) => ({
      url: `${baseUrl}/${page.handle}`,
      lastModified: page.updatedAt,
    })),
  );

  let fetchedRoutes: Route[] = [];

  try {
    fetchedRoutes = (
      await Promise.all([collectionsPromise, productsPromise, pagesPromise])
    ).flat();
  } catch {
    return routesMap;
  }

  return [...routesMap, ...fetchedRoutes];
}
