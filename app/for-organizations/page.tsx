import type { Metadata } from "next";

import { FoundationPage } from "components/upcube-portal/foundation-page";
import { forOrganizationsPageContent } from "lib/upcube-portal/foundation-pages";

export const metadata: Metadata = {
  title: "For Organizations | UpcubeAI",
  description:
    "How organizations can use UpcubeAI across teams, research, and operational workflows.",
};

export default function ForOrganizationsRoutePage() {
  return <FoundationPage content={forOrganizationsPageContent} />;
}
