import Link from "next/link";

import type { UpcubeNewsArticle } from "lib/upcube-news/news";

type NewsCardProps = {
  article: UpcubeNewsArticle;
  compact?: boolean;
};

export function NewsCard({ article, compact = false }: NewsCardProps) {
  return (
    <article
      className={["uc-news-card", compact ? "uc-news-card--compact" : undefined]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="uc-news-card__meta">
        <span className="uc-eyebrow">{article.category}</span>
        <span>{article.dateLabel}</span>
      </div>
      <p className="uc-eyebrow">{article.productName}</p>
      <h3 className="uc-news-card__title">{article.headline}</h3>
      <p className="uc-news-card__excerpt">{article.excerpt}</p>
      <div className="uc-news-card__actions">
        <Link className="uc-news-card__link" href={article.href}>
          {compact ? "Read article" : "Read story"}
        </Link>
        {!compact ? (
          <Link className="uc-news-card__link" href={article.productPageUrl}>
            View product page
          </Link>
        ) : null}
        {!compact && article.launchUrl ? (
          <Link className="uc-news-card__link" href={article.launchUrl}>
            Launch app
          </Link>
        ) : null}
      </div>
    </article>
  );
}
