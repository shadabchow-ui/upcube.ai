import type { Metadata } from "next";

import type { UpcubeNewsArticle } from "lib/upcube-news/news";
import type { UpcubeProduct } from "lib/upcube-products/products";

export const CANONICAL_BASE_URL = "https://upcube.ai";
export const DEFAULT_SITE_TITLE =
  "UpcubeAI | AI Product Family for Work, Discovery, and Cloud";
export const DEFAULT_SITE_DESCRIPTION =
  "UpcubeAI is the AI product company behind Ethen, Earth, Books, Games, Jobs, Cloud, Voice, Education, and future computing platforms — a connected product family for work, discovery, commerce, infrastructure, and learning.";
export const DEFAULT_OG_IMAGE = "/opengraph-image";

export const canonicalBaseUrl = CANONICAL_BASE_URL;
export const upcubeSiteName = "UpcubeAI";

type PageMetadataInput = {
  title?: string;
  description?: string;
  path?: string;
  type?: "website" | "article";
  noIndex?: boolean;
};

function normalizePath(path = "/") {
  if (path === "/") {
    return "/";
  }

  return path.startsWith("/") ? path : `/${path}`;
}

export function buildCanonicalUrl(path = "/") {
  return new URL(normalizePath(path), CANONICAL_BASE_URL).toString();
}

export const upcubeOrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: upcubeSiteName,
  url: CANONICAL_BASE_URL,
  description: DEFAULT_SITE_DESCRIPTION,
  logo: buildCanonicalUrl("/brand/logo-mark.png"),
  slogan:
    "AI for the way you work, discover, build, and imagine what\u2019s next.",
  sameAs: [
    "https://www.facebook.com/upcubeinc/",
    "https://www.linkedin.com/company/35441477",
    "https://www.instagram.com/upcubeai/",
    "https://x.com/upcubeai",
    "https://www.youtube.com/@upcubeai",
  ],
};

export const upcubeWebsiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: upcubeSiteName,
  url: CANONICAL_BASE_URL,
  description: DEFAULT_SITE_DESCRIPTION,
};

export function createBasicPageMetadata({
  title = DEFAULT_SITE_TITLE,
  description = DEFAULT_SITE_DESCRIPTION,
  path = "/",
  type = "website",
  noIndex = false,
}: PageMetadataInput): Metadata {
  const canonical = buildCanonicalUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: upcubeSiteName,
      type,
      images: [{ url: DEFAULT_OG_IMAGE }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export function createProductPageMetadata(product: UpcubeProduct): Metadata {
  const title =
    product.seoTitle ??
    (product.name.toLowerCase() === upcubeSiteName.toLowerCase()
      ? upcubeSiteName
      : `${product.name} | ${upcubeSiteName}`);

  return createBasicPageMetadata({
    title,
    description: product.seoDescription ?? product.summary,
    path: `/products/${product.slug}`,
  });
}

export function createNewsIndexMetadata(): Metadata {
  return createBasicPageMetadata({
    title: `Upcube News | ${upcubeSiteName}`,
    description:
      "Launch stories and product previews across UpcubeAI, Voice, Education, Upcube Shopping, Books, Earth, Games, Jobs, Cloud, Compute, OS, and Mobile OS.",
    path: "/news",
  });
}

export function createNewsArticleMetadata(
  article: UpcubeNewsArticle,
): Metadata {
  return createBasicPageMetadata({
    title: article.seoTitle,
    description: article.seoDescription,
    path: article.href,
    type: "article",
  });
}
