"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { HeroSlide } from "@/types";
import { MediaRenderer } from "@/components/ui/MediaRenderer";
import { cn } from "@/lib/utils";

interface HeroCarouselProps {
  slides: HeroSlide[];
  interval?: number; // ms between auto-slides, default 3000
}

export function HeroCarousel({ slides, interval = 3000 }: HeroCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState<1 | -1>(1);

  const goTo = useCallback(
    (index: number, dir?: 1 | -1) => {
      const d = dir ?? (index > current ? 1 : -1);
      setDirection(d);
      setCurrent(index);
    },
    [current]
  );

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    const timer = setTimeout(next, interval);
    return () => clearTimeout(timer);
  }, [current, paused, next, interval]);

  const slide = slides[current];

  const variants = {
    enter: (dir: number) => ({
      opacity: 0,
      scale: 1.05,
      x: dir > 0 ? 40 : -40,
    }),
    center: {
      opacity: 1,
      scale: 1,
      x: 0,
    },
    exit: (dir: number) => ({
      opacity: 0,
      scale: 0.98,
      x: dir > 0 ? -40 : 40,
    }),
  };

  return (
    <section
      className="relative w-full h-screen min-h-[600px] overflow-hidden cursor-crosshair"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      <AnimatePresence custom={direction} mode="sync">
        <motion.div
          key={slide.id}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          {/* Media */}
          <div className="absolute inset-0">
            <MediaRenderer
              media={slide.media}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Text Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`text-${slide.id}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="absolute inset-0 flex items-end pb-24 md:pb-32 px-8 md:px-16 lg:px-24"
        >
          <div className="max-w-2xl">
            {slide.subheadline && (
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35, duration: 0.6 }}
                className="font-mono text-[11px] tracking-widest2 uppercase text-brand-warm/80 mb-5"
              >
                {slide.subheadline}
              </motion.p>
            )}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[clamp(3.5rem,9vw,8rem)] leading-[0.9] italic text-brand-cream mb-8 whitespace-pre-line"
            >
              {slide.headline}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                href={slide.ctaHref}
                className="font-body text-xs tracking-widest2 uppercase bg-brand-cream text-brand-bg px-8 py-3.5 hover:bg-brand-warm transition-colors duration-300"
              >
                {slide.ctaLabel}
              </Link>
              {slide.secondaryCtaLabel && (
                <Link
                  href={slide.secondaryCtaHref ?? "/shop"}
                  className="font-body text-xs tracking-widest2 uppercase border border-brand-cream/50 text-brand-cream px-8 py-3.5 hover:bg-brand-cream/10 transition-colors duration-300"
                >
                  {slide.secondaryCtaLabel}
                </Link>
              )}
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide Counter */}
      <div className="absolute top-1/2 -translate-y-1/2 right-8 md:right-10 flex flex-col items-center gap-3">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="group relative flex items-center justify-center w-6 h-6"
          >
            <span
              className={cn(
                "transition-all duration-500",
                i === current
                  ? "w-0.5 h-8 bg-brand-cream"
                  : "w-0.5 h-3 bg-brand-cream/30 group-hover:bg-brand-cream/60 group-hover:h-5"
              )}
            />
          </button>
        ))}
      </div>

      {/* Left / Right arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-5 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center border border-brand-cream/20 bg-black/20 hover:bg-black/50 hover:border-brand-cream/50 transition-all duration-300 backdrop-blur-sm"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M10 3L5 8L10 13"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-brand-cream"
          />
        </svg>
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-20 md:right-24 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center border border-brand-cream/20 bg-black/20 hover:bg-black/50 hover:border-brand-cream/50 transition-all duration-300 backdrop-blur-sm"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M6 3L11 8L6 13"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-brand-cream"
          />
        </svg>
      </button>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-brand-border">
        <motion.div
          key={`progress-${current}`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: interval / 1000, ease: "linear" }}
          style={{ transformOrigin: "left" }}
          className="h-full bg-brand-cream/60"
        />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-mono text-[9px] tracking-widest3 uppercase text-brand-cream">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-brand-cream to-transparent"
        />
      </div>
    </section>
  );
}
