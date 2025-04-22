"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

// Local image paths from public/assets/
const newServices = [
  {
    id: 1,
    name: "Sofa Deep Cleaning",
    image: "/sofa.jpg",
    link: "/pune/sofa-deep-cleaning"
  },
  {
    id: 2,
    name: "Kitchen Cleaning",
    image: "/kitchen_clean.jpg",
    link: "/pune/kitchen-cleaning"
  },
  {
    id: 3,
    name: "Native Water Purifier",
    image: "/water_filter.jpg",
    link: "/pune/native-water-purifier"
  },
  {
    id: 4,
    name: "Native Smart Locks",
    image: "/smartlock.PNG",
    link: "/pune/native-smart-locks"
  },
  {
    id: 5,
    name: "Full Home Painting",
    image: "/fhp.jpg",
    link: "/pune/full-home-painting"
  }
];

const NewNoteworthySection = () => {
  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-lg md:text-xl font-bold mb-6">New and noteworthy</h2>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {newServices.map((service) => (
              <CarouselItem key={service.id} className="pl-2 md:pl-4 md:basis-1/4 lg:basis-1/5">
                <Link href={service.link} className="block">
                  <div className="relative w-full aspect-square mb-3 rounded-lg overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover transition-transform hover:scale-105 duration-300"
                      priority
                    />
                  </div>
                  <h3 className="text-sm font-medium text-gray-800">{service.name}</h3>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default NewNoteworthySection;
