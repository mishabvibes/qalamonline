import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { organizationLd, websiteLd } from "@/lib/seo";
import { site } from "@/lib/site";

// Same typeface as the LearnHouse UI, self-hosted (no request to Google Fonts).
const wix = localFont({
  src: "./fonts/WixMadeforText-latin.woff2",
  weight: "400 800",
  variable: "--font-wix",
  display: "swap",
});

// Arabic display face, used only for the Bismillah and Arabic terms.
const amiri = localFont({
  src: "./fonts/Amiri-arabic-400.woff2",
  weight: "400",
  variable: "--font-amiri",
  display: "swap",
  preload: false,
});

const malayalam = localFont({
  src: "./fonts/NotoSansMalayalam.woff2",
  weight: "100 900",
  variable: "--font-ml",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Online Madrasa for Gulf Families`,
    template: "%s | Qalam Online",
  },
  description: site.description,
  applicationName: site.name,
  category: "education",
  formatDetection: { telephone: false },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || undefined,
    other: process.env.NEXT_PUBLIC_BING_VERIFICATION ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION } : undefined,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${wix.variable} ${amiri.variable} ${malayalam.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only rounded-lg bg-gray-900 px-4 py-2 text-sm font-bold text-white focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[60]"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1 pt-[60px] animate-fade-in">
          {children}
        </main>
        <Footer />
        <JsonLd data={[organizationLd(), websiteLd()]} />
      </body>
    </html>
  );
}
