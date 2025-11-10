import type React from "react"
import type { Metadata } from "next"
import {  Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Layout from "@/components/Layout/layout"


const inter = Inter({ subsets: ["latin"] })
export const metadata: Metadata = {
  title: "OX Maxx - Filtração de Água Profissional",
  description: "Sistemas de filtração de água enterprise de 8 anos com zero manutenção",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
<html lang="pt-BR">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
