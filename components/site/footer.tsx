import { site, waLink } from "@/lib/site"
import { InstagramIcon, WhatsAppIcon } from "@/components/icons"
import { Logo } from "./logo"

export const Footer = () => (
  <footer className="bg-olive-deep text-white/70">
    <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr]">
      <div>
        <Logo light />
        <p className="mt-4 max-w-xs text-sm leading-relaxed">{site.description}</p>
      </div>
      <div className="text-sm">
        <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-gold">Atendimento</h3>
        <ul className="mt-4 space-y-2">
          <li>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white">
              <WhatsAppIcon className="size-4" /> {site.whatsappDisplay}
            </a>
          </li>
          <li>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white">
              <InstagramIcon className="size-4" /> {site.instagramHandle}
            </a>
          </li>
          <li>{site.hours}</li>
        </ul>
      </div>
      <div className="text-sm">
        <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-gold">Onde estamos</h3>
        <p className="mt-4">{site.city}</p>
        <p className="mt-2">Envio para todo o Brasil</p>
      </div>
    </div>
    <div className="border-t border-white/10 px-4 py-6 text-center text-xs text-white/50">
      © 2026 {site.name}. Todos os direitos reservados.
    </div>
  </footer>
)
