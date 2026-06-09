import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { BackToTop } from "@/components/ui/back-to-top";
import { PageLoader } from "@/components/ui/page-loader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "my_ui — UI Design Portfolio",
  description: "个人 UI 设计作品集，可交互的前端演示与素材库。",
  keywords: ["UI Design", "Portfolio", "Frontend", "React", "Next.js", "Tailwind CSS"],
  authors: [{ name: "0xWeakSheep" }],
  openGraph: {
    title: "my_ui — UI Design Portfolio",
    description: "个人 UI 设计作品集，可交互的前端演示与素材库。",
    type: "website",
    locale: "zh_CN",
  },
  twitter: {
    card: "summary_large_image",
    title: "my_ui — UI Design Portfolio",
    description: "个人 UI 设计作品集，可交互的前端演示与素材库。",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-bg-base text-text-primary antialiased">
        <PageLoader />
        <CustomCursor />
        <ScrollProgress />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
