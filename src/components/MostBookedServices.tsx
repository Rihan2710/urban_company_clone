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

const popularServices = [
  {
    id: 1,
    name: "Pest control (includes common areas)",
    price: "₹1,199",
    rating: "4.72",
    ratingCount: "11.4k",
    image: "/pesti.PNG",
    link: "/pune/pest-control"
  },
  {
    id: 2,
    name: "Pest control (excludes common areas)",
    price: "₹899",
    rating: "4.71",
    ratingCount: "70k",
    image: "/peste.PNG",
    link: "/pune/pest-control-basic"
  },
  {
    id: 3,
    name: "In-home consultation",
    price: "₹275",
    rating: "4.70",
    ratingCount: "45k",
    image: "/inhome.PNG",
    link: "/pune/in-home-consultation"
  },
  {
    id: 4,
    name: "Air conditioner uninstallation",
    price: "₹799",
    rating: "4.75",
    ratingCount: "30k",
    image: "/ac.PNG",
    link: "/pune/ac-uninstallation"
  }
];

const MostBookedServices = () => {
  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-lg md:text-xl font-bold mb-6">Most booked services</h2>

        <Carousel
          opts={{
            align: "start",
            loop: true
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {popularServices.map((service) => (
              <CarouselItem
                key={service.id}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/4"
              >
                <Link href={service.link} className="block border-0 shadow-sm rounded-lg overflow-hidden bg-white">
                  <div className="relative w-full h-40">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover"
                      crossOrigin="anonymous"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-medium text-gray-800 mb-1 line-clamp-2">
                      {service.name}
                    </h3>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-bold">{service.price}</span>
                      <div className="flex items-center">
                        <span className="bg-green-600 text-white text-xs px-1.5 py-0.5 rounded mr-1">
                          {service.rating} ★
                        </span>
                        <span className="text-xs text-gray-500">({service.ratingCount})</span>
                      </div>
                    </div>
                  </div>
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

export default MostBookedServices;
