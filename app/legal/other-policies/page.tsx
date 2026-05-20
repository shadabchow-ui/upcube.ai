import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LongformPage } from "components/upcube-portal/longform-page";
import { getBodyForRoute } from "lib/upcube-portal/page-content";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata: Metadata = createBasicPageMetadata({
  title: "Policy | UpcubeAI",
  description:
    "Additional policy pages covering UpcubeAI safety, trust, and responsible AI.",
  path: "/legal/other-policies",
});

export default function LegalOtherPoliciesPage() {
  const body = getBodyForRoute("/legal/other-policies");
  if (!body) notFound();

  return (
    <LongformPage
      entry={{
        slug: "other-policies",
        order: 99,
        title: "Policy",
        subtitle: "",
        description: "Additional policy surfaces across the UpcubeAI portal.",
        body,
        category: "trust",
      }}
      backHref="/legal"
      backLabel="Back to Legal"
    />
  );
}
