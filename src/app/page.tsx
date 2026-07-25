import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import OfferBanner from "@/components/home/OfferBanner";
import PromoCards from "@/components/home/PromoCards";



export default function Home() {
  return (
    <main>
      <Hero />

      <Categories />

      <FeaturedProducts />

      <WhyChooseUs />

      <OfferBanner />
      <PromoCards />

    </main>
  );
}