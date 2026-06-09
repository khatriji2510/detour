import type { Product } from "@/types";

// ─────────────────────────────────────────────────────────────────────────────
// PRODUCTS
// Add or remove products here. Each product needs:
//   id        – unique string
//   title     – product name
//   price     – number (in your currency)
//   media     – { type: "image"|"gif"|"video", src: "/images/...", alt: "..." }
//   tag       – optional: "New" | "Best Seller" | "Limited" | "Sale" | null
//   categories– array of category IDs (must match categories.ts)
//   slug      – URL-friendly unique string
//
// To use a GIF:  media: { type: "gif",   src: "/images/product.gif", alt: "..." }
// To use video:  media: { type: "video", src: "/videos/product.mp4", poster: "/images/thumb.jpg" }
// To use image:  media: { type: "image", src: "/images/product.jpg", alt: "..." }
//
// Images should be placed in /public/images/
// Videos should be placed in /public/videos/
// ─────────────────────────────────────────────────────────────────────────────

export const products: Product[] = [
  {
    id: "1",
    title: "Void Oversized Tee",
    price: 49,
    media: {
      type: "image",
      src: "/images/front.png",
      alt: "Void Oversized Tee",
    },
    tag: "New",
    categories: ["all", "oversized-tees", "new-drops"],
    slug: "void-oversized-tee",
    description: "Premium heavyweight cotton. Dropped shoulders. Made to last.",
  },
  {
    id: "2",
    title: "Shadow Graphic Tee",
    price: 45,
    media: {
      type: "image",
      src: "/images/back.png",
      alt: "Shadow Graphic Tee",
    },
    tag: "Best Seller",
    categories: ["all", "graphic-tees", "best-sellers"],
    slug: "shadow-graphic-tee",
    description: "Screen-printed with water-based inks. 100% organic cotton.",
  },
  {
    id: "3",
    title: "Eclipse Hoodie",
    price: 89,
    media: {
      type: "image",
      src: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=600&q=80",
      alt: "Eclipse Hoodie",
    },
    tag: "New",
    categories: ["all", "hoodies", "new-drops"],
    slug: "eclipse-hoodie",
    description: "French terry 400gsm. Brushed interior. Kangaroo pocket.",
  },
  {
    id: "4",
    title: "Abyss Oversized Tee",
    price: 49,
    media: {
      type: "image",
      src: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
      alt: "Abyss Oversized Tee",
    },
    tag: null,
    categories: ["all", "oversized-tees"],
    slug: "abyss-oversized-tee",
    description: "Washed-black colorway. Slightly cropped silhouette.",
  },
  {
    id: "5",
    title: "Dusk Graphic Tee",
    price: 45,
    originalPrice: 59,
    media: {
      type: "image",
      src: "https://images.unsplash.com/photo-1503341733017-1901578f9f1e?w=600&q=80",
      alt: "Dusk Graphic Tee",
    },
    tag: "Sale",
    categories: ["all", "graphic-tees"],
    slug: "dusk-graphic-tee",
    description: "Abstract front print. Ribbed collar. Relaxed fit.",
  },
  {
    id: "6",
    title: "Phantom Zip Hoodie",
    price: 99,
    media: {
      type: "image",
      src: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&q=80",
      alt: "Phantom Zip Hoodie",
    },
    tag: "Best Seller",
    categories: ["all", "hoodies", "best-sellers"],
    slug: "phantom-zip-hoodie",
    description: "Full zip. Double layered hood. YKK zipper.",
  },
  {
    id: "7",
    title: "Noir Beanie",
    price: 29,
    media: {
      type: "image",
      src: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=600&q=80",
      alt: "Noir Beanie",
    },
    tag: "New",
    categories: ["all", "accessories", "new-drops"],
    slug: "noir-beanie",
    description: "Ribbed merino wool blend. One size fits all.",
  },
  {
    id: "8",
    title: "Fog Oversized Tee",
    price: 49,
    media: {
      type: "image",
      src: "https://images.unsplash.com/photo-1618354691438-25bc04584c23?w=600&q=80",
      alt: "Fog Oversized Tee",
    },
    tag: "Limited",
    categories: ["all", "oversized-tees"],
    slug: "fog-oversized-tee",
    description: "Stone-washed finish. Limited run of 100 pieces.",
  },
];
