import Link from "next/link";
import type { Metadata } from "next";

import { PortalFooter } from "components/upcube-portal/portal-footer";
import { PortalHeader } from "components/upcube-portal/portal-header";
import { PortalShell } from "components/upcube-portal/portal-shell";
import { upcubeProductLinks } from "lib/upcube-universal/product-links";

export const metadata: Metadata = {
  title: "All Products | Upcube",
  description:
    "Explore the full Upcube product family across Core, Build, Learn, and Explore.",
};

type GroupDef = {
  id: string;
  label: string;
  href: string;
  description: string;
  productIds: string[];
};

const ecosystemGroups: GroupDef[] = [
  {
    id: "core",
    label: "Upcube Core",
    href: "/core",
    description:
      "The shared intelligence and platform layer spanning AI, workspace, identity, search, and project orchestration.",
    productIds: ["upcube-ai"],
  },
  {
    id: "build",
    label: "Upcube Build",
    href: "/build",
    description:
      "Cloud infrastructure, compute, robotics, operating systems, and voice platform for builders and platform teams.",
    productIds: [
      "cloud",
      "vm",
      "robotics",
      "upcube-os",
      "upcube-mobile-os",
      "voice",
    ],
  },
  {
    id: "learn",
    label: "Upcube Learn",
    href: "/learn",
    description:
      "Education, books, and quantum computing — learning paths for the AI age.",
    productIds: ["university", "books", "quantum"],
  },
  {
    id: "explore",
    label: "Upcube Explore",
    href: "/explore",
    description:
      "Earth, Games, Commerce, and Jobs — discovery surfaces across the Upcube ecosystem.",
    productIds: ["earth", "games", "ventari", "jobs"],
  },
];

const productsBySlug = new Map(upcubeProductLinks.map((p) => [p.id, p]));

function GroupSection({ group }: { group: GroupDef }) {
  const groupProducts = group.productIds
    .map((id) => productsBySlug.get(id))
    .filter(Boolean);

  return (
    <section className="uc-section uc-section-rule">
      <div className="uc-shell uc-content-stack">
        <hgroup className="uc-section-heading">
          <p className="uc-eyebrow">Ecosystem group</p>
          <h2 className="uc-section-title">
            <Link href={group.href} className="uc-nav-link">
              {group.label}
            </Link>
          </h2>
          <p className="uc-section-description">{group.description}</p>
        </hgroup>
        <div className="uc-grid uc-card-grid">
          {groupProducts.map((product) => (
            <article key={product!.id} className="uc-card">
              <h3 className="uc-card-title">{product!.label}</h3>
              <p className="uc-card-copy">{product!.description}</p>
              {product!.launchHref ? (
                <Link className="uc-nav-link" href={product!.productHref}>
                  Open product
                </Link>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProductsOverviewRoute() {
  return (
    <PortalShell>
      <PortalHeader />
      <main className="uc-main">
        <section className="uc-section uc-hero-section">
          <div className="uc-shell uc-hero-copy">
            <p className="uc-eyebrow">Upcube ecosystem</p>
            <h1 className="uc-hero-title">
              Every product in the Upcube family
            </h1>
            <p className="uc-hero-lead">
              The Upcube ecosystem organizes products into four groups: Core,
              Build, Learn, and Explore. Each group brings together related
              products around a shared purpose.
            </p>
          </div>
        </section>
        {ecosystemGroups.map((group) => (
          <GroupSection key={group.id} group={group} />
        ))}
      </main>
      <PortalFooter />
    </PortalShell>
  );
}
