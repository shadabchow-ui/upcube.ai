import { TextPage } from "components/upcube-portal/text-page";
import {
  UPCUBE_CLOUD_URL,
  developersSections,
} from "lib/upcube-portal/content";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata = createBasicPageMetadata({
  title: "Developers | UpcubeAI",
  description:
    "Developer overview page linking cloud, compute, docs, and status routes.",
  path: "/developers",
});

export default function DevelopersRoutePage() {
  return (
    <TextPage
      eyebrow="Developers"
      title="Developer overview"
      description="Developer-facing routes in this portal provide product and navigation context. Public API contracts are not provided in this repository."
      sections={developersSections}
      ctas={[
        { label: "Cloud", href: UPCUBE_CLOUD_URL, external: true },
        { label: "VM Compute", href: "/products/vm" },
        { label: "Docs", href: "/docs" },
        { label: "Status", href: "/status" },
      ]}
    />
  );
}
