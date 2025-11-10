// components/payment-form.tsx
"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Check, ArrowLeft } from "lucide-react"
import { paymentOptions } from "./payment-data"



export default function PaymentForm() {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)

  const handlePaymentSubmit = () => {
    if (isCompleted) return

    setIsProcessing(true)
    // Simulação de processamento de pagamento
    setTimeout(() => {
      setIsProcessing(false)
      setIsCompleted(true)
      // Aqui você enviaria os dados ao backend
    }, 2500)
  }

  const SelectedComponent = paymentOptions.find(opt => opt.id === selectedMethod)?.component

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold">4. Escolha a Forma de Pagamento</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Selecione o método de pagamento ideal para sua empresa e finalize a compra.
          </p>
        </div>

        <Card className="p-6 border-border/50 space-y-8">
          {isCompleted ? (
            <div className="p-8 border-primary/50 bg-primary/5 text-center space-y-4">
              <Check className="w-12 h-12 text-primary mx-auto" />
              <h3 className="text-2xl font-bold text-primary">Pedido Finalizado com Sucesso!</h3>
              <p className="text-muted-foreground">
                Seu pedido foi registrado e o pagamento simulado como concluído. Um representante entrará em contato em breve para os detalhes de entrega.
              </p>
            </div>
          ) : (
            <>
              {selectedMethod && (
                <div className="flex items-center justify-between border-b pb-4">
                  <h3 className="text-xl font-semibold">
                    {paymentOptions.find(opt => opt.id === selectedMethod)?.label}
                  </h3>
                  <Button variant="ghost" size="sm" onClick={() => setSelectedMethod(null)}>
                    <ArrowLeft className="w-4 h-4 mr-1" />
                    Voltar
                  </Button>
                </div>
              )}

              {!selectedMethod ? (
                <RadioGroup
                  value={selectedMethod || undefined}
                  onValueChange={setSelectedMethod}
                  className="grid gap-4"
                >
                  {paymentOptions.map((option) => {
                    const Icon = option.icon
                    return (
                      <div 
                        key={option.id} 
                        onClick={() => setSelectedMethod(option.id)}
                        className="flex items-start space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
                      >
                        <RadioGroupItem value={option.id} id={option.id} className="mt-1" />
                        <Label htmlFor={option.id} className="flex flex-col items-start space-y-1 cursor-pointer w-full">
                          <div className="flex items-center gap-2">
                            <Icon className={`w-5 h-5 text-primary`} />
                            <span className="font-semibold text-base">{option.label}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{option.description}</p>
                        </Label>
                      </div>
                    )
                  })}
                </RadioGroup>
              ) : (
                <div className="py-2">
                  {SelectedComponent && <SelectedComponent onSubmit={handlePaymentSubmit} isProcessing={isProcessing} />}
                </div>
              )}
            </>
          )}
        </Card>
      </div>
    </section>
  )
}