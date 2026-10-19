import { site } from "@/lib/site"
import { InstagramIcon } from "@/components/icons"

export const Instagram = () => (
  <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 md:grid-cols-[1fr_1.15fr] md:py-28">
    <div>
      <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
        <InstagramIcon className="size-4" />
        Instagram
      </p>
      <h2 className="text-4xl leading-tight font-semibold text-olive-deep sm:text-5xl">Palavra todos os dias no feed</h2>
      <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
        Lançamentos, promoções e indicações de leitura. Acompanhe e fique sabendo antes de todo mundo.
      </p>
      <a
        href={site.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold tracking-wide text-primary-foreground transition-colors hover:bg-olive-deep"
      >
        <InstagramIcon className="size-4" />
        Seguir {site.instagramHandle}
      </a>
    </div>

    <div className="@container overflow-hidden rounded-2xl border bg-white shadow-xl shadow-olive-deep/10">
      <iframe
        src={`${site.instagram}embed/`}
        title={`Perfil ${site.instagramHandle} no Instagram`}
        loading="lazy"
        scrolling="no"
        className="block h-[calc(190px+66.7cqw)] w-full border-0"
      />
    </div>
  </section>
)
