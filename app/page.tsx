import "app/styles/upcube-home.css";
import { JsonLd } from "components/upcube-seo/json-ld";
import UpcubeHomePage from "components/upcube-home/home-page";
import {
  portalHomepageCards,
  upcubeCompanyIdentity,
} from "lib/upcube-portal/content";
import {
  createItemListJsonLd,
  createOrganizationJsonLd,
  createWebSiteJsonLd,
} from "lib/upcube-seo/jsonld";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata = createBasicPageMetadata({
  title: "Upcube | AI-Native Technology Ecosystem",
  description:
    "Upcube is building an AI-native technology ecosystem — combining AI, cloud, compute, operating systems, education, spatial tools, commerce, and work products into one connected platform. Explore Core, Build, Learn, and Explore.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          createOrganizationJsonLd(upcubeCompanyIdentity),
          createWebSiteJsonLd(),
          createItemListJsonLd(portalHomepageCards, "/"),
        ]}
      />
      <UpcubeHomePage />
    </>
  );
}
