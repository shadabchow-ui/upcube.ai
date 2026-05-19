import Link from "next/link";

import { PortalFooter } from "components/upcube-portal/portal-footer";
import { PortalHeader } from "components/upcube-portal/portal-header";
import { PortalShell } from "components/upcube-portal/portal-shell";
import { PortalArticle } from "lib/upcube-portal/content";

type ArticlePageProps = {
  article: PortalArticle;
};

export function ArticlePage({ article }: ArticlePageProps) {
  return (
    <PortalShell>
      <PortalHeader />
      <main>
        <article className="uc-section uc-article">
          <div className="uc-shell uc-article-hero">
            <p className="uc-eyebrow">{article.category}</p>
            <h1 className="uc-article-title">{article.title}</h1>
            <p className="uc-section-description">{article.summary}</p>
            <dl className="uc-article-meta" aria-label="Article metadata">
              <div>
                <dt>Author</dt>
                <dd>{article.author}</dd>
              </div>
              <div>
                <dt>Published</dt>
                <dd>{article.publishedLabel}</dd>
              </div>
              <div>
                <dt>Reading time</dt>
                <dd>{article.readTime}</dd>
              </div>
            </dl>
            <p className="uc-article-note">{article.heroNote}</p>
          </div>

          <div className="uc-shell uc-article-body">
            {article.sections.map((section) => (
              <section key={section.id}>
                <h2 className="uc-section-title">{section.heading}</h2>
                {section.body.map((paragraph, index) => (
                  <p key={`${section.id}-${index}`} className="uc-card-copy">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </div>

          <div className="uc-shell uc-section-rule uc-article-links">
            <p className="uc-eyebrow">Related</p>
            <ul>
              {article.related.map((item) => (
                <li key={item.id}>
                  <Link href={item.href} className="uc-nav-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p>
              <Link href="/updates/platform-iteration-placeholder" className="uc-nav-link">
                Back to updates template
              </Link>
            </p>
          </div>
        </article>
      </main>
      <PortalFooter />
    </PortalShell>
  );
}
