import type { Metadata } from "next";

import { ResearchPage } from "components/upcube-portal/research-page";

export const metadata: Metadata = {
  title: "UpcubeAI Research",
  description:
    "Research-to-decision workflow overview for the UpcubeAI portal.",
};

export default function Page() {
  return <ResearchPage />;
}
