import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import TopBar from "@/components/layout/TopBar";
import Header from "@/components/layout/Header";
import FloatingActions from "@/components/ui/FloatingActions";

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
    template: "%s | Maskavia",
    default: "Maskavia - Premium Enterprise Solutions",
  },
  description: "Advanced Corporate Solutions for Modern Enterprises",
  keywords: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Web Application"],
  authors: [{ name: "Maskavia Team" }],
  creator: "Maskavia Team",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://maskavia.com",
    title: "Maskavia - Premium Enterprise Solutions",
    description: "Advanced Corporate Solutions for Modern Enterprises",
    siteName: "Maskavia",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maskavia - Premium Enterprise Solutions",
    description: "Advanced Corporate Solutions for Modern Enterprises",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${inter.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          disableTransitionOnChange
        >
          <TopBar />
          <Header />
          <div className="flex-1">
            {children}
          </div>
          <FloatingActions />
        </ThemeProvider>
      </body>
    </html>
  );
}
