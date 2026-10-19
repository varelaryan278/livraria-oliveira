import { ImageSlot } from "@/components/image-slot"
import { OliveBranch } from "@/components/icons"
import { SectionHeading } from "./section-heading"

const pillars = [
  { n: "01", title: "Fidelidade às Escrituras", text: "Cada título passa por leitura e critério antes de chegar à nossa estante." },
  { n: "02", title: "Indicação sob medida", text: "Contamos o que você procura e sugerimos a leitura certa para o seu momento." },
  { n: "03", title: "Cuidado no envio", text: "Seu livro chega protegido, com o carinho de quem entrega uma bênção." },
]

export const About = () => (
  <section id="sobre" className="scroll-mt-28 bg-olive-deep text-white">
    <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 py-20 md:grid-cols-2 md:py-28">
      <div className="relative order-2 md:order-1">
        <ImageSlot
          id="sobre"
          alt="Estante da livraria com Bíblias e livros cristãos"
          className="aspect-square rounded-[1.75rem]"
          sizes="(min-width: 768px) 50vw, 100vw"
          tone="dark"
        />
        <OliveBranch className="absolute -top-8 -right-4 size-24 text-gold/40" />
      </div>
      <div className="order-1 md:order-2">
        <SectionHeading
          light
          eyebrow="Por que a Oliveira"
          title={
            <>
              Como a oliveira, <em className="font-medium text-gold">enraizados</em> na Palavra.
            </>
          }
          text="A oliveira é símbolo de firmeza, paz e fruto que permanece. É isso que queremos levar para a sua casa: livros que edificam, escolhidos com zelo."
        />
        <ul className="mt-10 space-y-7">
          {pillars.map((p) => (
            <li key={p.n} className="flex gap-5">
              <span className="font-heading text-3xl font-semibold text-gold">{p.n}</span>
              <div>
                <h3 className="font-sans text-base font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-white/65">{p.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
)
