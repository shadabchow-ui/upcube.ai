import { TextPage } from "components/upcube-portal/text-page";
import { FoundationPageContent } from "lib/upcube-portal/foundation-pages";

export function FoundationPage({
  content,
}: {
  content: FoundationPageContent;
}) {
  return (
    <TextPage
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      sections={content.sections}
      theme={content.theme}
      draftNotice={content.draftNotice}
      ctas={content.ctas}
    />
  );
}
