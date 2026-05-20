import type { Metadata } from "next";

import { LongformPage } from "components/upcube-portal/longform-page";
import { getBodyForRoute } from "lib/upcube-portal/page-content";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata: Metadata = createBasicPageMetadata({
  title: "Careers | UpcubeAI",
  description: "Careers and builder culture overview for UpcubeAI.",
  path: "/careers",
});

export default function CareersRoutePage() {
  const body = getBodyForRoute("/company/careers");

  return (
    <LongformPage
      entry={{
        slug: "careers",
        order: 99,
        title: "Careers",
        subtitle: "",
        description:
          "Join UpcubeAI and help build the next generation of AI products.",
        body,
        category: "company",
      }}
      backHref="/company"
      backLabel="Back to Company"
    />
  );
}
