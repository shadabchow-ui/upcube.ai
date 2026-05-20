import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LongformPage } from "components/upcube-portal/longform-page";
import { getBodyForRoute } from "lib/upcube-portal/page-content";

type Props = {
  params: Promise<{ slug: string }>;
};

const slugRouteMap: Record<string, string> = {
  "ai-principles": "/policy/ai-principles",
  "working-together": "/policy/working-together",
  "societal-impact": "/policy/societal-impact",
  "why-we-focus-on-ai": "/company/founder-letter",
  "for-organizations": "/organizations",
};

const slugMeta: Record<string, { title: string; description: string }> = {
  "ai-principles": {
    title: "Commitments | UpcubeAI",
    description:
      "UpcubeAI's approach to developing and using AI, grounded in a simple founding belief.",
  },
  "working-together": {
    title: "Building With Communities | UpcubeAI",
    description:
      "AI should work for more people. Because it is built with more people.",
  },
  "societal-impact": {
    title: "Public Impact | UpcubeAI",
    description:
      "AI has the potential to help people see patterns sooner, learn faster, and build more confidently.",
  },
  "why-we-focus-on-ai": {
    title: "Founder Note | UpcubeAI",
    description:
      "A letter from Shadab, Founder of UpcubeAI, on why we focus on AI.",
  },
  "for-organizations": {
    title: "For Teams & Builders | UpcubeAI",
    description:
      "AI can help organizations move with more clarity, speed, and confidence.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const meta = slugMeta[slug];
  if (!meta) return { title: "Not Found" };
  return {
    title: meta.title,
    description: meta.description,
  };
}

export function generateStaticParams() {
  return Object.keys(slugRouteMap).map((slug) => ({ slug }));
}

const slugTitles: Record<string, string> = {
  "ai-principles": "Commitments",
  "working-together": "Building With Communities",
  "societal-impact": "Public Impact",
  "why-we-focus-on-ai": "Why We Focus on AI",
  "for-organizations": "For Teams & Builders",
};

const slugSubtitles: Record<string, string> = {
  "ai-principles":
    "Bold innovation. Responsible development. Progress together.",
  "working-together":
    "AI should work for more people. Because it is built with more people.",
  "societal-impact": "A new era of discovery.",
  "why-we-focus-on-ai":
    "Advancing AI to serve people, expand opportunity, and propel useful innovation.",
  "for-organizations": "Unlock more capability with AI.",
};

const slugDescriptions: Record<string, string> = {
  "ai-principles":
    "UpcubeAI's approach to developing and using AI is grounded in a simple founding belief: technology should help people understand more, build faster, and move through complexity with greater clarity.",
  "working-together":
    "UpcubeAI is being designed for a future where artificial intelligence is not reserved for a narrow group of users, companies, devices, languages, or workflows.",
  "societal-impact":
    "AI has the potential to help people see patterns sooner, learn faster, build more confidently, and respond to problems with better information.",
  "why-we-focus-on-ai":
    "A founder letter from Shadab, Founder of UpcubeAI. AI is one of the most important technologies of our time.",
  "for-organizations":
    "AI can help organizations move with more clarity, speed, and confidence. UpcubeAI is building a product family for that future.",
};

export default async function PolicySlugPage({ params }: Props) {
  const { slug } = await params;
  const route = slugRouteMap[slug];
  if (!route) notFound();

  const body = getBodyForRoute(route);
  if (!body) notFound();

  return (
    <LongformPage
      entry={{
        slug,
        order: 99,
        title: slugTitles[slug] ?? slug,
        subtitle: slugSubtitles[slug] ?? "",
        description: slugDescriptions[slug] ?? "",
        body,
        category: "trust",
      }}
      backHref="/policy"
      backLabel="Back to Policy"
    />
  );
}
