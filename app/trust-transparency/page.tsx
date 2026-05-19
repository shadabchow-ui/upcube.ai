import type { Metadata } from "next";

import { FoundationPage } from "components/upcube-portal/foundation-page";
import { trustTransparencyPageContent } from "lib/upcube-portal/foundation-pages";

export const metadata: Metadata = {
  title: "Trust & Transparency | UpcubeAI",
  description:
    "How the public UpcubeAI site handles trust language, placeholders, and evidence boundaries.",
};

export default function TrustTransparencyRoutePage() {
  return <FoundationPage content={trustTransparencyPageContent} />;
}
