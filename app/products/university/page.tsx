import type { Metadata } from "next";

import { ProductPage } from "components/upcube-products/product-page";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";
import { getUpcubeProductBySlug } from "lib/upcube-products/products";

const product = getUpcubeProductBySlug("university");

export const metadata: Metadata = createBasicPageMetadata({
  title: "Upcube University | Learning Platform for the Upcube Ecosystem",
  description:
    "Upcube University is the learning platform for the Upcube ecosystem, built for AI education, product training, technical courses, guided learning paths, and future credential-style programs.",
  path: "/products/university",
});

export default function UpcubeUniversityProductPageRoute() {
  return <ProductPage product={product} />;
}
