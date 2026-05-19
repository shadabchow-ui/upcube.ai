"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { UpcubeAppLauncher } from "components/upcube-universal-header/upcube-app-launcher";
import { HeroChatPanel, HOME_CHAT_CTA_HREF } from "./hero-chat-panel";
import { featureBands, stories } from "lib/upcube-home/content";
import {
  portalFooterGroups,
  portalHomepageCards,
  portalMenuGroups,
} from "lib/upcube-portal/content";
import {
  UPCUBE_BOOKS_URL,
  UPCUBE_CLOUD_URL,
  UPCUBE_GAMES_URL,
  UPCUBE_JOBS_URL,
  UPCUBE_PLANET_URL,
} from "lib/upcube-universal/product-links";

const currentAppLinks = [
  {
    id: "app-ai-home",
    label: "Ethen",
    href: HOME_CHAT_CTA_HREF,
    placeholder: false,
  },
  {
    id: "app-planet-home",
    label: "Planet",
    href: UPCUBE_PLANET_URL,
    placeholder: false,
  },
  {
    id: "app-books-home",
    label: "Books",
    href: UPCUBE_BOOKS_URL,
    placeholder: false,
  },
  {
    id: "app-games-home",
    label: "Games",
    href: UPCUBE_GAMES_URL,
    placeholder: false,
  },
  {
    id: "app-jobs-home",
    label: "Jobs",
    href: UPCUBE_JOBS_URL,
    placeholder: false,
  },
  {
    id: "app-cloud-home",
    label: "Cloud",
    href: UPCUBE_CLOUD_URL,
    placeholder: false,
  },
];

const footerGroups = portalFooterGroups.map((group) =>
  group.id === "products"
    ? {
        ...group,
        title: "Apps",
        links: currentAppLinks,
      }
    : group,
);

function LinkMeta({ placeholder }: { placeholder?: boolean }) {
  return placeholder ? <small>Placeholder destination</small> : null;
}

