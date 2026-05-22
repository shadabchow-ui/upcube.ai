import type { Metadata } from "next";

import { LongformPage } from "components/upcube-portal/longform-page";
import { getBodyForRoute } from "lib/upcube-portal/page-content";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata: Metadata = createBasicPageMetadata({
  title: "Product Principles | Upcube",
  description:
    "The Upcube product principles guide a connected ecosystem of AI, cloud, compute, robotics, commerce, education, discovery, and future operating system products.",
  path: "/charter",
});

export default function CharterRoutePage() {
  const body = getBodyForRoute("/company/charter");

  return (
    <LongformPage
      entry={{
        slug: "charter",
        order: 99,
        title: "Product Charter",
        subtitle: "",
        description:
          "A public charter describing how UpcubeAI builds products and communicates.",
        body,
        category: "company",
      }}
      heroImage={{
        src: "/product-art/050b0e5fb4bd48bbb2c6a91baa3afc40_sw-2962_sh-2191.webp",
        alt: "Editorial cover image for the product charter.",
      }}
      backHref="/company"
      backLabel="Back to Company"
    />
  );
}
