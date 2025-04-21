"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Category data
const categoryData = {
  "Salon for Women": [
    { id: 1, name: "Waxing", image: "https://ext.same-assets.com/3585781282/2436105872.jpeg", link: "/pune/salon-for-women/waxing" },
    { id: 2, name: "Cleansing", image: "https://ext.same-assets.com/3585781282/2222934647.png", link: "/pune/salon-for-women/cleansing" },
    { id: 3, name: "Manicure", image: "https://ext.same-assets.com/3585781282/2222934647.png", link: "/pune/salon-for-women/manicure" },
    { id: 4, name: "Hair Care", image: "https://ext.same-assets.com/3585781282/2222934647.png", link: "/pune/salon-for-women/hair-care" }
  ],
  "Spa for women": [
    { id: 1, name: "Full body", image: "https://ext.same-assets.com/3585781282/2436105872.jpeg", link: "/pune/spa-for-women/full-body" },
    { id: 2, name: "Stress relief", image: "https://ext.same-assets.com/3585781282/2222934647.png", link: "/pune/spa-for-women/stress-relief" },
    { id: 3, name: "Natural massage", image: "https://ext.same-assets.com/3585781282/2222934647.png", link: "/pune/spa-for-women/natural-massage" }
  ],
  "Cleaning & pest control": [
    { id: 1, name: "Full Home Cleaning", image: "https://ext.same-assets.com/3585781282/2436105872.jpeg", link: "/pune/cleaning/full-home" },
    { id: 2, name: "Cockroach, Ant & General Pest Control", image: "https://ext.same-assets.com/3585781282/2222934647.png", link: "/pune/cleaning/pest-control" },
    { id: 3, name: "Sofa & Carpet Cleaning", image: "https://ext.same-assets.com/3585781282/2222934647.png", link: "/pune/cleaning/sofa-carpet" },
    { id: 4, name: "Bathroom Cleaning", image: "https://ext.same-assets.com/3585781282/2222934647.png", link: "/pune/cleaning/bathroom" }
  ],
  "AC & Appliance Repair": [
    { id: 1, name: "AC", image: "https://ext.same-assets.com/3585781282/2436105872.jpeg", link: "/pune/ac-repair/ac" },
    { id: 2, name: "Water Purifier", image: "https://ext.same-assets.com/3585781282/2222934647.png", link: "/pune/ac-repair/water-purifier" },
    { id: 3, name: "Washing Machine", image: "https://ext.same-assets.com/3585781282/2222934647.png", link: "/pune/ac-repair/washing-machine" }
  ]
};

const CategorySection = () => {
  const [activeTab, setActiveTab] = useState("Salon for Women");

  return (
    <section className="py-8 md:py-12 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4">
        <Tabs defaultValue="Salon for Women" onValueChange={setActiveTab}>
          <div className="mb-6">
            <h2 className="text-lg md:text-xl font-bold mb-4">{activeTab}</h2>
            <TabsList className="flex overflow-x-auto space-x-2 pb-2 border-b border-gray-200 w-full bg-transparent h-auto">
              {Object.keys(categoryData).map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="px-4 py-2 rounded-md data-[state=active]:bg-gray-100 text-sm"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {Object.entries(categoryData).map(([category, items]) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {items.map((item) => (
                  <Link
                    key={item.id}
                    href={item.link}
                    className="flex flex-col items-center text-center group"
                  >
                    <div className="relative w-16 h-16 mb-3 rounded-full overflow-hidden bg-gray-100">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        crossOrigin="anonymous"
                      />
                    </div>
                    <span className="text-xs md:text-sm text-gray-800 group-hover:text-gray-900">
                      {item.name}
                    </span>
                  </Link>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default CategorySection;
