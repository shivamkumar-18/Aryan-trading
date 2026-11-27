import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { site, clean, isPlaceholder } from "@/lib/site";
import DisclosureBar from "@/components/DisclosureBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const figtree = localFont({
  src: "./fonts/Figtree-Variable.woff2",
  variable: "--font-figtree",
  weight: "300 900",
  display: "swap",
});
const bricolage = localFont({
  src: "./fonts/BricolageGrotesque-Variable.woff2",
  variable: "--font-bricolage",
  weight: "200 800",
  display: "swap",
});

const title = `${site.name} | Stock Market & Options Trading Classes`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: site.name,
    title,
    description: site.description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: `${site.name}: stock market training academy` }],
  },
  twitter: { card: "summary_large_image", title, description: site.description, images: ["/og.png"] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#0f5c63" };

/** Structured data that helps Google understand the business. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: site.name,
  url: site.url,
  description: site.description,
  ...(isPlaceholder(site.phone) ? {} : { telephone: clean(site.phone) }),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${figtree.variable} ${bricolage.variable}`}>
      <body className="flex min-h-screen flex-col">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2">
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <DisclosureBar />
        <Header />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
