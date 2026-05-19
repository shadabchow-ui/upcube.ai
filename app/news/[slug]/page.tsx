import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { NewsArticlePage } from "components/upcube-news/news-article-page";
import {
  getUpcubeNewsArticleBySlug,
  upcubeNewsArticles,
} from "lib/upcube-news/news";

export function generateStaticParams() {
  return upcubeNewsArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const article = getUpcubeNewsArticleBySlug(params.slug);

  if (!article) {
    return {
      title: "News article not found | Upcube",
    };
  }

  return {
    title: article.seoTitle,
    description: article.seoDescription,
  };
}

export default async function NewsArticleRoute(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const article = getUpcubeNewsArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  return <NewsArticlePage article={article} />;
}
