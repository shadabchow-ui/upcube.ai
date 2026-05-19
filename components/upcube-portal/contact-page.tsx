import { contactSections } from "lib/upcube-portal/content";
import { TextPage } from "components/upcube-portal/text-page";

export function ContactPage() {
  return (
    <TextPage
      eyebrow="Contact"
      title="Contact channels pending verified details"
      description="This route intentionally avoids publishing unverified addresses, inboxes, or legal notice channels."
      sections={contactSections}
      ctas={[
        { label: "Trust page", href: "/trust" },
        { label: "Privacy policy", href: "/privacy-policy" },
      ]}
    />
  );
}
