import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LongformPage } from "components/upcube-portal/longform-page";
import { getLongformPageBySlug } from "lib/upcube-portal/longform-pages";

const companySlugRouteMap: Record<string, string> = {
  about: "societal-impact",
  charter: "founder-letter",
  foundation: "working-together",
  "founder-letter": "founder-letter",
};

const companyPageMeta: Record<string, { title: string; description: string }> =
  {
    about: {
      title: "Company Overview | UpcubeAI",
      description: "Upcube company overview and product ecosystem.",
    },
    charter: {
      title: "Product Charter | UpcubeAI",
      description:
        "The UpcubeAI charter for building useful, responsible AI products.",
    },
    foundation: {
      title: "Mission | UpcubeAI",
      description: "The UpcubeAI Foundation direction and mission.",
    },
    careers: {
      title: "Careers | UpcubeAI",
      description:
        "Join UpcubeAI in building the next generation of AI products.",
    },
    "brand-help-center": {
      title: "Brand Resources | UpcubeAI",
      description: "Brand guidelines and assets for UpcubeAI and its products.",
    },
    "founder-letter": {
      title: "Founder Note | UpcubeAI",
      description: "A letter from the founder on why UpcubeAI exists.",
    },
  };

import { getPageContentByRoute } from "lib/upcube-portal/page-content";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";
import { getBodyForRoute } from "lib/upcube-portal/page-content";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const meta = companyPageMeta[slug];
  if (!meta) return notFound();
  return createBasicPageMetadata({
    title: meta.title,
    description: meta.description,
    path: `/company/${slug}`,
  });
}

export function generateStaticParams() {
  return Object.keys(companyPageMeta).map((slug) => ({ slug }));
}

const routeForSlug: Record<string, string> = {
  about: "/company/about",
  charter: "/company/charter",
  foundation: "/company/foundation",
  careers: "/company/careers",
  "brand-help-center": "/company/brand-help-center",
  "founder-letter": "/company/founder-letter",
};

const slugToLongformSlug: Record<string, string> = {
  about: "societal-impact",
  charter: "founder-letter",
  foundation: "working-together",
  careers: "societal-impact",
  "brand-help-center": "founder-letter",
  "founder-letter": "founder-letter",
};

export default async function CompanySlugPage({ params }: Props) {
  const { slug } = await params;
  const route = routeForSlug[slug];
  if (!route) notFound();

  const body = getBodyForRoute(route);
  if (!body) notFound();

  const longformSlug = slugToLongformSlug[slug] ?? slug;
  const existing = getLongformPageBySlug(longformSlug);

  const entry = {
    slug: longformSlug,
    order: 99,
    title: companyPageMeta[slug]?.title.replace(" | UpcubeAI", "") ?? slug,
    subtitle: "",
    description: companyPageMeta[slug]?.description ?? "",
    body,
    category: "company" as const,
  };

  return (
    <LongformPage
      entry={entry}
      backHref="/company"
      backLabel="Back to Company"
    />
  );
}
