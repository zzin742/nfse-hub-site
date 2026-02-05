import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { VideoDemo } from "@/components/landing/video-demo"
import { Benefits } from "@/components/landing/benefits"
import { TargetAudience } from "@/components/landing/target-audience"
import { Pricing } from "@/components/landing/pricing"
import { Guarantee } from "@/components/landing/guarantee"
import { FAQ } from "@/components/landing/faq"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <VideoDemo />
        <section id="beneficios">
          <Benefits />
        </section>
        <TargetAudience />
        <section id="precos">
          <Pricing />
        </section>
        <Guarantee />
        <section id="faq">
          <FAQ />
        </section>
      </main>
      <Footer />
    </div>
  )
}
