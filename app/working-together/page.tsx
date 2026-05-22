import type { Metadata } from "next";

import { LongformPage } from "components/upcube-portal/longform-page";
import { getBodyForRoute } from "lib/upcube-portal/page-content";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata: Metadata = createBasicPageMetadata({
  title: "Communities | Upcube",
  description:
    "Upcube builds with the communities who use technology to learn, create, discover, operate, and build across connected product experiences.",
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
      heroImage={{
        src: "/product-art/a32ca26a50a12c330df049b8b402b6a8.jpg",
        alt: "Editorial cover image for building with communities.",
      }}
      backHref="/policy"
      backLabel="Back to Policy"
    />
  );
}
