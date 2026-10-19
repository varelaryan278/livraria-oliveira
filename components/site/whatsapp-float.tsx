import { waLink } from "@/lib/site"
import { WhatsAppIcon } from "@/components/icons"

export const WhatsAppFloat = () => (
  <a
    href={waLink()}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Conversar no WhatsApp"
    className="fixed right-4 bottom-4 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 sm:right-6 sm:bottom-6"
  >
    <WhatsAppIcon className="size-7" />
  </a>
)
