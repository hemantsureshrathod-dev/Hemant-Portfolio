import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#080c14",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Hemant Suresh Rathod | AI & Data Science Student | Developer",
  description:
    "Portfolio of Hemant Suresh Rathod, an Artificial Intelligence & Data Science student at Sanjay Ghodawat University building AI, web, and full-stack projects.",
  keywords: [
    "Hemant Suresh Rathod",
    "Hemant Rathod",
    "AI & Data Science Student",
    "Full-Stack Developer",
    "LangGraph",
    "Multi-Agent AI",
    "Kestrel ResearchOS",
    "TravelMate+",
    "PrimeTurf",
    "Software Engineering Intern",
  ],
  authors: [{ name: "Hemant Suresh Rathod", url: "https://github.com/hemantsureshrathod-dev" }],
  creator: "Hemant Suresh Rathod",
  metadataBase: new URL("https://hemant-rathod.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hemant-rathod.dev",
    title: "Hemant Suresh Rathod | AI & Data Science Student | Developer",
    description:
      "B.Tech AI & Data Science student building practical software, multi-agent AI systems, and full-stack products.",
    siteName: "Hemant Suresh Rathod Portfolio",
    images: [
      {
        url: "/images/hemant-photo.jpg",
        width: 800,
        height: 800,
        alt: "Hemant Suresh Rathod",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hemant Suresh Rathod | AI & Data Science Student | Developer",
    description:
      "B.Tech AI & Data Science student building practical software, multi-agent AI systems, and full-stack products.",
    images: ["/images/hemant-photo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}>
      <body className="min-h-screen bg-[#080c14] text-slate-100 antialiased selection:bg-indigo-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
