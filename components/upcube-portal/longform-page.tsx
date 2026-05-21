import Link from "next/link";

import { PortalFooter } from "components/upcube-portal/portal-footer";
import { PortalHeader } from "components/upcube-portal/portal-header";
import { PortalShell } from "components/upcube-portal/portal-shell";
import { renderMarkdownToHtml } from "lib/upcube-portal/render-markdown";
import type { LongformPageEntry } from "lib/upcube-portal/longform-pages";

type LongformPageProps = {
  entry: LongformPageEntry;
  backHref?: string;
  backLabel?: string;
  heroImage?: { src: string; alt: string };
};

function categoryEyebrow(category: string): string {
  switch (category) {
    case "research":
      return "Research";
    case "company":
      return "Company";
    default:
      return "Trust & Policy";
  }
}

export function LongformPage({
  entry,
  backHref,
  backLabel,
  heroImage,
}: LongformPageProps) {
  const bodyHtml = renderMarkdownToHtml(entry.body);
  const backUrl = backHref ?? "/research";
  const backText = backLabel ?? "Back to Research";
  const heroTagline = entry.subtitle || entry.description;

  return (
    <PortalShell className="uc-longform-page">
      <PortalHeader />
      <main>
        <article>
          <div className="uc-shell uc-longform-hero">
            <div className="uc-longform-hero-copy">
              <p className="uc-eyebrow">{categoryEyebrow(entry.category)}</p>
              <h1 className="uc-longform-hero-title">{entry.title}</h1>
              {heroTagline ? (
                <p className="uc-longform-hero-subtitle">{heroTagline}</p>
              ) : null}
            </div>
          </div>
          {heroImage ? (
            <div className="uc-shell">
              <div className="uc-longform-cover-row">
                <img
                  src={heroImage.src}
                  alt={heroImage.alt}
                  className="uc-longform-cover-image"
                />
              </div>
            </div>
          ) : null}
          <div className="uc-shell uc-longform-body">
            <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
          </div>
          <div className="uc-shell">
            <Link className="uc-longform__back" href={backUrl}>
              &larr; {backText}
            </Link>
          </div>
        </article>
      </main>
      <PortalFooter />
    </PortalShell>
  );
}
