import "app/styles/upcube-home.css";
import "app/styles/upcube-home-hero-override.css";
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
  title:
    "Upcube | AI, Cloud, Compute, Robotics, Education & Future Technology Products",
  description:
    "Upcube builds a connected technology ecosystem across AI, cloud infrastructure, compute, robotics, education, commerce, spatial exploration, entertainment, jobs, books, voice, and next-generation operating systems.",
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
