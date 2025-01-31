import { CarouselSize } from "@/components/shop/CarouselSize";
import { useShopProducts } from "@/services/shopProducts-services";

export function Shop() {
  const { data: groupedProducts, isLoading, error } = useShopProducts();

  if (isLoading) return <div>Loading...</div>;
  if (error) {
    console.error(error);
    return <div>Error loading products.</div>;
  }
  if (!groupedProducts) return <div>No products found.</div>;
  return (
    <div className="flex flex-col items-center gap-6 bg-slate-950 text-white">
      {Object.entries(groupedProducts).map(([category, products]) => (
        <div key={category} className="w-full">
          <CarouselSize categoryName={category} products={products} />
        </div>
      ))}
    </div>
  );
}
