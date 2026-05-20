import type { Metadata } from "next";

import { LongformPage } from "components/upcube-portal/longform-page";
import { getBodyForRoute } from "lib/upcube-portal/page-content";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata: Metadata = createBasicPageMetadata({
  title: "For Teams & Builders | UpcubeAI",
  description:
    "How organizations can use UpcubeAI across teams, research, and operational workflows.",
  path: "/organizations",
});

export default function OrganizationsPage() {
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
      backHref="/policy"
      backLabel="Back to Policy"
    />
  );
}
