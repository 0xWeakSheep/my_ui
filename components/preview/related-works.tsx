import Link from "next/link";
import { WorkMeta } from "@/types/work";

interface RelatedWorksProps {
  currentWork: WorkMeta;
  allWorks: WorkMeta[];
}

export function RelatedWorks({ currentWork, allWorks }: RelatedWorksProps) {
  // 排除当前作品，取最多 3 个其他作品
  const related = allWorks
    .filter((w) => w.id !== currentWork.id)
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="border-t border-border-subtle px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-6 text-sm font-medium uppercase tracking-wide text-text-tertiary">
          其他素材
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((work) => (
            <Link
              key={work.id}
              href={`/works/${work.slug}/`}
              className="group block overflow-hidden rounded-xl border border-border-subtle bg-bg-elevated transition-all duration-fast hover:-translate-y-1 hover:border-accent-gold/40 hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-bg-base">
                <img
                  src={work.preview.thumbnail}
                  alt={work.title}
                  className="h-full w-full object-cover transition-transform duration-slow group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-text-primary group-hover:text-accent-amber transition-colors">
                  {work.title}
                </h3>
                <p className="mt-1 line-clamp-2 text-xs text-text-secondary">
                  {work.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
