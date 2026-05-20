import type { Metadata } from "next";

import { ProductPage } from "components/upcube-products/product-page";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";
import { getUpcubeProductBySlug } from "lib/upcube-products/products";

const product = getUpcubeProductBySlug("voice");

export const metadata: Metadata = createBasicPageMetadata({
  title: "Upcube Voice | AI Voice Platform for Future Upcube Devices",
  description:
    "Upcube Voice brings Ethen into future Upcube headphones, earbuds, home audio, car audio, and companion devices with private push-to-talk voice assistance built around user control.",
  path: "/products/voice",
});

export default function UpcubeVoiceProductPageRoute() {
  return <ProductPage product={product} />;
}
