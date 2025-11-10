"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Minus } from "lucide-react"

export default function ProductCalculator() {
  const [flowRate, setFlowRate] = useState(10)
  const [ironManganese, setIronManganese] = useState("low") // low: <5ppm, high: >5ppm
  const [quantity, setQuantity] = useState(1)

  // Calculate required kg based on flow rate (m³/hour)
  const kgPerHour = ironManganese === "low" ? 50 : 100
  const requiredKg = flowRate * kgPerHour
  const totalPrice = requiredKg * 20 // R$ 85 por kg

  return (
    <section className="py-20 bg-accent/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">Calculador de Dosagem</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Calcule a quantidade exata de OX Maxx necessária para seu sistema
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calculator */}
          <Card className="p-8 border-border/50">
            <div className="space-y-8">
              {/* Flow Rate Input */}
              <div className="space-y-4">
                <label className="block text-sm font-semibold">Vazão de Água (m³/hora)</label>
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setFlowRate(Math.max(1, flowRate - 1))}
                    className="border-accent text-accent hover:bg-accent/10"
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <input
                    type="number"
                    value={flowRate}
                    onChange={(e) => setFlowRate(Math.max(1, Number.parseInt(e.target.value) || 1))}
                    className="flex-1 px-4 py-2 border border-border rounded-lg bg-background text-foreground text-center text-lg font-semibold"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setFlowRate(flowRate + 1)}
                    className="border-accent text-accent hover:bg-accent/10"
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">Recomendação: Taxa de filtração 10-20 m³/h/m²</p>
              </div>

              {/* Iron & Manganese Level */}
              <div className="space-y-4">
                <label className="block text-sm font-semibold">Teor de Ferro + Manganês</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 p-3 border border-border rounded-lg cursor-pointer hover:bg-accent/5 transition">
                    <input
                      type="radio"
                      name="level"
                      value="low"
                      checked={ironManganese === "low"}
                      onChange={() => setIronManganese("low")}
                      className="w-4 h-4"
                    />
                    <span className="text-sm">
                      Baixo (Menor que 5 ppm) - <strong>50 kg por m³/hora</strong>
                    </span>
                  </label>
                  <label className="flex items-center gap-3 p-3 border border-border rounded-lg cursor-pointer hover:bg-accent/5 transition">
                    <input
                      type="radio"
                      name="level"
                      value="high"
                      checked={ironManganese === "high"}
                      onChange={() => setIronManganese("high")}
                      className="w-4 h-4"
                    />
                    <span className="text-sm">
                      Alto (Acima de 5 ppm) - <strong>100 kg por m³/hora</strong>
                    </span>
                  </label>
                </div>
              </div>

              {/* Quantity */}
              <div className="space-y-4">
                <label className="block text-sm font-semibold">Unidades a Comprar</label>
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="border-accent text-accent hover:bg-accent/10"
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, Number.parseInt(e.target.value) || 1))}
                    className="flex-1 px-4 py-2 border border-border rounded-lg bg-background text-foreground text-center text-lg font-semibold"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                    className="border-accent text-accent hover:bg-accent/10"
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Summary */}
          <div className="space-y-6">
            <Card className="p-8 border-accent/30 bg-accent/5">
              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Quantidade Necessária</p>
                  <p className="text-4xl font-bold text-accent">{(requiredKg * quantity).toLocaleString("pt-BR")} kg</p>
                  <p className="text-sm text-muted-foreground">
                    ou {((requiredKg * quantity) / 1000).toFixed(2)} toneladas
                  </p>
                </div>

                <div className="h-px bg-border/50" />

                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Preço por kg</p>
                  <p className="text-2xl font-semibold">R$ 20,00</p>
                </div>

                <div className="h-px bg-border/50" />

                <div className="bg-background/50 rounded-lg p-4 space-y-2">
                  <p className="text-sm text-muted-foreground">Total</p>
                  <p className="text-3xl pad font-bold text-accent">
                    {(totalPrice * quantity).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                  </p>
                </div>

                <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-white">
                  Adicionar ao Carrinho
                </Button>
              </div>
            </Card>

            {/* Specifications */}
            <Card className="p-6 border-border/50">
              <h4 className="font-semibold mb-4">Especificações de Aplicação</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-accent font-semibold min-w-fit">Granulometria:</span>
                  <span>100% entre 0,5 a 1,2 mm</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-semibold min-w-fit">Retrolavagem:</span>
                  <span>Mínimo 15-20 m³/h/m²</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-semibold min-w-fit">pH Ideal:</span>
                  <span>Acima de 6,5</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-semibold min-w-fit">Crepinas:</span>
                  <span>Menor que 0,30 mm</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
