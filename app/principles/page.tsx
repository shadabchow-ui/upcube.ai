import type { Metadata } from "next";

import { LongformPage } from "components/upcube-portal/longform-page";
import { getBodyForRoute } from "lib/upcube-portal/page-content";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata: Metadata = createBasicPageMetadata({
  title: "Commitments | UpcubeAI",
  description:
    "Operating principles for UpcubeAI product delivery and trust posture.",
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
          "UpcubeAI's approach to developing and using AI is grounded in a simple founding belief.",
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
