import { formatPrice, products } from "@/lib/catalog"
import { ImageSlot } from "@/components/image-slot"
import { SectionHeading } from "./section-heading"
import { WhatsAppButton } from "./whatsapp-button"

export const Products = () => (
  <section id="destaques" className="scroll-mt-28 bg-parchment py-20 md:py-28">
    <div className="mx-auto max-w-6xl px-4">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading eyebrow="Destaques" title="Os mais pedidos da livraria" />
        <WhatsAppButton variant="outline" message="Olá! Quero ver o catálogo completo.">
          Pedir catálogo completo
        </WhatsAppButton>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4">
        {products.map((p) => (
          <article key={p.id} className="group flex flex-col">
            <div className="relative">
              <ImageSlot
                id={p.id}
                alt={`${p.title} — ${p.author}`}
                className="aspect-[3/4] rounded-xl shadow-md shadow-olive-deep/10 transition-transform duration-300 group-hover:-translate-y-1"
                sizes="(min-width: 1024px) 25vw, 50vw"
              />
              {p.badge && (
                <span className="absolute top-3 left-3 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-olive-deep">
                  {p.badge}
                </span>
              )}
            </div>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-widest text-primary">{p.category}</p>
            <h3 className="mt-1 text-xl leading-snug font-semibold text-olive-deep">{p.title}</h3>
            <p className="text-sm text-muted-foreground">{p.author}</p>
            <p className="mt-2 text-lg font-semibold text-foreground">{formatPrice(p.price)}</p>
            <WhatsAppButton
              message={`Olá! Tenho interesse em: ${p.title} (${p.author}) — ${formatPrice(p.price)}.`}
              className="mt-4 h-10 w-full px-3 text-xs"
            >
              Comprar pelo WhatsApp
            </WhatsAppButton>
          </article>
        ))}
      </div>
    </div>
  </section>
)
