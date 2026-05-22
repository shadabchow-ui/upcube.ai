import type { Metadata } from "next";
import { AccountShell } from "components/upcube-account/account-shell";
import { AccountSidebar } from "components/upcube-account/account-sidebar";
import { AccountAppGrid } from "components/upcube-account/account-app-grid";
import { appsSections } from "lib/upcube-account/account-content";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata: Metadata = createBasicPageMetadata({
  title: "Connected Apps | Account | UpcubeAI",
  description: "Manage connected apps and Upcube product access.",
  path: "/account/apps",
  noIndex: true,
});

export default function AccountAppsPage() {
  return (
    <AccountShell>
      <main className="uc-account-layout">
        <AccountSidebar />
        <div className="uc-account-content">
          <div className="uc-account-header">
            <h1 className="uc-account-title">Connected Apps</h1>
            <p className="uc-account-desc">
              Your Upcube products and connected app permissions.
            </p>
          </div>
          <div className="uc-account-stack">
            {appsSections.map((section) => (
              <article key={section.id} className="uc-account-section-card">
                <h2 className="uc-account-section-title">{section.title}</h2>
                <p className="uc-account-section-desc">{section.description}</p>
              </article>
            ))}
            <div className="uc-account-section-card">
              <h2 className="uc-account-section-title">All Upcube Products</h2>
              <AccountAppGrid />
            </div>
          </div>
        </div>
      </main>
    </AccountShell>
  );
}
