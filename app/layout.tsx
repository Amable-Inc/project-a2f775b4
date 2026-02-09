import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StepStyle - Premium Shoes for Every Occasion",
  description: "Shop premium quality shoes for men, women, and kids. Free shipping on orders over $50. Find your perfect fit with StepStyle's latest collection.",
  keywords: ["shoes", "footwear", "sneakers", "boots", "sandals", "running shoes", "athletic shoes"],
  openGraph: {
    title: "StepStyle - Premium Shoes for Every Occasion",
    description: "Shop premium quality shoes for men, women, and kids. Free shipping on orders over $50.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://stepstyle.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
