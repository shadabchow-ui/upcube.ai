import type { Metadata } from "next";

import { LongformPage } from "components/upcube-portal/longform-page";
import { getBodyForRoute } from "lib/upcube-portal/page-content";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata: Metadata = createBasicPageMetadata({
  title: "Founder Letter | Upcube",
  description:
    "A note on why Upcube is building a connected technology ecosystem across AI, cloud, compute, robotics, education, commerce, discovery, and future operating systems.",
  path: "/founder-letter",
});

export default function FounderLetterRoutePage() {
  const body = getBodyForRoute("/company/founder-letter");

  return (
    <LongformPage
      entry={{
        slug: "founder-letter",
        order: 99,
        title: "Why We Focus on AI",
        subtitle:
          "Advancing AI to serve people, expand opportunity, and propel useful innovation.",
        description:
          "A founder letter from Shadab, Founder of UpcubeAI, on why the company focuses on artificial intelligence.",
        body,
        category: "company",
      }}
      heroImage={{
        src: "/product-art/050b0e5fb4bd48bbb2c6a91baa3afc40_sw-2962_sh-2191.webp",
        alt: "Editorial cover image for the Upcube founder letter.",
      }}
      backHref="/company"
      backLabel="Back to Company"
    />
  );
}
