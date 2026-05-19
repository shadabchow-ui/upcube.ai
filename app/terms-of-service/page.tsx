import type { Metadata } from "next";

import { TermsOfServicePage } from "components/upcube-portal/terms-of-service-page";

export const metadata: Metadata = {
  title: "Terms of Service | UpcubeAI",
  description:
    "Draft terms-of-service placeholder for UpcubeAI pending reviewed legal text.",
};

export default function TermsOfServiceRoutePage() {
  return <TermsOfServicePage />;
}
