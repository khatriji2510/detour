"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Product, Category } from "@/types";
import { ProductCard } from "@/components/ui/ProductCard";
import { CategorySidebar } from "@/components/shop/CategorySidebar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/data/config";

interface ShopViewProps {
  products: Product[];
  categories: Category[];
}

export function ShopView({ products, categories }: ShopViewProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Compute per-category product counts
  const productCounts = useMemo(() => {
    const counts: Record<string, number> = { all: products.length };
    for (const cat of categories) {
      if (cat.id === "all") continue;
      counts[cat.id] = products.filter((p) =>
        p.categories.includes(cat.id)
      ).length;
    }
    return counts;
  }, [products, categories]);

  // Filter products
  const filtered = useMemo(() => {
    if (selectedCategory === "all") return products;
    return products.filter((p) => p.categories.includes(selectedCategory));
  }, [products, selectedCategory]);

  const selectedLabel =
    categories.find((c) => c.id === selectedCategory)?.label ?? "All";

  return (
    <>
      <div className="min-h-screen">
        {/* Page header */}
        <div className="pt-36 pb-14 px-6 md:px-10 max-w-screen-xl mx-auto border-b border-brand-border">
          <p className="font-mono text-[10px] tracking-widest2 uppercase text-brand-warm/40 mb-3">
            {siteConfig.brandName} — Store
          </p>
          <h1 className="font-display text-[clamp(3rem,7vw,6rem)] italic text-brand-cream leading-none">
            All Items
          </h1>
        </div>

        {/* Main content */}
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-12">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
            {/* Sidebar */}
            <CategorySidebar
              categories={categories}
              selected={selectedCategory}
              onSelect={setSelectedCategory}
              productCounts={productCounts}
            />

            {/* Products area */}
            <div className="flex-1 min-w-0">
              {/* Count + active filter */}
              <div className="flex items-center justify-between mb-8">
                <motion.p
                  key={selectedCategory}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="font-mono text-[10px] tracking-widest uppercase text-brand-warm/40"
                >
                  {filtered.length} item{filtered.length !== 1 ? "s" : ""}
                  {selectedCategory !== "all" && (
                    <>
                      {" "}
                      —{" "}
                      <span className="text-brand-warm/70">{selectedLabel}</span>
                    </>
                  )}
                </motion.p>

                {selectedCategory !== "all" && (
                  <button
                    onClick={() => setSelectedCategory("all")}
                    className="font-mono text-[10px] tracking-widest uppercase text-brand-warm/40 hover:text-brand-cream transition-colors duration-200 flex items-center gap-2"
                  >
                    <span>×</span> Clear
                  </button>
                )}
              </div>

              {/* Grid */}
              <AnimatePresence mode="wait">
                {filtered.length > 0 ? (
                  <motion.div
                    key={selectedCategory}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
                  >
                    {filtered.map((product, i) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        index={i}
                      />
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-32"
                  >
                    <p className="font-display italic text-brand-warm/30 text-3xl">
                      No items in this category.
                    </p>
                    <button
                      onClick={() => setSelectedCategory("all")}
                      className="mt-6 font-mono text-xs tracking-widest uppercase text-brand-warm/40 hover:text-brand-cream transition-colors duration-200"
                    >
                      View all →
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
