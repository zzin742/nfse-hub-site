import Link from "next/link"
import { FileText } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-secondary/20 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <FileText className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-semibold text-foreground">NFS-e Hub</span>
          </div>
          
          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link 
              href="/termos" 
              className="transition-colors hover:text-foreground"
            >
              Termos de Uso
            </Link>
            <span className="text-border">•</span>
            <Link 
              href="/privacidade" 
              className="transition-colors hover:text-foreground"
            >
              Política de Privacidade
            </Link>
          </div>
          
          {/* Disclaimer */}
          <p className="max-w-md text-center text-xs text-muted-foreground/70">
            Este software não possui vínculo com o governo ou Portal Nacional.
            Trata-se de uma ferramenta independente de automação.
          </p>
          
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2026 NFS-e Hub — Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  )
}
