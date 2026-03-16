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
        // Tokens de color del sistema ReciliencIA — paleta profesional azul
        brand: {
          negro: "#0D1117",            // fondo principal oscuro
          "negro-suave": "#111827",    // secciones alternas (gray-900)
          morado: "#0066FF",           // azul primario (acción principal)
          "morado-neon": "#3B82F6",    // azul medio (highlights)
          "morado-oscuro": "#0A2540",  // azul noche (dark navy)
          "azul-electrico": "#0066FF", // alias azul primario
          "azul-neon": "#00D4FF",      // cian acento
          "azul-oscuro": "#0A2540",    // alias dark navy
          gris: "#6b7280",
          "gris-claro": "#94a3b8",
          blanco: "#F8FAFC",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradiente-hero": "linear-gradient(135deg, var(--tw-gradient-stops))",
        "gradiente-azul":
          "linear-gradient(135deg, #0A2540 0%, #0066FF 50%, #00D4FF 100%)",
      },
      animation: {
        "pulso-neon": "pulsoNeon 2s ease-in-out infinite",
        "flotar": "flotar 3s ease-in-out infinite",
        "girar-lento": "girarLento 20s linear infinite",
      },
      keyframes: {
        pulsoNeon: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 102, 255, 0.4)" },
          "50%": { boxShadow: "0 0 40px rgba(0, 102, 255, 0.8)" },
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
