"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Product } from "@/types";
import { MediaRenderer } from "@/components/ui/MediaRenderer";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const tagStyles: Record<string, string> = {
  New: "bg-brand-cream text-brand-bg",
  "Best Seller": "bg-brand-warm text-brand-bg",
  Limited: "bg-white/10 text-brand-cream border border-brand-cream/30",
  Sale: "bg-red-900/80 text-red-200",
};

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <Link href={`/shop`} className="group block">
        {/* Image Container */}
        <div className="relative overflow-hidden bg-brand-surface aspect-[3/4]">
          <MediaRenderer
            media={product.media}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
          />

          {/* Dark overlay on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />

          {/* Tag badge */}
          {product.tag && (
            <span
              className={cn(
                "absolute top-3 left-3 font-mono text-[10px] tracking-widest uppercase px-2 py-1",
                tagStyles[product.tag] ?? "bg-white/10 text-white"
              )}
            >
              {product.tag}
            </span>
          )}

          {/* Quick view on hover */}
          <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
            <div className="bg-brand-bg/95 backdrop-blur-sm py-3 text-center">
              <span className="font-body text-[11px] tracking-widest uppercase text-brand-cream">
                Quick View
              </span>
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="pt-4 pb-2 px-0.5">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-body text-sm tracking-wide uppercase text-brand-accent group-hover:text-brand-cream transition-colors duration-300 leading-tight">
              {product.title}
            </h3>
            <div className="text-right flex-shrink-0">
              {product.originalPrice && (
                <span className="font-mono text-xs text-brand-warm/50 line-through block">
                  ${product.originalPrice}
                </span>
              )}
              <span
                className={cn(
                  "font-mono text-sm",
                  product.originalPrice
                    ? "text-red-400"
                    : "text-brand-accent"
                )}
              >
                ${product.price}
              </span>
            </div>
          </div>
          {product.description && (
            <p className="font-display italic text-brand-warm/60 text-sm mt-1 leading-snug">
              {product.description}
            </p>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
