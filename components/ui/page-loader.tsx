"use client";

import { useState, useEffect } from "react";

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setIsLoading(false);

    if (document.readyState === "complete") {
      setIsLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-bg-base transition-opacity duration-500"
      style={{ opacity: isLoading ? 1 : 0, pointerEvents: isLoading ? "auto" : "none" }}
    >
      <div className="flex flex-col items-center gap-4"
        style={{ opacity: isLoading ? 1 : 0, transition: "opacity 0.3s ease" }}
      >
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-border-subtle border-t-accent-amber" />
        <p className="text-xs uppercase tracking-widest text-text-tertiary">Loading</p>
      </div>
    </div>
  );
}
