import { howItWorksSections } from "lib/upcube-portal/content";
import { TextPage } from "components/upcube-portal/text-page";

export function HowItWorksPage() {
  return (
    <TextPage
      eyebrow="How UpcubeAI works"
      title="Intent, response, review, and action"
      description="A high-level product workflow description based on current portal architecture and route behavior."
      sections={howItWorksSections}
      ctas={[
        { label: "Open principles", href: "/principles" },
        { label: "Open trust", href: "/trust" },
      ]}
    />
  );
}
