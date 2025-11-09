"use client"

import { useState } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import ProductCalculator from "@/components/product-calculator"
import TechnicalGuide from "@/components/technical-guide"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"

export default function Compras() {
  const [isDark, setIsDark] = useState(false)

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-200">
        <Header isDark={isDark} setIsDark={setIsDark} />
        <Hero />
        <ProductCalculator />
        <TechnicalGuide />
        <ContactForm />
        <Footer />
      </div>
    </div>
  )
}
