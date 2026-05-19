import type { Metadata } from "next";

import { FoundationPage } from "components/upcube-portal/foundation-page";
import { aboutPageContent } from "lib/upcube-portal/foundation-pages";

export const metadata: Metadata = {
  title: "About Us | UpcubeAI",
  description: "High-level company and platform framing for UpcubeAI.",
};

export default function AboutRoutePage() {
  return <FoundationPage content={aboutPageContent} />;
}
