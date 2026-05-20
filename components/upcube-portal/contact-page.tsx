import { contactSections } from "lib/upcube-portal/content";
import { ContactForm } from "components/upcube-portal/contact-form";
import { PortalFooter } from "components/upcube-portal/portal-footer";
import { PortalHeader } from "components/upcube-portal/portal-header";
import { PortalShell } from "components/upcube-portal/portal-shell";
import { SectionHeading } from "components/upcube-portal/section-heading";

export function ContactPage() {
  return (
    <PortalShell>
      <PortalHeader />
      <main className="uc-main">
        <section className="uc-section uc-hero-section">
          <div className="uc-shell uc-hero-grid">
            <div className="uc-hero-copy">
              <p className="uc-eyebrow">Contact</p>
              <h1 className="uc-hero-title">
                Get in touch with the Upcube team
              </h1>
              <p className="uc-hero-lead">
                Send us a message about sales, product interest, partnerships,
                press, or general inquiries. We review submissions from the
                product team.
              </p>
            </div>
          </div>
        </section>

        <section className="uc-section uc-section-rule" id="form">
          <div className="uc-shell uc-contact-layout">
            <div className="uc-contact-info">
              {contactSections.map((section) => (
                <div className="uc-contact-info__block" key={section.id}>
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
              ))}
            </div>
            <div className="uc-contact-form-wrap">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <PortalFooter />
    </PortalShell>
  );
}
