import type { Metadata } from "next";

import { LongformPage } from "components/upcube-portal/longform-page";
import { getBodyForRoute } from "lib/upcube-portal/page-content";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata: Metadata = createBasicPageMetadata({
  title: "Privacy | UpcubeAI",
  description: "Privacy policy for UpcubeAI products and services.",
  path: "/privacy",
});

export default function PrivacyRoute() {
  const body = getBodyForRoute("/legal/privacy");

  return (
    <LongformPage
      entry={{
        slug: "privacy",
        order: 99,
        title: "Privacy Notice",
        subtitle: "",
        description:
          "UpcubeAI privacy policy covering how we handle your data.",
        body,
        category: "trust",
      }}
      heroImage={{
        src: "/product-art/Senecio.jpeg",
        alt: "Editorial cover image for the privacy page.",
      }}
      backHref="/legal"
      backLabel="Back to Legal"
    />
  );
}
