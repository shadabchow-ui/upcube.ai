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
  title: "UpcubeAI | AI Product Family for Work, Discovery, and Cloud",
  description:
    "UpcubeAI is the AI product company behind Ethen, Earth, Books, Games, Jobs, Cloud, Voice, University, and future computing platforms — a connected product family for work, discovery, commerce, infrastructure, and learning.",
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
