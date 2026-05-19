import type { Metadata } from "next";

import { CompanyPage } from "components/upcube-portal/company-page";

export const metadata: Metadata = {
  title: "About | UpcubeAI",
  description: "About UpcubeAI and the current portal operating model.",
};

export default function AboutRoutePage() {
  return <CompanyPage />;
}
