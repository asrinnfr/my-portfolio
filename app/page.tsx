import Link from "next/link";
import { GitHubIcon, LinkedInIcon } from "./components/icons";
import { PageCard } from "./components/page-card";
import { PhotoBar } from "./components/photo-bar";
import { homeGallery, pageCards } from "./lib/content";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative isolate overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-sky-950/30 via-slate-950 to-slate-950 px-6 py-10 sm:px-10 sm:py-14">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(14,116,144,0.2),_transparent_45%)]" />
        <div className="flex flex-col gap-8">
        <p className="inline-flex w-fit items-center gap-2 rounded-full border border-sky-800/70 bg-sky-900/50 px-4 py-1.5 text-sm font-semibold text-sky-300">
          Yazılım Geliştirici
        </p>
        <div className="flex flex-col gap-6">
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-slate-50 sm:text-6xl">
            Merhaba, ben Asrin.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-300">
            Kullanıcıya dokunan, sade ve performanslı arayüzler tasarlıyorum.
            Next.js ve modern web yığınıyla fikirleri ürün haline getiriyorum.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/projeler"
            className="inline-flex items-center justify-center rounded-lg border border-sky-500 bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:bg-sky-400"
          >
            Projelerimi İncele
          </Link>
          <Link
            href="/iletisim"
            className="inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-sky-300 transition-all duration-300 hover:-translate-y-1 hover:border-sky-800 hover:bg-slate-800"
          >
            Bana Ulaş
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex size-11 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 text-slate-100 transition-all duration-300 hover:-translate-y-1 hover:border-sky-800 hover:bg-slate-800"
            aria-label="GitHub"
          >
            <GitHubIcon className="size-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex size-11 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 text-slate-100 transition-all duration-300 hover:-translate-y-1 hover:border-sky-800 hover:bg-slate-800"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="size-5" />
          </a>
        </div>
        </div>
      </section>

      <section className="mt-14 grid gap-5 md:grid-cols-3">
        {pageCards.map((card) => (
          <PageCard key={card.href} {...card} />
        ))}
      </section>

      <PhotoBar photos={homeGallery} label="Ana sayfa galerisi" />
    </div>
  );
}
