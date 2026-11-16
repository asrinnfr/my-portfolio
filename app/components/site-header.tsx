"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "../lib/content";
import { navTone } from "../lib/tones";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 sm:px-8">
        <Link
          href="/"
          className="text-sm font-bold tracking-[0.22em] text-sky-400"
        >
          ASRIN
        </Link>
        <div className="flex flex-wrap items-center justify-end gap-3 text-sm sm:gap-5">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-2 py-1 font-semibold text-slate-300 transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:opacity-0 hover:text-sky-400 ${
                  active ? `${navTone[link.tone]} after:opacity-100` : ""
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
