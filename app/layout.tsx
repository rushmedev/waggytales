import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro, Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";
import Script from "next/script";
import type { CSSProperties } from "react";
import GoogleAnalyticsSafe from "./components/google-analytics-safe";
import { contactInfo } from "./config/contact";
import { siteTheme } from "./config/theme";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const themeVariables: CSSProperties = {
  "--wt-primary": siteTheme.colors.primary,
  "--wt-secondary": siteTheme.colors.secondary,
  "--wt-tertiary": siteTheme.colors.tertiary,
  "--wt-neutral": siteTheme.colors.neutral,
  "--wt-white": siteTheme.colors.white,
  "--wt-soft-card": siteTheme.colors.softCard,
  "--wt-line": siteTheme.colors.line,
} as CSSProperties;

const GA_MEASUREMENT_ID = "G-79DP0HDRY5";

export const metadata: Metadata = {
  title: `${siteTheme.brand.name} | Premium Pet Care in Hyderabad`,
  description:
    "Premium pet boarding, grooming, and daycare designed for comfort, safety, and joyful tails.",
  keywords: [
    "dog boarding Hyderabad",
    "pet home stay Hyderabad",
    "dog grooming Hyderabad",
    "pet daycare Hyderabad",
    "M & M Waggy Tales",
    "Golden Tulip Colony pet care",
  ],
  category: "pet care",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: `${siteTheme.brand.name} | Premium Pet Care in Hyderabad`,
    description:
      "Premium pet boarding, grooming, daycare, and vet support in Hyderabad with trusted care and transparent updates.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteTheme.brand.name} | Premium Pet Care in Hyderabad`,
    description:
      "Premium pet boarding, grooming, daycare, and vet support in Hyderabad with trusted care and transparent updates.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${beVietnamPro.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" style={themeVariables}>
        <Script
          id="contentsquare-uxa"
          src="https://t.contentsquare.net/uxa/9aee59e99b03b.js"
          strategy="afterInteractive"
        />
        {children}
        <a
          className="wt-whatsapp-fab"
          href={contactInfo.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <Image src="/whatsapp.svg" alt="" width={16} height={16} className="wt-whatsapp-icon" />
        </a>
        <GoogleAnalyticsSafe gaId={GA_MEASUREMENT_ID} />
      </body>
    </html>
  );
}
