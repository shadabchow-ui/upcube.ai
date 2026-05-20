import type { Metadata } from "next";

import { LongformPage } from "components/upcube-portal/longform-page";
import { getBodyForRoute } from "lib/upcube-portal/page-content";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata: Metadata = createBasicPageMetadata({
  title: "Brand Resources | UpcubeAI",
  description: "Practical brand-use guidance for UpcubeAI and connected apps.",
  path: "/brand",
});

export default function BrandRoutePage() {
  const body = getBodyForRoute("/company/brand-help-center");

  return (
    <LongformPage
      entry={{
        slug: "brand-help-center",
        order: 99,
        title: "Brand Resources",
        subtitle: "",
        description:
          "Brand guidelines and assets for UpcubeAI and its connected products.",
        body,
        category: "company",
      }}
      backHref="/company"
      backLabel="Back to Company"
    />
  );
}
