"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/config";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-brand-bg/95 backdrop-blur-md border-b border-brand-border"
            : "bg-transparent"
        )}
      >
        <nav className="max-w-screen-xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          {/* Brand */}
          <Link
            href="/"
            className="font-body font-800 text-lg tracking-widest3 uppercase text-brand-cream hover:text-brand-warm transition-colors duration-300"
          >
            {siteConfig.brandName}
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "font-body text-xs tracking-widest2 uppercase transition-colors duration-300 relative group",
                    pathname === link.href
                      ? "text-brand-cream"
                      : "text-brand-warm/60 hover:text-brand-cream"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-0.5 left-0 h-px bg-brand-cream transition-all duration-300",
                      pathname === link.href
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/shop"
              className="font-body text-xs tracking-widest uppercase border border-brand-border px-5 py-2 text-brand-accent hover:bg-brand-accent hover:text-brand-bg transition-all duration-300"
            >
              Shop Now
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
            aria-label="Toggle menu"
          >
            <span
              className={cn(
                "w-6 h-px bg-brand-cream transition-all duration-300 origin-center",
                menuOpen && "rotate-45 translate-y-[5px]"
              )}
            />
            <span
              className={cn(
                "w-6 h-px bg-brand-cream transition-all duration-300",
                menuOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "w-6 h-px bg-brand-cream transition-all duration-300 origin-center",
                menuOpen && "-rotate-45 -translate-y-[5px]"
              )}
            />
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-brand-bg flex flex-col items-center justify-center"
          >
            <ul className="flex flex-col items-center gap-10">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                >
                  <Link
                    href={link.href}
                    className="font-display text-5xl italic text-brand-cream hover:text-brand-warm transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.24 }}
              >
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs tracking-widest text-brand-warm/50 hover:text-brand-warm transition-colors duration-300 uppercase"
                >
                  Instagram ↗
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
