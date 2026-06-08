"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Category } from "@/types";
import { cn } from "@/lib/utils";

interface CategorySidebarProps {
  categories: Category[];
  selected: string;
  onSelect: (id: string) => void;
  productCounts: Record<string, number>;
}

export function CategorySidebar({
  categories,
  selected,
  onSelect,
  productCounts,
}: CategorySidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const selectedLabel =
    categories.find((c) => c.id === selected)?.label ?? "All";

  return (
    <>
      {/* Mobile toggle button */}
      <div className="lg:hidden mb-6">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="w-full flex items-center justify-between border border-brand-border px-5 py-3.5 text-brand-accent hover:bg-brand-surface transition-colors duration-200"
        >
          <div className="flex items-center gap-3">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="text-brand-warm/60"
            >
              <line
                x1="1"
                y1="3"
                x2="13"
                y2="3"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <line
                x1="1"
                y1="7"
                x2="10"
                y2="7"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <line
                x1="1"
                y1="11"
                x2="7"
                y2="11"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
            <span className="font-body text-xs tracking-widest uppercase">
              {selectedLabel}
            </span>
          </div>
          <motion.span
            animate={{ rotate: mobileOpen ? 180 : 0 }}
            transition={{ duration: 0.25 }}
            className="font-mono text-brand-warm/40 text-sm"
          >
            ↓
          </motion.span>
        </button>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden border-x border-b border-brand-border bg-brand-surface"
            >
              <ul className="py-2">
                {categories.map((cat) => {
                  const count =
                    cat.id === "all"
                      ? productCounts["all"]
                      : productCounts[cat.id] ?? 0;
                  return (
                    <li key={cat.id}>
                      <button
                        onClick={() => {
                          onSelect(cat.id);
                          setMobileOpen(false);
                        }}
                        className={cn(
                          "w-full flex items-center justify-between px-5 py-3 transition-colors duration-200",
                          selected === cat.id
                            ? "text-brand-cream bg-brand-muted"
                            : "text-brand-warm/60 hover:text-brand-cream hover:bg-brand-muted/50"
                        )}
                      >
                        <span className="font-body text-xs tracking-wide uppercase">
                          {cat.label}
                        </span>
                        <span className="font-mono text-[10px] text-brand-warm/30">
                          {count}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Desktop sidebar */}
      <aside className="hidden lg:block w-52 flex-shrink-0">
        <div className="sticky top-24">
          <p className="font-mono text-[9px] tracking-widest3 uppercase text-brand-warm/30 mb-5 px-1">
            Filter
          </p>
          <ul className="space-y-0.5">
            {categories.map((cat) => {
              const count =
                cat.id === "all"
                  ? productCounts["all"]
                  : productCounts[cat.id] ?? 0;

              return (
                <li key={cat.id}>
                  <button
                    onClick={() => onSelect(cat.id)}
                    className={cn(
                      "w-full flex items-center justify-between px-3 py-2.5 rounded-none transition-all duration-200 group",
                      selected === cat.id
                        ? "text-brand-cream bg-brand-surface border-l-2 border-brand-cream pl-3"
                        : "text-brand-warm/50 hover:text-brand-cream hover:bg-brand-surface/50 border-l-2 border-transparent pl-3"
                    )}
                  >
                    <span className="font-body text-[11px] tracking-wide uppercase">
                      {cat.label}
                    </span>
                    <span
                      className={cn(
                        "font-mono text-[9px] transition-colors duration-200",
                        selected === cat.id
                          ? "text-brand-warm/50"
                          : "text-brand-warm/20 group-hover:text-brand-warm/40"
                      )}
                    >
                      {count}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </>
  );
}
