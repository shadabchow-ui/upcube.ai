import type { Metadata } from "next";
import { AccountShell } from "components/upcube-account/account-shell";
import { AccountSidebar } from "components/upcube-account/account-sidebar";
import { AccountCentralLink } from "components/upcube-account/account-central-link";
import { securitySections } from "lib/upcube-account/account-content";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata: Metadata = createBasicPageMetadata({
  title: "Security | Account | UpcubeAI",
  description: "Security settings for your Upcube account.",
  path: "/account/security",
  noIndex: true,
});

export default function AccountSecurityPage() {
  return (
    <AccountShell>
      <main className="uc-account-layout">
        <AccountSidebar />
        <div className="uc-account-content">
          <AccountCentralLink settingPath="security" />
          <div className="uc-account-header">
            <h1 className="uc-account-title">Security</h1>
            <p className="uc-account-desc">
              Password, authentication, and device management.
            </p>
          </div>
          <div className="uc-account-stack">
            {securitySections.map((section) => (
              <article key={section.id} className="uc-account-section-card">
                <h2 className="uc-account-section-title">{section.title}</h2>
                <p className="uc-account-section-desc">{section.description}</p>
              </article>
            ))}
          </div>
        </div>
      </main>
    </AccountShell>
  );
}
