import HeroHome from "@/components/hero-home"
import Features from "@/components/features"
import Stats from "@/components/stats"
import CTA from "@/components/cta"
import ContactForm from "@/components/contact-form"

export default function HomePage() {
  return (
    <>
      <HeroHome />
      <Features />
      <Stats />
      <CTA />
      <ContactForm />
    </>
  )
}