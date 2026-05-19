import type { Metadata } from "next";

import { HowItWorksPage } from "components/upcube-portal/how-it-works-page";

export const metadata: Metadata = {
  title: "How It Works | UpcubeAI",
  description:
    "High-level workflow model for current UpcubeAI portal behavior.",
};

export default function HowItWorksRoutePage() {
  return <HowItWorksPage />;
}
