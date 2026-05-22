import Link from "next/link";
import { HeroChatPanel, HOME_CHAT_CTA_HREF } from "./hero-chat-panel";
import {
  featureBands,
  homeBuildSectionIntro,
  homeCapabilityPoints,
  stories,
} from "lib/upcube-home/content";
import { ecosystemGroups } from "lib/upcube-universal/product-links";
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
          <h1>Welcome to the agentic UpCube era.</h1>
          <p className="uc-home__lead">
            Upcube is a technology company building a connected family of
            products across AI, cloud, compute, robotics, education, commerce,
            spatial exploration, entertainment, and next-generation operating
            systems.
          </p>
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
              Explore the ecosystem.
            </h2>
            <p className="uc-home__section-copy uc-home__section-copy--centered">
              One connected ecosystem bringing together AI, cloud, compute,
              robotics, education, commerce, spatial exploration, entertainment,
              and next-generation operating systems, designed to help people
              turn ideas into real products, knowledge into action, and ambition
              into momentum.
            </p>
            <div className="uc-home__ecosystem-grid">
              {ecosystemGroups.map((group) => (
                <article className="uc-home__ecosystem-card" key={group.id}>
                  <h3 className="uc-home__ecosystem-card-title">
                    {group.title}
                  </h3>
                  <div className="uc-home__ecosystem-products">
                    {group.items.map((item) => {
                      if (!item.productHref) return null;
                      return (
                        <Link
                          href={item.productHref}
                          key={item.id}
                          className="uc-home__ecosystem-product-link"
                        >
                          {item.label}
                        </Link>
                      );
                    })}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="uc-home__section uc-home__section--portal"
          aria-labelledby="product-cards-title"
        >
          <div className="uc-home__container">
            <h2 id="product-cards-title" className="uc-home__section-title">
              Product highlights.
            </h2>
            <div className="uc-home__product-card-grid">
              {portalHomepageCards.map((card) => (
                <article className="uc-home__product-card" key={card.id}>
                  <div className="uc-home__product-card-meta">
                    <LinkMeta tag={card.tag} />
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <Link href={card.href}>{card.ctaLabel ?? "Explore"}</Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="uc-home__section uc-home__section--build"
          aria-labelledby="build-title"
        >
          <div className="uc-home__container uc-home__split-section">
            <div>
              <span className="uc-home__eyebrow">{homeBuildSectionIntro.eyebrow}</span>
              <h2 id="build-title">{homeBuildSectionIntro.title}</h2>
            </div>
            <p>{homeBuildSectionIntro.copy}</p>
          </div>
        </section>

        <section className="uc-home__section uc-home__section--capabilities">
          <div className="uc-home__container uc-home__capability-grid">
            {homeCapabilityPoints.map((point) => (
              <article className="uc-home__capability-card" key={point.title}>
                <span>{point.eyebrow}</span>
                <h3>{point.title}</h3>
                <p>{point.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="uc-home__section uc-home__section--bands">
          <div className="uc-home__container uc-home__band-grid">
            {featureBands.map((band) => (
              <article className="uc-home__band-card" key={band.title}>
                <span>{band.eyebrow}</span>
                <h3>{band.title}</h3>
                <p>{band.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="uc-home__section uc-home__section--stories">
          <div className="uc-home__container">
            <div className="uc-home__section-heading-row">
              <h2>Recent developments</h2>
              <Link href="/news">View all news</Link>
            </div>
            <div className="uc-home__story-grid">
              {stories.map((story) => (
                <Link href={story.href} className="uc-home__story-card" key={story.title}>
                  <span>{story.eyebrow}</span>
                  <h3>{story.title}</h3>
                  <p>{story.copy}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <PortalFooter />
    </div>
  );
}
