import type { Metadata } from "next";

import { NewsPage } from "components/upcube-portal/news-page";

export const metadata: Metadata = {
  title: "UpcubeAI News",
  description: "Recent developments across the UpcubeAI portal and ecosystem.",
};

export default function NewsRoutePage() {
  return <NewsPage />;
}
