import { TextPage } from "components/upcube-portal/text-page";
import { legalSections, legalDraftNotice } from "lib/upcube-portal/content";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata = createBasicPageMetadata({
  title: "Legal | UpcubeAI",
  description: "Legal index for terms, privacy, policies, and trust routes.",
  path: "/legal",
});

export default function LegalRoutePage() {
  return (
    <TextPage
      eyebrow="Legal"
      title="Legal and policy index"
      description="A consolidated index of legal and policy routes currently available in this repository."
      sections={legalSections}
      draftNotice={legalDraftNotice}
      ctas={[
        { label: "Terms", href: "/terms" },
        { label: "Privacy", href: "/privacy" },
        { label: "Policies", href: "/policies" },
        { label: "Security", href: "/security" },
      ]}
    />
  );
}
