import Link from "next/link";

import { PortalFooter } from "components/upcube-portal/portal-footer";
import { PortalHeader } from "components/upcube-portal/portal-header";
import { PortalShell } from "components/upcube-portal/portal-shell";
import { SectionHeading } from "components/upcube-portal/section-heading";
import { PortalTextSection, PortalTheme } from "lib/upcube-portal/content";

type TextPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  sections: PortalTextSection[];
  theme?: PortalTheme;
  draftNotice?: string;
  ctas?: { label: string; href: string; external?: boolean }[];
};

export function TextPage({
  eyebrow,
  title,
  description,
  sections,
  theme,
  draftNotice,
  ctas,
}: TextPageProps) {
  return (
    <PortalShell theme={theme}>
      <PortalHeader />
      <main className="uc-main">
        <section className="uc-section uc-hero-section">
          <div className="uc-shell uc-hero-grid">
            <div className="uc-hero-copy">
              <p className="uc-eyebrow">{eyebrow}</p>
              <h1 className="uc-hero-title">{title}</h1>
              <p className="uc-hero-lead">{description}</p>
              {draftNotice ? (
                <p className="uc-draft-notice">{draftNotice}</p>
              ) : null}
            </div>
          </div>
        </section>

        {sections.map((section) => (
          <section
            className="uc-section uc-section-rule"
            key={section.id}
            id={section.id}
          >
            <div className="uc-shell">
              <SectionHeading title={section.title} />
              <div className="uc-text-stack">
                {section.paragraphs.map((paragraph) => (
                  <p className="uc-card-copy" key={paragraph}>
                    {paragraph}
                  </p>
                ))}
                {section.bullets ? (
                  <ul className="uc-text-list">
                    {section.bullets.map((bullet) => (
                      <li className="uc-card-copy" key={bullet}>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          </section>
        ))}

        {ctas?.length ? (
          <section className="uc-section uc-section-rule">
            <div className="uc-shell uc-inline-actions">
              {ctas.map((cta, index) =>
                cta.external ? (
                  <a
                    className="uc-button"
                    data-variant={index === 0 ? "solid" : undefined}
                    href={cta.href}
                    key={cta.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {cta.label}
                  </a>
                ) : (
                  <Link
                    className="uc-button"
                    data-variant={index === 0 ? "solid" : undefined}
                    href={cta.href}
                    key={cta.href}
                  >
                    {cta.label}
                  </Link>
                ),
              )}
            </div>
          </section>
        ) : null}
      </main>
      <PortalFooter />
    </PortalShell>
  );
}
