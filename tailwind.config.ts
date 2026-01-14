import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3A8DFF",
        secondary: "#6D28D9",
        dark: "#0A0A0F",
      },
    },
  },
  plugins: [],   // <— VERY IMPORTANT: NO PLUGINS
} satisfies Config;
