import {
  legalDraftNotice,
  privacyPolicySections,
} from "lib/upcube-portal/content";
import { TextPage } from "components/upcube-portal/text-page";

export function PrivacyPolicyPage() {
  return (
    <TextPage
      eyebrow="Privacy policy"
      title="Draft privacy policy placeholder"
      description="This route is intentionally marked draft until reviewed legal policy text is added to the repo."
      sections={privacyPolicySections}
      draftNotice={legalDraftNotice}
      ctas={[
        { label: "Open terms", href: "/terms-of-service" },
        { label: "Open trust", href: "/trust" },
      ]}
    />
  );
}
