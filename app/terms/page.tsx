import type { Metadata } from "next";

import { FoundationPage } from "components/upcube-portal/foundation-page";
import { termsPageContent } from "lib/upcube-portal/foundation-pages";

export const metadata: Metadata = {
  title: "Terms of Use | UpcubeAI",
  description: "Placeholder terms-of-use route for future reviewed legal text.",
};

export default function TermsRoutePage() {
  return <FoundationPage content={termsPageContent} />;
}
