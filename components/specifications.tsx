"use client"

import { Card } from "@/components/ui/card"

const specs = [
  {
    category: "Composição",
    items: [
      "Alumino silicatos premium",
      "Hematita",
      "Bauxita de grau industrial",
      "Poliamida resistente",
      "Óxidos hidratados avançados",
    ],
  },
  {
    category: "Performance",
    items: [
      "Taxa de filtração: 99,9%",
      "Granulometria: 0,5 a 1,2 mm",
      "Densidade aparente: 1,8 a 2,0 g/cm³",
      "Ponto de fusão: 535°C",
      "Solubilidade em água: Insolúvel",
    ],
  },
  {
    category: "Durabilidade",
    items: [
      "Vida útil: 8 anos completos",
      "Sem manutenção programada",
      "Estabilidade: Produto estável",
      "Operação em condições usuais",
      "Reatividade: Oxidante controlado",
    ],
  },
  {
    category: "Conformidade",
    items: [
      "Certificação de qualidade de água",
      "Padrões de segurança enterprise",
      "Regulamentação de transporte",
      "Conformidade ambiental",
      "Normas internacionais",
    ],
  },
]

export default function Specifications() {
  return (
    <section id="specifications" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">Especificações Técnicas</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça os detalhes técnicos completos do sistema OX Maxx
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {specs.map((spec) => (
            <Card key={spec.category} className="p-6 border-border/50">
              <h3 className="text-xl font-semibold mb-4 text-accent">{spec.category}</h3>
              <ul className="space-y-2">
                {spec.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
