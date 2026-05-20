import Link from "next/link";

import { JsonLd } from "components/upcube-seo/json-ld";
import { PortalFooter } from "components/upcube-portal/portal-footer";
import { PortalHeader } from "components/upcube-portal/portal-header";
import { PortalShell } from "components/upcube-portal/portal-shell";
import {
  featuredUpcubeNewsArticle,
  upcubeNewsLaunchArticles,
  upcubeNewsPreviewArticles,
} from "lib/upcube-news/news";
import { createCollectionPageJsonLd } from "lib/upcube-seo/jsonld";
import { NewsCard } from "./news-card";

export function NewsIndexPage() {
  return (
    <PortalShell className="uc-news-page">
      <PortalHeader />
      <main>
        <JsonLd
          data={createCollectionPageJsonLd({
            title: "Upcube News",
            description:
              "Launch stories and product previews across UpcubeAI, Voice, Ventari, Books, Earth, Games, Jobs, Cloud, VM Compute, Upcube OS, and Upcube Mobile OS.",
            path: "/news",
          })}
        />
        <section className="uc-news-hero">
          <div className="uc-shell uc-news-hero__grid">
            <div className="uc-news-hero__copy">
              <p className="uc-eyebrow">Upcube News</p>
              <h1 className="uc-news-hero__title">
                Meet the Upcube product ecosystem.
              </h1>
              <p className="uc-news-hero__lead">
                Explore launch stories, product previews, and the connected
                tools shaping Upcube across AI, voice, commerce, discovery,
                cloud, compute, operating systems, and consumer applications.
              </p>
              <div className="uc-news-hero__actions">
                <Link
                  className="uc-button"
                  data-variant="solid"
                  href={featuredUpcubeNewsArticle.href}
                >
                  Read the launch story
                </Link>
                <Link className="uc-button" href="/explore">
                  Explore the ecosystem
                </Link>
              </div>
            </div>

            <article className="uc-news-featured" aria-label="Featured story">
              <div className="uc-news-featured__copy">
                <p className="uc-eyebrow">Featured launch</p>
                <h2 className="uc-news-featured__title">
                  {featuredUpcubeNewsArticle.headline}
                </h2>
                <p>{featuredUpcubeNewsArticle.excerpt}</p>
              </div>
              <div className="uc-news-hero__actions">
                <Link
                  className="uc-button"
                  data-variant="solid"
                  href={featuredUpcubeNewsArticle.href}
                >
                  Read the launch story
                </Link>
                <Link
                  className="uc-button"
                  href={featuredUpcubeNewsArticle.primaryCtaHref}
                >
                  {featuredUpcubeNewsArticle.primaryCtaLabel}
                </Link>
              </div>
            </article>
          </div>
        </section>

        <section className="uc-news-section">
          <div className="uc-shell">
            <div className="uc-news-section__head">
              <p className="uc-eyebrow">Product Launch</p>
              <h2>Launch stories across the live Upcube product family.</h2>
              <p>
                Follow how each product is positioned publicly, from AI work and
                reading to commerce, maps, games, jobs, cloud, and compute.
              </p>
            </div>
            <div className="uc-news-grid">
              {upcubeNewsLaunchArticles.map((article) => (
                <NewsCard article={article} key={article.slug} />
              ))}
            </div>
          </div>
        </section>

        <section className="uc-news-section">
          <div className="uc-shell">
            <div className="uc-news-section__head">
              <p className="uc-eyebrow">Product Preview</p>
              <h2>
                Preview future Upcube platforms across voice and operating
                systems.
              </h2>
              <p>
                Upcube Voice, Upcube OS, and Upcube Mobile OS stay framed as
                product-preview surfaces that route readers to internal product
                pages instead of launch apps.
              </p>
            </div>
            <div className="uc-news-grid">
              {upcubeNewsPreviewArticles.map((article) => (
                <NewsCard article={article} key={article.slug} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <PortalFooter />
    </PortalShell>
  );
}