function Header() {
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);
  const navShellRef = useRef<HTMLDivElement | null>(null);
  const closeTimerRef = useRef<number | null>(null);
  const activeMenu =
    portalMenuGroups.find((group) => group.id === activeMenuId) ?? null;

  function clearCloseTimer() {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }

  function queueClose() {
    clearCloseTimer();
    closeTimerRef.current = window.setTimeout(() => {
      setActiveMenuId(null);
      closeTimerRef.current = null;
    }, 120);
  }

  useEffect(() => {
    if (!activeMenuId) {
      return;
    }

    function handlePointerDown(event: PointerEvent) {
      if (
        navShellRef.current &&
        !navShellRef.current.contains(event.target as Node)
      ) {
        clearCloseTimer();
        setActiveMenuId(null);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        clearCloseTimer();
        setActiveMenuId(null);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeMenuId]);

  useEffect(
    () => () => {
      clearCloseTimer();
    },
    [],
  );

  return (
    <header className="uc-home__header" aria-label="UpcubeAI portal header">
      <div className="uc-home__container uc-home__header-inner">
        <Link href="/" className="uc-home__brand">
          <img
            src="/brand/logo-mark.png"
            width={36}
            height={36}
            alt="UpcubeAI"
            className="uc-home__brand-mark"
          />
        </Link>

        <div
          className="uc-home__nav-shell"
          ref={navShellRef}
          onMouseEnter={clearCloseTimer}
          onMouseLeave={queueClose}
          onBlur={(event) => {
            const nextTarget = event.relatedTarget as Node | null;
            if (!nextTarget || !event.currentTarget.contains(nextTarget)) {
              clearCloseTimer();
              setActiveMenuId(null);
            }
          }}
        >
          <nav className="uc-home__nav" aria-label="Primary navigation">
            {portalMenuGroups.map((group) => (
              <div className="uc-home__nav-group" key={group.id}>
                <button
                  type="button"
                  className="uc-home__nav-trigger"
                  aria-expanded={activeMenu?.id === group.id}
                  aria-controls={`uc-home-mega-${group.id}`}
                  onMouseEnter={() => {
                    clearCloseTimer();
                    setActiveMenuId(group.id);
                  }}
                  onFocus={() => {
                    clearCloseTimer();
                    setActiveMenuId(group.id);
                  }}
                  onClick={() => {
                    clearCloseTimer();
                    setActiveMenuId(group.id);
                  }}
                >
                  {group.title}
                </button>
              </div>
            ))}
          </nav>

          {activeMenu ? (
            <div
              className="uc-home__mega-wrap"
              onMouseEnter={clearCloseTimer}
              onMouseLeave={queueClose}
            >
              <div
                id={`uc-home-mega-${activeMenu.id}`}
                className="uc-home__mega"
                role="group"
                aria-label={`${activeMenu.title} menu`}
              >
                <p className="uc-home__mega-label">{activeMenu.title}</p>
                <div className="uc-home__mega-grid">
                  {activeMenu.items.map((item) => (
                    <Link
                      className="uc-home__mega-item"
                      href={item.href}
                      key={item.id}
                    >
                      <span>{item.label}</span>
                      <small>
                        {item.description ??
                          (item.placeholder
                            ? "Destination not yet provided."
                            : "")}
                      </small>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ) : null}
        </div>

        <details className="uc-home__mobile-menu">
          <summary>Menu</summary>
          <div className="uc-home__mobile-panel">
            {portalMenuGroups.map((group) => (
              <section key={group.id} aria-label={`${group.title} mobile menu`}>
                <p className="uc-home__mobile-title">{group.title}</p>
                <div className="uc-home__mobile-links">
                  {group.items.map((item) => (
                    <Link
                      className="uc-home__mobile-link"
                      href={item.href}
                      key={item.id}
                    >
                      <span>{item.label}</span>
                      <small>
                        {item.description ??
                          (item.placeholder
                            ? "Destination not yet provided."
                            : "")}
                      </small>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </details>

        <div className="uc-home__actions">
          <UpcubeAppLauncher />
          <Link href="/research" className="uc-home__link-btn">
            Research
          </Link>
          <Link href={HOME_CHAT_CTA_HREF} className="uc-home__primary-btn">
            Open chat
          </Link>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="uc-home__hero">
      <div className="uc-home__container uc-home__hero-inner">
        <div className="uc-home__hero-stack">
          <h1>What can I help with?</h1>
          <HeroChatPanel />
        </div>
      </div>
    </section>
  );
}

export default function UpcubeHomePage() {
  return (
    <div className="uc-home">
      <Header />
      <main>
        <Hero />

        <section className="uc-home__section" aria-labelledby="portal-title">
          <div className="uc-home__container">
            <h2 id="portal-title">Portal products</h2>
            <div className="uc-home__portal-grid">
              {portalHomepageCards.map((card) => (
                <Link
                  className="uc-home__portal-card"
                  href={card.href}
                  key={card.id}
                >
                  {card.tag ? (
                    <span className="uc-home__chip">{card.tag}</span>
                  ) : null}
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
            <h2 id="feature-title">Built for every Upcube lane</h2>
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
            <h2 id="cta-title">Build your next system with UpcubeAI.</h2>
            <div className="uc-home__cta-row">
              <Link href={HOME_CHAT_CTA_HREF} className="uc-home__primary-btn">
                Start building
              </Link>
              <Link href="#portal-title" className="uc-home__ghost-btn">
                View ecosystem
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="uc-home__footer">
        <div className="uc-home__container uc-home__footer-grid">
          <div>
            <p className="uc-home__brand-text">UpcubeAI</p>
            <p className="uc-home__footer-copy">
              Main ecosystem portal for Ethen, Planet, Books, Games, Jobs, and
              Cloud across UpcubeAI.
            </p>
          </div>
          {footerGroups.map((group) => (
            <nav key={group.id} aria-label={`${group.title} links`}>
              <h3>{group.title}</h3>
              {group.links.map((item) => (
                <Link href={item.href} key={item.id}>
                  <span>{item.label}</span>
                  {item.placeholder ? <small>Placeholder</small> : null}
                </Link>
              ))}
            </nav>
          ))}
        </div>
      </footer>
    </div>
  );
}
