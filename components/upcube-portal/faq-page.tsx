import Link from "next/link";

import { JsonLd } from "components/upcube-seo/json-ld";
import { PortalFooter } from "components/upcube-portal/portal-footer";
import { PortalHeader } from "components/upcube-portal/portal-header";
import { PortalShell } from "components/upcube-portal/portal-shell";
import { SectionHeading } from "components/upcube-portal/section-heading";
import { faqItems } from "lib/upcube-portal/content";
import { createFaqPageJsonLd } from "lib/upcube-seo/jsonld";

export function FaqPage() {
  return (
    <PortalShell>
      <PortalHeader />
      <main className="uc-main">
        <JsonLd data={createFaqPageJsonLd(faqItems)} />
        <section className="uc-section uc-hero-section">
          <div className="uc-shell uc-hero-grid">
            <div className="uc-hero-copy">
              <p className="uc-eyebrow">Frequently asked questions</p>
              <h1 className="uc-hero-title">
                Answers grounded in the current repo, not in guessed policy
                text.
              </h1>
              <p className="uc-hero-lead">
                This FAQ explains what the new portal pages cover, what is still
                placeholder-only, and why the implementation avoids unsupported
                enterprise, compliance, and legal promises.
              </p>
            </div>
            <aside className="uc-note-panel" aria-label="FAQ status">
              <p className="uc-eyebrow">Scope note</p>
              <p>
                Questions are answered using the current codebase and the listed
                markdown references only. Unprovided facts remain clearly
                unprovided.
              </p>
            </aside>
          </div>
        </section>

        <section className="uc-section uc-section-rule">
          <div className="uc-shell">
            <SectionHeading
              eyebrow="FAQ"
              title="Current questions and current answers."
              description="The details pattern keeps the page keyboard accessible without introducing client-side state."
            />
            <div className="uc-faq-list">
              {faqItems.map((item) => (
                <details className="uc-faq-item" key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="uc-section uc-section-rule">
          <div className="uc-shell uc-cta-band">
            <div>
              <p className="uc-eyebrow">Related pages</p>
              <h2 className="uc-section-title">
                Use the privacy and safety pages for current placeholder and
                trust context.
              </h2>
            </div>
            <div className="uc-inline-actions">
              <Link className="uc-button" data-variant="solid" href="/privacy">
                View Privacy
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
