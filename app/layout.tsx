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
  title: "FPMate(에프피메이트) - SW 사업 비용 산정 및 관리 플랫폼",
  description:
    "FPMate로 내 프로젝트의 가치를 높이세요. 국제표준(ISO/IEC 14143) 기반 SW 사업 비용 산정 및 관리 솔루션. AI 기반 자동 산정, 빠른 비용 계산, 체계적 변경 관리를 제공합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" data-theme="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
