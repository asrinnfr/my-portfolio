export function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} Asrin. Tüm hakları saklıdır.</p>
        <p className="font-semibold text-sky-400">Next.js · Tailwind CSS · lucide-react</p>
      </div>
    </footer>
  );
}
