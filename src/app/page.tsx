import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServiceCategories from "@/components/ServiceCategories";
import PromotionalBanners from "@/components/PromotionalBanners";
import NewNoteworthySection from "@/components/NewNoteworthySection";
import MostBookedServices from "@/components/MostBookedServices";
import FeatureBanner from "@/components/FeatureBanner";
import CategorySection from "@/components/CategorySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <ServiceCategories />
      <PromotionalBanners />
      <NewNoteworthySection />
      <MostBookedServices />

      

      <CategorySection />
      <Footer />
    </main>
  );
}
