import { ReactNode } from "react";
import { PortalFooter } from "components/upcube-portal/portal-footer";
import { PortalHeader } from "components/upcube-portal/portal-header";

type AccountShellProps = {
  children: ReactNode;
};

export function AccountShell({ children }: AccountShellProps) {
  return (
    <div className="uc-page uc-account">
      <PortalHeader />
      {children}
      <PortalFooter />
    </div>
  );
}
