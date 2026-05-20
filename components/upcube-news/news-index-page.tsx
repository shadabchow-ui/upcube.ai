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
import { NewsletterForm } from "./newsletter-form";

export function NewsIndexPage() {
  return (
    <PortalShell className="uc-news-page">
      <PortalHeader />
      <main>
        <JsonLd
          data={createCollectionPageJsonLd({
            title: "Upcube News",
            description:
              "Launch stories and product previews across UpcubeAI, Voice, University, Ventari, Books, Earth, Games, Jobs, Cloud, VM Compute, Upcube OS, and Upcube Mobile OS.",
            path: "/news",
          })}
        />
        <section className="uc-news-hero">
          <div className="uc-shell uc-news-hero__grid">
            <div className="uc-news-hero__copy">
              <p className="uc-eyebrow">Upcube News</p>
              <h1 className="uc-news-hero__title">
                The latest from across the Upcube product family.
              </h1>
              <p className="uc-news-hero__lead">
                Follow launches, previews, research, and product direction as
                UpcubeAI expands across AI, commerce, discovery, voice,
                education, and future computing.
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
          </div>
        </section>

        <section className="uc-news-section">
          <div className="uc-shell">
            <div className="uc-news-section__head">
              <p className="uc-eyebrow">Product Launch</p>
              <h2>
                Launch stories from across the live Upcube product family.
              </h2>
              <p>
                Discover how each product is built, from AI work and reading to
                commerce, maps, games, jobs, cloud, and compute.
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
                Preview future platforms across voice, learning, and operating
                systems.
              </h2>
              <p>
                Upcube Voice, University, OS, and Mobile OS are product-preview
                surfaces that route readers to product pages and vision
                documentation.
              </p>
            </div>
            <div className="uc-news-grid">
              {upcubeNewsPreviewArticles.map((article) => (
                <NewsCard article={article} key={article.slug} />
              ))}
            </div>
          </div>
        </section>
        <section className="uc-news-section">
          <div className="uc-shell">
            <div className="uc-news-section__head">
              <p className="uc-eyebrow">Stay updated</p>
              <h2>Subscribe to product updates and launch stories</h2>
              <p>
                Get notified when new products launch and when existing products
                receive major updates. We send updates when there is something
                worth sharing.
              </p>
            </div>
            <NewsletterForm />
          </div>
        </section>
      </main>
      <PortalFooter />
    </PortalShell>
  );
}
