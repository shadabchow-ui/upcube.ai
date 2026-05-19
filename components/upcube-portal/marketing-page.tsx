import Link from "next/link";

import { PortalFooter } from "components/upcube-portal/portal-footer";
import { PortalHeader } from "components/upcube-portal/portal-header";
import { PortalShell } from "components/upcube-portal/portal-shell";
import { MarketingPageContent } from "lib/upcube-portal/marketing-pages";

type MarketingPageProps = {
  content: MarketingPageContent;
};

function ActionLink({
  href,
  label,
  external,
  solid,
}: {
  href: string;
  label: string;
  external?: boolean;
  solid?: boolean;
}) {
  if (external) {
    return (
      <a
        className="uc-button"
        data-variant={solid ? "solid" : undefined}
        href={href}
        rel="noreferrer"
        target="_blank"
      >
        {label}
      </a>
    );
  }

  return (
    <Link
      className="uc-button"
      data-variant={solid ? "solid" : undefined}
      href={href}
    >
      {label}
    </Link>
  );
}

export function MarketingPage({ content }: MarketingPageProps) {
  return (
    <PortalShell>
      <PortalHeader />
      <main className="uc-main">
        <section className="uc-section uc-hero-section">
          <div className="uc-shell uc-hero-copy">
            <p className="uc-eyebrow">{content.eyebrow}</p>
            <h1 className="uc-hero-title">{content.title}</h1>
            <p className="uc-hero-lead">{content.lead}</p>
            <div className="uc-inline-actions">
              <ActionLink
                external={content.primaryCta.external}
                href={content.primaryCta.href}
                label={content.primaryCta.label}
                solid
              />
              {content.secondaryCta ? (
                <ActionLink
                  external={content.secondaryCta.external}
                  href={content.secondaryCta.href}
                  label={content.secondaryCta.label}
                />
              ) : null}
            </div>
            <div className="uc-chip-row">
              {content.chips.map((chip) => (
                <span className="uc-chip" key={chip}>
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </section>

        {content.sections.map((section) => (
          <section className="uc-section uc-section-rule" key={section.title}>
            <div className="uc-shell uc-content-stack">
              {section.eyebrow ? (
                <p className="uc-eyebrow">{section.eyebrow}</p>
              ) : null}
              <h2 className="uc-section-title">{section.title}</h2>
              {section.description ? (
                <p className="uc-section-description">{section.description}</p>
              ) : null}
              <div className="uc-grid uc-card-grid">
                {section.cards.map((card) => (
                  <article className="uc-card" key={card.title}>
                    <h3 className="uc-card-title">{card.title}</h3>
                    <p className="uc-card-copy">{card.body}</p>
                    {card.href ? (
                      card.external ? (
                        <a
                          className="uc-nav-link"
                          href={card.href}
                          rel="noreferrer"
                          target="_blank"
                        >
                          Open destination
                        </a>
                      ) : (
                        <Link className="uc-nav-link" href={card.href}>
                          Open page
                        </Link>
                      )
                    ) : null}
                  </article>
                ))}
              </div>
            </div>
          </section>
        ))}
      </main>
      <PortalFooter />
    </PortalShell>
  );
}
