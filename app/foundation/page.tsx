import type { Metadata } from "next";

import { LongformPage } from "components/upcube-portal/longform-page";
import { getBodyForRoute } from "lib/upcube-portal/page-content";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata: Metadata = createBasicPageMetadata({
  title: "Mission | Upcube",
  description:
    "Upcube's mission is to make advanced technology clearer and more useful across AI, cloud, compute, robotics, commerce, education, and future computing products.",
  path: "/foundation",
});

export default function FoundationRoutePage() {
  const body = getBodyForRoute("/company/foundation");

  return (
    <LongformPage
      entry={{
        slug: "foundation",
        order: 99,
        title: "Mission",
        subtitle: "",
        description: "The UpcubeAI Foundation direction and mission.",
        body,
        category: "company",
      }}
      heroImage={{
        src: "/product-art/FAA_Rhythm.jpg",
        alt: "Editorial cover image for mission.",
      }}
      backHref="/company"
      backLabel="Back to Company"
    />
  );
}
