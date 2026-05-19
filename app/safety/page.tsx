import type { Metadata } from "next";

import { SafetyPage } from "components/upcube-portal/safety-page";

export const metadata: Metadata = {
  title: "UpcubeAI Safety",
  description:
    "Safety and trust overview for UpcubeAI with process-oriented language and no unsupported compliance or legal claims.",
};

export default function SafetyRoute() {
  return <SafetyPage />;
}
