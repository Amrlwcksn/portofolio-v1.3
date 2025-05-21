

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

// Load font dengan variable CSS
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata untuk <head>
export const metadata: Metadata = {
  title: "amirulwicaksono",
  description: "Portofolio amirul wicaksono",
  icons: {
    icon: "/favico.ico", // Pastikan file ini ada di folder `public/`
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Umami analytics script */}
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="1ee56d57-f696-4866-ace2-063051816cf4"
        />
        {children}
      </body>
    </html>
  );
}
