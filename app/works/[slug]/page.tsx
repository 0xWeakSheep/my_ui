import { notFound } from "next/navigation";
import { getWorkBySlug, getAllSlugs } from "@/data/works";
import { IframePreview } from "@/components/preview/iframe-preview";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FadeIn } from "@/components/ui/fade-in";
import { Tooltip } from "@/components/ui/tooltip";
import { CopyButton } from "@/components/ui/copy-button";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) return { title: "Not Found" };
  return {
    title: `${work.title} — my_ui`,
    description: work.description,
  };
}

export default async function WorkPage({ params }: Props) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);

  if (!work) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Header backLink="/" backLabel="返回首页" />

      {/* Work Info */}
      <section className="px-6 pt-12 pb-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
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
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              {work.title}
            </h1>
          </FadeIn>
          <FadeIn delay={150}>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-secondary">
              {work.description}
            </p>
          </FadeIn>

          {work.modes && (
            <FadeIn delay={200}>
              <div className="mt-6 flex flex-wrap gap-3">
                {work.modes.map((mode) => (
                  <span
                    key={mode}
                    className="rounded-md border border-border-subtle bg-bg-elevated px-3 py-1.5 text-xs font-medium capitalize text-text-secondary"
                  >
                    {mode}
                  </span>
                ))}
              </div>
            </FadeIn>
          )}

          {work.features && (
            <FadeIn delay={250}>
              <div className="mt-4 flex flex-wrap gap-3">
                {work.features.map((feature) => (
                  <span key={feature} className="text-xs text-text-tertiary">
                    #{feature}
                  </span>
                ))}
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      {/* Preview Area */}
      <section className="px-6 pb-12">
        <div className="mx-auto max-w-7xl space-y-4">
          <FadeIn>
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-medium uppercase tracking-wide text-text-tertiary">
                实时预览
              </h2>
              <Tooltip content="在独立窗口中查看完整演示">
                <a
                  href={`/registry/${work.id}-${work.slug}/index.html`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-secondary transition-colors hover:text-accent-amber"
                >
                  在新窗口打开 →
                </a>
              </Tooltip>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <IframePreview
              src={`/registry/${work.id}-${work.slug}/index.html`}
              title={`${work.title} preview`}
            />
          </FadeIn>
        </div>
      </section>

      {/* Metadata */}
      <section className="border-t border-border-subtle px-6 py-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <dl className="grid gap-4 text-sm sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <dt className="text-text-tertiary">版本</dt>
                <dd className="mt-1 font-medium text-text-primary">{work.version}</dd>
              </div>
              <div>
                <dt className="text-text-tertiary">创建日期</dt>
                <dd className="mt-1 font-medium text-text-primary">{work.createdAt}</dd>
              </div>
              <div>
                <dt className="text-text-tertiary">更新日期</dt>
                <dd className="mt-1 font-medium text-text-primary">{work.updatedAt}</dd>
              </div>
              <div>
                <dt className="text-text-tertiary">路径</dt>
                <dd className="mt-1 flex items-center gap-2 font-mono text-xs text-text-secondary">
                  registry/{work.id}-{work.slug}/
                  <CopyButton text={`registry/${work.id}-${work.slug}/`} />
                </dd>
              </div>
            </dl>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}
