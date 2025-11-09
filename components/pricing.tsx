"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Pequenas Empresas",
    price: "R$ 2.490",
    period: "pagamento único",
    description: "Ideal para escritórios e pequenas instalações",
    features: [
      "Até 100 litros/dia",
      "8 anos de vida útil",
      "Filtração 99,9%",
      "Suporte por email",
      "Certificado de qualidade",
    ],
    cta: "Comprar Agora",
  },
  {
    name: "Médias Empresas",
    price: "R$ 5.990",
    period: "pagamento único",
    description: "Solução escalável para operações moderadas",
    features: [
      "Até 500 litros/dia",
      "8 anos de vida útil",
      "Filtração 99,9%",
      "Suporte prioritário",
      "Certificado de qualidade",
      "Análises em tempo real",
    ],
    cta: "Comprar Agora",
    highlight: true,
  },
  {
    name: "Grandes Empresas",
    price: "R$ 12.990",
    period: "pagamento único",
    description: "Capacidade máxima para operações em larga escala",
    features: [
      "Até 2000+ litros/dia",
      "8 anos de vida útil",
      "Filtração 99,9%",
      "Suporte 24/7 dedicado",
      "Certificado de qualidade",
      "Análises avançadas",
      "Instalação incluída",
    ],
    cta: "Comprar Agora",
  },
]

export default function Pricing() {
  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">Planos e Preços</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano ideal para suas necessidades. Todos incluem 8 anos de garantia sem manutenção.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`p-6 border-border/50 flex flex-col ${plan.highlight ? "ring-2 ring-accent scale-105" : ""}`}
            >
              {plan.highlight && (
                <div className="mb-4 inline-block px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full w-fit">
                  Mais Popular
                </div>
              )}
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>

              <div className="mb-6">
                <span className="text-3xl font-bold">{plan.price}</span>
                <p className="text-sm text-muted-foreground">{plan.period}</p>
              </div>

              <Button
                size="lg"
                className={`w-full mb-6 ${
                  plan.highlight
                    ? "bg-accent hover:bg-accent/90 text-white"
                    : "bg-primary hover:bg-primary/90 text-white"
                }`}
                onClick={scrollToForm}
              >
                {plan.cta}
              </Button>

              <div className="space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
