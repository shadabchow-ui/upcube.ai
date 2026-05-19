import { ReactNode } from "react";
import { PortalTheme } from "lib/upcube-portal/content";

type PortalShellProps = {
  children: ReactNode;
  theme?: PortalTheme;
  className?: string;
};

export function PortalShell({
  children,
  theme = "dark",
  className,
}: PortalShellProps) {
  return (
    <div
      className={["uc-page", className].filter(Boolean).join(" ")}
      data-theme={theme === "dark" ? undefined : theme}
    >
      {children}
    </div>
  );
}
