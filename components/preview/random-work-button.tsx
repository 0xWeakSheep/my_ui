"use client";

import Link from "next/link";
import { WorkMeta } from "@/types/work";

interface RandomWorkButtonProps {
  works: WorkMeta[];
}

export function RandomWorkButton({ works }: RandomWorkButtonProps) {
  const handleRandom = () => {
    if (works.length === 0) return;
    const randomWork = works[Math.floor(Math.random() * works.length)];
    window.location.href = `/works/${randomWork.slug}/`;
  };

  if (works.length <= 1) return null;

  return (
    <button
      onClick={handleRandom}
      className="inline-flex items-center gap-2 rounded-md border border-border-subtle bg-bg-elevated px-4 py-2 text-sm text-text-secondary transition-colors hover:border-accent-gold/40 hover:text-accent-amber"
    >
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
      </svg>
      随机浏览
    </button>
  );
}
