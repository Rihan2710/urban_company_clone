"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const promotions = [
  {
    id: 1,
    title: "Deep clean with lowest price this AC season",
    backgroundColor: "#141c25",
    textColor: "white",
    buttonText: "Book now",
    image: "https://ext.same-assets.com/1401268037/1726671837.jpeg",
    link: "/pune/ac-service"
  },
  {
    id: 2,
    title: "RO Water Purifiers",
    backgroundColor: "#024b4b",
    textColor: "white",
    buttonText: "Book now",
    image: "https://ext.same-assets.com/1401268037/396145108.jpeg",
    link: "/pune/ro-service"
  },
  {
    id: 3,
    title: "Elevate your home this festive season with painting services",
    backgroundColor: "#372a1e",
    textColor: "white",
    buttonText: "Book now",
    image: "https://ext.same-assets.com/1401268037/26777952.jpeg",
    link: "/pune/painting-services"
  }
];

const PromotionalBanners = () => {
  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-base md:text-lg font-semibold mb-4">2+ ongoing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {promotions.map((promo) => (
            <Card
              key={promo.id}
              className="rounded-lg overflow-hidden border-0 shadow-sm"
              style={{ backgroundColor: promo.backgroundColor }}
            >
              <CardContent className="p-0">
                <Link href={promo.link} className="block">
                  <div className="p-4 md:p-5">
                    <h3
                      className="text-sm md:text-base font-medium mb-4 line-clamp-2"
                      style={{ color: promo.textColor }}
                    >
                      {promo.title}
                    </h3>
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-white text-black hover:bg-gray-100 border-0"
                    >
                      {promo.buttonText}
                    </Button>
                  </div>
                  <div className="relative w-full h-36 md:h-44">
                    <Image
                      src={promo.image}
                      alt={promo.title}
                      fill
                      className="object-cover"
                      crossOrigin="anonymous"
                    />
                  </div>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromotionalBanners;
