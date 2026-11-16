"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Photo } from "../lib/content";

type PhotoBarProps = {
  photos: Photo[];
  label?: string;
};

export function PhotoBar({ photos, label = "Galeri" }: PhotoBarProps) {
  const [index, setIndex] = useState(0);
  const count = photos.length;

  useEffect(() => {
    if (count <= 1) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % count);
    }, 4500);
    return () => window.clearInterval(timer);
  }, [count]);

  if (count === 0) return null;

  function go(direction: -1 | 1) {
    setIndex((current) => (current + direction + count) % count);
  }

  return (
    <section aria-label={label} className="mt-14 w-full">
      <div className="relative w-full overflow-hidden rounded-2xl border border-slate-800">
        <div
          className="flex w-full transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="relative aspect-video w-full min-w-full flex-[0_0_100%]"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1152px) 100vw, 1152px"
                priority={photo.src === photos[0].src}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/15" />
            </div>
          ))}
        </div>

        {count > 1 ? (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              className="absolute left-3 top-1/2 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-lg border border-slate-700 bg-slate-900/90 text-slate-100 transition-all duration-300 hover:-translate-y-[55%] hover:border-sky-800"
              aria-label="Önceki fotoğraf"
            >
              <span aria-hidden className="text-2xl leading-none">
                ‹
              </span>
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="absolute right-3 top-1/2 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-lg border border-sky-500 bg-sky-500 text-slate-950 transition-all duration-300 hover:-translate-y-[55%] hover:border-sky-300 hover:bg-sky-400"
              aria-label="Sonraki fotoğraf"
            >
              <span aria-hidden className="text-2xl leading-none">
                ›
              </span>
            </button>
            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
              {photos.map((photo, photoIndex) => (
                <button
                  key={photo.src}
                  type="button"
                  onClick={() => setIndex(photoIndex)}
                  aria-label={`${photo.alt} slaytına geç`}
                  className={`h-2.5 w-7 rounded-full border transition-all duration-300 ${
                    photoIndex === index ? "border-orange-400 bg-orange-500" : "border-slate-600 bg-slate-700 hover:border-sky-700"
                  }`}
                />
              ))}
            </div>
          </>
        ) : null}
      </div>
    </section>
  );
}
