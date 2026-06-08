import Link from "next/link";
import { siteConfig } from "@/data/config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-border mt-32">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">
        {/* Main footer content */}
        <div className="py-20 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="font-body font-800 text-2xl tracking-widest3 uppercase text-brand-cream block mb-4"
            >
              {siteConfig.brandName}
            </Link>
            <p className="font-display italic text-brand-warm/60 text-lg leading-relaxed">
              {siteConfig.brandTagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-mono text-[10px] tracking-widest2 uppercase text-brand-warm/40 mb-6">
              Navigate
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/shop", label: "Shop All" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm tracking-wide text-brand-warm/60 hover:text-brand-cream transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-[10px] tracking-widest2 uppercase text-brand-warm/40 mb-6">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 font-body text-sm tracking-wide text-brand-warm/60 hover:text-brand-cream transition-colors duration-300"
                >
                  {/* Instagram icon */}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  <span>Instagram</span>
                  <span className="text-brand-warm/30 group-hover:text-brand-warm/60 transition-colors">
                    ↗
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="group flex items-center gap-3 font-body text-sm tracking-wide text-brand-warm/60 hover:text-brand-cream transition-colors duration-300"
                >
                  {/* Email icon */}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span>{siteConfig.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-brand-border py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] tracking-widest uppercase text-brand-warm/30">
            © {year} {siteConfig.brandName}. All rights reserved.
          </p>
          <p className="font-mono text-[10px] tracking-widest uppercase text-brand-warm/20">
            Made with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
