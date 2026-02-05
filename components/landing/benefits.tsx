import { 
  Download, 
  Calendar, 
  FileText, 
  FolderX, 
  KeyRound, 
  Sparkles 
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const benefits = [
  {
    icon: Download,
    title: "Download em lote de NFS-e",
    description: "Baixe centenas de notas fiscais de uma só vez, sem precisar clicar uma por uma."
  },
  {
    icon: Calendar,
    title: "Filtro por data",
    description: "Selecione o período desejado e baixe apenas as notas do intervalo escolhido."
  },
  {
    icon: FileText,
    title: "Download de XML e PDF juntos",
    description: "Obtenha os dois formatos simultaneamente, organizados e prontos para uso."
  },
  {
    icon: FolderX,
    title: "Separação automática de canceladas",
    description: "Notas canceladas são automaticamente identificadas e separadas em pasta própria."
  },
  {
    icon: KeyRound,
    title: "Funciona com login manual",
    description: "Compatível com Gov.br e Certificado Digital. Você faz o login, o robô faz o resto."
  },
  {
    icon: Sparkles,
    title: "Fácil de usar",
    description: "Interface simples e intuitiva. Sem configurações complexas ou conhecimento técnico."
  }
]

export function Benefits() {
  return (
    <section id="beneficios" className="scroll-mt-20 py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl text-balance">
            Funcionalidades que economizam seu tempo
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            O NFS-e Hub foi desenvolvido pensando nas necessidades reais de contadores e escritórios contábeis
          </p>
        </div>
        
        {/* Benefits grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <Card 
              key={benefit.title} 
              className="border-border/50 bg-card/50 backdrop-blur transition-colors hover:border-primary/50"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
