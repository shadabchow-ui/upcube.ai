import Link from "next/link";

import { JsonLd } from "components/upcube-seo/json-ld";
import { PortalFooter } from "components/upcube-portal/portal-footer";
import { PortalHeader } from "components/upcube-portal/portal-header";
import { PortalShell } from "components/upcube-portal/portal-shell";
import { createProductJsonLd } from "lib/upcube-seo/jsonld";
import type {
  ProductCard,
  ProductLinkCard,
  UpcubeProduct,
} from "lib/upcube-products/products";

import styles from "./product-page.module.css";

type ProductPageProps = {
  product: UpcubeProduct;
};

function CardGrid({
  items,
  className,
}: {
  items: ProductCard[];
  className?: string;
}) {
  return (
    <div className={[styles.cardGrid, className].filter(Boolean).join(" ")}>
      {items.map((item) => (
        <article key={item.title} className={styles.card}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </article>
      ))}
    </div>
  );
}

function EcosystemGrid({ items }: { items: ProductLinkCard[] }) {
  return (
    <div className={styles.cardGrid}>
      {items.map((item) => (
        <Link key={item.title} href={item.href} className={styles.linkCard}>
          <p className={styles.eyebrow}>Related product</p>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
          <span>Explore product</span>
        </Link>
      ))}
    </div>
  );
}

export function ProductPage({ product }: ProductPageProps) {
  const productSchemas = createProductJsonLd(product);

  return (
    <PortalShell>
      <PortalHeader />
      <main className={styles.page} data-product={product.slug}>
        <JsonLd data={productSchemas} />
        <section className={styles.heroSection}>
          <div className="uc-shell">
            <div className={styles.heroShell}>
              <div className={styles.heroCopy}>
                <p className={styles.eyebrow}>{product.eyebrow}</p>
                <h1>{product.headline}</h1>
                <p className={styles.summary}>{product.summary}</p>
                <div className={styles.actionRow}>
                  <Link
                    href={product.primaryAction.href}
                    className="uc-button"
                    data-variant="solid"
                  >
                    {product.primaryAction.label}
                  </Link>
                  <Link
                    href={product.secondaryAction.href}
                    className="uc-button"
                  >
                    {product.secondaryAction.label}
                  </Link>
                </div>
                <div className={styles.keyFactsRow}>
                  {product.heroHighlights.map((highlight) => (
                    <div key={highlight} className={styles.keyFact}>
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
              {product.heroImage ? (
                <div className={styles.heroMedia}>
                  <img
                    src={product.heroImage.src}
                    alt={product.heroImage.alt}
                    className={styles.heroImage}
                  />
                </div>
              ) : null}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="uc-shell">
            <div className={styles.sectionIntro}>
              <p className={styles.eyebrow}>Signature experience</p>
              <h2>{product.signatureTitle}</h2>
              <p>{product.signatureBody}</p>
            </div>
            <CardGrid items={product.signatureCards} />
          </div>
        </section>

        <section className={styles.section} id="features">
          <div className="uc-shell">
            <div className={styles.sectionIntro}>
              <p className={styles.eyebrow}>Feature highlights</p>
              <h2>Designed around the moments that define the product.</h2>
              <p>
                The strongest product stories stay close to the decisions,
                habits, and repeated actions people come back for.
              </p>
            </div>
            <CardGrid
              items={product.featureStories}
              className={styles.storyGrid}
            />
          </div>
        </section>

        <section className={styles.section}>
          <div className="uc-shell">
            <div className={styles.sectionIntro}>
              <p className={styles.eyebrow}>Technology made simple</p>
              <h2>Built on real systems, explained in clear language.</h2>
              <p>
                The technology matters most when it improves the experience, not
                when it turns the page into an engineering document.
              </p>
            </div>
            <CardGrid items={product.techCards} />
          </div>
        </section>

        <section className={styles.section}>
          <div className="uc-shell">
            <div className={styles.sectionIntro}>
              <p className={styles.eyebrow}>Everyday use</p>
              <h2>Shaped around the moments people actually care about.</h2>
              <p>
                The clearest product pages connect features back to real use,
                repeatable behavior, and better next steps.
              </p>
            </div>
            <CardGrid items={product.useCases} />
            {product.availabilityNote ? (
              <div className={styles.availabilityBand}>
                <p className={styles.eyebrow}>Availability</p>
                <p>{product.availabilityNote}</p>
              </div>
            ) : null}
          </div>
        </section>

        <section className={styles.section}>
          <div className="uc-shell">
            <div className={styles.sectionIntro}>
              <p className={styles.eyebrow}>Ecosystem</p>
              <h2>Part of a broader Upcube product family.</h2>
              <p>
                Each product should stand on its own while making the next
                useful destination easy to discover.
              </p>
            </div>
            <EcosystemGrid items={product.ecosystemLinks} />
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className="uc-shell">
            <div className={styles.ctaBand}>
              <div className={styles.ctaCopy}>
                <p className={styles.eyebrow}>Launch</p>
                <h2>{product.finalCtaTitle}</h2>
                <p>{product.finalCtaBody}</p>
              </div>
              <div className={styles.actionRow}>
                <Link
                  href={product.finalPrimaryAction.href}
                  className="uc-button"
                  data-variant="solid"
                >
                  {product.finalPrimaryAction.label}
                </Link>
                <Link
                  href={product.finalSecondaryAction.href}
                  className="uc-button"
                >
                  {product.finalSecondaryAction.label}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <PortalFooter />
    </PortalShell>
  );
}
