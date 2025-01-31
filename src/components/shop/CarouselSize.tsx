import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "../ui/card";
import { HoverCard } from "./hoverCard";
import { Product } from "@/typs";

type CarouselProps = {
  categoryName: string;
  products: Product[];
};

export function CarouselSize({ categoryName, products }: CarouselProps) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="top-15 relative m-auto w-full max-w-screen-xl"
    >
      <h1 className="p-6 text-center text-5xl text-neutral-100">
        {categoryName}
      </h1>
      <CarouselContent>
        {products.map((product) => (
          <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-4">
              <Card>
                <CardContent className="flex h-72 items-center justify-center rounded-2xl bg-neutral-200 p-4">
                  <HoverCard product={product} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="absolute top-2/3 flex h-12 w-12 -translate-y-1/2 transform items-center justify-center rounded-full bg-neutral-800 text-white hover:bg-neutral-700" />
      <CarouselNext className="absolute top-2/3 flex h-12 w-12 -translate-y-1/2 transform items-center justify-center rounded-full bg-neutral-800 text-white hover:bg-neutral-700" />
    </Carousel>
  );
}
