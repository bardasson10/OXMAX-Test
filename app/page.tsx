"use client"

import { useState } from "react"
import Header from "@/components/header"
import HeroHome from "@/components/hero-home"
import Features from "@/components/features"
import Solutions from "@/components/solutions"
import Stats from "@/components/stats"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  const [isDark, setIsDark] = useState(false)

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-200">
        <Header isDark={isDark} setIsDark={setIsDark} />
        <HeroHome />
        <Features />
        <Solutions />
        <Stats />
        <CTA />
        <Footer />
      </div>
    </div>
  )
}
