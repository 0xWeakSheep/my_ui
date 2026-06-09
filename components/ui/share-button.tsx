"use client";

import { useState, useCallback } from "react";

interface ShareButtonProps {
  title: string;
  url?: string;
}

export function ShareButton({ title, url }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = useCallback(async () => {
    const shareUrl = url || window.location.href;
    const shareData = {
      title,
      url: shareUrl,
    };

    // 优先使用原生分享
    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        // 用户取消或分享失败，回退到复制链接
      }
    }

    // 回退：复制链接到剪贴板
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // 复制失败时静默处理
    }
  }, [title, url]);

  return (
    <button
      onClick={handleShare}
      className="inline-flex items-center gap-2 rounded-md border border-border-subtle bg-bg-elevated px-3 py-2 text-sm text-text-secondary transition-colors hover:border-accent-gold/40 hover:text-accent-amber"
      title={copied ? "链接已复制" : "分享"}
    >
      {copied ? (
        <>
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
          已复制
        </>
      ) : (
        <>
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
          </svg>
          分享
        </>
      )}
    </button>
  );
}
