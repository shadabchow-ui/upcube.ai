import Link from "next/link";

import { portalNewsItems } from "lib/upcube-portal/content";
import { PortalFooter } from "./portal-footer";
import { PortalHeader } from "./portal-header";
import { PortalShell } from "./portal-shell";
import { SectionHeading } from "./section-heading";

export function NewsPage() {
  return (
    <PortalShell className="uc-portal-page">
      <PortalHeader />

      <main>
        <section className="uc-section uc-section-rule">
          <div className="uc-shell uc-content-stack">
            <SectionHeading
              eyebrow="UpcubeAI News"
              title="Recent developments"
              description="Static update notes for current portal and ecosystem progress. Publication workflow and dated newsroom archives are not provided in this repo."
            />
          </div>
        </section>

        <section
          className="uc-section uc-section-rule"
          aria-labelledby="news-grid-title"
        >
          <div className="uc-shell uc-content-stack">
            <SectionHeading
              title="Latest updates"
              description="Each item is placeholder editorial content and uses only destinations already present in the current portal/app map."
              className="uc-section-heading--compact"
            />
            <div className="uc-grid uc-card-grid">
              {portalNewsItems.map((item) => (
                <article key={item.id} className="uc-card">
                  <p className="uc-eyebrow">{item.statusLabel}</p>
                  <h3 className="uc-card-title">{item.title}</h3>
                  <p className="uc-card-copy">{item.summary}</p>
                  <p>
                    <Link className="uc-nav-link" href={item.href}>
                      Read update
                    </Link>
                  </p>
                </article>
              ))}
            </div>
            <p className="uc-card-copy">
              Looking for article-template detail?{" "}
              <Link
                className="uc-nav-link"
                href="/updates/platform-iteration-placeholder"
              >
                Open updates article route
              </Link>
              .
            </p>
          </div>
        </section>
      </main>

      <PortalFooter />
    </PortalShell>
  );
}
