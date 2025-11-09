"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, Factory, Waves, Pill } from "lucide-react"

const solutions = [
  {
    icon: Building2,
    title: "Escritórios Corporativos",
    description: "Água potável limpa para funcionários em todas as instalações",
  },
  {
    icon: Factory,
    title: "Manufatura",
    description: "Filtração de grau industrial para processos de produção",
  },
  {
    icon: Waves,
    title: "Hotelaria",
    description: "Sistemas de água premium para hotéis, restaurantes e resorts",
  },
  {
    icon: Pill,
    title: "Saúde",
    description: "Purificação de grau médico para hospitais e clínicas",
  },
]

export default function Solutions() {
  return (
    <section id="solutions" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">Soluções Personalizadas</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            OX Maxx se adapta ao seu segmento. De aplicações corporativas até industriais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {solutions.map((solution) => {
            const Icon = solution.icon
            return (
              <Card key={solution.title} className="p-8 border-border/50 hover:border-primary/50 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">{solution.title}</h3>
                    <p className="text-muted-foreground mb-4">{solution.description}</p>
                    <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80">
                      Saiba mais →
                    </Button>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
