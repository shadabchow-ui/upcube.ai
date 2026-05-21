import type { Metadata } from "next";

import { LongformPage } from "components/upcube-portal/longform-page";
import { getBodyForRoute } from "lib/upcube-portal/page-content";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata: Metadata = createBasicPageMetadata({
  title: "For Teams & Builders | UpcubeAI",
  description:
    "How organizations can use UpcubeAI across teams, research, and operational workflows.",
  path: "/for-organizations",
});

export default function ForOrganizationsRoutePage() {
  const body = getBodyForRoute("/organizations");

  return (
    <LongformPage
      entry={{
        slug: "for-organizations",
        order: 99,
        title: "For Teams & Builders",
        subtitle: "Unlock more capability with AI.",
        description:
          "AI can help organizations move with more clarity, speed, and confidence.",
        body,
        category: "trust",
      }}
      heroImage={{
        src: "/product-art/065d0e64a3514880bf2398126d0bcdca_sw-3815_sh-2501.webp",
        alt: "Editorial cover image for teams and builders.",
      }}
      backHref="/policy"
      backLabel="Back to Policy"
    />
  );
}
