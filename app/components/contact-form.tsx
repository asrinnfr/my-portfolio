"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sent");
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <label className="flex flex-col gap-2 text-sm font-semibold text-slate-100">
        Ad Soyad
        <input
          name="name"
          type="text"
          required
          placeholder="Adınız"
          className="rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none placeholder:text-slate-500 transition-all duration-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
        />
      </label>
      <label className="flex flex-col gap-2 text-sm font-semibold text-slate-100">
        E-posta
        <input
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className="rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none placeholder:text-slate-500 transition-all duration-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
        />
      </label>
      <label className="flex flex-col gap-2 text-sm font-semibold text-slate-100">
        Mesaj
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Merhaba, bir proje hakkında konuşmak isterim..."
          className="resize-y rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none placeholder:text-slate-500 transition-all duration-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
        />
      </label>
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-lg border border-sky-500 bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:bg-sky-400"
      >
        Mesaj Gönder
      </button>
      {status === "sent" ? (
        <p className="text-sm font-semibold text-sky-300">
          Teşekkürler, mesajınız alındı. En kısa sürede dönüş yapacağım.
        </p>
      ) : null}
    </form>
  );
}
