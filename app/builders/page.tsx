import type { Metadata } from "next";

import BuildersClient from "./builders-client";

export const metadata: Metadata = {
  title: "UpcubeAI Builders",
  description:
    "UpcubeAI builders and developer workflows for shipping typed, reviewable, and policy-aware AI features.",
};

export default function BuildersRoutePage() {
  return <BuildersClient />;
}
