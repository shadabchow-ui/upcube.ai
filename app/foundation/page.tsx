import type { Metadata } from "next";

import { FoundationPage } from "components/upcube-portal/foundation-page";
import { foundationPageContent } from "lib/upcube-portal/foundation-pages";

export const metadata: Metadata = {
  title: "Foundation | UpcubeAI",
  description:
    "Mission-oriented foundation direction page without unsupported legal claims.",
};

export default function FoundationRoutePage() {
  return <FoundationPage content={foundationPageContent} />;
}
