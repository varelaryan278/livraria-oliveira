import { Logo } from "./logo"
import { WhatsAppButton } from "./whatsapp-button"

const nav = [
  { href: "#categorias", label: "Categorias" },
  { href: "#destaques", label: "Destaques" },
  { href: "#sobre", label: "Sobre" },
  { href: "#duvidas", label: "Dúvidas" },
]

export const Header = () => (
  <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
    <div className="bg-olive-deep px-4 py-2 text-center text-xs tracking-wide text-parchment">
      Enviamos para todo o Brasil<span className="hidden sm:inline"> · Atendimento pessoal pelo WhatsApp</span>
    </div>
    <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-4 px-4">
      <Logo />
      <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
        {nav.map((item) => (
          <a key={item.href} href={item.href} className="text-sm font-medium text-foreground/75 transition-colors hover:text-primary">
            {item.label}
          </a>
        ))}
      </nav>
      <WhatsAppButton className="h-10 px-4 text-xs sm:px-5">
        <span className="hidden sm:inline">Fale conosco</span>
        <span className="sm:hidden">Pedir</span>
      </WhatsAppButton>
    </div>
  </header>
)
