import type { Metadata } from "next";
import { AccountShell } from "components/upcube-account/account-shell";
import { AccountSidebar } from "components/upcube-account/account-sidebar";
import { AccountCentralLink } from "components/upcube-account/account-central-link";
import { storageSections } from "lib/upcube-account/account-content";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata: Metadata = createBasicPageMetadata({
  title: "Storage & Usage | Account | UpcubeAI",
  description: "Storage usage and quota management for Upcube products.",
  path: "/account/storage",
  noIndex: true,
});

export default function AccountStoragePage() {
  return (
    <AccountShell>
      <main className="uc-account-layout">
        <AccountSidebar />
        <div className="uc-account-content">
          <AccountCentralLink settingPath="storage" />
          <div className="uc-account-header">
            <h1 className="uc-account-title">Storage & Usage</h1>
            <p className="uc-account-desc">
              Track your storage usage and manage available quota.
            </p>
          </div>
          <div className="uc-account-stack">
            {storageSections.map((section) => (
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
