import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Markavia",
    default: "Markavia - Modern Web Application",
  },
  description: "A modern, high-performance web application built with Next.js, Tailwind CSS, and Framer Motion.",
  keywords: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Web Application"],
  authors: [{ name: "Markavia Team" }],
  creator: "Markavia Team",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://markavia.com",
    title: "Markavia - Modern Web Application",
    description: "A modern, high-performance web application built with Next.js, Tailwind CSS, and Framer Motion.",
    siteName: "Markavia",
  },
  twitter: {
    card: "summary_large_image",
    title: "Markavia - Modern Web Application",
    description: "A modern, high-performance web application built with Next.js, Tailwind CSS, and Framer Motion.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">{children}</body>
    </html>
  );
}
