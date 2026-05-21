import type { Metadata } from "next";

import { ProductPage } from "components/upcube-products/product-page";
import { getUpcubeProductBySlug } from "lib/upcube-products/products";
import { createProductPageMetadata } from "lib/upcube-seo/metadata";

const product = getUpcubeProductBySlug("quantum");

export const metadata: Metadata = createProductPageMetadata(product);

export default function QuantumProductPageRoute() {
  return <ProductPage product={product} />;
}
