import { HeroCarousel } from "@/components/home/HeroCarousel";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { Footer } from "@/components/layout/Footer";
import { heroSlides } from "@/data/heroSlides";
import { products } from "@/data/products";

export default function HomePage() {
  // Show top 4 best sellers / new drops on homepage
  const featured = products
    .filter((p) => p.tag === "New" || p.tag === "Best Seller")
    .slice(0, 4);

  return (
    <>
      <HeroCarousel slides={heroSlides} />
      <FeaturedProducts products={featured} />
      <Footer />
    </>
  );
}
