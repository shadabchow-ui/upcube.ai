import type {
  PortalCardItem,
  PortalFaqItem,
  UpcubeCompanyIdentity,
} from "lib/upcube-portal/content";
import type { UpcubeNewsArticle } from "lib/upcube-news/news";
import type {
  UpcubeProduct,
  UpcubeProductSlug,
} from "lib/upcube-products/products";
import {
  buildCanonicalUrl,
  CANONICAL_BASE_URL,
  DEFAULT_SITE_DESCRIPTION,
} from "./metadata";

export type JsonLdObject = Record<string, unknown>;

type BreadcrumbItem = {
  name: string;
  path: string;
};

const organizationName = "UpcubeAI";

function createOrganizationReference() {
  return {
    "@type": "Organization",
    name: organizationName,
    url: CANONICAL_BASE_URL,
  };
}

function createWebSiteReference() {
  return {
    "@type": "WebSite",
    name: organizationName,
    url: CANONICAL_BASE_URL,
  };
}

function createImageObject(path: string) {
  return {
    "@type": "ImageObject",
    url: buildCanonicalUrl(path),
  };
}

function getProductApplicationCategory(slug: UpcubeProductSlug) {
  const categories: Record<UpcubeProductSlug, string> = {
    "upcube-ai": "BusinessApplication",
    avatar: "MultimediaApplication",
    books: "LifestyleApplication",
    earth: "TravelApplication",
    games: "EntertainmentApplication",
    news: "NewsApplication",
    jobs: "BusinessApplication",
    cloud: "DeveloperApplication",
    quantum: "EducationalApplication",
    research: "BusinessApplication",
    robotics: "BusinessApplication",
    ventari: "ShoppingApplication",
    vm: "DeveloperApplication",
    "upcube-os": "OperatingSystem",
    "upcube-mobile-os": "OperatingSystem",
    voice: "CommunicationsApplication",
    university: "EducationalApplication",
  };

  return categories[slug];
}

export function createOrganizationJsonLd(
  companyIdentity: UpcubeCompanyIdentity,
): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: organizationName,
    url: CANONICAL_BASE_URL,
    description: companyIdentity.mission,
    logo: buildCanonicalUrl("/brand/logo-mark.png"),
    slogan: companyIdentity.tagline,
    sameAs: [
      "https://www.facebook.com/upcubeinc/",
      "https://www.linkedin.com/company/35441477",
      "https://www.instagram.com/upcubeai/",
      "https://x.com/upcubeai",
      "https://www.youtube.com/@upcubeai",
    ],
  };
}

export function createWebSiteJsonLd(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: organizationName,
    url: CANONICAL_BASE_URL,
    description: DEFAULT_SITE_DESCRIPTION,
  };
}

export function createBreadcrumbJsonLd(items: BreadcrumbItem[]): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: buildCanonicalUrl(item.path),
    })),
  };
}

export function createCollectionPageJsonLd({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    url: buildCanonicalUrl(path),
    isPartOf: createWebSiteReference(),
    about: createOrganizationReference(),
  };
}

export function createArticleJsonLd(article: UpcubeNewsArticle): JsonLdObject {
  const jsonLd: JsonLdObject = {
    "@context": "https://schema.org",
    "@type": article.category === "Product Launch" ? "NewsArticle" : "Article",
    headline: article.headline,
    description: article.seoDescription,
    url: buildCanonicalUrl(article.href),
    mainEntityOfPage: buildCanonicalUrl(article.href),
    articleSection: article.category,
    about: {
      "@type": "Thing",
      name: article.productName,
    },
    publisher: {
      ...createOrganizationReference(),
      logo: createImageObject("/brand/logo-mark.png"),
    },
  };

  if (article.productName) {
    jsonLd.keywords = [article.productName, article.category];
  }

  return jsonLd;
}

export function createProductJsonLd(product: UpcubeProduct): JsonLdObject[] {
  const breadcrumb = createBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Products", path: "/products/upcube-ai" },
    { name: product.name, path: `/products/${product.slug}` },
  ]);

  const schemas: JsonLdObject[] = [breadcrumb];

  if (product.availabilityNote) {
    return schemas;
  }

  schemas.push({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    description: product.seoDescription ?? product.summary,
    url: buildCanonicalUrl(`/products/${product.slug}`),
    applicationCategory: getProductApplicationCategory(product.slug),
    operatingSystem: "Web",
    publisher: createOrganizationReference(),
  });

  return schemas;
}

export function createItemListJsonLd(
  items: PortalCardItem[],
  path: string,
): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "UpcubeAI Product Family",
    description:
      "Connected products spanning AI, cloud, robotics, education, commerce, discovery, entertainment, and future platforms.",
    url: buildCanonicalUrl(path),
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: item.title,
        description: item.description,
        url: buildCanonicalUrl(item.href),
        category: item.category,
      },
    })),
  };
}

export function createFaqPageJsonLd(items: PortalFaqItem[]): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
