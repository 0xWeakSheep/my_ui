import { works } from "@/data/works";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="glass sticky top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3 text-sm font-semibold tracking-wide">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-text-secondary/50">
              <span className="h-2 w-2 rounded-full bg-accent-amber" />
            </span>
            my_ui
          </Link>
          <nav className="hidden gap-8 text-sm text-text-secondary md:flex">
            <span className="hover:text-text-primary transition-colors cursor-pointer">Works</span>
            <span className="hover:text-text-primary transition-colors cursor-pointer">About</span>
          </nav>
        </div>
      </header>

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

      {/* Works Grid */}
      <section className="px-6 pb-24">
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
                {/* Thumbnail placeholder */}
                <div className="relative aspect-[16/10] overflow-hidden bg-bg-base">
                  <div className="absolute inset-0 flex items-center justify-center text-text-tertiary">
                    <svg
                      className="h-10 w-10 opacity-30"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                      />
                    </svg>
                  </div>
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

      {/* Footer */}
      <footer className="border-t border-border-subtle px-6 py-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between text-xs text-text-tertiary">
          <span>my_ui — UI Design Portfolio</span>
          <span>0xWeakSheep</span>
        </div>
      </footer>
    </main>
  );
}
