import type { Metadata } from "next";

import { LongformPage } from "components/upcube-portal/longform-page";
import { getBodyForRoute } from "lib/upcube-portal/page-content";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata: Metadata = createBasicPageMetadata({
  title: "Safety | UpcubeAI",
  description:
    "UpcubeAI safety approach: building useful AI with visible boundaries, human control, and honest public claims.",
  path: "/safety",
});

export default function SafetyRoute() {
  const body = getBodyForRoute("/safety");

  return (
    <LongformPage
      entry={{
        slug: "safety",
        order: 99,
        title: "Safety",
        subtitle: "Building useful AI with visible boundaries.",
        description:
          "Upcube's safety approach begins with a practical idea: AI products should help people move faster without making important decisions harder to understand.",
        body,
        category: "trust",
      }}
      backHref="/trust"
      backLabel="Back to Trust"
    />
  );
}
