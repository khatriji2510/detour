// ─── Media Types ─────────────────────────────────────────────────────────────
export type MediaType = "image" | "gif" | "video";

export interface MediaItem {
  type: MediaType;
  src: string;
  alt?: string;
  poster?: string; // for video fallback thumbnail
}

// ─── Product Types ────────────────────────────────────────────────────────────
export type ProductTag = "New" | "Best Seller" | "Limited" | "Sale" | null;

export interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice?: number; // for sale items
  media: MediaItem;
  tag?: ProductTag;
  categories: string[];
  slug: string;
  description?: string;
}

// ─── Category Types ───────────────────────────────────────────────────────────
export interface Category {
  id: string;
  label: string;
  count?: number; // auto-computed
}

// ─── Hero Slide Types ─────────────────────────────────────────────────────────
export interface HeroSlide {
  id: string;
  media: MediaItem;
  headline: string;
  subheadline?: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

// ─── Site Config Types ────────────────────────────────────────────────────────
export interface SiteConfig {
  brandName: string;
  brandTagline: string;
  instagram: string;
  email: string;
  accentColor: string;
}
