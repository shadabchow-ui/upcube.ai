import type { Metadata } from "next";

import { PrivacyPolicyPage } from "components/upcube-portal/privacy-policy-page";

export const metadata: Metadata = {
  title: "Privacy Policy | UpcubeAI",
  description:
    "Draft privacy policy placeholder for UpcubeAI pending reviewed legal text.",
};

export default function PrivacyPolicyRoutePage() {
  return <PrivacyPolicyPage />;
}
