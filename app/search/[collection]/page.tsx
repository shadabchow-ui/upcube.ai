import { Metadata } from "next";

export function generateStaticParams() {
  return [{ collection: "all" }];
}

export const metadata: Metadata = {
  title: "Collection",
  description: "Browse products in this collection.",
};

export default async function CategoryPage() {
  return (
    <section>
      <p className="py-3 text-lg">
        Collections are not available in static mode.
      </p>
    </section>
  );
}
