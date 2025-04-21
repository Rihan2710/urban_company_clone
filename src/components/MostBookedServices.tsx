"use client";

import Image from "next/image";

const mostBookedServices = [
  {
    id: 1,
    name: "Pest control (includes common areas)",
    price: "₹1,199",
    rating: 4.72,
    reviews: "11.4k",
    image: "/pesti.PNG"
  },
  {
    id: 2,
    name: "Pest control (excludes common areas)",
    price: "₹899",
    rating: 4.71,
    reviews: "70k",
    image: "/peste.PNG"
  },
  {
    id: 3,
    name: "In-home consultation",
    price: "₹275",
    rating: 4.70,
    reviews: "45k",
    image: "/inhome.PNG"
  },
  {
    id: 4,
    name: "Air conditioner uninstallation",
    price: "₹799",
    rating: 4.75,
    reviews: "30k",
    image: "/ac.PNG"
  }
];

const MostBookedServices = () => {
  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-lg md:text-xl font-bold mb-6">Most booked services</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {mostBookedServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-3">
                <h3 className="text-sm font-medium text-gray-900 mb-1">{service.name}</h3>
                <p className="text-sm text-gray-700 font-semibold">{service.price}</p>
                <div className="mt-1 flex items-center gap-1">
                  <span className="bg-green-600 text-white text-xs font-semibold px-1.5 py-0.5 rounded-md">
                    {service.rating.toFixed(2)} ★
                  </span>
                  <span className="text-xs text-gray-500">({service.reviews})</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MostBookedServices;
