// app/page.tsx (Versão Nova)

import HeroHome from "@/components/hero-home"
import Features from "@/components/features"
import Solutions from "@/components/solutions"
import Specifications from "@/components/specifications"
import Stats from "@/components/stats"
import CTA from "@/components/cta"
import ContactForm from "@/components/contact-form"

export default function Home() {
  return (
    <>
    {/*seções da página inicial*/}
      <HeroHome />
      <Features />
      <Solutions />
      <Specifications />
      <Stats />
      <CTA />
      <ContactForm />
    </>
  )
}