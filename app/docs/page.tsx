import { TextPage } from "components/upcube-portal/text-page";
import { docsSections } from "lib/upcube-portal/content";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata = createBasicPageMetadata({
  title: "Docs | UpcubeAI",
  description:
    "Documentation hub placeholder linking source-backed portal and product routes.",
  path: "/docs",
});

export default function DocsRoutePage() {
  return (
    <TextPage
      eyebrow="Documentation"
      title="Documentation hub"
      description="This docs route is a useful index to current source-backed pages while full reference documentation is not provided."
      sections={docsSections}
      ctas={[
        { label: "Developers", href: "/developers" },
        { label: "Product pages", href: "/products/upcube-ai" },
        { label: "Trust", href: "/trust" },
      ]}
    />
  );
}
