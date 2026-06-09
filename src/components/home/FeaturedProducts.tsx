"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Product } from "@/types";
import { ProductCard } from "@/components/ui/ProductCard";

interface FeaturedProductsProps {
  products: Product[];
}

export function FeaturedProducts({ products }: FeaturedProductsProps) {
  if (!products.length) return null;

  return (
    <section className="max-w-screen-xl mx-auto px-6 md:px-10 py-28 md:py-40">
      {/* Section header */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-mono text-[10px] tracking-widest2 uppercase text-brand-warm/50 mb-3"
          >
            — Featured
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-[clamp(2.5rem,5vw,4rem)] italic text-brand-cream leading-none"
          >
            New & Notable
          </motion.h2>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            href="/shop"
            className="font-body text-xs tracking-widest2 uppercase text-brand-warm/60 hover:text-brand-cream transition-colors duration-300 flex items-center gap-3"
          >
            View All
            <span className="w-8 h-px bg-current inline-block" />
          </Link>
        </motion.div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {products.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16 text-center"
      >
        <Link
          href="/shop"
          className="inline-block font-body text-xs tracking-widest2 uppercase border border-brand-border text-brand-accent hover:bg-brand-accent hover:text-brand-bg px-12 py-4 transition-all duration-300"
        >
          Shop All Items
        </Link>
      </motion.div>
    </section>
  );
}
