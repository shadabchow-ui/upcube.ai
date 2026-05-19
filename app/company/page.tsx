import type { Metadata } from "next";

import { CompanyPage } from "components/upcube-portal/company-page";

export const metadata: Metadata = {
  title: "Company | UpcubeAI",
  description: "About UpcubeAI and the portal ecosystem.",
};

export default function CompanyRoutePage() {
  return <CompanyPage />;
}
