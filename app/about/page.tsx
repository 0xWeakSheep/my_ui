import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FadeIn } from "@/components/ui/fade-in";
import Link from "next/link";

export const metadata = {
  title: "About — my_ui",
  description: "关于 my_ui 个人 UI 设计作品集",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header backLink="/" backLabel="返回首页" />

      <section className="px-6 pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <p className="mb-5 w-fit border-b border-accent-gold/60 pb-2 text-xs font-bold uppercase tracking-widest text-accent-amber">
              About
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="text-4xl font-bold leading-[0.92] tracking-tight md:text-5xl">
              关于这个项目
            </h1>
          </FadeIn>

          <div className="mt-10 space-y-8 text-base leading-relaxed text-text-secondary">
            <FadeIn delay={150}>
              <p>
                my_ui 是我的个人 UI 设计作品集。它有两个并行目标：对外展示我的设计能力，同时作为可复用的素材与组件库。
              </p>
            </FadeIn>

            <FadeIn delay={200}>
              <p>
                每个作品都是完整的前端实现，从视觉概念到代码实现的全链路展示。作品中的组件、动效、布局、颜色系统可以被抽取出来，直接用于未来的新作品或外部项目。
              </p>
            </FadeIn>

            <FadeIn delay={250}>
              <h2 className="pt-4 text-lg font-semibold text-text-primary">
                技术架构
              </h2>
            </FadeIn>
            <FadeIn delay={300}>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent-amber" />
                  <span>
                    <strong className="text-text-primary">主站</strong>：Next.js (App Router) + TypeScript + Tailwind CSS，部署在 Vercel
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent-amber" />
                  <span>
                    <strong className="text-text-primary">素材库</strong>：每个作品是独立的 HTML/CSS/JS 实现，技术栈不做限制（Canvas、WebGL 均可）
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent-amber" />
                  <span>
                    <strong className="text-text-primary">设计系统</strong>：跨所有作品共享的 Design Tokens（颜色、字体、间距、动画时序）
                  </span>
                </li>
              </ul>
            </FadeIn>

            <FadeIn delay={350}>
              <h2 className="pt-4 text-lg font-semibold text-text-primary">
                设计原则
              </h2>
            </FadeIn>
            <FadeIn delay={400}>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent-sky" />
                  <span>从摄影到界面：每个作品从一个真实视觉锚点出发</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent-sky" />
                  <span>沉浸式背景：画面是界面的第一层信息</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent-sky" />
                  <span>克制 UI：不使用过度装饰，让背景呼吸</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent-sky" />
                  <span>电影感调色：Teal & Gold，低角度逆光，景深层次</span>
                </li>
              </ul>
            </FadeIn>

            <FadeIn delay={450}>
              <div className="pt-6">
                <Link
                  href="/"
                  className="inline-block rounded-md border border-border-subtle bg-bg-elevated px-5 py-2.5 text-sm font-medium text-text-primary transition-colors hover:border-accent-gold/60 hover:text-accent-amber"
                >
                  ← 浏览作品
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
