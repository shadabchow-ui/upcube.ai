import type { Metadata } from "next";

import { PlatformPage } from "components/upcube-portal/platform-page";

export const metadata: Metadata = {
  title: "UpcubeAI Platform",
  description: "Platform overview for the current UpcubeAI portal and app model.",
};

export default function PlatformRoute() {
  return <PlatformPage />;
}
