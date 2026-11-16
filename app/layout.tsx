import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: {
    default: "Asrin — Yazılım Geliştirici",
    template: "%s — Asrin",
  },
  description:
    "Next.js ve modern web yığınıyla ürün geliştiren bir yazılım geliştiricinin kişisel portfolyosu.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr" className={`${inter.variable} h-full antialiased`}>
      <body className={`${inter.className} flex min-h-full flex-col bg-slate-950 text-slate-100`}>
        <SiteHeader />
        <main className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 py-12 sm:px-8 sm:py-16">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
