import Link from "next/link";

import { PortalFooter } from "components/upcube-portal/portal-footer";
import { PortalHeader } from "components/upcube-portal/portal-header";
import { PortalShell } from "components/upcube-portal/portal-shell";
import { researchLongformPages } from "lib/upcube-portal/longform-pages";

export function LongformIndexPage() {
  const sorted = [...researchLongformPages].sort((a, b) => a.order - b.order);

  return (
    <PortalShell className="uc-longform-index">
      <PortalHeader />
      <main>
        <div className="uc-shell uc-longform-index-hero">
          <div className="uc-longform-index-hero-copy">
            <p className="uc-eyebrow">Research</p>
            <h1 className="uc-longform-index-hero-title">
              Research at UpcubeAI
            </h1>
            <p className="uc-longform-index-hero-desc">
              Exploring AI across spatial intelligence, health knowledge,
              discovery science, planet resilience, core intelligence, search
              routing, adaptive intelligence, multimodal understanding, language
              reasoning, interface intelligence, connected infrastructure, human
              alignment, trust defense, AI engineering, and platform
              infrastructure.
            </p>
          </div>
        </div>
        <div className="uc-shell">
          <div className="uc-longform-cover-row">
            <img
              src="/product-art/FAA_starrry_night.jpg"
              alt="Editorial cover image for Upcube research."
              className="uc-longform-cover-image"
            />
          </div>
        </div>
        <div className="uc-shell uc-longform-index-section">
          <div className="uc-longform-index-grid">
            {sorted.map((entry) => (
              <Link
                key={entry.slug}
                className="uc-longform-index-card"
                href={`/research/${entry.slug}`}
              >
                <p className="uc-longform-index-card-order">
                  {String(entry.order).padStart(2, "0")}
                </p>
                <h2 className="uc-longform-index-card-title">{entry.title}</h2>
                <p className="uc-longform-index-card-desc">
                  {entry.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <PortalFooter />
    </PortalShell>
  );
}
