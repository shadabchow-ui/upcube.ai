import type { Metadata } from "next";

import { LongformPage } from "components/upcube-portal/longform-page";
import { getBodyForRoute } from "lib/upcube-portal/page-content";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata: Metadata = createBasicPageMetadata({
  title: "Privacy Notice | UpcubeAI",
  description: "Draft privacy policy for UpcubeAI pending reviewed legal text.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyRoutePage() {
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
