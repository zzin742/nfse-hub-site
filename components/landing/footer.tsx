"use client"

import Link from "next/link"
import { FileText, Download, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

const scrollToPlanos = () => {
  document.getElementById("planos")?.scrollIntoView({ behavior: "smooth" })
}

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-secondary/30 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center flex flex-col items-center gap-8">

          {/* LOGO */}
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <FileText className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">
              NFS-e Hub
            </span>
          </div>

          {/* CTA FINAL */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground md:text-3xl">
              Pare de perder tempo no Portal Nacional
            </h3>

            <p className="text-muted-foreground text-lg">
              Se você é contador ou tem escritório contábil, o NFS-e Hub
              automatiza o download de XML e PDF e{" "}
              <span className="text-foreground font-semibold">
                economiza horas todo mês.
              </span>
            </p>
          </div>

          {/* BOTÃO FINAL */}
          <Button
            size="lg"
            className="h-14 px-10 text-lg font-semibold"
            onClick={scrollToPlanos}
          >
            <Download className="mr-2 h-5 w-5" />
            Quero automatizar agora
          </Button>

          {/* GARANTIA */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-primary" />
            <span>
              7 dias de garantia • Licença vitalícia • Download imediato
            </span>
          </div>

          {/* LINKS LEGAIS */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground mt-6">
            <Link href="/termos" className="hover:text-foreground">
              Termos de Uso
            </Link>
            <span className="text-border">•</span>
            <Link href="/privacidade" className="hover:text-foreground">
              Política de Privacidade
            </Link>
          </div>

          {/* DISCLAIMER */}
          <p className="max-w-md text-center text-xs text-muted-foreground/70">
            Este software não possui vínculo com o governo ou com o Portal
            Nacional. Trata-se de uma ferramenta independente de automação.
          </p>

          {/* COPYRIGHT */}
          <p className="text-sm text-muted-foreground">
            © 2026 NFS-e Hub — Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  )
}
