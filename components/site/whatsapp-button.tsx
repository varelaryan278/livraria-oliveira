import { cn } from "@/lib/utils"
import { waLink } from "@/lib/site"
import { WhatsAppIcon } from "@/components/icons"

type WhatsAppButtonProps = {
  message?: string
  children: React.ReactNode
  variant?: "solid" | "gold" | "outline" | "light"
  className?: string
}

const variants = {
  solid: "bg-primary text-primary-foreground hover:bg-olive-deep",
  gold: "bg-gold text-olive-deep hover:brightness-105",
  outline: "border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground",
  light: "border border-white/30 text-white hover:bg-white hover:text-olive-deep",
}

export const WhatsAppButton = ({ message, children, variant = "solid", className }: WhatsAppButtonProps) => (
  <a
    href={waLink(message)}
    target="_blank"
    rel="noopener noreferrer"
    className={cn(
      "inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold tracking-wide transition-all focus-visible:ring-3 focus-visible:ring-ring/50 outline-none",
      variants[variant],
      className
    )}
  >
    <WhatsAppIcon className="size-4" />
    {children}
  </a>
)
