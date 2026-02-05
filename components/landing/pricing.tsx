import { Check, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const plans = [
  {
    name: "Individual",
    licenses: 1,
    price: 99,
    featured: false,
    checkoutUrl: "https://pay.kirvano.com/4c019d63-13d4-45ec-9d71-795ab5b9a526"
  },
  {
    name: "Escritório Small",
    licenses: 3,
    price: 249,
    originalPrice: 297,
    featured: false,
    checkoutUrl: "https://pay.kirvano.com/bb91bfa3-2877-48f9-bfcf-b9389dd9a3b1"
  },
  {
    name: "Escritório Pro",
    licenses: 5,
    price: 379,
    originalPrice: 495,
    featured: true,
    checkoutUrl: "https://pay.kirvano.com/ac04d160-79d7-4070-8b85-f51bb65d1bc9"
  },
  {
    name: "Corporativo",
    licenses: 10,
    price: 500,
    originalPrice: 990,
    featured: false,
    checkoutUrl: "https://pay.kirvano.com/67de4383-8119-4c16-8e5b-6941f2e56db0"
  }
]

const features = [
  "Licença vitalícia",
  "Atualizações incluídas",
  "Sem mensalidade",
  "Ativação simples por chave"
]

export function Pricing() {
  return (
    <section id="planos" className="scroll-mt-20 py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl text-balance">
            Escolha seu plano
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Investimento único, sem mensalidades. Economize tempo todos os meses.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative flex flex-col ${
                plan.featured
                  ? "border-primary bg-card shadow-lg shadow-primary/10"
                  : "border-border/50 bg-card/50"
              }`}
            >
              {plan.featured && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                  <Star className="mr-1 h-3 w-3" />
                  Mais popular
                </Badge>
              )}

              <CardHeader className="pb-4">
                <h3 className="text-lg font-semibold text-foreground">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {plan.licenses}{" "}
                  {plan.licenses === 1 ? "licença" : "licenças"}
                </p>
              </CardHeader>

              <CardContent className="flex-1 pb-4">
                <div className="mb-4">
                  {plan.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      R$ {plan.originalPrice}
                    </span>
                  )}
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm text-muted-foreground">R$</span>
                    <span className="text-4xl font-bold text-foreground">
                      {plan.price}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    pagamento único
                  </span>
                </div>

                <ul className="space-y-2">
                  {features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  asChild
                  className="w-full"
                  variant={plan.featured ? "default" : "outline"}
                >
                  <a
                    href={plan.checkoutUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Comprar agora
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
