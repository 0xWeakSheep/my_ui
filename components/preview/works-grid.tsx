"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { WorkMeta } from "@/types/work";
import { CategoryFilter } from "./category-filter";
import { EmptyState } from "@/components/ui/empty-state";

interface WorksGridProps {
  works: WorkMeta[];
}

export function WorksGrid({ works }: WorksGridProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const allCategories = useMemo(() => {
    const set = new Set<string>();
    works.forEach((work) => work.category.forEach((c) => set.add(c)));
    return Array.from(set).sort();
  }, [works]);

  const filteredWorks = useMemo(() => {
    if (!activeCategory) return works;
    return works.filter((work) => work.category.includes(activeCategory));
  }, [works, activeCategory]);

  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-sm font-medium uppercase tracking-wide text-text-tertiary">
            全部素材 ({works.length})
          </h2>
          <CategoryFilter
            categories={allCategories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            totalCount={works.length}
            filteredCount={filteredWorks.length}
          />
        </div>

        {filteredWorks.length === 0 ? (
          <EmptyState message="该分类下暂无素材" />
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredWorks.map((work) => (
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
                        <span key={feature} className="text-[11px] text-text-tertiary">
                          #{feature}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
