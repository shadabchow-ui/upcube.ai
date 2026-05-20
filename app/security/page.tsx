import type { Metadata } from "next";

import { FoundationPage } from "components/upcube-portal/foundation-page";
import { securityPageContent } from "lib/upcube-portal/foundation-pages";

export const metadata: Metadata = {
  title: "Security | UpcubeAI",
  description:
    "A canonical security entry point that sets expectations without unsupported claims.",
};

export default function SecurityRoutePage() {
  return <FoundationPage content={securityPageContent} />;
}
