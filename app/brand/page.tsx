import type { Metadata } from "next";

import { FoundationPage } from "components/upcube-portal/foundation-page";
import { brandPageContent } from "lib/upcube-portal/foundation-pages";

export const metadata: Metadata = {
  title: "Brand Help Center | UpcubeAI",
  description: "Practical brand-use guidance for UpcubeAI and connected apps.",
};

export default function BrandRoutePage() {
  return <FoundationPage content={brandPageContent} />;
}
