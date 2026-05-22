import type { Metadata } from "next";
import { AccountShell } from "components/upcube-account/account-shell";
import { AccountSidebar } from "components/upcube-account/account-sidebar";
import { AccountCentralLink } from "components/upcube-account/account-central-link";
import { profileSections } from "lib/upcube-account/account-content";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata: Metadata = createBasicPageMetadata({
  title: "Profile | Account | UpcubeAI",
  description: "Profile settings for your Upcube account.",
  path: "/account/profile",
  noIndex: true,
});

export default function AccountProfilePage() {
  return (
    <AccountShell>
      <main className="uc-account-layout">
        <AccountSidebar />
        <div className="uc-account-content">
          <AccountCentralLink settingPath="profile" />
          <div className="uc-account-header">
            <h1 className="uc-account-title">Profile</h1>
            <p className="uc-account-desc">
              Manage your name, photo, and personal details.
            </p>
          </div>
          <div className="uc-account-stack">
            {profileSections.map((section) => (
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
