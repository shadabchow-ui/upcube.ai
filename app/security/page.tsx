import type { Metadata } from "next";

import { LongformPage } from "components/upcube-portal/longform-page";
import { getBodyForRoute } from "lib/upcube-portal/page-content";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata: Metadata = createBasicPageMetadata({
  title: "Security | UpcubeAI",
  description: "UpcubeAI security approach and practices.",
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
        subtitle: "Building secure products for the AI age.",
        description:
          "UpcubeAI approaches security as a product requirement, not only an infrastructure concern.",
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
