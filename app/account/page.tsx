import type { Metadata } from "next";
import { AccountShell } from "components/upcube-account/account-shell";
import { AccountSidebar } from "components/upcube-account/account-sidebar";
import { AccountCard } from "components/upcube-account/account-card";
import {
  accountDashboardTitle,
  accountDashboardDescription,
  accountOverviewCards,
} from "lib/upcube-account/account-content";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata: Metadata = createBasicPageMetadata({
  title: `${accountDashboardTitle} | UpcubeAI`,
  description: accountDashboardDescription,
  path: "/account",
  noIndex: true,
});

export default function AccountOverviewPage() {
  return (
    <AccountShell>
      <main className="uc-account-layout">
        <AccountSidebar />
        <div className="uc-account-content">
          <div className="uc-account-header">
            <h1 className="uc-account-title">{accountDashboardTitle}</h1>
            <p className="uc-account-desc">{accountDashboardDescription}</p>
          </div>
          <div className="uc-account-card-grid">
            {accountOverviewCards.map((card) => (
              <AccountCard
                key={card.id}
                title={card.title}
                description={card.description}
                href={card.href}
                status={card.status}
              />
            ))}
          </div>
        </div>
      </main>
    </AccountShell>
  );
}
