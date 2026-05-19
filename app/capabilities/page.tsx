import type { Metadata } from "next";

import { CapabilitiesPage } from "components/upcube-portal/capabilities-page";

export const metadata: Metadata = {
  title: "UpcubeAI Capabilities",
  description:
    "Capabilities overview for the current UpcubeAI workspace model.",
};

export default function CapabilitiesRoute() {
  return <CapabilitiesPage />;
}
