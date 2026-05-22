import type { Metadata } from "next";
import { AccountShell } from "components/upcube-account/account-shell";
import { AccountSidebar } from "components/upcube-account/account-sidebar";
import { AccountCentralLink } from "components/upcube-account/account-central-link";
import { billingSections } from "lib/upcube-account/account-content";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata: Metadata = createBasicPageMetadata({
  title: "Billing & Plans | Account | UpcubeAI",
  description: "Billing and subscription management for Upcube products.",
  path: "/account/billing",
  noIndex: true,
});

export default function AccountBillingPage() {
  return (
    <AccountShell>
      <main className="uc-account-layout">
        <AccountSidebar />
        <div className="uc-account-content">
          <AccountCentralLink settingPath="billing" />
          <div className="uc-account-header">
            <h1 className="uc-account-title">Billing & Plans</h1>
            <p className="uc-account-desc">
              Manage your subscriptions, payment methods, and invoices.
            </p>
          </div>
          <div className="uc-account-stack">
            {billingSections.map((section) => (
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
