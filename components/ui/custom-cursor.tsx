"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 检测是否为触摸设备
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHovering = false;
    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[role='button']") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest("select") ||
        target.closest("iframe") ||
        target.closest("label")
      ) {
        isHovering = true;
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[role='button']") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest("select") ||
        target.closest("iframe") ||
        target.closest("label")
      ) {
        isHovering = false;
      }
    };

    const animate = () => {
      // 圆点直接跟随
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;

      // 圆环平滑跟随
      const dx = mouseX - ringX;
      const dy = mouseY - ringY;
      ringX += dx * 0.15;
      ringY += dy * 0.15;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%) scale(${isHovering ? 1.8 : 1})`;

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* 隐藏桌面端默认光标 */}
      <style jsx global>{`
        @media (hover: hover) and (pointer: fine) {
          * {
            cursor: none !important;
          }
        }
        @media (hover: none) or (pointer: coarse) {
          .cursor-dot,
          .cursor-ring {
            display: none !important;
          }
        }
      `}</style>

      {/* 核心圆点 */}
      <div
        ref={dotRef}
        className="cursor-dot pointer-events-none fixed top-0 left-0 z-[9999] h-1.5 w-1.5 rounded-full bg-accent-amber"
        style={{ willChange: "transform" }}
      />

      {/* 外圈圆环 */}
      <div
        ref={ringRef}
        className="cursor-ring pointer-events-none fixed top-0 left-0 z-[9998] h-8 w-8 rounded-full border border-accent-gold/40 transition-[border-color] duration-300"
        style={{ willChange: "transform" }}
      />
    </>
  );
}
