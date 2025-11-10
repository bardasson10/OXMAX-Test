// components/layout.tsx
"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

interface LayoutProps {
  children: React.ReactNode
}

/**
 * Componente Layout Padrão
 * Envolve o Header, o conteúdo principal e o Footer, e gerencia o tema.
 */
export default function Layout({ children }: LayoutProps) {
  const [isDark, setIsDark] = useState(false)

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-200">
        <Header isDark={isDark} setIsDark={setIsDark} />
        
        <main>{children}</main>
        
        <Footer />
        <Toaster /> {/* Incluído para notificações globais */}
      </div>
    </div>
  )
}