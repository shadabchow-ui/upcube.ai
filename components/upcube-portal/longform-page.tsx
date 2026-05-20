import Link from "next/link";

import { PortalFooter } from "components/upcube-portal/portal-footer";
import { PortalHeader } from "components/upcube-portal/portal-header";
import { PortalShell } from "components/upcube-portal/portal-shell";
import { renderMarkdownToHtml } from "lib/upcube-portal/render-markdown";
import type { LongformPageEntry } from "lib/upcube-portal/longform-pages";

type LongformPageProps = {
  entry: LongformPageEntry;
};

export function LongformPage({ entry }: LongformPageProps) {
  const bodyHtml = renderMarkdownToHtml(entry.body);

  return (
    <PortalShell className="uc-longform-page">
      <PortalHeader />
      <main>
        <article>
          <div className="uc-shell uc-longform-hero">
            <div className="uc-longform-hero-copy">
              <p className="uc-eyebrow">Research</p>
              <h1 className="uc-longform-hero-title">{entry.title}</h1>
              <p className="uc-longform-hero-subtitle">{entry.subtitle}</p>
              <p className="uc-longform-hero-desc">{entry.description}</p>
            </div>
          </div>
          <div className="uc-shell uc-longform-body">
            <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
          </div>
          <div className="uc-shell">
            <Link className="uc-longform__back" href="/research">
              &larr; Back to Research
            </Link>
          </div>
        </article>
      </main>
      <PortalFooter />
    </PortalShell>
  );
}
