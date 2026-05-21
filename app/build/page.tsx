import type { Metadata } from "next";

import { MarketingPage } from "components/upcube-portal/marketing-page";
import { buildPageContent } from "lib/upcube-portal/marketing-pages";

export const metadata: Metadata = {
  title: "Upcube Build | Cloud, Compute, and Platform Tools",
  description:
    "Upcube Build covers cloud infrastructure, compute, operating systems, and voice platform for teams building on the Upcube ecosystem.",
};

export default function BuildRoute() {
  return <MarketingPage content={buildPageContent} />;
}
