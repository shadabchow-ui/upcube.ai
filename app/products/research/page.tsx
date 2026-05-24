import type { Metadata } from "next";

import { ProductPage } from "components/upcube-products/product-page";
import { createProductPageMetadata } from "lib/upcube-seo/metadata";
import { getUpcubeProductBySlug } from "lib/upcube-products/products";

const product = getUpcubeProductBySlug("research");

export const metadata: Metadata = createProductPageMetadata(product);

export default function ResearchProductPageRoute() {
  return <ProductPage product={product} />;
}
