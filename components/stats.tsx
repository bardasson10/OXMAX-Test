"use client"

export default function Stats() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl lg:text-5xl font-bold">2.500+</p>
            <p className="text-primary-foreground/80 mt-2">Instalações Ativas</p>
          </div>
          <div>
            <p className="text-4xl lg:text-5xl font-bold">50M+</p>
            <p className="text-primary-foreground/80 mt-2">Litros Purificados</p>
          </div>
          <div>
            <p className="text-4xl lg:text-5xl font-bold">98%</p>
            <p className="text-primary-foreground/80 mt-2">Satisfação do Cliente</p>
          </div>
          <div>
            <p className="text-4xl lg:text-5xl font-bold">60K+</p>
            <p className="text-primary-foreground/80 mt-2">Toneladas de Resíduos Evitados</p>
          </div>
        </div>
      </div>
    </section>
  )
}
