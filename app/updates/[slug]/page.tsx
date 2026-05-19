import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArticlePage } from "components/upcube-portal/article-page";
import {
  getPortalArticleBySlug,
  portalArticles,
} from "lib/upcube-portal/content";

export function generateStaticParams() {
  return portalArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const article = getPortalArticleBySlug(params.slug);

  if (!article) {
    return {
      title: "Update not found | UpcubeAI",
    };
  }

  return {
    title: `${article.title} | UpcubeAI`,
    description: article.summary,
  };
}

export default async function UpdateArticlePage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const article = getPortalArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  return <ArticlePage article={article} />;
}
