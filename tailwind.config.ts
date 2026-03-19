import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/componentes/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Tokens de color del sistema ResiliencIA — paleta profesional azul
        "brand-negro": "#0D1117",
        "brand-negro-suave": "#111827",
        "brand-morado": "#0066FF",
        "brand-morado-neon": "#3B82F6",
        "brand-morado-oscuro": "#0A2540",
        "brand-azul-electrico": "#0066FF",
        "brand-azul-neon": "#00D4FF",
        "brand-azul-oscuro": "#0A2540",
        "brand-gris": "#6b7280",
        "brand-gris-claro": "#94a3b8",
        "brand-blanco": "#F8FAFC",
      },
    },
  },
  plugins: [],
};

export default config;
