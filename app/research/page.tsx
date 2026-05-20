import type { Metadata } from "next";

import { LongformIndexPage } from "components/upcube-portal/longform-index-page";

export const metadata: Metadata = {
  title: "UpcubeAI Research",
  description:
    "Research across geospatial AI, health AI, science, sustainability, algorithms, machine intelligence, NLP, HCI, networking, responsible AI, security, software engineering, and systems.",
};

export default function Page() {
  return <LongformIndexPage />;
}
