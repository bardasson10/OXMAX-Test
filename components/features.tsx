"use client"

import { Card } from "@/components/ui/card"
import { Droplet, Zap, Shield, TrendingUp, BarChart3, Lock } from "lucide-react"

const features = [
  {
    icon: Droplet,
    title: "Filtração Pura",
    description: "Filtração multiestagio avançada remove 99,9% dos contaminantes",
  },
  {
    icon: Zap,
    title: "Eficiência Energética",
    description: "Baixo consumo de energia reduz custos operacionais em até 40%",
  },
  {
    icon: Shield,
    title: "Confiabilidade",
    description: "8 anos de vida útil sem manutenção programada necessária",
  },
  {
    icon: TrendingUp,
    title: "Escalável",
    description: "De pequenos escritórios até grandes instalações de manufatura",
  },
  {
    icon: BarChart3,
    title: "Análises",
    description: "Monitoramento em tempo real e painel de métricas de desempenho",
  },
  {
    icon: Lock,
    title: "Segurança",
    description: "Conformidade em nível enterprise e certificações de qualidade de água",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">Por Que Escolher OX Maxx</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Construído especificamente para empresas que exigem filtração de água confiável e de alto desempenho
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Card key={feature.title} className="p-6 hover:shadow-lg transition-shadow border-border/50 group">
                <Icon className="w-8 h-8 text-accent mb-4 group-hover:text-accent/80 transition-colors" />
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
