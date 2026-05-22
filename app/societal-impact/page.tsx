import type { Metadata } from "next";

import { LongformPage } from "components/upcube-portal/longform-page";
import { getBodyForRoute } from "lib/upcube-portal/page-content";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata: Metadata = createBasicPageMetadata({
  title: "Impact | Upcube",
  description:
    "Upcube focuses on useful technology across education, careers, commerce, spatial tools, robotics operations, developer infrastructure, and future computing interfaces.",
  path: "/societal-impact",
});

export default function SocietalImpactRoutePage() {
  const body = getBodyForRoute("/policy/societal-impact");

  return (
    <LongformPage
      entry={{
        slug: "societal-impact",
        order: 99,
        title: "Public Impact",
        subtitle: "A new era of discovery.",
        description:
          "AI has the potential to help people see patterns sooner, learn faster, build more confidently, and respond to problems with better information.",
        body,
        category: "trust",
      }}
      heroImage={{
        src: "/product-art/FAA_starrry_night.jpg",
        alt: "Editorial cover image for public impact.",
      }}
      backHref="/policy"
      backLabel="Back to Policy"
    />
  );
}
