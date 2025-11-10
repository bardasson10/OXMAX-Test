"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import STEPS from "@/components/StepIndicator/steps"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import StepIndicator from "@/components/StepIndicator/step-indicator"

export default function Compras() {
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = STEPS.length
  const CurrentStepComponent = STEPS.find(step => step.id === currentStep)?.component

  return (

    <main>
      {/* O Indicador de Etapas é renderizado em uma seção separada para espaçamento consistente */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StepIndicator
            currentStep={currentStep}
            totalSteps={totalSteps}
            titles={STEPS.map(s => s.title)}
          />
        </div>
      </section>

      {/* Renderiza o Componente da Etapa Atual */}
      {CurrentStepComponent && <CurrentStepComponent />}

      {/* Botões de Navegação */}
      <section className="py-12 bg-background border-t border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between">
          <Button
            variant="outline"
            onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
            disabled={currentStep === 1}
            className={`w-32 transition-opacity ${currentStep === 1 ? 'opacity-0 pointer-events-none' : ''}`}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Anterior
          </Button>

          {currentStep < totalSteps ? (
            <Button
              onClick={() => setCurrentStep(prev => prev + 1)}
              className="bg-accent hover:bg-accent/90 text-white w-32"
            >
              Próximo
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            // Na última etapa (4 - Pagamento), o botão "Próximo" desaparece.
            // O botão de Ação da última etapa está dentro do componente PaymentForm.
            <div className="w-32" />
          )}
        </div>
      </section>
    </main>
  )
}
