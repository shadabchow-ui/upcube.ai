import type { Metadata } from "next";

import { FoundationPage } from "components/upcube-portal/foundation-page";
import { researchResidencyPageContent } from "lib/upcube-portal/foundation-pages";

export const metadata: Metadata = {
  title: "Research Residency | UpcubeAI",
  description:
    "Directional research residency page without claiming a live residency program.",
};

export default function ResearchResidencyRoutePage() {
  return <FoundationPage content={researchResidencyPageContent} />;
}
