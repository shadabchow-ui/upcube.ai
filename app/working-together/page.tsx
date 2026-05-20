import type { Metadata } from "next";

import { LongformPage } from "components/upcube-portal/longform-page";
import { getBodyForRoute } from "lib/upcube-portal/page-content";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata: Metadata = createBasicPageMetadata({
  title: "Building With Communities | UpcubeAI",
  description:
    "How UpcubeAI approaches collaboration, inclusion, and shared progress across the AI community.",
  path: "/working-together",
});

export default function WorkingTogetherRoutePage() {
  const body = getBodyForRoute("/policy/working-together");

  return (
    <LongformPage
      entry={{
        slug: "working-together",
        order: 99,
        title: "Building With Communities",
        subtitle:
          "AI should work for more people. Because it is built with more people.",
        description:
          "UpcubeAI is being designed for a future where artificial intelligence is not reserved for a narrow group.",
        body,
        category: "trust",
      }}
      backHref="/policy"
      backLabel="Back to Policy"
    />
  );
}
