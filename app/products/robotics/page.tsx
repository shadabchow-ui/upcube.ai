import type { Metadata } from "next";

import { ProductPage } from "components/upcube-products/product-page";
import { getUpcubeProductBySlug } from "lib/upcube-products/products";
import { createProductPageMetadata } from "lib/upcube-seo/metadata";

const product = getUpcubeProductBySlug("robotics");

export const metadata: Metadata = createProductPageMetadata(product);

export default function RoboticsProductPageRoute() {
  return <ProductPage product={product} />;
}
