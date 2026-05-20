import type { Metadata } from "next";

import { PrivacyPage } from "components/upcube-portal/privacy-page";

export const metadata: Metadata = {
  title: "Legal Privacy | UpcubeAI",
  description:
    "Placeholder privacy page for UpcubeAI pending reviewed legal copy and confirmed operational details.",
};

export default function LegalPrivacyRoute() {
  return <PrivacyPage />;
}
