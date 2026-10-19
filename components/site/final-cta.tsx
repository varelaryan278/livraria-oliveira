import { OliveBranch } from "@/components/icons"
import { WhatsAppButton } from "./whatsapp-button"

export const FinalCta = () => (
  <section className="px-4 py-20 md:py-28">
    <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-primary px-6 py-16 text-center text-primary-foreground sm:px-12">
      <OliveBranch className="absolute -bottom-10 -left-10 size-56 text-white/10" />
      <OliveBranch className="absolute -top-10 -right-10 size-56 rotate-180 text-white/10" />
      <h2 className="relative mx-auto max-w-2xl text-4xl leading-tight font-semibold sm:text-5xl">
        Procurando um livro específico ou um presente que edifica?
      </h2>
      <p className="relative mx-auto mt-4 max-w-xl text-primary-foreground/80">
        Conte o que você precisa. A gente encontra, separa e envia para você.
      </p>
      <WhatsAppButton variant="gold" message="Olá! Estou procurando um livro e preciso de ajuda." className="relative mt-8">
        Falar com a livraria
      </WhatsAppButton>
    </div>
  </section>
)
