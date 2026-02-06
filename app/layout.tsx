import type { Metadata } from "next";
import { Geist, Geist_Mono, Crimson_Pro } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-body",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const crimson = Crimson_Pro({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Robel Yohannes Wolie",
  description: "Academic portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${crimson.variable}`}
    >
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
