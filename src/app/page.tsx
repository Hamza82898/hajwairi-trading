import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import SpecialOffer from "@/components/home/SpecialOffer";



export default function Home() {
  return (
    <main>
      <Hero />

      <Categories />

      <FeaturedProducts />

      <WhyChooseUs />

      <SpecialOffer />

    </main>
  );
}