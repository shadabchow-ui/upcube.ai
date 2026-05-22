import Link from "next/link";

type AccountCardProps = {
  title: string;
  description: string;
  href: string;
  status?: string;
};

export function AccountCard({
  title,
  description,
  href,
  status,
}: AccountCardProps) {
  return (
    <Link className="uc-account-card" href={href}>
      <div className="uc-account-card-body">
        <h3 className="uc-account-card-title">{title}</h3>
        <p className="uc-account-card-desc">{description}</p>
      </div>
      {status ? <span className="uc-account-card-status">{status}</span> : null}
    </Link>
  );
}
