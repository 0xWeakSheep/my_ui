import { notFound } from "next/navigation";
import { getWorkBySlug, getAllSlugs } from "@/data/works";
import Link from "next/link";

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
      {/* Header */}
      <header className="glass sticky top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3 text-sm font-semibold tracking-wide">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-text-secondary/50">
              <span className="h-2 w-2 rounded-full bg-accent-amber" />
            </span>
            my_ui
          </Link>
          <Link
            href="/"
            className="text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            ← 返回首页
          </Link>
        </div>
      </header>

      {/* Work Info */}
      <section className="px-6 pt-12 pb-8">
        <div className="mx-auto max-w-7xl">
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
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            {work.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-secondary">
            {work.description}
          </p>

          {work.modes && (
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
          )}

          {work.features && (
            <div className="mt-4 flex flex-wrap gap-3">
              {work.features.map((feature) => (
                <span key={feature} className="text-xs text-text-tertiary">
                  #{feature}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Preview Area */}
      <section className="px-6 pb-12">
        <div className="mx-auto max-w-7xl space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-medium uppercase tracking-wide text-text-tertiary">
              实时预览
            </h2>
            <a
              href={`/registry/${work.id}-${work.slug}/index.html`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-secondary transition-colors hover:text-accent-amber"
            >
              在新窗口打开 →
            </a>
          </div>
          <div className="overflow-hidden rounded-xl border border-border-subtle">
            <iframe
              src={`/registry/${work.id}-${work.slug}/index.html`}
              title={`${work.title} preview`}
              className="aspect-[16/9] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Metadata */}
      <section className="border-t border-border-subtle px-6 py-8">
        <div className="mx-auto max-w-7xl">
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
              <dd className="mt-1 font-mono text-xs text-text-secondary">
                registry/{work.id}-{work.slug}/
              </dd>
            </div>
          </dl>
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
