import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

// Define types for our data
interface SubCategory {
  id: number;
  name: string;
  image: string;
  link: string;
}

interface Service {
  id: number;
  name: string;
  price: string;
  rating: string;
  ratingCount: string;
  image: string;
}

interface CategoryInfo {
  title: string;
  subCategories: SubCategory[];
  services: Service[];
}

interface CategoryPageProps {
  params: {
    category: string;
  };
}

// Mock data for different categories
const categoryData: Record<string, CategoryInfo> = {
  "salon-for-women": {
    title: "Salon for Women",
    subCategories: [
      { id: 1, name: "Waxing", image: "https://ext.same-assets.com/3585781282/2436105872.jpeg", link: "/pune/salon-for-women/waxing" },
      { id: 2, name: "Facials & Cleanup", image: "https://ext.same-assets.com/3585781282/2222934647.png", link: "/pune/salon-for-women/facials" },
      { id: 3, name: "Manicure & Pedicure", image: "https://ext.same-assets.com/3585781282/2222934647.png", link: "/pune/salon-for-women/manicure" },
      { id: 4, name: "Threading & Face Wax", image: "https://ext.same-assets.com/3585781282/2222934647.png", link: "/pune/salon-for-women/threading" }
    ],
    services: [
      { id: 1, name: "Full Body Wax", price: "₹1,499", rating: "4.82", ratingCount: "23k", image: "https://ext.same-assets.com/3585781282/2436105872.jpeg" },
      { id: 2, name: "Fruit Facial", price: "₹899", rating: "4.71", ratingCount: "12k", image: "https://ext.same-assets.com/3585781282/2222934647.png" },
      { id: 3, name: "Luxury Pedicure", price: "₹699", rating: "4.75", ratingCount: "8k", image: "https://ext.same-assets.com/3585781282/2222934647.png" }
    ]
  },
  "cleaning-pest-control": {
    title: "Cleaning & Pest Control",
    subCategories: [
      { id: 1, name: "Full Home Cleaning", image: "https://ext.same-assets.com/3585781282/2436105872.jpeg", link: "/pune/cleaning-pest-control/full-home" },
      { id: 2, name: "Bathroom Cleaning", image: "https://ext.same-assets.com/3585781282/2222934647.png", link: "/pune/cleaning-pest-control/bathroom" },
      { id: 3, name: "Pest Control", image: "https://ext.same-assets.com/3585781282/2222934647.png", link: "/pune/cleaning-pest-control/pest-control" },
      { id: 4, name: "Sofa & Carpet Cleaning", image: "https://ext.same-assets.com/3585781282/2222934647.png", link: "/pune/cleaning-pest-control/sofa-carpet" }
    ],
    services: [
      { id: 1, name: "Pest Control (includes common areas)", price: "₹1,199", rating: "4.72", ratingCount: "11.4k", image: "https://ext.same-assets.com/3585781282/3376188649.png" },
      { id: 2, name: "Full Home Deep Cleaning", price: "₹2,499", rating: "4.78", ratingCount: "5k", image: "https://ext.same-assets.com/3585781282/2222934647.png" },
      { id: 3, name: "Bathroom Cleaning", price: "₹599", rating: "4.65", ratingCount: "3k", image: "https://ext.same-assets.com/3585781282/2222934647.png" }
    ]
  },
  "ac-appliance-repair": {
    title: "AC & Appliance Repair",
    subCategories: [
      { id: 1, name: "AC Service & Repair", image: "https://ext.same-assets.com/3585781282/2436105872.jpeg", link: "/pune/ac-appliance-repair/ac" },
      { id: 2, name: "Water Purifier", image: "https://ext.same-assets.com/3585781282/2222934647.png", link: "/pune/ac-appliance-repair/water-purifier" },
      { id: 3, name: "Washing Machine", image: "https://ext.same-assets.com/3585781282/2222934647.png", link: "/pune/ac-appliance-repair/washing-machine" },
      { id: 4, name: "Refrigerator", image: "https://ext.same-assets.com/3585781282/2222934647.png", link: "/pune/ac-appliance-repair/refrigerator" }
    ],
    services: [
      { id: 1, name: "AC Service", price: "₹499", rating: "4.84", ratingCount: "32k", image: "https://ext.same-assets.com/3585781282/2064235685.jpeg" },
      { id: 2, name: "Water Purifier Service", price: "₹399", rating: "4.76", ratingCount: "8k", image: "https://ext.same-assets.com/3585781282/2222934647.png" },
      { id: 3, name: "Washing Machine Repair", price: "₹299", rating: "4.70", ratingCount: "5k", image: "https://ext.same-assets.com/3585781282/2222934647.png" }
    ]
  }
};

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = params.category;
  const categoryInfo = categoryData[category];

  // If category not found, return 404
  if (!categoryInfo) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="bg-gray-50 py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl md:text-3xl font-bold mb-6">{categoryInfo.title}</h1>

            {/* Sub-categories section */}
            <div className="bg-white rounded-lg p-6 mb-8">
              <h2 className="text-lg font-semibold mb-4">Categories</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {categoryInfo.subCategories.map((subCategory) => (
                  <Link
                    key={subCategory.id}
                    href={subCategory.link}
                    className="flex flex-col items-center text-center group"
                  >
                    <div className="relative w-16 h-16 mb-3 rounded-full overflow-hidden bg-gray-100">
                      <Image
                        src={subCategory.image}
                        alt={subCategory.name}
                        fill
                        className="object-cover"
                        crossOrigin="anonymous"
                      />
                    </div>
                    <span className="text-xs md:text-sm text-gray-800 group-hover:text-gray-900">
                      {subCategory.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Top services section */}
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-4">Most Booked</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {categoryInfo.services.map((service) => (
                  <Card key={service.id} className="border-0 shadow-sm rounded-lg overflow-hidden">
                    <CardContent className="p-0">
                      <Link href="#" className="block">
                        <div className="relative h-40 w-full">
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
                              <span className="bg-green-600 text-white text-xs px-1.5 py-0.5 rounded flex items-center mr-1">
                                {service.rating} ★
                              </span>
                              <span className="text-xs text-gray-500">({service.ratingCount})</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
