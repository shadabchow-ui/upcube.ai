import type { Metadata } from "next";

import { TrustPage } from "components/upcube-portal/trust-page";

export const metadata: Metadata = {
  title: "Trust | Upcube",
  description:
    "Trust and security framing for Upcube products and websites with conservative claim boundaries.",
};

export default function TrustRoutePage() {
  return <TrustPage />;
}
