"use client"

import Layout from "@/components/Layout/layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react"
import React, { useState } from "react"

// Informações de Contato da OX Maxx
const contactInfo = [
  {
    icon: Mail,
    title: "Vendas",
    detail: "vendas@oxmaxx.com.br",
    link: "mailto:vendas@oxmaxx.com.br"
  },
  {
    icon: MessageCircle,
    title: "Suporte Técnico",
    detail: "suporte@oxmaxx.com.br",
    link: "mailto:suporte@oxmaxx.com.br"
  },
  {
    icon: Phone,
    title: "Telefone",
    detail: "(11) 3000-0000",
    link: "tel:+551130000000"
  },
  {
    icon: MapPin,
    title: "Localização",
    detail: "São Paulo, Brasil",
    link: "#map"
  },
]

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "Orçamento Geral",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    console.log("Formulário de Contato Enviado:", formData)
  }

  return (
    <>
      {/* Hero Simples para Título */}
      <section className="pt-20 pb-10 bg-muted/20" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-2">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary">Fale Conosco</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para atender sua empresa com excelência e rapidez.
          </p>
        </div>
      </section >

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Main Content: Bloco Único de Contato */}
          <div className="bg-card shadow-2xl dark:shadow-none rounded-2xl overflow-hidden lg:grid lg:grid-cols-5 border">

            {/* Lado Esquerdo: Informações de Contato (2/5 da largura) */}
            <div className="bg-primary/90 text-primary-foreground p-8 md:p-12 lg:col-span-2 flex flex-col justify-between">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Entre em Contato</h2>
                <p className="text-lg opacity-90">
                  Nosso time de especialistas está à disposição para responder suas dúvidas sobre produtos, aplicação e orçamentos.
                </p>

                {/* Lista de Contato */}
                <div className="space-y-6 pt-4">
                  {contactInfo.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <div key={index} className="flex items-start gap-4">
                        <Icon className="w-6 h-6 text-accent shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-lg">{item.title}</h4>
                          <a href={item.link} className="text-sm opacity-90 underline hover:opacity-100 transition-opacity">
                            {item.detail}
                          </a>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Lado Direito: Formulário de Contato Principal (3/5 da largura) */}
            <div className="p-8 md:p-12 lg:col-span-3">
              <h3 className="text-2xl font-bold mb-8 text-center lg:text-left">Envie uma Mensagem Rápida</h3>
              <form onSubmit={handleSubmit} className="space-y-4">

                {/* Nome e Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nome Completo *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg bg-input border border-border focus:outline-none focus:ring-2 focus:ring-accent text-foreground"
                      placeholder="Nome"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg bg-input border border-border focus:outline-none focus:ring-2 focus:ring-accent text-foreground"
                      placeholder="seu.email@empresa.com"
                    />
                  </div>
                </div>

                {/* Empresa e Telefone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Empresa *</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg bg-input border border-border focus:outline-none focus:ring-2 focus:ring-accent text-foreground"
                      placeholder="Sua Empresa Ltda"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Telefone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg bg-input border border-border focus:outline-none focus:ring-2 focus:ring-accent text-foreground"
                      placeholder="(11) 9999-9999"
                    />
                  </div>
                </div>

                {/* Assunto */}
                <div>
                  <label className="block text-sm font-medium mb-2">Assunto</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-input border border-border focus:outline-none focus:ring-2 focus:ring-accent text-foreground"
                  >
                    <option>Orçamento Geral</option>
                    <option>Dúvida Técnica / Suporte</option>
                    <option>Detalhes sobre Entrega</option>
                    <option>Parceria Comercial</option>
                    <option>Outros</option>
                  </select>
                </div>

                {/* Mensagem */}
                <div>
                  <label className="block text-sm font-medium mb-2">Mensagem *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-input border border-border focus:outline-none focus:ring-2 focus:ring-accent text-foreground resize-none"
                    placeholder="Detalhe sua solicitação aqui..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-white flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  {submitted ? 'Enviado!' : 'Enviar Mensagem'}
                </Button>

                {submitted && (
                  <div className="p-4 bg-accent/10 border border-accent rounded-lg text-sm text-accent">
                    ✓ Obrigado! Sua mensagem foi enviada com sucesso.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Mapa Mock */}
      <section id="map" className="py-16 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Onde Estamos Localizados</h2>
          <Card className="h-96 w-full overflow-hidden flex flex-col items-center justify-center bg-muted/50 text-muted-foreground p-4">


            [Image of mapa de São Paulo, Brasil]

            <p className="mt-4 text-lg">Localização: Escritório Central em São Paulo, Brasil</p>
            <p className="text-sm">Enviamos para todo o território nacional.</p>
          </Card>
        </div>
      </section>
    </>
  )
}