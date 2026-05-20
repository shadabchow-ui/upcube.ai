import { TextPage } from "components/upcube-portal/text-page";
import { appsSections, portalAppLinks } from "lib/upcube-portal/content";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata = createBasicPageMetadata({
  title: "Apps | UpcubeAI",
  description: "Portal app launcher for currently linked Upcube destinations.",
  path: "/apps",
});

export default function AppsRoutePage() {
  return (
    <TextPage
      eyebrow="Apps"
      title="Launch apps"
      description="Open public app destinations linked from this repository. Authenticated dashboard behavior is not implemented on this route."
      sections={appsSections}
      ctas={portalAppLinks.map((item) => ({
        label: item.label,
        href: item.href,
        external: item.href.startsWith("http"),
      }))}
    />
  );
}
