import type { Metadata } from "next";

import { LongformPage } from "components/upcube-portal/longform-page";
import { getBodyForRoute } from "lib/upcube-portal/page-content";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata: Metadata = createBasicPageMetadata({
  title: "Company Overview | UpcubeAI",
  description:
    "Company overview for Upcube and its connected product ecosystem across AI, cloud, education, commerce, and discovery.",
  path: "/about",
});

export default function AboutRoutePage() {
  const body = getBodyForRoute("/company/about");

  return (
    <LongformPage
      entry={{
        slug: "about",
        order: 99,
        title: "Company Overview",
        subtitle: "Building a connected product family for the AI era.",
        description:
          "Upcube is a technology company building a connected family of products designed around clear product boundaries and practical use.",
        body,
        category: "company",
      }}
      heroImage={{
        src: "/product-art/42333816071_33313e0909_b.jpg",
        alt: "Editorial cover image for the company overview page.",
      }}
      backHref="/"
      backLabel="Back to Home"
    />
  );
}
