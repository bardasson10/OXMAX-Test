"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CTA() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-accent/10 to-primary/10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold">Pronto para modernizar sua água?</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Junte-se a milhares de empresas usando OX Maxx para filtração de água pura e confiável. Faça sua compra
            agora com nossa calculadora inteligente de dosagem.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/compras">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white w-full sm:w-auto">
              Comprar Agora
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/5 bg-transparent">
            Falar com Vendas
          </Button>
        </div>

        <p className="text-sm text-muted-foreground">
          Calcule sua dosagem exata na página de compras. Entrega rápida e segura.
        </p>
      </div>
    </section>
  )
}
