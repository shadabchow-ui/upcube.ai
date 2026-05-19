import type { Metadata } from "next";

import { ProductPage } from "components/upcube-products/product-page";
import { getUpcubeProductBySlug } from "lib/upcube-products/products";

const product = getUpcubeProductBySlug("ventari");

export const metadata: Metadata = {
  title: `${product.name} | Upcube`,
  description: product.summary,
};

export default function VentariProductPageRoute() {
  return <ProductPage product={product} />;
}
