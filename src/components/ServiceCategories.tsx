"use client";

import Image from "next/image";
import Link from "next/link";

// Service category data
const categories = [
  {
    id: 1,
    name: "Salon for Women",
    image: "https://ext.same-assets.com/1401268037/3725336302.png",
    slug: "salon-for-women"
  },
  {
    id: 2,
    name: "Hair services",
    image: "https://ext.same-assets.com/1401268037/942913602.png",
    slug: "hair-services"
  },
  {
    id: 3,
    name: "Women's Therapies",
    image: "https://ext.same-assets.com/1401268037/508709520.png",
    slug: "women-therapies"
  },
  {
    id: 4,
    name: "Cleaning & Pest Control",
    image: "https://ext.same-assets.com/1401268037/1254088417.png",
    slug: "cleaning-pest-control"
  },
  {
    id: 5,
    name: "AC & Appliance Repair",
    image: "https://ext.same-assets.com/1401268037/1312534633.png",
    slug: "ac-appliance-repair"
  },
  {
    id: 6,
    name: "Plumbing & Electrical",
    image: "https://ext.same-assets.com/1401268037/587748286.png",
    slug: "plumbing-electrical"
  },
  {
    id: 7,
    name: "Home Painting",
    image: "https://ext.same-assets.com/1401268037/2461401735.png",
    slug: "home-painting"
  },
  {
    id: 8,
    name: "Men's Salon & Massage",
    image: "https://ext.same-assets.com/1401268037/1426486505.jpeg",
    slug: "mens-salon-massage"
  }
];

const ServiceCategories = () => {
  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              href={`/pune/${category.slug}`}
              key={category.id}
              className="flex flex-col items-center justify-center text-center group"
            >
              <div className="relative w-12 h-12 md:w-16 md:h-16 mb-2 md:mb-3 rounded-full overflow-hidden transition-transform duration-200 group-hover:scale-105">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover"
                  crossOrigin="anonymous"
                />
              </div>
              <span className="text-xs md:text-sm font-medium text-gray-700 group-hover:text-gray-900">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
