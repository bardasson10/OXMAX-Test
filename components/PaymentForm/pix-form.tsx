// components/payment-methods/pix-details.tsx
"use client"

import * as React from 'react'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Copy, QrCode, Check } from "lucide-react"

// URL simulada de QR Code. Em um ambiente real, seria a URL de uma API.
const MOCK_QR_CODE_URL = "https://via.placeholder.com/150/19aef3/FFFFFF?Text=QR+Code+PIX" 

export function PixForm({ onSubmit, isProcessing }: { onSubmit: () => void, isProcessing: boolean }) {
  const pixCode = "00020126330014BR.GOV.BCB.PIX0111+5511987654321520400005303986540400005802BR5913CLIENTE OXMAXX6008SAOPAULO62070503***630460A7" // Mock PIX Code
  const [copied, setCopied] = React.useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(pixCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold flex items-center gap-2">
        <QrCode className="w-5 h-5 text-primary" />
        PIX - Pagamento Instantâneo
      </h3>

      <p className="text-sm text-muted-foreground">
        Use o QR Code ou a Chave Copia e Cola no aplicativo do seu banco para pagamento imediato.
      </p>

      <Card className="p-6 bg-muted/50 border-border/50 space-y-4 text-center">
        <div className="flex justify-center">
            <img 
              src={MOCK_QR_CODE_URL} 
              alt="QR Code PIX Simulado" 
              className="w-40 h-40 border rounded-lg"
            />
        </div>

        <div className="h-px bg-border" />

        <div className="space-y-2 text-left">
            <p className="text-sm font-medium">Chave Copia e Cola</p>
            <div className="flex items-center gap-2">
              <code className="flex-1 text-sm font-mono truncate bg-background p-2 rounded-md border border-dashed">
                {pixCode}
              </code>
              <Button size="icon-sm" variant="outline" onClick={handleCopy}>
                {copied ? <Check className="w-4 h-4 text-accent" /> : <Copy className="w-4 h-4" />}
              </Button>
            </div>
        </div>
      </Card>

      <Button 
        type="button" 
        onClick={onSubmit} 
        disabled={isProcessing} 
        className="w-full bg-accent hover:bg-accent/90 text-white"
      >
        {isProcessing ? "Confirmando Pagamento..." : "Confirmar Pagamento Realizado"}
      </Button>
      <p className="text-xs text-muted-foreground text-center">A confirmação é automática, mas este botão pode ser usado para acelerar o processo após o pagamento.</p>
    </div>
  )
}