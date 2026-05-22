import type { Metadata } from "next";

import { LongformPage } from "components/upcube-portal/longform-page";
import { getBodyForRoute } from "lib/upcube-portal/page-content";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata: Metadata = createBasicPageMetadata({
  title: "Commitments | Upcube",
  description:
    "Operating principles for Upcube product delivery, trust posture, and responsible product practices.",
  path: "/principles",
});

export default function PrinciplesRoutePage() {
  const body = getBodyForRoute("/policy/ai-principles");

  return (
    <LongformPage
      entry={{
        slug: "ai-principles",
        order: 99,
        title: "Commitments",
        subtitle:
          "Bold innovation. Responsible development. Progress together.",
        description:
          "Upcube approach to developing products and technologies grounded in clear operating principles.",
        body,
        category: "trust",
      }}
      heroImage={{
        src: "/product-art/1998-Despues-de-Montanas-y-Mar-.webp",
        alt: "Editorial cover image for commitments.",
      }}
      backHref="/policy"
      backLabel="Back to Policy"
    />
  );
}
