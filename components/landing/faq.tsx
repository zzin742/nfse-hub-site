"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "O NFS-e Hub é seguro?",
    answer:
      "Sim. O NFS-e Hub roda 100% no seu computador. Nenhuma senha é salva, enviada ou compartilhada. O login no Portal Nacional é sempre feito manualmente por você, garantindo total controle e segurança das suas credenciais."
  },
  {
    question: "O robô faz login automático no Portal Nacional?",
    answer:
      "Não. Por segurança e conformidade, o login é feito manualmente por você (Gov.br ou Certificado Digital). Depois disso, o NFS-e Hub assume todo o trabalho repetitivo de baixar as notas, poupando horas do seu dia."
  },
  {
    question: "Funciona com certificado digital?",
    answer:
      "Sim. É compatível com login via Gov.br e Certificado Digital A1 ou A3. Basta acessar normalmente o Portal Nacional e deixar o robô trabalhar."
  },
  {
    question: "Ele baixa XML e PDF juntos?",
    answer:
      "Sim. O software baixa XML e PDF automaticamente. Você pode escolher baixar apenas XML, apenas PDF ou ambos. Tudo organizado em pastas, pronto para o fechamento mensal."
  },
  {
    question: "O robô identifica notas canceladas?",
    answer:
      "Sim. As notas canceladas são identificadas automaticamente e separadas em uma pasta própria, evitando erros e retrabalho na conferência."
  },
  {
    question: "Existe limite de downloads?",
    answer:
      "Não. A licença é vitalícia. Você pode baixar quantas notas quiser, de quantas empresas precisar, sem limite e sem mensalidade."
  },
  {
    question: "Funciona em quais versões do Windows?",
    answer:
      "Compatível com Windows 10 e Windows 11 (64 bits). Não é necessário servidor, nuvem ou configuração complexa."
  },
  {
    question: "Como recebo o software após a compra?",
    answer:
      "A entrega é imediata. Assim que o pagamento é confirmado, você recebe automaticamente por e-mail o link para download e sua chave de ativação."
  },
  {
    question: "E se eu não gostar do software?",
    answer:
      "Você tem 7 dias para testar sem risco. Se não economizar tempo no seu fechamento mensal, devolvemos 100% do seu dinheiro. Simples assim."
  }
]

export function FAQ() {
  return (
    <section id="faq" className="scroll-mt-20 py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          
          {/* Header */}
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl text-balance">
              Ainda está em dúvida?
            </h2>
            <p className="text-muted-foreground">
              Veja as respostas para as principais perguntas antes de comprar
            </p>
          </div>

          {/* FAQ */}
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`item-${index}`}
                className="border-border/50"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

        </div>
      </div>
    </section>
  )
}
