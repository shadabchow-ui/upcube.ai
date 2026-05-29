import { PortalFooter } from "components/upcube-portal/portal-footer";
import { PortalHeader } from "components/upcube-portal/portal-header";
import { PortalShell } from "components/upcube-portal/portal-shell";
import {
  statusGroups,
  statusDisclaimer,
  statusMonitoringNotice,
} from "lib/upcube-portal/status";

export function StatusPage() {
  return (
    <PortalShell>
      <PortalHeader />
      <main className="uc-main">
        <section className="uc-status-page">
          <div className="uc-shell">
            <div className="uc-status-banner">
              <span className="uc-status-banner-icon" aria-hidden="true">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </span>
              <div>
                <h1 className="uc-status-banner-title">
                  Public status overview
                </h1>
                <p className="uc-status-banner-text">
                  Status labels on this page describe current public product
                  direction and route availability.
                </p>
              </div>
            </div>
          </div>

          <section className="uc-section">
            <div className="uc-shell">
              <h2 className="uc-section-title">System status</h2>
            </div>
          </section>

          {statusGroups.map((group) => (
            <section className="uc-section" key={group.name}>
              <div className="uc-shell">
                <div className="uc-status-group">
                  <h3 className="uc-status-group-name">{group.name}</h3>
                  <p className="uc-status-group-summary">{group.summary}</p>
                  <div className="uc-status-rows">
                    {group.components.map((component) => (
                      <div className="uc-status-row" key={component.name}>
                        <div className="uc-status-row-left">
                          <span className="uc-status-dot" aria-hidden="true" />
                          <span className="uc-status-component-name">
                            {component.name}
                          </span>
                        </div>
                        <span className="uc-status-uptime">
                          {component.statusLabel}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          ))}

          <section className="uc-section uc-section-rule">
            <div className="uc-shell">
              <p className="uc-status-note">{statusDisclaimer}</p>
              <p className="uc-status-note">{statusMonitoringNotice}</p>
            </div>
          </section>
        </section>
      </main>
      <PortalFooter />
    </PortalShell>
  );
}
