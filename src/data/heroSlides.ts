import type { HeroSlide } from "@/types";

// ─────────────────────────────────────────────────────────────────────────────
// HERO SLIDES
// Add, remove, or edit hero carousel slides here.
// Each slide can use an image, gif, or video.
//
// For video:
//   media: { type: "video", src: "/videos/hero.mp4", poster: "/images/hero-thumb.jpg" }
// For gif:
//   media: { type: "gif", src: "/images/hero.gif", alt: "Hero" }
// For image:
//   media: { type: "image", src: "/images/hero.jpg", alt: "Hero" }
//
// Auto-slide interval is set in the HeroCarousel component (default: 3000ms)
// ─────────────────────────────────────────────────────────────────────────────

export const heroSlides: HeroSlide[] = [
  {
    id: "slide-1",
    media: {
      type: "image",
      src: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1800&q=85",
      alt: "New Collection Drop",
    },
    headline: "THE VOID\nCOLLECTION",
    subheadline: "SS 2025 — Limited Drops",
    ctaLabel: "Shop Now",
    ctaHref: "/shop",
    secondaryCtaLabel: "View Collection",
    secondaryCtaHref: "/shop",
  },
  {
    id: "slide-2",
    media: {
      type: "image",
      src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1800&q=85",
      alt: "Hoodies Collection",
    },
    headline: "BUILT FOR\nTHE DARK",
    subheadline: "Premium Hoodies — New Arrivals",
    ctaLabel: "Shop Hoodies",
    ctaHref: "/shop",
    secondaryCtaLabel: "Explore",
    secondaryCtaHref: "/shop",
  },
  {
    id: "slide-3",
    media: {
      type: "image",
      src: "https://images.unsplash.com/photo-1601333144130-8cbb312386b6?w=1800&q=85",
      alt: "Graphic Tees",
    },
    headline: "WEAR THE\nSHADOW",
    subheadline: "Graphic Tees — Essential Series",
    ctaLabel: "Shop Tees",
    ctaHref: "/shop",
    secondaryCtaLabel: "Best Sellers",
    secondaryCtaHref: "/shop",
  },
];
