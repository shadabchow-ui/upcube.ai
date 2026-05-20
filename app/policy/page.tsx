import type { Metadata } from "next";
import Link from "next/link";

import { PortalFooter } from "components/upcube-portal/portal-footer";
import { PortalHeader } from "components/upcube-portal/portal-header";
import { PortalShell } from "components/upcube-portal/portal-shell";
import {
  policyPageContentBySlug,
  policyPageSlugs,
} from "lib/upcube-portal/policy-pages";

export const metadata: Metadata = {
  title: "Policy | UpcubeAI",
  description:
    "UpcubeAI policy pages covering AI principles, societal impact, working together, for organizations, and the founder letter.",
};

export default function PolicyIndexPage() {
  return (
    <PortalShell>
      <PortalHeader />
      <main className="uc-main">
        <section className="uc-section uc-hero-section">
          <div className="uc-shell uc-hero-grid">
            <div className="uc-hero-copy">
              <p className="uc-eyebrow">Policy</p>
              <h1 className="uc-hero-title">Policy and trust perspectives</h1>
              <p className="uc-hero-lead">
                A collection of policy-shaped pages covering AI principles,
                inclusion, societal impact, organizational use, and the
                founder&rsquo;s vision. Formal legal policy text, effective
                dates, legal entity details, and reviewed notice channels were
                not provided in this repo.
              </p>
              <p className="uc-draft-notice">
                Draft placeholder: reviewed legal copy, legal entity details,
                effective dates, and policy contacts were not provided in this
                repo.
              </p>
            </div>
          </div>
        </section>

        <section className="uc-section uc-section-rule">
          <div className="uc-shell">
            <ul className="uc-card-grid">
              {policyPageSlugs.map((slug) => {
                const page = policyPageContentBySlug[slug];
                return (
                  <li key={slug}>
                    <article className="uc-feature-card">
                      <p className="uc-eyebrow">{page.eyebrow}</p>
                      <h2 className="uc-card-title">{page.title}</h2>
                      <p className="uc-card-copy">{page.description}</p>
                      <Link
                        className="uc-button"
                        data-variant="solid"
                        href={`/policy/${slug}`}
                      >
                        Read more
                      </Link>
                    </article>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section className="uc-section uc-section-rule">
          <div className="uc-shell uc-inline-actions">
            <Link className="uc-button" data-variant="solid" href="/legal">
              Legal Index
            </Link>
            <Link className="uc-button" href="/safety">
              Safety Approach
            </Link>
            <Link className="uc-button" href="/faq">
              FAQ
            </Link>
          </div>
        </section>
      </main>
      <PortalFooter />
    </PortalShell>
  );
}
