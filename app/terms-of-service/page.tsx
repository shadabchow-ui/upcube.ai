import type { Metadata } from "next";

import { LongformPage } from "components/upcube-portal/longform-page";
import { getBodyForRoute } from "lib/upcube-portal/page-content";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata: Metadata = createBasicPageMetadata({
  title: "Terms of Service | UpcubeAI",
  description:
    "Terms of Service for UpcubeAI websites, products, and services.",
  path: "/terms-of-service",
});

export default function TermsOfServiceRoutePage() {
  const body = getBodyForRoute("/legal/terms");

  return (
    <LongformPage
      entry={{
        slug: "terms-of-service",
        order: 99,
        title: "Terms of Service",
        subtitle: "Welcome to UpcubeAI",
        description:
          "These Terms of Service describe the rules that apply when you access or use UpcubeAI products.",
        body,
        category: "trust",
      }}
      backHref="/legal"
      backLabel="Back to Legal"
    />
  );
}
