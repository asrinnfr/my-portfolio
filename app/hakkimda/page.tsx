import type { Metadata } from "next";
import { PhotoBar } from "../components/photo-bar";
import { aboutGallery, skills } from "../lib/content";
import { badgeTone } from "../lib/tones";

export const metadata: Metadata = {
  title: "Hakkımda",
  description: "Asrin’in biyografisi, yaklaşımı ve yetenekleri.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-10">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-5xl">
          Hakkımda
        </h1>
        <p className="max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
          Ürün düşüncesini kodla birleştiren bir geliştiriciyim. Temiz mimari,
          okunabilir arayüz ve ölçülebilir sonuçlar peşindeyim. Küçük ekiplerde
          uçtan uca sorumluluk almayı, açık kaynak ve topluluk etkinliklerinde
          öğrenmeyi paylaşmayı seviyorum.
        </p>
        <p className="max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
          Tasarımda canlı bir paletten, kodda ise sade yapılardan yanayım. Bir
          arayüz hem hatırlanır hem de hızlı olmalı. Bu yüzden Next.js, TypeScript
          ve Tailwind ile çalışmayı seviyorum.
        </p>
        <ul className="flex flex-wrap gap-2.5">
          {skills.map((skill) => (
            <li
              key={skill.label}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors hover:border-sky-600 hover:bg-sky-900/70 ${badgeTone[skill.tone]}`}
            >
              {skill.label}
            </li>
          ))}
        </ul>
      </div>
      <PhotoBar photos={aboutGallery} label="Hakkımda galerisi" />
    </div>
  );
}
