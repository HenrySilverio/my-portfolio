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
        secondary: "#f5f5f5",
        darkText: "#525252",
        lightText: "#ffffff",
      },
    },
  },
  plugins: [],
} satisfies Config;
