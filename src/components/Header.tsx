"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Search, ShoppingCart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const [location, setLocation] = useState("Pune");

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="mr-4">
            <div className="bg-black w-10 h-10 flex items-center justify-center rounded-md">
              <span className="text-white font-bold text-lg">UC</span>
            </div>
          </Link>

          {/* Location selector */}
          <div className="hidden md:flex items-center cursor-pointer">
            <MapPin size={16} className="text-gray-500 mr-1" />
            <span className="text-sm font-medium">{location}</span>
          </div>
        </div>

        {/* Search Bar - Desktop */}
        <div className="hidden md:flex items-center w-1/3 relative">
          <Search size={18} className="absolute left-3 text-gray-400" />
          <Input
            placeholder="What are you looking for?"
            className="pl-10 h-9 border-gray-300 focus:border-gray-500 rounded-full focus:ring-0"
          />
        </div>

        {/* Nav Links - Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/blog" className="text-sm font-medium text-gray-700 hover:text-gray-900">Beauty</Link>
          <Link href="/register-as-professional" className="text-sm font-medium text-gray-700 hover:text-gray-900">Homes</Link>
          <Link href="/login" className="text-sm font-medium text-gray-700 hover:text-gray-900">Native</Link>
          <Link href="/cart">
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <ShoppingCart size={20} />
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col mt-6 space-y-4">
                <div className="flex items-center">
                  <MapPin size={16} className="text-gray-500 mr-2" />
                  <span className="text-sm font-medium">{location}</span>
                </div>
                <Link href="/blog" className="text-md font-medium py-2">Beauty</Link>
                <Link href="/register-as-professional" className="text-md font-medium py-2">Homes</Link>
                <Link href="/login" className="text-md font-medium py-2">Native</Link>
              </div>
            </SheetContent>
          </Sheet>

          <Link href="/cart">
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <ShoppingCart size={20} />
            </Button>
          </Link>
        </div>
      </div>

      {/* Search Bar - Mobile */}
      <div className="md:hidden container mx-auto px-4 pb-3">
        <div className="relative">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="What are you looking for?"
            className="pl-10 h-9 border-gray-300 focus:border-gray-500 rounded-full focus:ring-0"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
