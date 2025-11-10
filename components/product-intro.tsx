"use client"

import { Check } from "lucide-react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import TechnicalGuide from "@/components/technical-guide" // Componente de guia técnico existente
import Specifications from "@/components/specifications" // Componente de especificações existente
import Image from "next/image"

/**
 * Componente da primeira etapa do fluxo de compra.
 * Exibe a visão geral do produto com um Acordião para Especificações.
 */
export default function ProductIntro() {

  return (
    <section className="py-1 md:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Container principal: Centraliza todos os blocos verticais */}
        <div className="flex flex-col gap-8 lg:gap-12 items-center">


          {/* Wrapper para o Conteúdo (Texto e Especificações) */}
          {/* max-w-3xl w-full garante que o texto e o accordion fiquem centralizados e contidos */}
          <div className="max-w-3xl w-full">

            {/* Bloco de Conteúdo Principal */}
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-accent/10 rounded-full">
                  <span className="text-sm font-semibold text-accent">Etapa 1: Visão Geral</span>
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold leading-tight text-pretty">
                  OX Maxx: Água Purificada por 8 Anos
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  OX Maxx é a solução empresarial definitiva para filtração de água, projetada para alta performance e confiabilidade. Nossa tecnologia avançada garante purificação de 99,9% sem a necessidade de manutenção por 8 anos completos.
                </p>
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
              {/* Imagem do Produto (agora no topo e centralizada na largura) */}
              {/* O w-full garante que ele se expanda até a largura máxima permitida no mobile */}
              <div className="w-full max-w-5xl relative h-72 md:h-96">
                <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-accent/20 rounded-4xl" />
                <Image
                  src="/produto_OXMAXX.svg"
                  alt="Sistema de Filtração de Água OX Maxx"
                  // Usando object-contain e centralizando a imagem no container
                  fill
                  sizes="(max-width: 1080px) 100vw, 50vw"
                  className="w-full rounded-4xl p-4 md:p-4 mx-auto"
                />
              </div>
            </div>

            {/* Accordion para Especificações Técnicas (Mobile Friendly) */}
            <div className="pt-4 ">
              <Accordion type="single" collapsible className="w-full ">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="cursor-pointer">
                    <span className="font-semibold text-primary hover:text-primary/90">Ver Detalhes Técnicos e Especificações</span>
                  </AccordionTrigger>
                  <AccordionContent className="p-0">
                    <div className="space-y-8">
                      {/* Reutilizando componentes de conteúdo estático dentro do Accordion */}
                      <Specifications />
                      <TechnicalGuide />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}