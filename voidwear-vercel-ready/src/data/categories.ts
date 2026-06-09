import type { Category } from "@/types";

// ─────────────────────────────────────────────────────────────────────────────
// CATEGORIES
// Add, remove, or rename categories here.
// The "id" must match strings used in the product's `categories` array.
// The "All" category (id: "all") is required and should always be first.
// ─────────────────────────────────────────────────────────────────────────────

export const categories: Category[] = [
  { id: "all",           label: "All" },
  { id: "new-drops",     label: "New Drops" },
  { id: "best-sellers",  label: "Best Sellers" },
  { id: "oversized-tees",label: "Oversized Tees" },
  { id: "graphic-tees",  label: "Graphic Tees" },
  { id: "hoodies",       label: "Hoodies" },
  { id: "accessories",   label: "Accessories" },
];
