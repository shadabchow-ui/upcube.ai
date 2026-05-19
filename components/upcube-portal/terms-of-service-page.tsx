import { legalDraftNotice, termsSections } from "lib/upcube-portal/content";
import { TextPage } from "components/upcube-portal/text-page";

export function TermsOfServicePage() {
  return (
    <TextPage
      eyebrow="Terms of service"
      title="Draft terms placeholder"
      description="This route provides a non-binding structure until reviewed terms are supplied in source control."
      sections={termsSections}
      draftNotice={legalDraftNotice}
      ctas={[
        { label: "Open privacy policy", href: "/privacy-policy" },
        { label: "Open contact", href: "/contact" },
      ]}
    />
  );
}
