import Link from "next/link";

import { PortalFooter } from "components/upcube-portal/portal-footer";
import { PortalHeader } from "components/upcube-portal/portal-header";
import { PortalShell } from "components/upcube-portal/portal-shell";
import type { UpcubeNewsArticle } from "lib/upcube-news/news";

type NewsArticlePageProps = {
  article: UpcubeNewsArticle;
};

export function NewsArticlePage({ article }: NewsArticlePageProps) {
  return (
    <PortalShell className="uc-news-article-page">
      <PortalHeader />
      <main>
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
                <p className="uc-eyebrow">Summary</p>
                <h2 className="uc-news-featured__title">{article.excerpt}</h2>
                <p>{article.finalCtaBody}</p>
              </div>
            </div>
          </div>

          <div className="uc-shell uc-news-article__body">
            {article.sections.map((section) => (
              <section className="uc-news-article__section" key={section.title}>
                <p className="uc-eyebrow">{section.eyebrow}</p>
                <h2>{section.title}</h2>
                <p>{section.body}</p>
              </section>
            ))}

            <section className="uc-news-article__related">
              <p className="uc-eyebrow">Related products</p>
              <h2>Continue through the broader Upcube product family.</h2>
              <div className="uc-news-article__related-grid">
                {article.relatedProducts.map((item) => (
                  <Link
                    className="uc-news-article__related-link"
                    href={item.href}
                    key={item.name}
                  >
                    <span>Product page</span>
                    <strong>{item.name}</strong>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          <div className="uc-shell">
            <div className="uc-news-article__cta-band">
              <div className="uc-news-featured__copy">
                <p className="uc-eyebrow">Next step</p>
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
                <Link className="uc-button" href="/news">
                  Back to news
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
      <PortalFooter />
    </PortalShell>
  );
}
