import type { Metadata } from "next";

import { LongformPage } from "components/upcube-portal/longform-page";
import { getBodyForRoute } from "lib/upcube-portal/page-content";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata: Metadata = createBasicPageMetadata({
  title: "Security | Upcube",
  description:
    "Security approach and practices across Upcube products and websites.",
  path: "/security",
});

export default function SecurityRoutePage() {
  const body = getBodyForRoute("/security");

  return (
    <LongformPage
      entry={{
        slug: "security",
        order: 99,
        title: "Security",
        subtitle: "Building secure products for the technology ecosystem.",
        description:
          "Upcube approaches security as a product requirement across the connected product family, not only an infrastructure concern.",
        body,
        category: "trust",
      }}
      heroImage={{
        src: "/product-art/COMPOSITION-VII.jpg",
        alt: "Editorial cover image for the security page.",
      }}
      backHref="/trust"
      backLabel="Back to Trust"
    />
  );
}
