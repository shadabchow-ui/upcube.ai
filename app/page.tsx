import "app/styles/upcube-home.css";
import { JsonLd } from "components/upcube-seo/json-ld";
import UpcubeHomePage from "components/upcube-home/home-page";
import { upcubeCompanyIdentity } from "lib/upcube-portal/content";
import {
  createOrganizationJsonLd,
  createWebSiteJsonLd,
} from "lib/upcube-seo/jsonld";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata = createBasicPageMetadata({
  title: "UpCubeAI | Artificial Intelligence Company",
  description:
    "UpCubeAI is an artificial intelligence technology company building high-end products for work, discovery, commerce, cloud infrastructure, entertainment, voice, education, and the future of computing.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          createOrganizationJsonLd(upcubeCompanyIdentity),
          createWebSiteJsonLd(),
        ]}
      />
      <UpcubeHomePage />
    </>
  );
}
