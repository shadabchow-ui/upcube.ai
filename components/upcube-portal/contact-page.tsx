import { PortalFooter } from "components/upcube-portal/portal-footer";
import { PortalHeader } from "components/upcube-portal/portal-header";
import { PortalShell } from "components/upcube-portal/portal-shell";
import { ContactForm } from "components/upcube-portal/contact-form";

export function ContactPage() {
  return (
    <PortalShell>
      <PortalHeader />
      <main className="uc-main">
        <section className="uc-section uc-hero-section">
          <div className="uc-shell uc-hero-grid">
            <div className="uc-hero-copy">
              <p className="uc-eyebrow">Contact</p>
              <h1 className="uc-hero-title">Contact Upcube</h1>
              <p className="uc-hero-lead">Let&rsquo;s build what comes next.</p>
            </div>
          </div>
        </section>

        <section className="uc-section uc-section-rule" id="form">
          <div className="uc-shell uc-contact-layout">
            <div className="uc-contact-info">
              <div className="uc-contact-info__block">
                <p className="uc-card-copy">
                  Upcube is building an AI-native technology ecosystem for
                  builders, learners, creators, and businesses. Tell us what
                  you&rsquo;re working on, and we&rsquo;ll route your request to
                  the right product area.
                </p>
                <p className="uc-card-copy">
                  Talk to us about AI, cloud, compute, education, voice,
                  commerce, jobs, Earth, games, OS, Mobile OS, Quantum, or
                  partnership opportunities.
                </p>
              </div>
              <div className="uc-contact-info__block">
                <ul className="uc-text-list">
                  <li className="uc-card-copy">
                    AI workspace and assistant products
                  </li>
                  <li className="uc-card-copy">
                    Cloud, compute, OS, Mobile OS, and voice platforms
                  </li>
                  <li className="uc-card-copy">
                    Education, books, quantum, and research products
                  </li>
                  <li className="uc-card-copy">
                    Earth, games, shopping, jobs, and discovery systems
                  </li>
                </ul>
              </div>
              <div className="uc-contact-info__block">
                <p className="uc-form-footnote">
                  Please do not submit passwords, private keys, payment details,
                  or sensitive personal data through this form.
                </p>
              </div>
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
