import type { Metadata } from "next";

import { BusinessPage } from "components/upcube-portal/business-page";

export const metadata: Metadata = {
  title: "UpcubeAI Business",
  description:
    "Business-facing overview for UpcubeAI workflows and connected app lanes.",
};

export default function BusinessRoute() {
  return <BusinessPage />;
}
