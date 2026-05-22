import { trustSections } from "lib/upcube-portal/content";
import { TextPage } from "components/upcube-portal/text-page";

export function TrustPage() {
  return (
    <TextPage
      eyebrow="Trust and security"
      title="Trust framing tied to current implementation evidence"
      description="This page provides a trust-focused entry point for Upcube products and websites without unsupported guarantees."
      sections={trustSections}
      ctas={[
        { label: "Open safety", href: "/safety" },
        { label: "Open privacy policy", href: "/privacy-policy" },
      ]}
    />
  );
}
