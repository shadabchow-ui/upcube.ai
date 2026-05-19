import type { Metadata } from "next";

import { FoundationPage } from "components/upcube-portal/foundation-page";
import { careersPageContent } from "lib/upcube-portal/foundation-pages";

export const metadata: Metadata = {
  title: "Careers | UpcubeAI",
  description: "Careers and builder culture overview for UpcubeAI.",
};

export default function CareersRoutePage() {
  return <FoundationPage content={careersPageContent} />;
}
