import type { Metadata } from "next";

import { PrivacyPage } from "components/upcube-portal/privacy-page";

export const metadata: Metadata = {
  title: "UpcubeAI Privacy",
  description:
    "Placeholder privacy page for UpcubeAI pending reviewed legal copy and confirmed operational details.",
};

export default function PrivacyRoute() {
  return <PrivacyPage />;
}
