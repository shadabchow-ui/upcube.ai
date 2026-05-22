import type { Metadata } from "next";

import { LongformPage } from "components/upcube-portal/longform-page";
import { getBodyForRoute } from "lib/upcube-portal/page-content";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata: Metadata = createBasicPageMetadata({
  title: "Privacy | Upcube",
  description:
    "Upcube approach to security and privacy across products, websites, and services.",
  path: "/security-privacy",
});

export default function SecurityPrivacyRoutePage() {
  const body = getBodyForRoute("/security-privacy");

  return (
    <LongformPage
      entry={{
        slug: "security-privacy",
        order: 99,
        title: "Privacy",
        subtitle: "Protecting data and maintaining trust.",
        description:
          "Security and privacy are foundational to how Upcube builds products and services.",
        body,
        category: "trust",
      }}
      heroImage={{
        src: "/product-art/a32ca26a50a12c330df049b8b402b6a8.jpg",
        alt: "Editorial cover image for the security and privacy page.",
      }}
      backHref="/trust"
      backLabel="Back to Trust"
    />
  );
}
