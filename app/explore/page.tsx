import type { Metadata } from "next";

import { ExplorePage } from "components/upcube-portal/explore-page";

export const metadata: Metadata = {
  title: "UpcubeAI Explore",
  description: "Explore UpcubeAI portal destinations and connected app workflows.",
};

export default function ExploreRoute() {
  return <ExplorePage />;
}
