import Link from "next/link";
import { portalFooterGroups } from "lib/upcube-portal/content";

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
            Shared portal foundation. Route URLs remain placeholders where not
            yet implemented.
          </p>
        </div>
        <div className="uc-grid uc-card-grid">
          {portalFooterGroups.map((group) => (
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
