import type { Metadata } from "next";

import { LongformPage } from "components/upcube-portal/longform-page";
import { getBodyForRoute } from "lib/upcube-portal/page-content";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata: Metadata = createBasicPageMetadata({
  title: "Company Overview | UpcubeAI",
  description: "Company overview and product ecosystem for UpcubeAI.",
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
        subtitle: "Building a product family for the AI age.",
        description:
          "Upcube is an AI technology company building a connected family of products.",
        body,
        category: "company",
      }}
      backHref="/"
      backLabel="Back to Home"
    />
  );
}
