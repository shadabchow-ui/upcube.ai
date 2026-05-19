import Link from "next/link";
import { HeroChatPanel, HOME_CHAT_CTA_HREF } from "./hero-chat-panel";
import { featureBands, stories } from "lib/upcube-home/content";
import {
  portalHomepageCards,
  upcubeCompanyIdentity,
} from "lib/upcube-portal/content";
import { PortalFooter } from "components/upcube-portal/portal-footer";
import { PortalHeader } from "components/upcube-portal/portal-header";

function LinkMeta({ placeholder }: { placeholder?: boolean }) {
  return placeholder ? <small>Placeholder destination</small> : null;
}

function Hero() {
  return (
    <section className="uc-home__hero">
      <div className="uc-home__container uc-home__hero-inner">
        <div className="uc-home__hero-stack">
          <h1>What can I help with?</h1>
          <p className="uc-home__lead">
            {upcubeCompanyIdentity.oneLiner} High-end AI products for work,
            discovery, commerce, infrastructure, entertainment, and computing.
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

        <section className="uc-home__section" aria-labelledby="portal-title">
          <div className="uc-home__container">
            <h2 id="portal-title" className="uc-home__section-title-centered">
              Get Started with UpCube
            </h2>
            <div className="uc-home__portal-grid">
              {portalHomepageCards.map((card) => (
                <Link
                  className="uc-home__portal-card"
                  href={card.href}
                  key={card.id}
                >
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <LinkMeta placeholder={card.href === "#"} />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="uc-home__section" aria-labelledby="feature-title">
          <div className="uc-home__container">
            <h2 id="feature-title">
              Building the next generation of intelligent technology.
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

        <section className="uc-home__section" aria-labelledby="updates-title">
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
            <h2 id="cta-title">Explore the Upcube ecosystem.</h2>
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
