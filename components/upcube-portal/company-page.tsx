import Link from "next/link";

import { PortalFooter } from "components/upcube-portal/portal-footer";
import { PortalHeader } from "components/upcube-portal/portal-header";
import { PortalShell } from "components/upcube-portal/portal-shell";
import { SectionHeading } from "components/upcube-portal/section-heading";
import {
  companyEcosystem,
  companyMission,
  upcubeCompanyIdentity,
  companyVisionBullets,
  companyWorkAreas,
} from "lib/upcube-portal/content";

export function CompanyPage() {
  return (
    <PortalShell>
      <PortalHeader />
      <main>
        <section className="uc-section uc-inner-hero">
          <div className="uc-shell">
            <SectionHeading
              eyebrow={companyMission.eyebrow}
              title={companyMission.title}
              description={companyMission.description}
            />
          </div>
        </section>

        <section className="uc-section uc-section-rule">
          <div className="uc-shell">
            <SectionHeading
              title="One ecosystem. Many ways to build, learn, discover, and operate."
              description="Products designed to work together."
            />
            <div className="uc-grid uc-inner-grid-3">
              {companyVisionBullets.map((item) => (
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
              title="Product areas"
              description="Connected products across the technology ecosystem."
            />
            <div className="uc-grid uc-inner-grid-3">
              {companyWorkAreas.map((item) => (
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
              title="Product family"
              description="Every product in the Upcube ecosystem."
            />
            <div className="uc-grid uc-card-grid">
              {companyEcosystem.map((item) => (
                <article key={item.id} className="uc-card">
                  {item.tag ? <p className="uc-eyebrow">{item.tag}</p> : null}
                  <h3 className="uc-card-title">{item.title}</h3>
                  <p className="uc-card-copy">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <PortalFooter />
    </PortalShell>
  );
}
