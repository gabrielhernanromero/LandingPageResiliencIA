import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/componentes/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Tokens de color del sistema ResiliencIA
        brand: {
          negro: "#0a0a0f",
          "negro-suave": "#111118",
          morado: "#a855f7",
          "morado-neon": "#c084fc",
          "morado-oscuro": "#7c3aed",
          "azul-electrico": "#3b82f6",
          "azul-neon": "#60a5fa",
          "azul-oscuro": "#1d4ed8",
          gris: "#6b7280",
          "gris-claro": "#9ca3af",
          blanco: "#f9fafb",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradiente-hero": "linear-gradient(135deg, var(--tw-gradient-stops))",
        "gradiente-morado":
          "linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #3b82f6 100%)",
      },
      animation: {
        "pulso-neon": "pulsoNeon 2s ease-in-out infinite",
        "flotar": "flotar 3s ease-in-out infinite",
        "girar-lento": "girarLento 20s linear infinite",
      },
      keyframes: {
        pulsoNeon: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)" },
          "50%": { boxShadow: "0 0 40px rgba(168, 85, 247, 0.8)" },
        },
        flotar: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        girarLento: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
