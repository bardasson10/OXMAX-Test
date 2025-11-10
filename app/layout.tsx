import type React from "react"
import type { Metadata } from "next"
import {  Inter } from "next/font/google"
import "./globals.css"
import Layout from "@/components/Layout/layout"
import { SpeedInsights } from "@vercel/speed-insights/next"


const inter = Inter({ subsets: ["latin"] })
export const metadata: Metadata = {
  title: "OX Maxx - Filtração de Água Profissional",
  description: "Sistemas de filtração de água enterprise de 8 anos com zero manutenção",
  generator: "Next.js",
  icons: {
    icon: [
      {
        url: "/OXMAX_logo.png", // Ícone para tema claro (Ex: 32x32px PNG)
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/OXMAX_logo.png", // Ícone para tema escuro (Ex: 32x32px PNG)
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/ICONE.png", // Ícone vetorial universal (para alta resolução)
        type: "image/svg+xml",
      },
    ],
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
        <SpeedInsights />
      </body>
    </html>
  )
}
