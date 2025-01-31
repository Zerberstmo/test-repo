import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type imagesProps = {
  images: string[];
};

export function CarouselDemo({ images }: imagesProps) {
  return (
    <Carousel className="max-w-s w-full">
      <CarouselContent>
        {images.map((url) => (
          <CarouselItem key={url}>
            <div>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center rounded-xl bg-slate-950 p-6">
                  <img
                    className="rounded-2xl text-4xl font-semibold"
                    src={url}
                  ></img>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-slate-950" />
      <CarouselNext className="bg-slate-950" />
    </Carousel>
  );
}
