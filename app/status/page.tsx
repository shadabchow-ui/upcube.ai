import type { Metadata } from "next";

import { StatusPage } from "components/upcube-portal/status-page";

export const metadata: Metadata = {
  title: "Upcube Status | System Status",
  description:
    "View current public status for UpcubeAI, Ethen, Books, Earth, Games, Jobs, Cloud, Ventari, University, Voice, and related Upcube services.",
};

export default function StatusRoutePage() {
  return <StatusPage />;
}
