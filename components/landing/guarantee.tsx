import { ShieldCheck } from "lucide-react"

export function Guarantee() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-primary/5 p-8 md:p-12">
            
            {/* Glow decorativo */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

            <div className="relative flex flex-col items-center text-center">
              
              {/* Ícone */}
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <ShieldCheck className="h-10 w-10 text-primary" />
              </div>

              {/* Título */}
              <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
                Teste sem risco por 7 dias
              </h2>

              {/* Texto principal */}
              <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
                Use o <strong>NFS-e Hub</strong> no seu dia a dia por até{" "}
                <strong>7 dias</strong>.  
                Se não economizar tempo no seu fechamento mensal,{" "}
                <span className="font-semibold text-foreground">
                  devolvemos 100% do seu dinheiro
                </span>.
              </p>

              {/* Frase de impacto */}
              <p className="mt-4 text-base font-medium text-foreground">
                Você não corre nenhum risco. O risco é continuar perdendo horas
                todo mês.
              </p>

              {/* Selos de confiança */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Reembolso rápido</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Sem perguntas</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>100% do valor devolvido</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
