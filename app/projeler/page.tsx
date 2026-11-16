import type { Metadata } from "next";
import { PageCard } from "../components/page-card";
import { PhotoBar } from "../components/photo-bar";
import { events, projects, projectsGallery } from "../lib/content";
import { cardTone, headingTone } from "../lib/tones";

export const metadata: Metadata = {
  title: "Projeler",
  description: "Asrin’in seçili projeleri ve katıldığı etkinlikler.",
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-5xl">
            Projeler &amp; Etkinlikler
          </h1>
          <p className="max-w-2xl text-slate-300">
            Seçili çalışmalar ve katıldığım topluluk anları.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <PageCard
              key={project.title}
              href={project.href}
              title={project.title}
              description={project.description}
              image={project.image}
              imageAlt={project.imageAlt}
              tone={project.tone}
              external
            />
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {events.map((event) => (
            <article
              key={event.title}
              className={`flex flex-col gap-3 rounded-2xl border bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sky-800 ${cardTone[event.tone]}`}
            >
              <h2 className={`font-semibold ${headingTone[event.tone]}`}>
                {event.title}
              </h2>
              <p
                className={`text-xs font-semibold uppercase tracking-wider ${headingTone[event.tone]}`}
              >
                {event.role}
              </p>
              <p className="text-sm leading-6 text-slate-300">{event.detail}</p>
            </article>
          ))}
        </div>
      </div>
      <PhotoBar photos={projectsGallery} label="Projeler galerisi" />
    </div>
  );
}
