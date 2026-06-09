"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import { WorkMeta } from "@/types/work";
import { CategoryFilter } from "./category-filter";
import { EmptyState } from "@/components/ui/empty-state";

interface WorksGridProps {
  works: WorkMeta[];
}

function CardCopyButton({ slug }: { slug: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(`${window.location.origin}/works/${slug}/`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // 静默处理
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1 rounded-md border border-border-subtle bg-bg-elevated px-2 py-1 text-[11px] text-text-tertiary transition-colors hover:border-accent-gold/40 hover:text-accent-amber"
      title={copied ? "已复制" : "复制链接"}
    >
      {copied ? (
        <><svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>已复制</>
      ) : (
        <><svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" /></svg>复制</>
      )}
    </button>
  );
}

export function WorksGrid({ works }: WorksGridProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);

  // 键盘快捷键：/ 聚焦搜索框，Escape 清除搜索
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // / 键聚焦搜索框（不在输入框内时）
      if (e.key === "/" && document.activeElement !== searchRef.current) {
        e.preventDefault();
        searchRef.current?.focus();
      }
      // Escape 清除搜索（在搜索框内时）
      if (e.key === "Escape" && document.activeElement === searchRef.current) {
        setSearchQuery("");
        searchRef.current?.blur();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const allCategories = useMemo(() => {
    const set = new Set<string>();
    works.forEach((work) => work.category.forEach((c) => set.add(c)));
    return Array.from(set).sort();
  }, [works]);

  const filteredWorks = useMemo(() => {
    let result = works;

    // 分类筛选
    if (activeCategory) {
      result = result.filter((work) => work.category.includes(activeCategory));
    }

    // 关键词搜索
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(
        (work) =>
          work.title.toLowerCase().includes(query) ||
          work.description.toLowerCase().includes(query) ||
          work.category.some((c) => c.toLowerCase().includes(query)) ||
          work.features?.some((f) => f.toLowerCase().includes(query))
      );
    }

    return result;
  }, [works, activeCategory, searchQuery]);

  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-7xl">
        {/* Search + Filter Bar */}
        <div className="mb-8 flex flex-col gap-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-sm font-medium uppercase tracking-wide text-text-tertiary">
              全部素材 ({filteredWorks.length})
            </h2>
            <CategoryFilter
              categories={allCategories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              totalCount={works.length}
              filteredCount={filteredWorks.length}
            />
          </div>

          {/* Search Input */}
          <div className="relative max-w-md">
            <svg
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-tertiary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <input
              ref={searchRef}
              type="text"
              placeholder="搜索素材... (按 / 聚焦)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-border-subtle bg-bg-elevated py-2.5 pl-10 pr-10 text-sm text-text-primary placeholder:text-text-tertiary/60 focus:border-accent-gold/40 focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-text-tertiary hover:text-text-primary"
                aria-label="清除搜索"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {filteredWorks.length === 0 ? (
          <EmptyState message={searchQuery ? "未找到匹配的素材" : "该分类下暂无素材"} />
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
                  <div className="mt-4 flex items-center justify-between">
                    {work.features && (
                      <div className="flex flex-wrap gap-2">
                        {work.features.map((feature) => (
                          <span key={feature} className="text-[11px] text-text-tertiary">
                            #{feature}
                          </span>
                        ))}
                      </div>
                    )}
                    <CardCopyButton slug={work.slug} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
