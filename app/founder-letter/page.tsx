import type { Metadata } from "next";

import { FoundationPage } from "components/upcube-portal/foundation-page";
import { founderLetterPageContent } from "lib/upcube-portal/foundation-pages";

export const metadata: Metadata = {
  title: "Founder Letter | UpcubeAI",
  description:
    "A letter from the founding perspective on why UpcubeAI exists and what it aims to build.",
};

export default function FounderLetterRoutePage() {
  return <FoundationPage content={founderLetterPageContent} />;
}
