import type { Metadata } from "next";

import { FoundationPage } from "components/upcube-portal/foundation-page";
import { societalImpactPageContent } from "lib/upcube-portal/foundation-pages";

export const metadata: Metadata = {
  title: "Societal Impact | UpcubeAI",
  description:
    "How UpcubeAI thinks about the broader effects of AI on learning, access, discovery, and meaningful progress.",
};

export default function SocietalImpactRoutePage() {
  return <FoundationPage content={societalImpactPageContent} />;
}
