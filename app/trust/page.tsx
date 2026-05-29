import type { Metadata } from "next";

import { TrustPage } from "components/upcube-portal/trust-page";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata: Metadata = createBasicPageMetadata({
  title: "Trust | Upcube",
  description:
    "Trust and security framing for Upcube products and websites with conservative claim boundaries.",
  path: "/trust",
});

export default function TrustRoutePage() {
  return <TrustPage />;
}
