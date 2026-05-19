import Link from "next/link";

import { PortalFooter } from "components/upcube-portal/portal-footer";
import { PortalHeader } from "components/upcube-portal/portal-header";
import { PortalShell } from "components/upcube-portal/portal-shell";
import { SectionHeading } from "components/upcube-portal/section-heading";
import {
  careersBenefitsPlaceholders,
  careersCulture,
  careersHero,
  careersOpenRoles,
  careersValues,
} from "lib/upcube-portal/content";

export function CareersPage() {
  return (
    <PortalShell>
      <PortalHeader />
      <main>
        <section className="uc-section uc-inner-hero">
          <div className="uc-shell">
            <SectionHeading
              eyebrow={careersHero.eyebrow}
              title={careersHero.title}
              description={careersHero.description}
            />
          </div>
        </section>

        <section className="uc-section uc-section-rule">
          <div className="uc-shell">
            <SectionHeading title="Team values" />
            <div className="uc-grid uc-inner-grid-3">
              {careersValues.map((item) => (
                <article key={item.id} className="uc-card">
                  <h3 className="uc-card-title">{item.label}</h3>
                  <p className="uc-card-copy">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="uc-section uc-section-rule">
          <div className="uc-shell">
            <SectionHeading title="Work culture" />
            <div className="uc-grid uc-inner-grid-3">
              {careersCulture.map((item) => (
                <article key={item.id} className="uc-card">
                  <h3 className="uc-card-title">{item.label}</h3>
                  <p className="uc-card-copy">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="uc-section uc-section-rule">
          <div className="uc-shell">
            <SectionHeading
              title="Benefits and location"
              description="Placeholder content only because details are not provided in the repo/docs."
            />
            <div className="uc-grid uc-inner-grid-2">
              {careersBenefitsPlaceholders.map((item) => (
                <article key={item.id} className="uc-card">
                  <h3 className="uc-card-title">{item.label}</h3>
                  <p className="uc-card-copy">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="uc-section uc-section-rule">
          <div className="uc-shell">
            <SectionHeading
              title="Open roles"
              description="Static placeholder role cards while no jobs board is provided."
            />
            <div className="uc-grid uc-inner-grid-2">
              {careersOpenRoles.map((role) => (
                <article key={role.id} className="uc-card">
                  <p className="uc-eyebrow">{role.team}</p>
                  <h3 className="uc-card-title">{role.title}</h3>
                  <p className="uc-card-copy">{role.summary}</p>
                  <p className="uc-card-copy">{role.mode}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="uc-section uc-section-rule">
          <div className="uc-shell">
            <SectionHeading
              title="Interested in future roles?"
              description="Submit interest once a hiring intake flow is provided."
            />
            <p>
              <Link className="uc-button" data-variant="solid" href="#">
                Join talent waitlist (placeholder)
              </Link>
            </p>
          </div>
        </section>
      </main>
      <PortalFooter />
    </PortalShell>
  );
}
