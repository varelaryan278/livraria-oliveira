import { ImageSlot } from "@/components/image-slot"
import { WhatsAppButton } from "./whatsapp-button"

export const Hero = () => (
  <section id="inicio" className="relative overflow-hidden">
    <div className="absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(ellipse_at_top_left,var(--accent),transparent_60%)]" />
    <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:grid-cols-[1.05fr_1fr] md:py-24">
      <div>
        <p className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          <span className="h-px w-8 bg-gold" />
          Livraria cristã
        </p>
        <h1 className="text-5xl leading-[1.02] font-semibold text-olive-deep sm:text-6xl lg:text-7xl">
          A Palavra que <em className="font-medium text-primary">sustenta</em>, nas páginas que você precisa.
        </h1>
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
          Bíblias, devocionais e literatura cristã escolhidos com critério e fidelidade às Escrituras. Você fala com
          gente de verdade e recebe em qualquer lugar do Brasil.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <WhatsAppButton message="Olá! Quero ajuda para escolher um livro.">Quero ajuda para escolher</WhatsAppButton>
          <a
            href="#destaques"
            className="inline-flex h-12 items-center justify-center rounded-full border border-primary/30 px-6 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
          >
            Ver destaques
          </a>
        </div>
        <p className="mt-8 font-heading text-lg italic text-muted-foreground">
          “Lâmpada para os meus pés é a tua palavra.” <span className="not-italic text-sm">— Salmos 119:105</span>
        </p>
      </div>

      <div className="relative">
        <div className="absolute -inset-4 -z-10 rotate-2 rounded-[2rem] bg-secondary" />
        <ImageSlot
          id="hero"
          alt="Bíblia aberta sobre mesa de madeira com ramo de oliveira e luz natural"
          className="aspect-[4/5] rounded-[1.75rem] shadow-2xl shadow-olive-deep/15"
          sizes="(min-width: 768px) 50vw, 100vw"
          priority
        />
        <div className="absolute -bottom-6 -left-4 rounded-2xl border bg-card px-5 py-4 shadow-xl sm:-left-8">
          <p className="font-heading text-3xl font-semibold text-primary">Todo o Brasil</p>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">envio com cuidado</p>
        </div>
      </div>
    </div>
  </section>
)
