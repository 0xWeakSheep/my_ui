"use client";

import { useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface IframePreviewProps {
  src: string;
  title: string;
  className?: string;
}

export function IframePreview({ src, title, className }: IframePreviewProps) {
  const [status, setStatus] = useState<"loading" | "loaded" | "error">("loading");

  const handleLoad = useCallback(() => {
    setStatus("loaded");
  }, []);

  const handleError = useCallback(() => {
    setStatus("error");
  }, []);

  return (
    <div className={cn("relative overflow-hidden rounded-xl border border-border-subtle", className)}>
      {/* Loading State */}
      {status === "loading" && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-bg-base">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-border-subtle border-t-accent-amber" />
          <p className="mt-4 text-sm text-text-tertiary">加载预览中...</p>
        </div>
      )}

      {/* Error State */}
      {status === "error" && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-bg-base">
          <svg
            className="h-10 w-10 text-text-tertiary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
            />
          </svg>
          <p className="mt-4 text-sm font-medium text-text-secondary">预览加载失败</p>
          <p className="mt-1 text-xs text-text-tertiary">素材文件可能不存在或路径错误</p>
          <a
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-sm text-accent-amber hover:underline"
          >
            尝试在新窗口打开 →
          </a>
        </div>
      )}

      {/* Iframe */}
      <iframe
        src={src}
        title={title}
        sandbox="allow-scripts allow-same-origin allow-popups"
        className={cn(
          "aspect-[16/9] w-full transition-opacity duration-300",
          status === "loaded" ? "opacity-100" : "opacity-0"
        )}
        onLoad={handleLoad}
        onError={handleError}
        loading="lazy"
      />
    </div>
  );
}
