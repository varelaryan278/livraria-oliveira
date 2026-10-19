import { Plus } from "lucide-react"
import { faqs } from "@/lib/catalog"
import { SectionHeading } from "./section-heading"

export const Faq = () => (
  <section id="duvidas" className="scroll-mt-28 border-t bg-card">
    <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 md:grid-cols-[1fr_1.4fr] md:py-28">
      <SectionHeading eyebrow="Dúvidas" title="Comprar com a gente é simples" text="Tudo pelo WhatsApp, com uma pessoa do outro lado." />
      <div className="divide-y border-y">
        {faqs.map((f) => (
          <details key={f.q} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-olive-deep [&::-webkit-details-marker]:hidden">
              {f.q}
              <Plus className="size-5 shrink-0 text-primary transition-transform group-open:rotate-45" />
            </summary>
            <p className="mt-3 pr-8 leading-relaxed text-muted-foreground">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
)
