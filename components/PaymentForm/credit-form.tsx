// components/payment-methods/credit-card-form.tsx
"use client"

import * as React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"


const TOTAL_ORDER_PRICE = 85000.00 
const MAX_INSTALLMENTS = 12


const formatCurrency = (value: number) => {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}


const calculateInstallmentValue = (installments: number, total: number) => {
  return {
    total: total,
    value: total / installments,
  }
}


export function CreditCardForm({ onSubmit, isProcessing }: { onSubmit: () => void, isProcessing: boolean }) {
  const [formData, setFormData] = React.useState({
    number: '',
    name: '',
    expiry: '',
    cvc: '',
    installments: '1',
  })


  const installmentOptions = React.useMemo(() => {
    const options = []
    for (let i = 1; i <= MAX_INSTALLMENTS; i++) {
      const { total, value } = calculateInstallmentValue(i, TOTAL_ORDER_PRICE)
      
      let label = `${i}x de ${formatCurrency(value)}`
      
      if (i === 1) {
        label += ` (À Vista - ${formatCurrency(total)})`
      } else {

        label += ` (Total: ${formatCurrency(total)} sem juros)`
      }
      
      options.push({ value: String(i), label: label })
    }
    return options
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    if (name === 'number') {
      const formatted = value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim()
      setFormData(prev => ({ ...prev, [name]: formatted }))
      return
    }
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Detalhes do Cartão de Crédito</h3>
      <p className="text-sm text-muted-foreground">Valor Total da Compra: <strong className="text-accent">{formatCurrency(TOTAL_ORDER_PRICE)}</strong></p>

      <div className="grid gap-4">
        <Label htmlFor="card-number">Número do Cartão</Label>
        <Input
          id="card-number"
          name="number"
          type="text"
          placeholder="XXXX XXXX XXXX XXXX"
          value={formData.number}
          onChange={handleChange}
          maxLength={19}
          required
        />
        
        <Label htmlFor="card-name">Nome Impresso no Cartão</Label>
        <Input
          id="card-name"
          name="name"
          type="text"
          placeholder="NOME COMPLETO"
          value={formData.name}
          onChange={handleChange}
          required
        />
        
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <Label htmlFor="card-expiry">Validade (MM/AA)</Label>
            <Input
              id="card-expiry"
              name="expiry"
              type="text"
              placeholder="MM/AA"
              value={formData.expiry}
              onChange={handleChange}
              maxLength={5}
              required
            />
          </div>
          <div>
            <Label htmlFor="card-cvc">CVC</Label>
            <Input
              id="card-cvc"
              name="cvc"
              type="text"
              placeholder="CVC"
              value={formData.cvc}
              onChange={handleChange}
              maxLength={3}
              required
            />
          </div>
        </div>
        
        <div>
          <Label htmlFor="installments">Parcelamento (Em até 12x Sem Juros)</Label>
          <select
            id="installments"
            name="installments"
            value={formData.installments}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-border rounded-lg bg-input focus:outline-none focus:ring-2 focus:ring-accent text-foreground"
          >
            {installmentOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      <Button 
        type="button" 
        onClick={onSubmit} 
        disabled={isProcessing} 
        className="w-full bg-accent hover:bg-accent/90 text-white"
      >
        {isProcessing ? "Processando..." : "Pagar com Cartão"}
      </Button>
      <p className="text-xs text-muted-foreground text-center">Pagamento seguro, processado por gateway certificado.</p>
    </div>
  )
}