import { BookCheck, MessageCircleHeart, PackageCheck, ShieldCheck } from "lucide-react"

const items = [
  { icon: BookCheck, title: "Curadoria fiel", text: "Só indicamos o que lemos e confiamos." },
  { icon: PackageCheck, title: "Envio nacional", text: "Embalagem protegida para todo o Brasil." },
  { icon: MessageCircleHeart, title: "Atendimento pessoal", text: "Ajuda real para escolher o livro certo." },
  { icon: ShieldCheck, title: "Compra segura", text: "Pix, cartão e boleto com confirmação." },
]

export const TrustBar = () => (
  <section className="border-y bg-card">
    <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-border lg:grid-cols-4">
      {items.map(({ icon: Icon, title, text }) => (
        <div key={title} className="flex flex-col gap-2 bg-card px-4 py-7 sm:flex-row sm:items-start sm:gap-4 sm:px-6">
          <Icon className="size-7 shrink-0 text-gold" strokeWidth={1.5} />
          <div>
            <h3 className="font-sans text-sm font-semibold text-olive-deep">{title}</h3>
            <p className="mt-1 text-sm leading-snug text-muted-foreground">{text}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
)
