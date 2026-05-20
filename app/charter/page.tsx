import type { Metadata } from "next";

import { LongformPage } from "components/upcube-portal/longform-page";
import { getBodyForRoute } from "lib/upcube-portal/page-content";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata: Metadata = createBasicPageMetadata({
  title: "Product Charter | UpcubeAI",
  description:
    "Public charter for how UpcubeAI should build and speak plainly.",
  path: "/charter",
});

export default function CharterRoutePage() {
  const body = getBodyForRoute("/company/charter");

  return (
    <LongformPage
      entry={{
        slug: "charter",
        order: 99,
        title: "Product Charter",
        subtitle: "",
        description:
          "A public charter describing how UpcubeAI builds products and communicates.",
        body,
        category: "company",
      }}
      backHref="/company"
      backLabel="Back to Company"
    />
  );
}
