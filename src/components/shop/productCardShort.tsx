import { Product } from "@/typs";

type ProductCardShortProps = {
  product: Product;
};

export function ProductCardShort({ product }: ProductCardShortProps) {
  return (
    <div className="card max-w-s w-96 rounded-xl bg-neutral-200 text-slate-950 shadow-xl sm:w-full">
      <figure className="">
        <img  className="b-4 h-56 w-full rounded-lg object-cover" src={product.thumbnail} alt={product.category} />
      </figure>
      <div className="card-body flex items-center justify-between p-2">
        <p>{product.name}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{product.price}$</div>
        </div>
      </div>
    </div>
  );
}
