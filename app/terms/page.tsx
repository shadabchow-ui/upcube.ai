import type { Metadata } from "next";

import { LongformPage } from "components/upcube-portal/longform-page";
import { getBodyForRoute } from "lib/upcube-portal/page-content";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata: Metadata = createBasicPageMetadata({
  title: "Terms of Use | UpcubeAI",
  description: "Terms of Use for UpcubeAI websites, products, and services.",
  path: "/terms",
});

export default function TermsRoutePage() {
  const body = getBodyForRoute("/legal/terms");

  return (
    <LongformPage
      entry={{
        slug: "terms-of-use",
        order: 99,
        title: "Terms of Use",
        subtitle: "Welcome to UpcubeAI",
        description:
          "These Terms of Use describe the rules that apply when you access or use UpcubeAI products.",
        body,
        category: "trust",
      }}
      backHref="/legal"
      backLabel="Back to Legal"
    />
  );
}
