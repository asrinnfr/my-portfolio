export type Photo = {
  src: string;
  alt: string;
};

export const homeGallery: Photo[] = [
  { src: "/photos/01-studio.jpg", alt: "Çalışma ortamı" },
  { src: "/photos/02-code.jpg", alt: "Kod ve ekran detayı" },
];

export const aboutGallery: Photo[] = [
  { src: "/photos/02-code.jpg", alt: "Kod ve ekran detayı" },
  { src: "/photos/04-desk.jpg", alt: "Masaüstü kurulum" },
];

export const projectsGallery: Photo[] = [
  { src: "/photos/03-event.jpg", alt: "Etkinlik ve sahne ışıkları" },
  { src: "/photos/05-team.jpg", alt: "Ekip çalışması" },
];

export const contactHero: Photo = {
  src: "/photos/05-team.jpg",
  alt: "İletişim görseli",
};

export const pageCards = [
  {
    href: "/hakkimda",
    title: "Hakkımda",
    description: "Biyografi, yaklaşımım ve kullandığım yetenekler.",
    image: "/photos/02-code.jpg",
    imageAlt: "Hakkımda sayfası görseli",
    tone: "fuchsia" as const,
  },
  {
    href: "/projeler",
    title: "Projeler",
    description: "Seçili çalışmalar ve katıldığım etkinlikler.",
    image: "/photos/03-event.jpg",
    imageAlt: "Projeler sayfası görseli",
    tone: "amber" as const,
  },
  {
    href: "/iletisim",
    title: "Bana Ulaş",
    description: "Form, e-posta ve iş birliği için hızlı bir yol.",
    image: "/photos/05-team.jpg",
    imageAlt: "İletişim sayfası görseli",
    tone: "cyan" as const,
  },
];

export const skills = [
  { label: "Next.js", tone: "fuchsia" },
  { label: "TypeScript", tone: "amber" },
  { label: "React", tone: "cyan" },
  { label: "Tailwind CSS", tone: "violet" },
  { label: "Node.js", tone: "lime" },
  { label: "PostgreSQL", tone: "fuchsia" },
  { label: "UI/UX", tone: "amber" },
  { label: "Git", tone: "cyan" },
] as const;

export const projects = [
  {
    title: "Akış — Görev Panosu",
    description:
      "Ekipler için sade bir kanban deneyimi. Sürükle-bırak, etiketler ve gerçek zamanlı güncellemeler.",
    tags: ["Next.js", "TypeScript", "Prisma"],
    href: "https://github.com",
    image: "/photos/01-studio.jpg",
    imageAlt: "Akış projesi görseli",
    tone: "fuchsia" as const,
  },
  {
    title: "Lumen — Tasarım Sistemi",
    description:
      "Canlı arayüzler için bileşen kütüphanesi. Erişilebilir, belgelenmiş ve Tailwind ile uyumlu.",
    tags: ["React", "Storybook", "a11y"],
    href: "https://github.com",
    image: "/photos/02-code.jpg",
    imageAlt: "Lumen projesi görseli",
    tone: "amber" as const,
  },
  {
    title: "Orbit — Etkinlik Keşfi",
    description:
      "Teknoloji etkinliklerini harita ve takvim üzerinden keşfetmeyi kolaylaştıran bir web uygulaması.",
    tags: ["Next.js", "Mapbox", "API"],
    href: "https://github.com",
    image: "/photos/03-event.jpg",
    imageAlt: "Orbit projesi görseli",
    tone: "cyan" as const,
  },
  {
    title: "Nova — Portfolyo Motoru",
    description:
      "İçerik ve galeri yönetimi olan, hızlı yüklenen kişisel site altyapısı.",
    tags: ["Next.js", "MDX", "Vercel"],
    href: "https://github.com",
    image: "/photos/04-desk.jpg",
    imageAlt: "Nova projesi görseli",
    tone: "violet" as const,
  },
];

export const events = [
  {
    title: "Hackathon 2025",
    role: "Katılımcı",
    detail: "48 saatte üretken bir prototip ve jüri sunumu.",
    tone: "lime" as const,
  },
  {
    title: "Open Source Meetup",
    role: "Konuşmacı",
    detail: "Modern frontend mimarileri üzerine kısa bir oturum.",
    tone: "fuchsia" as const,
  },
  {
    title: "Campus Tech Day",
    role: "Atölye",
    detail: "Tailwind ve bileşen tasarımı pratik çalışması.",
    tone: "amber" as const,
  },
];

export const navLinks = [
  { href: "/", label: "Ana Sayfa", tone: "fuchsia" as const },
  { href: "/hakkimda", label: "Hakkımda", tone: "amber" as const },
  { href: "/projeler", label: "Projeler", tone: "cyan" as const },
  { href: "/iletisim", label: "Bana Ulaş", tone: "violet" as const },
];
