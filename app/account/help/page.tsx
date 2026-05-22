import type { Metadata } from "next";
import { AccountShell } from "components/upcube-account/account-shell";
import { AccountSidebar } from "components/upcube-account/account-sidebar";
import { helpSections } from "lib/upcube-account/account-content";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata: Metadata = createBasicPageMetadata({
  title: "Help & Support | Account | UpcubeAI",
  description: "Get help with Upcube products and account support.",
  path: "/account/help",
  noIndex: true,
});

export default function AccountHelpPage() {
  return (
    <AccountShell>
      <main className="uc-account-layout">
        <AccountSidebar />
        <div className="uc-account-content">
          <div className="uc-account-header">
            <h1 className="uc-account-title">Help & Support</h1>
            <p className="uc-account-desc">
              Find answers and get support for Upcube products.
            </p>
          </div>
          <div className="uc-account-stack">
            {helpSections.map((section) => (
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
