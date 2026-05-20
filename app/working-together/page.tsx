import type { Metadata } from "next";

import { FoundationPage } from "components/upcube-portal/foundation-page";
import { workingTogetherPageContent } from "lib/upcube-portal/foundation-pages";

export const metadata: Metadata = {
  title: "Working Together | UpcubeAI",
  description:
    "How UpcubeAI approaches collaboration, inclusion, and shared progress across the AI community.",
};

export default function WorkingTogetherRoutePage() {
  return <FoundationPage content={workingTogetherPageContent} />;
}
