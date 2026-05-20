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
              Exploring AI across geospatial intelligence, health, science,
              sustainability, algorithms, information retrieval, machine
              intelligence, perception, natural language, human-computer
              interaction, networking, responsible AI, security, software
              engineering, and systems research.
            </p>
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
