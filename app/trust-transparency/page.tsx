import type { Metadata } from "next";

import { LongformPage } from "components/upcube-portal/longform-page";
import { getBodyForRoute } from "lib/upcube-portal/page-content";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata: Metadata = createBasicPageMetadata({
  title: "Trust | Upcube",
  description:
    "How Upcube handles trust language, placeholders, and evidence boundaries across products and websites.",
  path: "/trust-transparency",
});

export default function TrustTransparencyRoutePage() {
  const body = getBodyForRoute("/trust-transparency");

  return (
    <LongformPage
      entry={{
        slug: "trust-transparency",
        order: 99,
        title: "Trust",
        subtitle: "How we handle evidence, placeholders, and public language.",
        description:
          "Trust is not a single page. It is built through honest product framing, clear public language, and evidence-backed claims across the Upcube product family.",
        body,
        category: "trust",
      }}
      heroImage={{
        src: "/product-art/1998-Despues-de-Montanas-y-Mar-.webp",
        alt: "Editorial cover image for trust and transparency.",
      }}
      backHref="/trust"
      backLabel="Back to Trust"
    />
  );
}
