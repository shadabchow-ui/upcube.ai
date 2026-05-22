import type { Metadata } from "next";
import { AccountShell } from "components/upcube-account/account-shell";
import { AccountSidebar } from "components/upcube-account/account-sidebar";
import { privacySections } from "lib/upcube-account/account-content";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata: Metadata = createBasicPageMetadata({
  title: "Privacy & Data | Account | UpcubeAI",
  description: "Privacy controls and data management for your Upcube account.",
  path: "/account/privacy",
  noIndex: true,
});

export default function AccountPrivacyPage() {
  return (
    <AccountShell>
      <main className="uc-account-layout">
        <AccountSidebar />
        <div className="uc-account-content">
          <div className="uc-account-header">
            <h1 className="uc-account-title">Privacy & Data</h1>
            <p className="uc-account-desc">
              Control your data, privacy settings, and account preferences.
            </p>
          </div>
          <div className="uc-account-stack">
            {privacySections.map((section) => (
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
