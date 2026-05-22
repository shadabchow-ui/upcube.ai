import type { Metadata } from "next";

import { LongformPage } from "components/upcube-portal/longform-page";
import { getBodyForRoute } from "lib/upcube-portal/page-content";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata: Metadata = createBasicPageMetadata({
  title: "Policies | Upcube",
  description:
    "Additional policy pages covering Upcube safety, trust, privacy, and responsible product practices.",
  path: "/policies",
});

export default function PoliciesRoutePage() {
  const body = getBodyForRoute("/legal/other-policies");

  return (
    <LongformPage
      entry={{
        slug: "other-policies",
        order: 99,
        title: "Policy",
        subtitle: "",
        description:
          "Additional policy surfaces across Upcube products and websites.",
        body,
        category: "trust",
      }}
      heroImage={{
        src: "/product-art/42333816071_33313e0909_b.jpg",
        alt: "Editorial cover image for policy pages.",
      }}
      backHref="/legal"
      backLabel="Back to Legal"
    />
  );
}
