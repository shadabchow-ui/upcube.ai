import type { Metadata } from "next";

import { LongformPage } from "components/upcube-portal/longform-page";
import { getBodyForRoute } from "lib/upcube-portal/page-content";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata: Metadata = createBasicPageMetadata({
  title: "Upcube Status | UpcubeAI",
  description: "Current public status for UpcubeAI products and services.",
  path: "/status",
});

export default function StatusRoutePage() {
  const body = getBodyForRoute("/status");

  return (
    <LongformPage
      entry={{
        slug: "status",
        order: 99,
        title: "Upcube System Status",
        subtitle: "Current status of UpcubeAI products and services.",
        description:
          "View the current public status for UpcubeAI products including Ethen, Books, Earth, Games, Jobs, Cloud, Ventari, University, Voice, and more.",
        body,
        category: "trust",
      }}
      backHref="/"
      backLabel="Back to Home"
    />
  );
}
