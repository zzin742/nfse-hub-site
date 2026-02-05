import { Calculator, Building2, Factory, CalendarCheck } from "lucide-react"

const audiences = [
  {
    icon: Calculator,
    title: "Contadores",
    description: "Profissionais que gerenciam notas fiscais de múltiplos clientes mensalmente."
  },
  {
    icon: Building2,
    title: "Escritórios contábeis",
    description: "Equipes que precisam de agilidade no processamento de documentos fiscais."
  },
  {
    icon: Factory,
    title: "Empresas com muitas NFS-e",
    description: "Negócios que emitem ou recebem grande volume de notas fiscais de serviço."
  },
  {
    icon: CalendarCheck,
    title: "Profissionais de fechamento",
    description: "Quem precisa consolidar documentos fiscais para fechamento mensal."
  }
]

export function TargetAudience() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          {/* Section header */}
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl text-balance">
              Para quem é o NFS-e Hub?
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Se você passa horas baixando notas fiscais manualmente, esse software é para você
            </p>
          </div>
          
          {/* Audience grid */}
          <div className="grid gap-8 md:grid-cols-2">
            {audiences.map((audience) => (
              <div 
                key={audience.title}
                className="flex gap-4 rounded-xl border border-border/50 bg-card/30 p-6 transition-colors hover:border-primary/30"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <audience.icon className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {audience.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {audience.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
