import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Fira Sans", "Arial", "sans-serif"],
      },
      colors: {
        background: "#0a0a0a", // Fundo principal (quase preto)
        primary: "#141414", // Preto mais suave para seções
        secondary: "#FAF9F6", // Branco suave para contraste
        accent: "#4F46E5", // Azul neon (pode ajustar a intensidade)
        glow: "#9333ea", // Roxo neon para efeitos de brilho
        darkText: "#A1A1AA", // Cinza claro para textos
        lightText: "#E3E3E3", // Branco para títulos e destaques
        gradientStart: "#1E1E2E", // Azul escuro para gradientes
        gradientEnd: "#15162C", // Azul mais escuro no fim
        customGray: {
          DEFAULT: "#7d7c7c",
          100: "#e0e0e0",
          200: "#c4c4c4",
          300: "#a9a9a9",
          400: "#8e8e8e",
          500: "#7d7c7c",
          600: "#6d6c6c",
          700: "#5d5c5c",
          800: "#4e4e4e",
          900: "#3f3f3f",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;