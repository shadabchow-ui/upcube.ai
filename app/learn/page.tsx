import type { Metadata } from "next";

import { MarketingPage } from "components/upcube-portal/marketing-page";
import { learnPageContent } from "lib/upcube-portal/marketing-pages";

export const metadata: Metadata = {
  title: "Upcube Learn | Education, Books, and Quantum",
  description:
    "Upcube Learn brings together education, books, and quantum computing — structured learning, discovery, and exploration.",
};

export default function LearnRoute() {
  return <MarketingPage content={learnPageContent} />;
}
