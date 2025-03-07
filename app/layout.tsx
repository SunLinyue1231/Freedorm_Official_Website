import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Freedorm 随心锁域-官方网站",
  description: "推门既入 智慧如影随形",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <head>
        <link rel="icon" href="/freedorm_mini_logo.ico" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

