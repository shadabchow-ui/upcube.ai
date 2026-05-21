import type { Metadata } from "next";

import { MarketingPage } from "components/upcube-portal/marketing-page";
import { corePageContent } from "lib/upcube-portal/marketing-pages";

export const metadata: Metadata = {
  title: "Upcube Core | Shared Intelligence and Platform Layer",
  description:
    "Upcube Core brings together AI, workspace, identity, search, and project orchestration as the foundational platform across every Upcube product.",
};

export default function CoreRoute() {
  return <MarketingPage content={corePageContent} />;
}
