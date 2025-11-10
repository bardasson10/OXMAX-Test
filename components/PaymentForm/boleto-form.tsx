// components/payment-methods/boleto-details.tsx
"use client"

import * as React from 'react'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Copy, Download, FileText } from "lucide-react"

export function BoletoForm({ onSubmit, isProcessing }: { onSubmit: () => void, isProcessing: boolean }) {
  const barcode = "34191.09008 43501.428588 56000.000000 1 93080000085000" // Mock Barcode
  const [copied, setCopied] = React.useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(barcode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold flex items-center gap-2">
        <FileText className="w-5 h-5 text-primary" />
        Boleto Bancário (À Vista)
      </h3>

      <p className="text-sm text-muted-foreground">
        O boleto foi gerado com sucesso. Para garantir a agilidade no processamento do seu pedido, efetue o pagamento em até 48 horas.
      </p>

      <Card className="p-6 bg-muted/50 border-border/50 space-y-4">
        <div className="space-y-2">
          <p className="text-sm font-medium">Linha Digitável (Código de Barras)</p>
          <div className="flex items-center gap-2">
            <code className="flex-1 text-sm font-mono truncate bg-background p-2 rounded-md border border-dashed">
              {barcode}
            </code>
            <Button size="icon-sm" variant="outline" onClick={handleCopy}>
              {copied ? <Check className="w-4 h-4 text-accent" /> : <Copy className="w-4 h-4" />}
            </Button>
          </div>
        </div>
        
        <div className="h-px bg-border" />
        
        <p className="text-sm font-medium">Valor Total</p>
        <p className="text-2xl font-bold text-accent">R$ 85.000,00</p> 
      </Card>

      <Button 
        type="button" 
        onClick={onSubmit} 
        disabled={isProcessing} 
        className="w-full bg-primary hover:bg-primary/90 text-white flex items-center gap-2"
      >
        <Download className="w-4 h-4" />
        {isProcessing ? "Finalizando..." : "Baixar Boleto em PDF"}
      </Button>
      <p className="text-xs text-muted-foreground text-center">Ao baixar o boleto, o pedido é automaticamente finalizado.</p>
    </div>
  )
}