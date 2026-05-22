import type { Metadata } from "next";

import { LongformPage } from "components/upcube-portal/longform-page";
import { getBodyForRoute } from "lib/upcube-portal/page-content";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata: Metadata = createBasicPageMetadata({
  title: "Legal | Upcube",
  description:
    "Legal index for Upcube products, websites, and services including terms, privacy, policies, and trust routes.",
  path: "/legal",
});

export default function LegalRoutePage() {
  const body = getBodyForRoute("/legal");

  return (
    <LongformPage
      entry={{
        slug: "legal-policy-index",
        order: 99,
        title: "Legal & Policies",
        subtitle: "A clear home for Upcube legal and policy pages.",
        description:
          "This page brings together the legal, policy, safety, trust, privacy, and responsible AI routes currently available across the Upcube portal.",
        body,
        category: "trust",
      }}
      heroImage={{
        src: "/product-art/Composition.jpg",
        alt: "Editorial cover image for legal and policies.",
      }}
      backHref="/"
      backLabel="Back to Home"
    />
  );
}
