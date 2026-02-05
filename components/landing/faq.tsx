"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "O software é seguro?",
    answer: "Sim, o NFS-e Hub é 100% seguro. Ele funciona localmente no seu computador e não armazena ou transmite suas credenciais para servidores externos. Todo o processo de login é feito manualmente por você, mantendo total controle sobre suas informações."
  },
  {
    question: "Ele faz login automático?",
    answer: "Não. Por questões de segurança e conformidade, o login no Portal Nacional é feito manualmente por você, usando suas credenciais do Gov.br ou Certificado Digital. Após o login, o robô assume o trabalho repetitivo de download das notas."
  },
  {
    question: "Funciona com certificado digital?",
    answer: "Sim! O NFS-e Hub é compatível tanto com login via Gov.br quanto com Certificado Digital A1 ou A3. Basta fazer seu login normalmente e o software cuida do resto."
  },
  {
    question: "Baixa XML e PDF?",
    answer: "Sim, o software baixa ambos os formatos simultaneamente. Você pode escolher baixar apenas XML, apenas PDF, ou ambos de uma vez. Os arquivos são organizados automaticamente em pastas separadas."
  },
  {
    question: "Funciona para notas canceladas?",
    answer: "Sim! O NFS-e Hub identifica automaticamente as notas canceladas e as separa em uma pasta específica, facilitando sua organização e evitando confusões no fechamento."
  },
  {
    question: "Existe limite de downloads?",
    answer: "Não existe limite de downloads. Sua licença é vitalícia e você pode baixar quantas notas precisar, quando precisar, sem restrições ou cobranças adicionais."
  },
  {
    question: "Funciona em qual Windows?",
    answer: "O NFS-e Hub é compatível com Windows 10 e Windows 11, nas versões 64-bit. Recomendamos manter o sistema operacional atualizado para melhor desempenho."
  },
  {
    question: "Como recebo o software após a compra?",
    answer: "Imediatamente após a confirmação do pagamento, você receberá um e-mail com o link para download do software e sua chave de ativação. O processo é instantâneo e automático."
  }
]

export function FAQ() {
  return (
    <section id="faq" className="scroll-mt-20 py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          {/* Section header */}
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl text-balance">
              Dúvidas frequentes
            </h2>
            <p className="text-muted-foreground">
              Encontre respostas para as perguntas mais comuns sobre o NFS-e Hub
            </p>
          </div>
          
          {/* FAQ Accordion */}
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
