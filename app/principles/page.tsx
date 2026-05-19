import type { Metadata } from "next";

import { PrinciplesPage } from "components/upcube-portal/principles-page";

export const metadata: Metadata = {
  title: "Principles | UpcubeAI",
  description:
    "Operating principles for UpcubeAI product delivery and trust posture.",
};

export default function PrinciplesRoutePage() {
  return <PrinciplesPage />;
}
