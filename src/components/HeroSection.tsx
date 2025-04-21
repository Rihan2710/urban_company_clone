"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const HeroSection = () => {
  return (
    <section className="bg-[#22212a] text-white py-10 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-xl">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            Home services at your doorstep
          </h1>

          <div className="relative mb-6">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <Input
              placeholder="What are you looking for?"
              className="pl-10 h-12 w-full bg-white text-black rounded-lg border-0 focus:ring-0"
            />
          </div>

          <div className="flex flex-wrap md:space-x-6">
            <div className="text-xs text-gray-300 mb-2 md:mb-0">
              <span className="font-semibold mr-1">4.8</span>
              <span className="text-yellow-400">★★★★★</span>
              <span className="ml-1">Customer Rating</span>
            </div>

            <div className="text-xs text-gray-300">
              <span className="font-semibold mr-1">13M+</span>
              <span>Happy Customers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
