import type { Metadata } from "next";

import { CareersPage } from "components/upcube-portal/careers-page";

export const metadata: Metadata = {
  title: "Careers | UpcubeAI",
  description: "Jobs and careers information for UpcubeAI.",
};

export default function CareersRoutePage() {
  return <CareersPage />;
}
