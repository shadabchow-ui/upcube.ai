import Link from "next/link";

import { PortalFooter } from "components/upcube-portal/portal-footer";
import { PortalHeader } from "components/upcube-portal/portal-header";
import { PortalShell } from "components/upcube-portal/portal-shell";

export default function NotFound() {
  return (
    <PortalShell>
      <PortalHeader />
      <main className="uc-main">
        <section className="uc-section uc-hero-section">
          <div className="uc-shell uc-hero-grid">
            <div className="uc-hero-copy">
              <p className="uc-eyebrow">404</p>
              <h1 className="uc-hero-title">This page could not be found.</h1>
              <p className="uc-hero-lead">
                The route may have moved, expired, or never existed in the
                current UpCubeAI site map.
              </p>
              <div className="uc-inline-actions">
                <Link className="uc-button" data-variant="solid" href="/">
                  Home
                </Link>
                <Link className="uc-button" href="/products/upcube-ai">
                  Products
                </Link>
                <Link className="uc-button" href="/news">
                  News
                </Link>
                <Link className="uc-button" href="https://ethen.upcube.ai">
                  Try Ethen
                </Link>
              </div>
            </div>
            <aside className="uc-note-panel" aria-label="Route guidance">
              <p className="uc-eyebrow">Suggested next step</p>
              <p>
                Start from the homepage, latest news, or a product page to find
                the current public routes.
              </p>
            </aside>
          </div>
        </section>
      </main>
      <PortalFooter />
    </PortalShell>
  );
}
