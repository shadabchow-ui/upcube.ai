import type { Metadata } from "next";

import TeamsClient from "./teams-client";

export const metadata: Metadata = {
  title: "UpcubeAI Teams",
  description:
    "UpcubeAI operating model for small teams and startups: repeatable workflows, clearer ownership, and practical guardrails.",
};

export default function TeamsRoutePage() {
  return <TeamsClient />;
}
