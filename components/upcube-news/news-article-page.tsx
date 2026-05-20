import Link from "next/link";

import { JsonLd } from "components/upcube-seo/json-ld";
import { PortalFooter } from "components/upcube-portal/portal-footer";
import { PortalHeader } from "components/upcube-portal/portal-header";
import { PortalShell } from "components/upcube-portal/portal-shell";
import { createArticleJsonLd } from "lib/upcube-seo/jsonld";
import {
  getRelatedUpcubeNewsArticles,
  type UpcubeNewsArticle,
} from "lib/upcube-news/news";
import { NewsCard } from "./news-card";

type NewsArticlePageProps = {
  article: UpcubeNewsArticle;
};

export function NewsArticlePage({ article }: NewsArticlePageProps) {
  const keepReading = getRelatedUpcubeNewsArticles(article.slug, 3);

  return (
    <PortalShell className="uc-news-article-page">
      <PortalHeader />
      <main>
        <JsonLd data={createArticleJsonLd(article)} />
        <article className="uc-news-article">
          <div className="uc-shell uc-news-article__hero">
            <div className="uc-news-article__hero-copy">
              <p className="uc-eyebrow">{article.productName}</p>
              <div className="uc-news-article__meta">
                <span>{article.category}</span>
                <span>{article.dateLabel}</span>
              </div>
              <h1 className="uc-news-article__title">{article.headline}</h1>
              <p className="uc-news-article__summary">{article.heroSummary}</p>
              <div className="uc-news-article__actions">
                <Link
                  className="uc-button"
                  data-variant="solid"
                  href={article.primaryCtaHref}
                >
                  {article.primaryCtaLabel}
                </Link>
                <Link className="uc-button" href={article.productPageUrl}>
                  View product page
                </Link>
              </div>
            </div>
            <div className="uc-news-featured">
              <div className="uc-news-featured__copy">
                <p className="uc-eyebrow">Announcement</p>
                <h2 className="uc-news-featured__title">{article.excerpt}</h2>
                <p>{article.finalCtaBody}</p>
              </div>
            </div>
          </div>

          <div className="uc-shell uc-news-article__body">
            <section className="uc-news-article__intro">
              <p>{article.excerpt}</p>
            </section>

            <section className="uc-news-article__sections">
              {article.sections.map((section, index) => (
                <section
                  className="uc-news-article__section"
                  key={section.title}
                >
                  {index === 0 ? (
                    <p className="uc-news-article__section-kicker">
                      {section.eyebrow}
                    </p>
                  ) : null}
                  <h2>{section.title}</h2>
                  <p>{section.body}</p>
                </section>
              ))}
            </section>
          </div>

          <div className="uc-shell">
            <div className="uc-news-article__cta-band">
              <div className="uc-news-featured__copy">
                <p className="uc-eyebrow">Looking ahead</p>
                <h2 className="uc-news-featured__title">
                  {article.finalCtaTitle}
                </h2>
                <p>{article.finalCtaBody}</p>
              </div>
              <div className="uc-news-article__footer-actions">
                <Link
                  className="uc-button"
                  data-variant="solid"
                  href={article.primaryCtaHref}
                >
                  {article.primaryCtaLabel}
                </Link>
                <Link className="uc-button" href={article.productPageUrl}>
                  View product page
                </Link>
                <Link className="uc-button" href="/news">
                  Back to news
                </Link>
              </div>
            </div>
          </div>

          {keepReading.length ? (
            <div className="uc-shell">
              <section className="uc-news-article__keep-reading">
                <div className="uc-news-section__head uc-news-section__head--compact">
                  <p className="uc-eyebrow">Keep reading</p>
                  <h2>More from Upcube News.</h2>
                </div>
                <div className="uc-news-article__keep-reading-grid">
                  {keepReading.map((item) => (
                    <NewsCard article={item} compact key={item.slug} />
                  ))}
                </div>
              </section>
            </div>
          ) : null}
        </article>
      </main>
      <PortalFooter />
    </PortalShell>
  );
}
