import Link from "next/link";

import { PortalFooter } from "components/upcube-portal/portal-footer";
import { PortalHeader } from "components/upcube-portal/portal-header";
import { PortalShell } from "components/upcube-portal/portal-shell";
import { SectionHeading } from "components/upcube-portal/section-heading";
import { privacySections } from "lib/upcube-portal/content";

export function PrivacyPage() {
  return (
    <PortalShell>
      <PortalHeader />
      <main className="uc-main">
        <section className="uc-section uc-hero-section">
          <div className="uc-shell uc-hero-grid">
            <div className="uc-hero-copy">
              <p className="uc-eyebrow">Privacy placeholder</p>
              <h1 className="uc-hero-title">
                A policy-shaped page without invented legal commitments.
              </h1>
              <p className="uc-hero-lead">
                Reviewed privacy text, dates, contact channels, and legal entity
                details were not provided in this repo. This route exists so the
                portal can link to a truthful placeholder instead of implying a
                finalized policy.
              </p>
            </div>
            <aside
              className="uc-note-panel"
              aria-label="Privacy placeholder status"
            >
              <p className="uc-eyebrow">Not a binding policy</p>
              <p>
                Replace this content only when reviewed legal copy and
                operational details are checked into the repo.
              </p>
            </aside>
          </div>
        </section>

        <section className="uc-section uc-section-rule">
          <div className="uc-shell">
            <SectionHeading
              eyebrow="Current structure"
              title="Sections prepared for future reviewed legal copy."
              description="The structure is intentionally simple so legal text can replace it later without reworking the shared portal shell."
            />
            <div className="uc-grid uc-privacy-grid">
              {privacySections.map((section) => (
                <article className="uc-feature-card" key={section.title}>
                  <h2 className="uc-card-title">{section.title}</h2>
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="uc-section uc-section-rule">
          <div className="uc-shell uc-cta-band">
            <div>
              <p className="uc-eyebrow">Related context</p>
              <h2 className="uc-section-title">
                See the FAQ and safety pages for the current implementation
                boundaries.
              </h2>
            </div>
            <div className="uc-inline-actions">
              <Link className="uc-button" data-variant="solid" href="/faq">
                View FAQ
              </Link>
              <Link className="uc-button" href="/safety">
                View Safety
              </Link>
            </div>
          </div>
        </section>
      </main>
      <PortalFooter />
    </PortalShell>
  );
}
