import type { Metadata } from "next";

import { LongformPage } from "components/upcube-portal/longform-page";
import { getBodyForRoute } from "lib/upcube-portal/page-content";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata: Metadata = createBasicPageMetadata({
  title: "Public Impact | UpcubeAI",
  description:
    "How UpcubeAI thinks about the broader effects of AI on learning, access, discovery, and meaningful progress.",
  path: "/societal-impact",
});

export default function SocietalImpactRoutePage() {
  const body = getBodyForRoute("/policy/societal-impact");

  return (
    <LongformPage
      entry={{
        slug: "societal-impact",
        order: 99,
        title: "Public Impact",
        subtitle: "A new era of discovery.",
        description:
          "AI has the potential to help people see patterns sooner, learn faster, build more confidently, and respond to problems with better information.",
        body,
        category: "trust",
      }}
      backHref="/policy"
      backLabel="Back to Policy"
    />
  );
}
