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
  title: "MangoMarket - Fresh Premium Mangoes Delivered",
  description: "Shop premium fresh mangoes from tropical farms. Alphonso, Kent, Tommy Atkins and more exotic varieties delivered at peak ripeness. Farm to door in 24 hours.",
  keywords: ["mangoes", "fresh fruit", "tropical fruit", "alphonso mango", "kent mango", "organic mangoes", "fresh mangoes delivery"],
  openGraph: {
    title: "MangoMarket - Fresh Premium Mangoes Delivered",
    description: "Shop premium fresh mangoes from tropical farms. Delivered at peak ripeness with 100% quality guarantee.",
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
        <link rel="canonical" href="https://mangomarket.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
