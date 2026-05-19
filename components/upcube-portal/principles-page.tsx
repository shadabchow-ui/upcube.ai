import { principlesSections } from "lib/upcube-portal/content";
import { TextPage } from "components/upcube-portal/text-page";

export function PrinciplesPage() {
  return (
    <TextPage
      eyebrow="UpcubeAI principles"
      title="Operating principles for practical AI delivery"
      description="A product-facing principles summary adapted from reference material and constrained to facts supported in this repo."
      sections={principlesSections}
      ctas={[
        { label: "View trust page", href: "/trust" },
        { label: "View FAQ", href: "/faq" },
      ]}
    />
  );
}
