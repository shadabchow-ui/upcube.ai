import type { Metadata } from "next";

import { EnterprisePage } from "components/upcube-portal/enterprise-page";

export const metadata: Metadata = {
  title: "UpcubeAI Enterprise",
  description:
    "Enterprise workflow overview for UpcubeAI and connected app destinations.",
};

export default function EnterpriseRoute() {
  return <EnterprisePage />;
}
