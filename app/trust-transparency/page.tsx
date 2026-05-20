import type { Metadata } from "next";

import { LongformPage } from "components/upcube-portal/longform-page";
import { getBodyForRoute } from "lib/upcube-portal/page-content";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata: Metadata = createBasicPageMetadata({
  title: "Trust | UpcubeAI",
  description:
    "How the public UpcubeAI site handles trust language, placeholders, and evidence boundaries.",
  path: "/trust-transparency",
});

export default function TrustTransparencyRoutePage() {
  const body = getBodyForRoute("/trust-transparency");

  return (
    <LongformPage
      entry={{
        slug: "trust-transparency",
        order: 99,
        title: "Trust",
        subtitle: "How we handle evidence, placeholders, and public language.",
        description:
          "Trust is not a single page. It is built through honest product framing, clear public language, and evidence-backed claims.",
        body,
        category: "trust",
      }}
      backHref="/trust"
      backLabel="Back to Trust"
    />
  );
}
