import type { Metadata } from "next";

import { LongformPage } from "components/upcube-portal/longform-page";
import { getBodyForRoute } from "lib/upcube-portal/page-content";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata: Metadata = createBasicPageMetadata({
  title: "Careers | Upcube",
  description:
    "Explore the teams and product directions behind Upcube's connected technology ecosystem across AI, cloud, compute, robotics, commerce, education, discovery, and future operating systems.",
  path: "/careers",
});

export default function CareersRoutePage() {
  const body = getBodyForRoute("/company/careers");

  return (
    <LongformPage
      entry={{
        slug: "careers",
        order: 99,
        title: "Careers",
        subtitle: "",
        description:
          "Join UpcubeAI and help build the next generation of AI products.",
        body,
        category: "company",
      }}
      heroImage={{
        src: "/product-art/C-1-2016-024-Alien-Copy.jpeg",
        alt: "Editorial cover image for careers.",
      }}
      backHref="/company"
      backLabel="Back to Company"
    />
  );
}
