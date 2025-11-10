import { Menu, X, Moon, Sun } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Header({ isDark, setIsDark }: { isDark: boolean; setIsDark: (value: boolean) => void }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="border-b border-border/40 sticky top-0 z-50 bg-background/95 backdrop-blur upports-backdrop-filter:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src="/OXMAX_logo.png" alt="OX Maxx Logo" className="w-32 h-32 object-contain " />
            {/* <span className="font-bold text-xl hidden sm:inline">OX Maxx</span> */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Recursos
            </Link>
            <a href="/solucoes" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Soluções
            </a>
            <Link href="/compras" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Comprar
            </Link>
            <Link href="https://echowater.com.br/sobre-nos/" target="_blank" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Empresa
            </Link>
            <Link href="/contato" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contato
            </Link>
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Alternar tema"
            >
              {isDark ? <Sun className="w-5 h-5 cursor-pointer" /> : <Moon className="w-5 h-5 cursor-pointer" />}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-lg"
              aria-label="Alternar menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* CTA Button */}
            <Link href="/compras">
              <Button className="hidden sm:inline-flex bg-accent hover:bg-accent/90 text-white">Comprar</Button>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <a href="/#features" className="block px-4 py-2 rounded-lg hover:bg-muted transition-colors">
              Recursos
            </a>
            <a href="/solucoes" className="block px-4 py-2 rounded-lg hover:bg-muted transition-colors">
              Soluções
            </a>
            <Link href="/compras" className="block px-4 py-2 rounded-lg hover:bg-muted transition-colors">
              Comprar
            </Link>
            <a href="/#about" className="block px-4 py-2 rounded-lg hover:bg-muted transition-colors">
              Empresa
            </a>
            <a href="/#contact" className="block px-4 py-2 rounded-lg hover:bg-muted transition-colors">
              Contato
            </a>
            <Link href="/compras" className="block pt-2">
              <Button className="w-full bg-accent hover:bg-accent/90 text-white">Comprar</Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}