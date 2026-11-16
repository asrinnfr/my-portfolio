import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "../components/contact-form";
import { contactHero } from "../lib/content";

export const metadata: Metadata = {
  title: "Bana Ulaş",
  description: "Asrin ile iletişime geçin: form ve e-posta bilgisi.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <div className="grid gap-10 rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-10 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-5xl">
            Bana Ulaş
          </h1>
          <p className="leading-7 text-slate-300">
            Yeni bir proje, iş birliği veya sadece merhaba demek için
            yazabilirsiniz. Formu doldurun ya da doğrudan e-posta atın.
          </p>
          <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-slate-800">
            <Image
              src={contactHero.src}
              alt={contactHero.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/15" />
          </div>
          <div className="flex flex-col gap-4 text-sm">
            <a
              href="mailto:asrin@example.com"
              className="font-semibold text-sky-400 transition-colors hover:text-sky-300"
            >
              asrin@example.com
            </a>
            <p className="font-semibold text-orange-500">Uzaktan / Türkiye</p>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
