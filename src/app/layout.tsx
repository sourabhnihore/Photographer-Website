import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";
import { siteConfig } from "@/config/siteConfig";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteConfig.seo.defaultTitle,
  description: siteConfig.seo.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { address } = siteConfig;

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": siteConfig.schema.type,
              name: siteConfig.siteName,
              image: siteConfig.schema.image,
              description: siteConfig.schema.description,
              address: {
                "@type": "PostalAddress",
                streetAddress: address.street,
                addressLocality: address.city,
                addressRegion: address.state,
                postalCode: address.postalCode,
                addressCountry: "IN",
              },
              telephone: siteConfig.whatsapp,
              priceRange: siteConfig.schema.priceRange,
            }),
          }}
        />
      </head>
      <body className="antialiased bg-background text-foreground selection:bg-gold/30 selection:text-white flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
