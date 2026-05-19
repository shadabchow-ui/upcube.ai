import type { Metadata } from "next";

import { FoundationPage } from "components/upcube-portal/foundation-page";
import { researchEconomicPageContent } from "lib/upcube-portal/foundation-pages";

export const metadata: Metadata = {
  title: "Economic Research | UpcubeAI",
  description:
    "Directional economic research page for UpcubeAI without unsupported institute claims.",
};

export default function ResearchEconomicRoutePage() {
  return <FoundationPage content={researchEconomicPageContent} />;
}
