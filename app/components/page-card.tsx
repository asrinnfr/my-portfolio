import Image from "next/image";
import Link from "next/link";
import { buttonTone, cardTone, headingTone } from "../lib/tones";

type PageCardProps = {
  href: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tone: keyof typeof cardTone;
  cta?: string;
  external?: boolean;
};

export function PageCard({
  href,
  title,
  description,
  image,
  imageAlt,
  tone,
  cta = "Sayfaya Git",
  external = false,
}: PageCardProps) {
  const linkProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <article className={`group flex flex-col overflow-hidden rounded-2xl border bg-slate-900 transition-all duration-300 hover:-translate-y-1 hover:border-sky-800 ${cardTone[tone]}`}>
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-slate-950/10" />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h2 className={`text-xl font-semibold ${headingTone[tone]}`}>{title}</h2>
        <p className="flex-1 text-slate-300">{description}</p>
        <Link
          href={href}
          {...linkProps}
          className={`mt-1 inline-flex w-full items-center justify-center rounded-lg px-4 py-3 text-sm font-semibold ${buttonTone[tone]}`}
        >
          {cta}
        </Link>
      </div>
    </article>
  );
}
