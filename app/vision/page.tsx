import type { Metadata } from "next";

import { VisionPage } from "components/upcube-portal/vision-page";

export const metadata: Metadata = {
  title: "Vision | UpcubeAI",
  description:
    "Current UpcubeAI vision and product direction for the portal ecosystem.",
};

export default function VisionRoutePage() {
  return <VisionPage />;
}
