"use client"

import { Card } from "@/components/ui/card"
import { AlertCircle, CheckCircle } from "lucide-react"

const technicalSpecs = [
  {
    title: "Dosagem por Vazão",
    description: "Quantidade necessária de OX Maxx",
    items: ["50 kg por m³/hora (teor Fe+Mn menor que 5 ppm)", "100 kg por m³/hora (teor Fe+Mn acima de 5 ppm)"],
  },
  {
    title: "Dimensionamento do Sistema",
    description: "Especificações mínimas requeridas",
    items: [
      "Crepinas com ranhuras inferiores a 0,30 mm",
      "Taxa de filtração: 10 a 20 m³/h/m²",
      "Taxa de retrolavagem: mínimo 15 a 20 m³/h/m²",
    ],
  },
  {
    title: "Qualidade da Água",
    description: "Parâmetros recomendados",
    items: [
      "pH acima de 6,5 (alcalino)",
      "Pré-oxidação com hipoclorito de sódio 12%: 0,2 a 2,0 ppm",
      "Pré-cloração se houver complexos orgânicos",
    ],
  },
  {
    title: "Granulometria",
    description: "Distribuição do meio filtrante",
    items: [
      "100% com granulometria de 0,5 a 1,2 mm",
      "Melhora significativamente a retrolavagem",
      "Otimiza performance de filtração",
    ],
  },
]

export default function TechnicalGuide() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">Guia Técnico de Aplicação</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Informações técnicas completas para instalação e operação do OX Maxx
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {technicalSpecs.map((spec) => (
            <Card key={spec.title} className="p-6 border-border/50">
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-accent shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">{spec.title}</h3>
                  <p className="text-sm text-muted-foreground">{spec.description}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {spec.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Important Note */}
        <Card className="p-6 border-accent/50 bg-accent/5">
          <div className="flex gap-4">
            <AlertCircle className="w-6 h-6 text-accent shrink-0" />
            <div className="space-y-3">
              <h4 className="font-semibold">Importante: Conformidade Regulatória</h4>
              <p className="text-sm text-muted-foreground">
                Para atender à legislação do Ministério da Saúde, é obrigatório o uso de pré-oxidação com hipoclorito de
                sódio 12% comercial na dosagem de 0,2 a 2,0 ppm. Águas que contenham complexos orgânicos de degradação
                biológica e/ou vegetal deverão ser previamente cloradas (pré-cloração).
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
