export const metadata = {
  title: "Search",
  description: "Search for products in the store.",
};

export default async function SearchPage() {
  return (
    <p className="mb-4">
      Search is not available in static mode. No products are currently
      available.
    </p>
  );
}
