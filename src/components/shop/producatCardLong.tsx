import { Product } from "@/typs";
import { CarouselDemo } from "./CarouselDemo";

type ProductCardLongProps = {
  product: Product;
};

export function ProductCardLong({ product }: ProductCardLongProps) {
  return (
    <div className="card bg-base-100 w-96 bg-slate-950 shadow-xl">
      <figure className="flex items-center justify-center">
        <CarouselDemo images={product.images} />
      </figure>
      <div className="card-body">
        <h2 className="card-title flex justify-center p-3 text-4xl">
          {product.name}
        </h2>
        <p>{product.description}</p>
        <div className="card-actions flex justify-between p-4">
          <div className="badge badge-outline">
            Quantity {product.stockQuantity}
          </div>
          <div className="badge badge-outline">{product.price}$</div>
        </div>
      </div>
    </div>
  );
}
