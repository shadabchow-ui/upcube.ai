import type { Metadata } from "next";

import { LongformPage } from "components/upcube-portal/longform-page";
import { getBodyForRoute } from "lib/upcube-portal/page-content";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata: Metadata = createBasicPageMetadata({
  title: "Brand | Upcube",
  description:
    "Explore the Upcube brand system for a connected family of technology products across AI, cloud, compute, robotics, commerce, education, discovery, and future computing.",
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
      heroImage={{
        src: "/product-art/piet_mondrian_2_tableau_i.jpg",
        alt: "Editorial cover image for brand resources.",
      }}
      backHref="/company"
      backLabel="Back to Company"
    />
  );
}
