import type { Metadata } from "next";
import { Be_Vietnam_Pro, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import type { CSSProperties } from "react";
import GoogleAnalyticsSafe from "./components/google-analytics-safe";
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
      </body>
      <GoogleAnalyticsSafe gaId={GA_MEASUREMENT_ID} />
    </html>
  );
}
