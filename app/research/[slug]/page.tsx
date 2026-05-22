import "app/styles/upcube-longform.css";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LongformPage } from "components/upcube-portal/longform-page";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";
import {
  getResearchLongformPageBySlug,
  researchLongformPages,
} from "lib/upcube-portal/longform-pages";

export function generateStaticParams() {
  return researchLongformPages.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const entry = getResearchLongformPageBySlug(params.slug);

  if (!entry) {
    return {
      title: "Research not found | UpcubeAI",
    };
  }

  return createBasicPageMetadata({
    title: `${entry.title} | UpcubeAI Research`,
    description: entry.description,
    path: `/research/${entry.slug}`,
  });
}

export default async function ResearchDetailRoute(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const entry = getResearchLongformPageBySlug(params.slug);

  if (!entry) {
    notFound();
  }

  return <LongformPage entry={entry} />;
}
