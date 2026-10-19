import { Quote } from "lucide-react"
import { testimonials } from "@/lib/catalog"
import { SectionHeading } from "./section-heading"

export const Testimonials = () => {
  if (testimonials.length === 0) return null

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:py-28">
      <SectionHeading eyebrow="Quem já comprou" title="Leitores que confiam na Oliveira" />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure key={t.name} className="rounded-2xl border bg-card p-7">
            <Quote className="size-6 text-gold" />
            <blockquote className="mt-4 font-heading text-xl leading-snug text-olive-deep">{t.text}</blockquote>
            <figcaption className="mt-5 text-sm">
              <span className="font-semibold">{t.name}</span>
              <span className="text-muted-foreground"> · {t.city}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
