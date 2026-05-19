import Link from "next/link";

import { PortalFooter } from "components/upcube-portal/portal-footer";
import { PortalHeader } from "components/upcube-portal/portal-header";
import { PortalShell } from "components/upcube-portal/portal-shell";
import { SectionHeading } from "components/upcube-portal/section-heading";
import {
  companyEcosystem,
  companyMission,
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
            <SectionHeading title="Mission and vision" />
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
              title="Work areas"
              description="Core lanes where UpcubeAI is actively building products."
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
              title="Ecosystem overview"
              description="Connected products in the broader UpcubeAI portal."
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

        <section className="uc-section uc-section-rule">
          <div className="uc-shell">
            <SectionHeading
              title="Build with UpcubeAI"
              description="Use the portal as a single entry point for product, research, and execution workflows."
            />
            <p>
              <Link className="uc-button" data-variant="solid" href="#">
                Contact team (placeholder)
              </Link>
            </p>
          </div>
        </section>
      </main>
      <PortalFooter />
    </PortalShell>
  );
}
