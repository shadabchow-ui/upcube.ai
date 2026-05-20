import type { Metadata } from "next";

import { FoundationPage } from "components/upcube-portal/foundation-page";
import { termsPageContent } from "lib/upcube-portal/foundation-pages";

export const metadata: Metadata = {
  title: "Legal Terms | UpcubeAI",
  description: "Placeholder terms-of-use route for future reviewed legal text.",
};

export default function LegalTermsRoutePage() {
  return <FoundationPage content={termsPageContent} />;
}
