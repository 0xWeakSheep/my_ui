import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-base": "#070909",
        "bg-elevated": "#0d1112",
        "text-primary": "#f4efe3",
        "text-secondary": "rgba(244, 239, 227, 0.68)",
        "text-tertiary": "rgba(244, 239, 227, 0.46)",
        "accent-gold": "#d9a13a",
        "accent-amber": "#f2c46d",
        "accent-sky": "#648899",
        "border-subtle": "rgba(244, 239, 227, 0.18)",
        "border-strong": "rgba(244, 239, 227, 0.32)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "monospace",
        ],
      },
      backdropBlur: {
        glass: "22px",
        "glass-strong": "26px",
      },
      animation: {
        "cloud-slide": "cloudSlide 34s linear infinite alternate",
        "light-breath": "lightBreath 7s ease-in-out infinite",
        "ring-pulse": "ringPulse 3.6s ease-in-out infinite",
        "wave-bars": "waveBars 2.8s ease-in-out infinite",
        "panel-float": "panelFloat 6s ease-in-out infinite",
      },
      keyframes: {
        cloudSlide: {
          "0%": { transform: "translateX(-10%)" },
          "100%": { transform: "translateX(10%)" },
        },
        lightBreath: {
          "0%, 100%": { opacity: "0.32" },
          "50%": { opacity: "0.62" },
        },
        ringPulse: {
          "0%, 100%": { transform: "rotate(-12deg) scale(1)" },
          "50%": { transform: "rotate(10deg) scale(1.04)" },
        },
        waveBars: {
          "0%, 100%": { transform: "scaleY(0.68)" },
          "50%": { transform: "scaleY(1.08)" },
        },
        panelFloat: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
