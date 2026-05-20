import type { Metadata } from "next";

import { LongformIndexPage } from "components/upcube-portal/longform-index-page";

export const metadata: Metadata = {
  title: "UpcubeAI Research",
  description:
    "Research across spatial intelligence, health knowledge, discovery science, planet resilience, core intelligence, search routing, adaptive intelligence, multimodal understanding, language reasoning, interface intelligence, connected infrastructure, human alignment, trust defense, AI engineering, and platform infrastructure.",
};

export default function Page() {
  return <LongformIndexPage />;
}
