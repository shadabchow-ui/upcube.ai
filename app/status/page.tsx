import type { Metadata } from "next";

import { LongformPage } from "components/upcube-portal/longform-page";
import { getBodyForRoute } from "lib/upcube-portal/page-content";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata: Metadata = createBasicPageMetadata({
  title: "Status | Upcube",
  description: "Current public status for Upcube products and services.",
  path: "/status",
});

export default function StatusRoutePage() {
  const body = getBodyForRoute("/status");

  return (
    <LongformPage
      entry={{
        slug: "status",
        order: 99,
        title: "Upcube System Status",
        subtitle: "Current status of Upcube products and services.",
        description:
          "View the current public status for Upcube products including AI, Books, Earth, Games, Jobs, Cloud, Ventari, Education, Voice, and more.",
        body,
        category: "trust",
      }}
      heroImage={{
        src: "/product-art/065d0e64a3514880bf2398126d0bcdca_sw-3815_sh-2501.webp",
        alt: "Editorial cover image for system status.",
      }}
      backHref="/"
      backLabel="Back to Home"
    />
  );
}
