import { ArrowUpRight } from "lucide-react"
import { categories } from "@/lib/catalog"
import { waLink } from "@/lib/site"
import { ImageSlot } from "@/components/image-slot"
import { SectionHeading } from "./section-heading"

export const Categories = () => (
  <section id="categorias" className="mx-auto max-w-6xl scroll-mt-28 px-4 py-20 md:py-28">
    <SectionHeading
      eyebrow="Categorias"
      title="Encontre a leitura certa para cada fase da caminhada"
      text="Do primeiro contato com a Bíblia ao estudo teológico mais profundo."
    />
    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((cat) => (
        <a
          key={cat.id}
          href={waLink(`Olá! Quero ver opções de ${cat.title}.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden rounded-2xl border bg-card transition-shadow hover:shadow-xl hover:shadow-olive-deep/10"
        >
          <ImageSlot id={cat.id} alt={cat.title} className="aspect-[16/10]" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
          <div className="flex items-start justify-between gap-4 p-6">
            <div>
              <h3 className="text-2xl font-semibold text-olive-deep">{cat.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{cat.description}</p>
            </div>
            <ArrowUpRight className="size-5 shrink-0 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>
        </a>
      ))}
    </div>
  </section>
)
