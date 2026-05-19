import Link from "next/link";

import { PortalFooter } from "components/upcube-portal/portal-footer";
import { PortalHeader } from "components/upcube-portal/portal-header";
import { PortalShell } from "components/upcube-portal/portal-shell";
import { SectionHeading } from "components/upcube-portal/section-heading";
import {
  safetyPrinciples,
  safetyQualityNotes,
  trustLinks,
} from "lib/upcube-portal/content";

export function SafetyPage() {
  return (
    <PortalShell>
      <PortalHeader />
      <main className="uc-main">
        <section className="uc-section uc-hero-section">
          <div className="uc-shell uc-hero-grid">
            <div className="uc-hero-copy">
              <p className="uc-eyebrow">Safety and Trust</p>
              <h1 className="uc-hero-title">
                Responsible product framing before formal trust claims.
              </h1>
              <p className="uc-hero-lead">
                This page describes how UpcubeAI should present safety, quality,
                privacy, and governance topics while the repo lacks formal legal
                or compliance source material. It is meant to set expectations
                conservatively.
              </p>
            </div>
            <aside className="uc-note-panel" aria-label="Trust page status">
              <p className="uc-eyebrow">What is not claimed here</p>
              <p>
                No certifications, legal guarantees, security control lists, or
                reviewed policy commitments are represented on this page.
              </p>
            </aside>
          </div>
        </section>

        <section className="uc-section uc-section-rule">
          <div className="uc-shell uc-split-layout">
            <SectionHeading
              eyebrow="Responsible AI"
              title="Trust copy should match product proof."
              description="The implementation follows a claim-limited approach so design polish does not imply capabilities that the repo does not prove."
            />
            <div className="uc-grid uc-checklist-grid">
              {safetyPrinciples.map((item) => (
                <article className="uc-checklist-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="uc-section uc-section-rule">
          <div className="uc-shell">
            <SectionHeading
              eyebrow="Platform safety principles"
              title="Clear boundaries across product, privacy, and governance language."
              description="Each section below stays process-oriented because the repo does not include a reviewed trust-center source package."
            />
            <div className="uc-grid uc-feature-grid uc-feature-grid--three">
              {safetyQualityNotes.map((item) => (
                <article className="uc-feature-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="uc-section uc-section-rule">
          <div className="uc-shell">
            <SectionHeading
              eyebrow="Trust links"
              title="Link readers to the pages that explain current scope."
              description="These links route to implemented pages and avoid inventing contact channels or off-repo trust resources."
            />
            <div className="uc-grid uc-feature-grid">
              {trustLinks.map((item) => (
                <article className="uc-feature-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p>
                    <Link className="uc-nav-link" href={item.href}>
                      Open page
                    </Link>
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="uc-section uc-section-rule">
          <div className="uc-shell uc-cta-band">
            <div>
              <p className="uc-eyebrow">Continue</p>
              <h2 className="uc-section-title">
                Review current placeholders before publishing stronger
                commitments.
              </h2>
            </div>
            <div className="uc-inline-actions">
              <Link className="uc-button" data-variant="solid" href="/faq">
                Review FAQ
              </Link>
              <Link className="uc-button" href="/privacy">
                Review Privacy
              </Link>
            </div>
          </div>
        </section>
      </main>
      <PortalFooter />
    </PortalShell>
  );
}
