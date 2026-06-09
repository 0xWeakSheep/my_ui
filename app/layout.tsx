import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/ui/custom-cursor";

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-bg-base text-text-primary antialiased">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
