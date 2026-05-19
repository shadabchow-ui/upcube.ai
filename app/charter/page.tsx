import type { Metadata } from "next";

import { FoundationPage } from "components/upcube-portal/foundation-page";
import { charterPageContent } from "lib/upcube-portal/foundation-pages";

export const metadata: Metadata = {
  title: "Our Charter | UpcubeAI",
  description:
    "Public charter for how UpcubeAI should build and speak plainly.",
};

export default function CharterRoutePage() {
  return <FoundationPage content={charterPageContent} />;
}
