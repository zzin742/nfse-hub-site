"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Monitor, Shield, Zap } from "lucide-react"

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
          <Badge variant="outline" className="mb-6 border-primary/50 bg-primary/10 text-primary">
            <Shield className="mr-2 h-3 w-3" />
            Compatível com o novo layout do Portal Nacional (2026)
          </Badge>
          
          {/* Headline */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
            Pare de baixar notas{" "}
            <span className="text-primary">uma por uma</span> manualmente
          </h1>
          
          {/* Subheadline */}
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl leading-relaxed">
            O NFS-e Hub automatiza o download de XML e PDF direto do Portal Nacional e{" "}
            <span className="text-foreground font-medium">economiza horas</span> no seu fechamento mensal.
          </p>
          
          {/* CTA Button */}
          <div className="mb-6">
            <Button size="lg" className="h-14 px-8 text-lg font-semibold" onClick={scrollToPlanos}>
              <Download className="mr-2 h-5 w-5" />
              Quero o robô no meu computador
            </Button>
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
