import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        void: "#080c14",
        cyan: "#00e5ff",
        violet: "#9d6fff",
        warm: "#f0f0f0"
      },
      fontFamily: {
        body: ["var(--font-inter)", "Inter", "sans-serif"],
        mono: ["var(--font-space-mono)", "Space Mono", "monospace"]
      },
      boxShadow: {
        glow: "0 0 42px rgba(0, 229, 255, 0.22)",
        violet: "0 0 46px rgba(157, 111, 255, 0.2)"
      },
      backgroundImage: {
        mesh: "radial-gradient(circle at 20% 20%, rgba(0, 229, 255, 0.16), transparent 28%), radial-gradient(circle at 80% 0%, rgba(157, 111, 255, 0.14), transparent 26%), linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
        noise: "linear-gradient(135deg, rgba(255,255,255,0.07), transparent 34%), radial-gradient(circle at 80% 20%, rgba(0,229,255,0.1), transparent 24%)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" }
        },
        pulseRing: {
          "0%, 100%": { boxShadow: "0 0 24px rgba(0,229,255,0.32)" },
          "50%": { boxShadow: "0 0 64px rgba(157,111,255,0.34)" }
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(330%)" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseRing: "pulseRing 4s ease-in-out infinite",
        scan: "scan 5s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
