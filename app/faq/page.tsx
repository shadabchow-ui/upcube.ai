import type { Metadata } from "next";

import { FaqPage } from "components/upcube-portal/faq-page";

export const metadata: Metadata = {
  title: "UpcubeAI FAQ",
  description:
    "FAQ for the UpcubeAI portal explaining current scope, placeholders, and trust-related implementation boundaries.",
};

export default function FaqRoute() {
  return <FaqPage />;
}
