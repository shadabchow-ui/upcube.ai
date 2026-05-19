import { trustSections } from "lib/upcube-portal/content";
import { TextPage } from "components/upcube-portal/text-page";

export function SecurityPrivacyPage() {
  return (
    <TextPage
      eyebrow="Security and privacy"
      title="Security and privacy overview placeholder"
      description="Alias route for teams expecting a combined security/privacy URL while formal policy material is still pending."
      sections={trustSections}
      ctas={[
        { label: "Open trust", href: "/trust" },
        { label: "Open privacy policy", href: "/privacy-policy" },
      ]}
    />
  );
}
