import type { Metadata } from "next";

import { LongformPage } from "components/upcube-portal/longform-page";
import { getBodyForRoute } from "lib/upcube-portal/page-content";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata: Metadata = createBasicPageMetadata({
  title: "Privacy | UpcubeAI",
  description: "UpcubeAI approach to security and privacy across products.",
  path: "/security-privacy",
});

export default function SecurityPrivacyRoutePage() {
  const body = getBodyForRoute("/security-privacy");

  return (
    <LongformPage
      entry={{
        slug: "security-privacy",
        order: 99,
        title: "Privacy",
        subtitle: "Protecting data and maintaining trust.",
        description:
          "Security and privacy are foundational to how UpcubeAI builds products.",
        body,
        category: "trust",
      }}
      backHref="/trust"
      backLabel="Back to Trust"
    />
  );
}
