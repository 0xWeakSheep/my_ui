import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata = {
  title: "404 — my_ui",
};

export default function NotFound() {
  return (
    <main id="main-content" className="min-h-screen">
      <Header backLink="/" backLabel="返回首页" />

      <section className="flex flex-col items-center justify-center px-6 py-32">
        <FadeIn>
          <p className="mb-4 text-[120px] font-bold leading-none tracking-tighter text-text-tertiary/20 md:text-[180px]">
            404
          </p>
        </FadeIn>
        <FadeIn delay={100}>
          <h1 className="text-2xl font-bold text-text-primary md:text-3xl">
            页面未找到
          </h1>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="mt-4 max-w-md text-center text-base text-text-secondary">
            你访问的页面不存在或已被移除。
          </p>
        </FadeIn>
        <FadeIn delay={300}>
          <Link
            href="/"
            className="mt-8 inline-block rounded-md border border-border-subtle bg-bg-elevated px-6 py-3 text-sm font-medium text-text-primary transition-colors hover:border-accent-gold/60 hover:text-accent-amber"
          >
            ← 返回首页
          </Link>
        </FadeIn>
      </section>

      <Footer />
    </main>
  );
}
