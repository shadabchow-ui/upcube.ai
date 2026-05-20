import type { Metadata } from "next";

import { LongformPage } from "components/upcube-portal/longform-page";
import { getBodyForRoute } from "lib/upcube-portal/page-content";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata: Metadata = createBasicPageMetadata({
  title: "Privacy Notice | UpcubeAI",
  description: "Privacy policy for UpcubeAI products and services.",
  path: "/legal/privacy",
});

export default function LegalPrivacyRoute() {
  const body = getBodyForRoute("/legal/privacy");

  return (
    <LongformPage
      entry={{
        slug: "privacy-policy",
        order: 99,
        title: "Privacy Notice",
        subtitle: "",
        description:
          "UpcubeAI privacy policy covering data collection, use, and protection.",
        body,
        category: "trust",
      }}
      backHref="/legal"
      backLabel="Back to Legal"
    />
  );
}
