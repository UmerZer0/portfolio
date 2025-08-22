import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Umar — Portfolio",
  description:
    "Software developer portfolio showcasing projects, experience, and contact.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Umar — Portfolio",
    description: "Projects, experience, and contact.",
    url: "https://example.com",
    siteName: "Umar",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Umar — Portfolio",
    description: "Projects, experience, and contact.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CursorGlow />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
