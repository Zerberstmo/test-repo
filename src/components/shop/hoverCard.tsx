import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { ProductCardShort } from "./productCardShort";
import { ProductCardLong } from "./producatCardLong";
import { Product } from "@/typs";

type HoverCardProps = {
  product: Product;
};

export function HoverCard({ product }: HoverCardProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="border-none bg-transparent p-0">
          <ProductCardShort product={product} />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="items-center justify-center bg-slate-950 text-neutral-200">
        <ProductCardLong product={product} />
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-neutral-200 text-slate-950 hover:border-none hover:bg-red-600">
            back
          </AlertDialogCancel>
          <AlertDialogAction className="bg-neutral-200 text-slate-950 hover:bg-lime-600">
            buy
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
