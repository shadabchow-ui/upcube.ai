import { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  actions,
  className,
}: SectionHeadingProps) {
  return (
    <header
      className={["uc-section-heading", className].filter(Boolean).join(" ")}
    >
      {eyebrow ? <p className="uc-eyebrow">{eyebrow}</p> : null}
      <h2 className="uc-section-title">{title}</h2>
      {description ? (
        <p className="uc-section-description">{description}</p>
      ) : null}
      {actions}
    </header>
  );
}
