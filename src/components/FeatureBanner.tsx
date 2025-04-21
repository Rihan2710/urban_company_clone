"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface FeatureBannerProps {
  title: string;
  subtitle: string;
  buttonText: string;
  backgroundColor: string;
  textColor: string;
  imageUrl: string;
  link: string;
}

const FeatureBanner = ({
  title,
  subtitle,
  buttonText,
  backgroundColor,
  textColor,
  imageUrl,
  link
}: FeatureBannerProps) => {
  return (
    <section
      className="py-6 md:py-10"
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-8">
            <h3
              className="text-xl md:text-2xl font-bold mb-3"
              style={{ color: textColor }}
            >
              {title}
            </h3>
            <p
              className="text-base md:text-lg mb-6"
              style={{ color: textColor }}
            >
              {subtitle}
            </p>
            <Link href={link}>
              <Button
                className="bg-black text-white hover:bg-gray-800"
              >
                {buttonText}
              </Button>
            </Link>
          </div>
          <div className="w-full md:w-1/2 relative h-60 md:h-72">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover rounded-lg"
              crossOrigin="anonymous"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureBanner;
