import fs from "node:fs"
import path from "node:path"
import Image from "next/image"
import { ImageIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const extensions = ["webp", "jpg", "jpeg", "png"]

const findImage = (id: string) => {
  const ext = extensions.find((e) =>
    fs.existsSync(path.join(process.cwd(), "public", "images", `${id}.${e}`))
  )
  return ext ? `/images/${id}.${ext}` : null
}

type ImageSlotProps = {
  id: string
  alt: string
  className?: string
  sizes?: string
  priority?: boolean
  tone?: "light" | "dark"
}

export const ImageSlot = ({ id, alt, className, sizes = "100vw", priority, tone = "light" }: ImageSlotProps) => {
  const src = findImage(id)

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {src ? (
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      ) : (
        <div
          className={cn(
            "absolute inset-0 flex flex-col items-center justify-center gap-2 border border-dashed p-4 text-center",
            tone === "light"
              ? "border-primary/25 bg-[repeating-linear-gradient(135deg,var(--muted)_0_12px,var(--secondary)_12px_24px)] text-primary/60"
              : "border-white/20 bg-white/5 text-white/50"
          )}
        >
          <ImageIcon className="size-6" aria-hidden />
          <span className="font-mono text-[11px] tracking-wide">{id}</span>
          <span className="sr-only">{alt}</span>
        </div>
      )}
    </div>
  )
}
