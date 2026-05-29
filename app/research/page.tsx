import "app/styles/upcube-longform.css";

import Link from "next/link";
import type { Metadata } from "next";

import { PortalFooter } from "components/upcube-portal/portal-footer";
import { PortalHeader } from "components/upcube-portal/portal-header";
import { PortalShell } from "components/upcube-portal/portal-shell";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";
import { getUpcubeProductBySlug } from "lib/upcube-products/products";
import { researchLongformPages } from "lib/upcube-portal/longform-pages";

const product = getUpcubeProductBySlug("research");

export const metadata: Metadata = createBasicPageMetadata({
  title: "Upcube Research | AI-Native Research Workspace",
  description:
    "Upcube Research is an AI-native workspace for searching the web, collecting sources, synthesizing findings, monitoring topics, and exporting research into briefs, reports, and decisions across the Upcube ecosystem.",
  path: "/research",
});

export default function Page() {
  const sorted = [...researchLongformPages].sort((a, b) => a.order - b.order);

  return (
    <PortalShell className="uc-longform-index">
      <PortalHeader />
      <main>
        <div className="uc-shell uc-longform-index-hero">
          <div className="uc-longform-index-hero-copy">
            <p className="uc-eyebrow">{product.eyebrow}</p>
            <h1 className="uc-longform-index-hero-title">{product.headline}</h1>
            <p className="uc-longform-index-hero-desc">{product.summary}</p>
            <div className="uc-longform-index-actions">
              <Link
                href={product.primaryAction.href}
                className="uc-button"
                data-variant="solid"
              >
                {product.primaryAction.label}
              </Link>
              <Link href={product.secondaryAction.href} className="uc-button">
                {product.secondaryAction.label}
              </Link>
            </div>
            <div className="uc-longform-index-highlights">
              {product.heroHighlights.map((highlight) => (
                <div key={highlight} className="uc-longform-index-highlight">
                  {highlight}
                </div>
              ))}
            </div>
          </div>
        </div>

        {sorted.length > 0 ? (
          <div className="uc-shell uc-longform-index-section">
            <div className="uc-longform-index-grid-label">
              <p className="uc-eyebrow">Research articles</p>
            </div>
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
                  <h2 className="uc-longform-index-card-title">
                    {entry.title}
                  </h2>
                  <p className="uc-longform-index-card-desc">
                    {entry.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </main>
      <PortalFooter />
    </PortalShell>
  );
}
