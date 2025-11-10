"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"

export default function Hero() {
  const scrollToForm = () => {
    const element = document.getElementById("contact-form")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-accent/10 rounded-full">
                <span className="text-sm font-semibold text-accent">Solução Completa de Filtração</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-pretty">
                Água Purificada por 8 Anos, Sem Manutenção
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                OX Maxx é a solução empresarial definitiva para filtração de água. Com tecnologia avançada de múltiplos
                estágios, oferecemos purificação de 99,9% sem preocupações de manutenção por 8 anos completos.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white" onClick={scrollToForm}>
                Comprar Agora
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent/5 bg-transparent"
                onClick={() => document.getElementById("specifications")?.scrollIntoView({ behavior: "smooth" })}
              >
                Ver Especificações
              </Button>
            </div>

            {/* Benefits List */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-accent shrink-0" />
                <span className="text-sm text-muted-foreground">Sem custos de manutenção por 8 anos</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-accent shrink-0" />
                <span className="text-sm text-muted-foreground">Filtração de 99,9% de contaminantes</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-accent shrink-0" />
                <span className="text-sm text-muted-foreground">Certificado e conforme regulações</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 lg:h-full">
            <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-accent/20 rounded-2xl" />
            <img
              src="/produto_OXMAXX.svg"
              alt="Sistema de Filtração de Água OX Maxx"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
