import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  eyebrow: string
  title: React.ReactNode
  text?: string
  light?: boolean
  className?: string
}

export const SectionHeading = ({ eyebrow, title, text, light, className }: SectionHeadingProps) => (
  <div className={cn("max-w-2xl", className)}>
    <p className={cn("mb-3 text-xs font-semibold uppercase tracking-[0.25em]", light ? "text-gold" : "text-primary")}>
      {eyebrow}
    </p>
    <h2 className={cn("text-4xl leading-tight font-semibold sm:text-5xl", light ? "text-white" : "text-olive-deep")}>{title}</h2>
    {text && <p className={cn("mt-4 text-lg leading-relaxed", light ? "text-white/70" : "text-muted-foreground")}>{text}</p>}
  </div>
)
