"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Destination {
  id: number;
  name: string;
  image: string;
  price: string;
  duration: string;
}

interface DestinationCarouselProps {
  destinations: Destination[];
}

export function DestinationCarousel({ destinations }: DestinationCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === destinations.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? destinations.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-xl lg:h-[70vh] aspect-[16/9] lg:aspect-auto relative">
        {destinations.map((destination, index) => (
          <div
            key={destination.id}
            className={cn(
              "absolute inset-0 transition-transform duration-500 ease-in-out",
              {
                "translate-x-0": index === currentIndex,
                "translate-x-full": index > currentIndex,
                "-translate-x-full": index < currentIndex,
              }
            )}
          >
            <Image
              src={destination.image}
              alt={destination.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent dark:from-black/80 dark:to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 text-white dark:text-gray-100">
              <h3 className="text-3xl font-bold mb-2">{destination.name}</h3>
              <p className="text-xl mb-1">{destination.price}</p>
              <p className="text-lg opacity-90">{destination.duration}</p>
            </div>
          </div>
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-700 dark:text-gray-100"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-700 dark:text-gray-100"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {destinations.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-colors",
              index === currentIndex
                ? "bg-white dark:bg-gray-100"
                : "bg-white/50 dark:bg-gray-500/50"
            )}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}