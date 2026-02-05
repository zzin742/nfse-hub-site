import { ShieldCheck } from "lucide-react"

export function Guarantee() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-primary/5 p-8 md:p-12">
            {/* Background decoration */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
            
            <div className="relative flex flex-col items-center text-center">
              {/* Shield icon */}
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <ShieldCheck className="h-10 w-10 text-primary" />
              </div>
              
              {/* Title */}
              <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
                Garantia incondicional de 7 dias
              </h2>
              
              {/* Description */}
              <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
                Se não for exatamente o que você esperava,{" "}
                <span className="font-semibold text-foreground">devolvemos 100% do seu dinheiro</span>.
                Sem perguntas, sem burocracia. Você não tem nada a perder.
              </p>
              
              {/* Trust indicators */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Reembolso em até 48h</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Sem perguntas</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>100% do valor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
