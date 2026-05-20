import type { Metadata } from "next";

import { NewsIndexPage } from "components/upcube-news/news-index-page";
import { createNewsIndexMetadata } from "lib/upcube-seo/metadata";

export const metadata: Metadata = createNewsIndexMetadata();

export default function NewsRoutePage() {
  return <NewsIndexPage />;
}
