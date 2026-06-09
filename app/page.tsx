import { works } from "@/data/works";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WorksGrid } from "@/components/preview/works-grid";
import { RandomWorkButton } from "@/components/preview/random-work-button";
import { FadeIn } from "@/components/ui/fade-in";

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
          <FadeIn>
            <p className="mb-5 w-fit border-b border-accent-gold/60 pb-2 text-xs font-bold uppercase tracking-widest text-accent-amber">
              UI Design Portfolio
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="max-w-[12ch] text-4xl font-bold leading-[0.92] tracking-tight md:text-6xl lg:text-7xl">
              交互式界面作品集
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-text-secondary md:text-lg">
              一个可交互的 UI 设计作品集，同时作为可复用的素材与组件库。每个作品都是完整的前端实现。
            </p>
          </FadeIn>
          <FadeIn delay={300}>
            <div className="mt-8 flex flex-wrap gap-3">
              <RandomWorkButton works={works} />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="border-y border-border-subtle px-6 py-10">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <p className="mb-6 text-xs font-bold uppercase tracking-widest text-text-tertiary">
              技术栈
            </p>
          </FadeIn>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {techStack.map((tech, i) => (
              <FadeIn key={tech.name} delay={i * 100}>
                <div className="group rounded-lg border border-border-subtle bg-bg-elevated px-5 py-4 transition-all hover:border-accent-gold/30">
                  <p className="font-semibold text-text-primary group-hover:text-accent-amber transition-colors">
                    {tech.name}
                  </p>
                  <p className="mt-1 text-xs text-text-tertiary">{tech.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Works Grid */}
      <WorksGrid works={works} />

      <Footer />
    </main>
  );
}
