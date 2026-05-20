import Link from "next/link";
import { HeroChatPanel, HOME_CHAT_CTA_HREF } from "./hero-chat-panel";
import {
  featureBands,
  homeBuildSectionIntro,
  homeProofPoints,
  stories,
} from "lib/upcube-home/content";
import {
  portalHomepageCards,
  productScaleStats,
} from "lib/upcube-portal/content";
import { PortalFooter } from "components/upcube-portal/portal-footer";
import { PortalHeader } from "components/upcube-portal/portal-header";

function LinkMeta({
  placeholder,
  tag,
}: {
  placeholder?: boolean;
  tag?: string;
}) {
  if (placeholder) {
    return <small>Placeholder destination</small>;
  }

  if (tag) {
    return <small className="uc-home__chip">{tag}</small>;
  }

  return null;
}

function Hero() {
  return (
    <section className="uc-home__hero">
      <div className="uc-home__container uc-home__hero-inner">
        <div className="uc-home__hero-stack">
          <h1 className="uc-home__hero-title-compact">What can I help with?</h1>
          <HeroChatPanel />
        </div>
      </div>
    </section>
  );
}

export default function UpcubeHomePage() {
  return (
    <div className="uc-home">
      <PortalHeader />
      <main>
        <Hero />

        <section
          className="uc-home__section uc-home__section--stats"
          aria-labelledby="stats-title"
        >
          <div className="uc-home__container">
            <div className="uc-home__stats-grid">
              {productScaleStats.map((stat) => (
                <div className="uc-home__stat" key={stat.id}>
                  <span className="uc-home__stat-value">{stat.value}</span>
                  <span className="uc-home__stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="uc-home__section uc-home__section--portal"
          aria-labelledby="portal-title"
        >
          <div className="uc-home__container">
            <h2 id="portal-title" className="uc-home__section-title-centered">
              Discover UpcubeAI
            </h2>
            <div className="uc-home__portal-grid">
              {portalHomepageCards.map((card) => (
                <Link
                  className="uc-home__portal-card"
                  href={card.href}
                  key={card.id}
                >
                  <LinkMeta tag={card.tag} />
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <span className="uc-home__card-link">
                    {card.ctaLabel ?? "View product details"}
                  </span>
                  <LinkMeta placeholder={card.href === "#"} />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section
          className="uc-home__section uc-home__section--preview"
          aria-labelledby="preview-title"
        >
          <div className="uc-home__container">
            <p className="uc-home__preview-label">Product surfaces</p>
            <h2 id="preview-title">Interfaces built for clarity at scale.</h2>
            <p className="uc-home__section-copy">
              Purpose-built experiences that turn massive information spaces
              into simple, focused, and intelligent product surfaces.
            </p>
            <div className="uc-home__preview-grid">
              <article className="uc-home__preview-panel">
                <p className="uc-home__preview-caption">
                  Ethen workspace &mdash; Chat, research, and execution in one
                  connected AI workspace.
                </p>
                <div className="uc-home__preview-surface uc-home__preview-surface--workspace">
                  <div className="uc-home__preview-sidebar">
                    <span className="uc-home__preview-sidebar-item" />
                    <span className="uc-home__preview-sidebar-item" />
                    <span className="uc-home__preview-sidebar-item" />
                    <span className="uc-home__preview-sidebar-item" />
                    <span className="uc-home__preview-sidebar-item" />
                  </div>
                  <div className="uc-home__preview-main">
                    <div className="uc-home__preview-header-bar">
                      <span className="uc-home__preview-header-line" />
                      <span className="uc-home__preview-header-dot" />
                    </div>
                    <div className="uc-home__preview-body-lines">
                      <span className="uc-home__preview-body-line" />
                      <span className="uc-home__preview-body-line" />
                      <span className="uc-home__preview-body-line" />
                      <span className="uc-home__preview-body-line" />
                      <span className="uc-home__preview-body-line" />
                    </div>
                  </div>
                </div>
              </article>

              <article className="uc-home__preview-panel">
                <p className="uc-home__preview-caption">
                  Earth &mdash; 3D spatial exploration with terrain, layers, and
                  contextual overlays.
                </p>
                <div className="uc-home__preview-surface uc-home__preview-surface--globe">
                  <div className="uc-home__preview-globe-ring" />
                  <div className="uc-home__preview-annotation">
                    <span className="uc-home__preview-annotation-dot" />
                    <span className="uc-home__preview-annotation-text">
                      Terrain + overlay context
                    </span>
                  </div>
                </div>
              </article>

              <article className="uc-home__preview-panel">
                <p className="uc-home__preview-caption">
                  Ventari &mdash; Commerce discovery built for 100M+ products,
                  with powerful search, product detail, and catalog-scale
                  browsing.
                </p>
                <div className="uc-home__preview-surface uc-home__preview-surface--commerce">
                  <span className="uc-home__preview-commerce-bar" />
                  <div className="uc-home__preview-commerce-grid">
                    <span className="uc-home__preview-commerce-card" />
                    <span className="uc-home__preview-commerce-card" />
                    <span className="uc-home__preview-commerce-card" />
                    <span className="uc-home__preview-commerce-card" />
                    <span className="uc-home__preview-commerce-card" />
                    <span className="uc-home__preview-commerce-card" />
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section
          className="uc-home__section uc-home__section--alt"
          aria-labelledby="feature-title"
        >
          <div className="uc-home__container">
            <h2 id="feature-title">
              A product ecosystem for the AI and voice age.
            </h2>
            <div className="uc-home__feature-grid">
              {featureBands.map((band) => (
                <article
                  className={`uc-home__feature uc-home__feature--${band.tone}`}
                  key={band.title}
                >
                  <h3>{band.title}</h3>
                  <p>{band.description}</p>
                  <Link href={band.href}>{band.cta}</Link>
                  <LinkMeta placeholder={band.href === "#"} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="uc-home__section" aria-labelledby="proof-title">
          <div className="uc-home__container">
            <h2 id="proof-title">What Upcube builds</h2>
            <p className="uc-home__section-copy">{homeBuildSectionIntro}</p>
            <div className="uc-home__proof-grid">
              {homeProofPoints.map((item) => (
                <article className="uc-home__proof-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="uc-home__inline-links">
                    {item.links.map((link) => (
                      <Link href={link.href} key={link.href}>
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="uc-home__section uc-home__section--alt"
          aria-labelledby="updates-title"
        >
          <div className="uc-home__container">
            <div className="uc-home__section-head-row">
              <h2 id="updates-title">Recent developments</h2>
              <Link href="/news" className="uc-home__news-link">
                View all news
              </Link>
            </div>
            <div className="uc-home__story-grid">
              {stories.map((story) => (
                <Link
                  className="uc-home__story"
                  href={story.href}
                  key={story.title}
                >
                  <LinkMeta tag={story.tag} />
                  <h3>{story.title}</h3>
                  <p>{story.description}</p>
                  <LinkMeta placeholder={story.href === "#"} />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section
          className="uc-home__section uc-home__section--cta"
          aria-labelledby="cta-title"
        >
          <div className="uc-home__container">
            <h2 id="cta-title">See how the product family connects.</h2>
            <p className="uc-home__cta-copy">
              Start with Ethen. Then explore everything it opens. Move through
              product pages, launch stories, and research to see how UpcubeAI
              connects AI workspaces, voice platforms, education, commerce,
              discovery, cloud infrastructure, entertainment, and future
              computing into one growing ecosystem.
            </p>
            <div className="uc-home__cta-row">
              <Link href={HOME_CHAT_CTA_HREF} className="uc-home__primary-btn">
                Try Ethen
              </Link>
              <Link href="#portal-title" className="uc-home__ghost-btn">
                View ecosystem
              </Link>
            </div>
          </div>
        </section>
      </main>

      <PortalFooter />
    </div>
  );
}
