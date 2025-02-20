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
        primary: "#141414",
        secondary: "#FAF9F6", 
        darkText: "#525252",
        lightText: "#e3e3e3",
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