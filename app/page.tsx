import { works } from "@/data/works";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const techStack = [
  { name: "Next.js", desc: "App Router · SSG" },
  { name: "React", desc: "v19 · TypeScript" },
  { name: "Tailwind", desc: "CSS Utility" },
  { name: "Vercel", desc: "Edge Deploy" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="px-6 pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 w-fit border-b border-accent-gold/60 pb-2 text-xs font-bold uppercase tracking-widest text-accent-amber">
            UI Design Portfolio
          </p>
          <h1 className="max-w-[12ch] text-4xl font-bold leading-[0.92] tracking-tight md:text-6xl lg:text-7xl">
            交互式界面作品集
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-text-secondary md:text-lg">
            一个可交互的 UI 设计作品集，同时作为可复用的素材与组件库。每个作品都是完整的前端实现。
          </p>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="border-y border-border-subtle px-6 py-10">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-xs font-bold uppercase tracking-widest text-text-tertiary">
            技术栈
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="rounded-lg border border-border-subtle bg-bg-elevated px-5 py-4"
              >
                <p className="font-semibold text-text-primary">{tech.name}</p>
                <p className="mt-1 text-xs text-text-tertiary">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Works Grid */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-sm font-medium uppercase tracking-wide text-text-tertiary">
              全部素材 ({works.length})
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {works.map((work) => (
              <Link
                key={work.id}
                href={`/works/${work.slug}`}
                className="group block overflow-hidden rounded-xl border border-border-subtle bg-bg-elevated transition-all duration-fast hover:-translate-y-1 hover:border-accent-gold/40 hover:shadow-lg"
              >
                {/* Thumbnail */}
                <div className="relative aspect-[16/10] overflow-hidden bg-bg-base">
                  <img
                    src={work.preview.thumbnail}
                    alt={work.title}
                    className="h-full w-full object-cover transition-transform duration-slow group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Card Content */}
                <div className="p-5">
                  <div className="mb-3 flex flex-wrap gap-2">
                    {work.category.map((cat) => (
                      <span
                        key={cat}
                        className="rounded-full border border-border-subtle px-2.5 py-0.5 text-[11px] uppercase tracking-wider text-text-tertiary"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent-amber transition-colors">
                    {work.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-text-secondary">
                    {work.description}
                  </p>
                  {work.features && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {work.features.map((feature) => (
                        <span
                          key={feature}
                          className="text-[11px] text-text-tertiary"
                        >
                          #{feature}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
