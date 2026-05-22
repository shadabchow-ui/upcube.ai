"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { accountNavItems } from "lib/upcube-account/account-content";

export function AccountSidebar() {
  const pathname = usePathname();

  return (
    <nav className="uc-account-sidebar" aria-label="Account settings">
      <div className="uc-account-sidebar-sticky">
        <p className="uc-account-sidebar-label">Account</p>
        <ul className="uc-account-sidebar-list">
          {accountNavItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.id}>
                <Link
                  className="uc-account-sidebar-link"
                  data-active={isActive || undefined}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
