"use client";

interface DownloadButtonProps {
  workId: string;
  workSlug: string;
}

export function DownloadButton({ workId, workSlug }: DownloadButtonProps) {
  const repoUrl = `https://github.com/0xWeakSheep/my_ui/tree/main/registry/${workId}-${workSlug}`;

  return (
    <a
      href={repoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-md border border-border-subtle bg-bg-elevated px-3 py-2 text-sm text-text-secondary transition-colors hover:border-accent-gold/40 hover:text-accent-amber"
    >
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
      查看源码
    </a>
  );
}
