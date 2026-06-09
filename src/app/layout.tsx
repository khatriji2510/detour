import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { siteConfig } from "@/data/config";

export const metadata: Metadata = {
  title: {
    default: siteConfig.brandName,
    template: `%s | ${siteConfig.brandName}`,
  },
  description: siteConfig.brandTagline,
  openGraph: {
    title: siteConfig.brandName,
    description: siteConfig.brandTagline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="grain">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
