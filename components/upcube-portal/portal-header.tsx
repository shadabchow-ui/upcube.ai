import Link from "next/link";
import { portalActionNav, portalPrimaryNav } from "lib/upcube-portal/content";

export function PortalHeader() {
  return (
    <header className="uc-header">
      <div className="uc-shell uc-header-inner">
        <Link href="/" className="uc-brand" aria-label="UpcubeAI home">
          <img
            src="/brand/logo-mark.png"
            width={36}
            height={36}
            alt="UpcubeAI"
            className="uc-brand-mark"
          />
        </Link>
        <nav className="uc-header-nav" aria-label="Portal primary">
          <ul className="uc-nav-list">
            {portalPrimaryNav.map((item) => (
              <li key={item.id}>
                <Link
                  className="uc-nav-link"
                  data-placeholder={item.placeholder ? "true" : undefined}
                  href={item.href}
                >
                  {item.label}
                  {item.placeholder ? (
                    <span className="uc-nav-note" aria-hidden="true">
                      Soon
                    </span>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="uc-header-actions">
          {portalActionNav.map((item, index) => (
            <Link
              key={item.id}
              className="uc-button"
              data-variant={index === 1 ? "solid" : undefined}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
