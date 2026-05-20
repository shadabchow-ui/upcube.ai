import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { FoundationPage } from "components/upcube-portal/foundation-page";
import {
  getPolicyPageBySlug,
  policyPageSlugs,
} from "lib/upcube-portal/policy-pages";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getPolicyPageBySlug(slug);
  if (!page) {
    return { title: "Not Found" };
  }

  return {
    title: `${page.eyebrow} | UpcubeAI`,
    description: page.description,
  };
}

export async function generateStaticParams() {
  return policyPageSlugs.map((slug) => ({ slug }));
}

export default async function PolicySlugPage({ params }: Props) {
  const { slug } = await params;
  const page = getPolicyPageBySlug(slug);

  if (!page) {
    notFound();
  }

  return <FoundationPage content={page} />;
}
