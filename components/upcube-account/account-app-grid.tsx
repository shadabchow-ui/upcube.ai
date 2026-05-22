import Link from "next/link";
import { upcubeProductLinks } from "lib/upcube-universal/product-links";

export function AccountAppGrid() {
  return (
    <div className="uc-account-app-grid">
      {upcubeProductLinks.map((product) => (
        <Link
          key={product.id}
          className="uc-account-app-card"
          href={product.productHref}
        >
          <span className="uc-account-app-label">{product.label}</span>
          <span className="uc-account-app-desc">{product.description}</span>
        </Link>
      ))}
    </div>
  );
}
