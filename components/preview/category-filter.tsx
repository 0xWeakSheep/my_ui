"use client";

import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  totalCount: number;
  filteredCount: number;
}

export function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
  totalCount,
  filteredCount,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <button
        onClick={() => onCategoryChange(null)}
        className={cn(
          "rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-wider transition-all",
          activeCategory === null
            ? "bg-accent-amber text-bg-base"
            : "border border-border-subtle text-text-secondary hover:border-accent-gold/40 hover:text-text-primary"
        )}
      >
        全部 ({totalCount})
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onCategoryChange(cat)}
          className={cn(
            "rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-wider transition-all",
            activeCategory === cat
              ? "bg-accent-amber text-bg-base"
              : "border border-border-subtle text-text-secondary hover:border-accent-gold/40 hover:text-text-primary"
          )}
        >
          {cat}
        </button>
      ))}
      {activeCategory !== null && (
        <span className="text-xs text-text-tertiary">
          显示 {filteredCount} 个
        </span>
      )}
    </div>
  );
}
