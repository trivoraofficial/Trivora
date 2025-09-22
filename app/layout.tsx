import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from "@vercel/analytics/next";
import localFont from "next/font/local";
import "./globals.css";

// Load custom fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Updated Metadata for enhanced SEO
export const metadata: Metadata = {
  title: "Trivora | Master Trading with Expert Courses & Live Market Analysis",
  description:
    "Learn to trade with Trivora's comprehensive platform. Get real-time market analysis, master proven trading strategies, and access expert-led tutorials to become a successful trader.",
  keywords: [
    "trading courses",
    "trading education",
    "forex trading",
    "stock trading",
    "crypto trading",
    "learn trading",
    "trading strategies",
    "online trading academy",
    "expert trading",
    "market analysis",
  ],
};

// Root layout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
