import type { Metadata } from "next";

import { TrustPage } from "components/upcube-portal/trust-page";

export const metadata: Metadata = {
  title: "Trust | UpcubeAI",
  description:
    "Trust and security framing for UpcubeAI with conservative claim boundaries.",
};

export default function TrustRoutePage() {
  return <TrustPage />;
}
