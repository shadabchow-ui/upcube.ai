import Link from "next/link";
import { PortalCardItem } from "lib/upcube-portal/content";

type PortalCardProps = {
  item: PortalCardItem;
};

export function PortalCard({ item }: PortalCardProps) {
  return (
    <article className="uc-card">
      {item.tag ? <p className="uc-eyebrow">{item.tag}</p> : null}
      <h3 className="uc-card-title">{item.title}</h3>
      <p className="uc-card-copy">{item.description}</p>
      <p>
        <Link className="uc-nav-link" href={item.href}>
          Explore
        </Link>
      </p>
    </article>
  );
}
