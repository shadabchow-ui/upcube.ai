import Link from "next/link";

import type { UpcubeNewsArticle } from "lib/upcube-news/news";

type NewsCardProps = {
  article: UpcubeNewsArticle;
};

export function NewsCard({ article }: NewsCardProps) {
  return (
    <article className="uc-news-card">
      <div className="uc-news-card__meta">
        <span className="uc-eyebrow">{article.category}</span>
        <span>{article.dateLabel}</span>
      </div>
      <p className="uc-eyebrow">{article.productName}</p>
      <h3 className="uc-news-card__title">{article.headline}</h3>
      <p className="uc-news-card__excerpt">{article.excerpt}</p>
      <div className="uc-news-card__actions">
        <Link className="uc-news-card__link" href={article.href}>
          Read story
        </Link>
        <Link className="uc-news-card__link" href={article.productPageUrl}>
          View product page
        </Link>
        {article.launchUrl ? (
          <Link className="uc-news-card__link" href={article.launchUrl}>
            Launch app
          </Link>
        ) : null}
      </div>
    </article>
  );
}
