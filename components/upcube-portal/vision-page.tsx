import { visionSections } from "lib/upcube-portal/content";
import { TextPage } from "components/upcube-portal/text-page";

export function VisionPage() {
  return (
    <TextPage
      eyebrow="UpcubeAI vision"
      title="A unified portal for assistant, research, and operations workflows"
      description="This vision page reflects current implementation direction and avoids unsupported business, legal, or compliance claims."
      sections={visionSections}
      ctas={[
        { label: "Explore company", href: "/company" },
        { label: "How it works", href: "/how-it-works" },
      ]}
    />
  );
}
