import { ShopView } from "@/components/shop/ShopView";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import type { Metadata } from "next";
import { siteConfig } from "@/data/config";

export const metadata: Metadata = {
  title: `Shop — ${siteConfig.brandName}`,
  description: `Browse all ${siteConfig.brandName} products.`,
};

export default function ShopPage() {
  return <ShopView products={products} categories={categories} />;
}
