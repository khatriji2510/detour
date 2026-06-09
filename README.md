# VOIDWEAR — Streetwear Brand Website

A production-ready Next.js 14 website for a premium streetwear brand. Fully deployable on Vercel with zero configuration.

---

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- No backend, no database, no paid services

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (Navbar, fonts, metadata)
│   ├── globals.css         # Global styles, CSS variables, fonts
│   ├── page.tsx            # Home page
│   ├── not-found.tsx       # 404 page
│   └── shop/
│       └── page.tsx        # Shop / All Items page
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky navbar with mobile hamburger menu
│   │   └── Footer.tsx      # Footer with Instagram + Email links
│   ├── home/
│   │   ├── HeroCarousel.tsx    # Auto-playing hero slideshow (3s interval)
│   │   └── FeaturedProducts.tsx # Featured products section on home
│   ├── shop/
│   │   ├── ShopView.tsx        # Shop page layout + category filtering
│   │   └── CategorySidebar.tsx # Desktop sidebar + mobile dropdown filter
│   └── ui/
│       ├── MediaRenderer.tsx   # Unified image/gif/video renderer
│       └── ProductCard.tsx     # Reusable product card with hover effects
│
├── data/                   # ← EDIT THESE FILES to customize your site
│   ├── config.ts           # Brand name, tagline, Instagram, email, color
│   ├── categories.ts       # Shop filter categories
│   ├── products.ts         # All products (title, price, media, tags)
│   └── heroSlides.ts       # Hero carousel slides
│
├── lib/
│   └── utils.ts            # cn() utility for class merging
│
└── types/
    └── index.ts            # TypeScript interfaces
```

---

## Quick Customization Guide

### 1. Change Brand Name, Tagline, Instagram, Email
Edit `src/data/config.ts`:
```ts
export const siteConfig = {
  brandName: "YOUR BRAND",
  brandTagline: "Your tagline here.",
  instagram: "https://instagram.com/yourbrand",
  email: "hello@yourbrand.com",
  accentColor: "#e8e0d4",
};
```

### 2. Add / Edit Products
Edit `src/data/products.ts`. Each product looks like:
```ts
{
  id: "unique-id",
  title: "Product Name",
  price: 49,
  media: {
    type: "image",   // "image" | "gif" | "video"
    src: "/images/product.jpg",
    alt: "Product description",
  },
  tag: "New",        // "New" | "Best Seller" | "Limited" | "Sale" | null
  categories: ["all", "oversized-tees"],
  slug: "product-name",
  description: "Short product description.",
}
```

**To use a GIF:** `media: { type: "gif", src: "/images/product.gif", alt: "..." }`
**To use a video:** `media: { type: "video", src: "/videos/product.mp4", poster: "/images/thumb.jpg" }`

### 3. Add / Edit Categories
Edit `src/data/categories.ts`:
```ts
export const categories = [
  { id: "all",     label: "All" },
  { id: "hoodies", label: "Hoodies" },
  // Add more...
];
```
Make sure `id` matches the strings in your product's `categories` array.

### 4. Edit Hero Slides
Edit `src/data/heroSlides.ts` to change carousel content, headlines, and CTAs.
Auto-slide interval defaults to 3000ms — change it in `HeroCarousel.tsx`:
```tsx
<HeroCarousel slides={heroSlides} interval={3000} />
```

### 5. Add Product Images
Place your images in `public/images/` and reference them as:
```ts
src: "/images/your-product.jpg"
```

### 6. Change Colors
Colors are defined in two places:
- `src/app/globals.css` — CSS variables (`:root { --color-accent: ... }`)
- `tailwind.config.ts` — Tailwind theme extension (`brand.accent`, etc.)

---

## Running Locally

### Prerequisites
- Node.js 18.17 or higher
- npm, yarn, or pnpm

### Steps
```bash
# 1. Clone or download this project
cd streetwear-brand

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
open http://localhost:3000
```

### Build for Production (test locally)
```bash
npm run build
npm run start
```

---

## Deploying on Vercel

### Option A — GitHub (Recommended)

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click **"Add New Project"**
4. Import your GitHub repository
5. Vercel auto-detects Next.js — click **"Deploy"**
6. Done! Your site is live at `https://your-project.vercel.app`

### Option B — Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### No Environment Variables Required
This is a fully static frontend — no `.env` files needed for deployment.

---

## Replacing Placeholder Images

The placeholder images in `src/data/products.ts` and `src/data/heroSlides.ts` use Unsplash URLs.

To use your own images:
1. Add your files to `public/images/` or `public/videos/`
2. Update the `src` paths in `products.ts` and `heroSlides.ts`

---

## Fonts Used

- **Cormorant Garamond** — Display / headlines (italic, serif)
- **Syne** — Body / UI text (modern sans)
- **DM Mono** — Labels / prices / metadata (monospace)

Loaded via Google Fonts in `globals.css`. Change them there to swap fonts.
