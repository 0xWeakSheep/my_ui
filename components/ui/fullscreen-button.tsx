"use client";

import { useState, useCallback, useEffect } from "react";

interface FullscreenButtonProps {
  targetRef?: React.RefObject<HTMLElement | null>;
}

export function FullscreenButton({ targetRef }: FullscreenButtonProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = useCallback(() => {
    const target = targetRef?.current || document.documentElement;

    if (!document.fullscreenElement) {
      target.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch(() => {
        // 全屏请求失败时静默处理
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      }).catch(() => {
        // 退出全屏失败时静默处理
      });
    }
  }, [targetRef]);

  // 监听全屏状态变化
  useEffect(() => {
    const handleChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleChange);
    return () => document.removeEventListener("fullscreenchange", handleChange);
  }, []);

  return (
    <button
      onClick={toggleFullscreen}
      className="inline-flex items-center gap-2 rounded-md border border-border-subtle bg-bg-elevated px-3 py-2 text-sm text-text-secondary transition-colors hover:border-accent-gold/40 hover:text-accent-amber"
      aria-label={isFullscreen ? "退出全屏" : "全屏预览"}
      title={isFullscreen ? "退出全屏" : "全屏预览"}
    >
      {isFullscreen ? (
        <>
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 4.5v5.25m0 0h-5.25m5.25 0L3.75 3.75M9 19.5v-5.25m0 0h-5.25m5.25 0L3.75 20.25M15 4.5v5.25m0 0h5.25m-5.25 0L20.25 3.75M15 19.5v-5.25m0 0h5.25m-5.25 0L20.25 20.25" />
          </svg>
          退出全屏
        </>
      ) : (
        <>
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
          </svg>
          全屏预览
        </>
      )}
    </button>
  );
}
