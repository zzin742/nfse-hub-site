"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Monitor, Shield, Zap, CheckCircle } from "lucide-react"

const scrollToPlanos = () => {
  document.getElementById("planos")?.scrollIntoView({ behavior: "smooth" })
}

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <Badge
            variant="outline"
            className="mb-6 border-primary/50 bg-primary/10 text-primary"
          >
            <Shield className="mr-2 h-3 w-3" />
            Compatível com o Portal Nacional (layout 2026)
          </Badge>

          {/* Headline */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
            Pare de perder horas baixando{" "}
            <span className="text-primary">NFS-e no Portal Nacional</span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl leading-relaxed">
            Automatize o download de <strong>XML e PDF</strong> para seus clientes.
            Ideal para <strong>contadores e escritórios contábeis</strong> que
            querem fechar o mês mais rápido.
          </p>

          {/* CTA Button */}
          <div className="mb-6">
            <Button
              size="lg"
              className="h-14 px-8 text-lg font-semibold"
              onClick={scrollToPlanos}
            >
              <Download className="mr-2 h-5 w-5" />
              Automatizar meu download de NFS-e
            </Button>
          </div>

          {/* Proof bullets */}
          <div className="mb-8 flex flex-col items-center gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Funciona diretamente no Portal Nacional</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Baixa XML e PDF automaticamente</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Notas canceladas são separadas automaticamente</span>
            </div>
          </div>

          {/* Info badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Monitor className="h-4 w-4 text-primary" />
              <span>Windows 10 / 11</span>
            </div>
            <div className="hidden md:block h-4 w-px bg-border" />
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-primary" />
              <span>Download imediato</span>
            </div>
            <div className="hidden md:block h-4 w-px bg-border" />
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" />
              <span>Licença vitalícia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
