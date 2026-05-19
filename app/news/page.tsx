import type { Metadata } from "next";

import { NewsIndexPage } from "components/upcube-news/news-index-page";

export const metadata: Metadata = {
  title: "Upcube News",
  description:
    "Launch stories and product previews across UpcubeAI, Ventari, Books, Earth, Games, Jobs, Cloud, VM Compute, Upcube OS, and Upcube Mobile OS.",
};

export default function NewsRoutePage() {
  return <NewsIndexPage />;
}
