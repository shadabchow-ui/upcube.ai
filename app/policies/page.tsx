import type { Metadata } from "next";

import { FoundationPage } from "components/upcube-portal/foundation-page";
import { policiesPageContent } from "lib/upcube-portal/foundation-pages";

export const metadata: Metadata = {
  title: "Other Policies | UpcubeAI",
  description:
    "Policy index page for current placeholder-safe UpcubeAI routes.",
};

export default function PoliciesRoutePage() {
  return <FoundationPage content={policiesPageContent} />;
}
