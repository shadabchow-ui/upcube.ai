import { TextPage } from "components/upcube-portal/text-page";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";
import { pricingSections } from "lib/upcube-portal/content";

export const metadata = createBasicPageMetadata({
  title: "Pricing | UpcubeAI",
  description:
    "Availability and pricing status page for UpcubeAI product-family routes.",
  path: "/pricing",
});

export default function PricingRoutePage() {
  return (
    <TextPage
      eyebrow="Pricing"
      title="Pricing and availability"
      description="Public pricing tiers are not provided in this repository. Current product availability and commercial terms vary by product."
      sections={pricingSections}
      ctas={[
        { label: "Open apps", href: "/apps" },
        { label: "Contact", href: "/contact" },
      ]}
    />
  );
}
