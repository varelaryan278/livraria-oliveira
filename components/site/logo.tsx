import { cn } from "@/lib/utils"
import { OliveBranch } from "@/components/icons"

export const Logo = ({ className, light }: { className?: string; light?: boolean }) => (
  <a href="#inicio" className={cn("flex items-center gap-2.5", className)} aria-label="Oliveira Livraria Cristã — início">
    <OliveBranch className={cn("size-8", light ? "text-parchment" : "text-primary")} />
    <span className="flex flex-col leading-none">
      <span className={cn("font-heading text-2xl font-semibold", light ? "text-white" : "text-olive-deep")}>Oliveira</span>
      <span className={cn("text-[10px] font-medium uppercase tracking-[0.28em]", light ? "text-gold" : "text-muted-foreground")}>
        Livraria Cristã
      </span>
    </span>
  </a>
)
