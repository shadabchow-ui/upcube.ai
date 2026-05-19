import type { Metadata } from "next";

import { ProductPage } from "components/upcube-products/product-page";
import { getUpcubeProductBySlug } from "lib/upcube-products/products";

const product = getUpcubeProductBySlug("cloud");

export const metadata: Metadata = {
  title: `${product.name} | Upcube`,
  description: product.summary,
};

export default function CloudProductPageRoute() {
  return <ProductPage product={product} />;
}
