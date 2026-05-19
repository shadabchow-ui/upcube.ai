import type { Metadata } from "next";

import { SecurityPrivacyPage } from "components/upcube-portal/security-privacy-page";

export const metadata: Metadata = {
  title: "Security & Privacy | UpcubeAI",
  description: "Combined security and privacy placeholder route for UpcubeAI.",
};

export default function SecurityPrivacyRoutePage() {
  return <SecurityPrivacyPage />;
}
