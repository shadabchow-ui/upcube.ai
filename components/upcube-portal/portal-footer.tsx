import Link from "next/link";
import { portalFooterGroups } from "lib/upcube-portal/content";
import {
  UPCUBE_BOOKS_URL,
  UPCUBE_CHAT_URL,
  UPCUBE_CLOUD_URL,
  UPCUBE_GAMES_URL,
  UPCUBE_JOBS_URL,
  UPCUBE_PLANET_URL,
} from "lib/upcube-universal/product-links";

const currentAppLinks = [
  {
    id: "app-ai-footer",
    label: "Ethen",
    href: UPCUBE_CHAT_URL,
    placeholder: false,
  },
  {
    id: "app-planet-footer",
    label: "Planet",
    href: UPCUBE_PLANET_URL,
    placeholder: false,
  },
  {
    id: "app-books-footer",
    label: "Books",
    href: UPCUBE_BOOKS_URL,
    placeholder: false,
  },
  {
    id: "app-games-footer",
    label: "Games",
    href: UPCUBE_GAMES_URL,
    placeholder: false,
  },
  {
    id: "app-jobs-footer",
    label: "Jobs",
    href: UPCUBE_JOBS_URL,
    placeholder: false,
  },
  {
    id: "app-cloud-footer",
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

export function PortalFooter() {
  return (
    <footer className="uc-footer">
      <div className="uc-shell uc-footer-grid">
        <div>
          <div className="uc-footer-brand-row">
            <img
              src="/brand/logo-mark.png"
              width={28}
              height={28}
              alt="UpcubeAI"
              className="uc-footer-brand-mark"
            />
            <p className="uc-footer-brand-text">UpcubeAI</p>
          </div>
          <p className="uc-footer-note">
            Shared portal for product stories, launch news, research, and app
            access across the Upcube ecosystem.
          </p>
        </div>
        <div className="uc-grid uc-card-grid">
          {footerGroups.map((group) => (
            <section key={group.id} aria-label={group.title}>
              <p className="uc-eyebrow">{group.title}</p>
              <ul>
                {group.links.map((item) => (
                  <li key={item.id}>
                    <Link
                      className="uc-nav-link"
                      data-placeholder={item.placeholder ? "true" : undefined}
                      href={item.href}
                    >
                      {item.label}
                      {item.placeholder ? (
                        <span className="uc-nav-note" aria-hidden="true">
                          Placeholder
                        </span>
                      ) : null}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </footer>
  );
}
