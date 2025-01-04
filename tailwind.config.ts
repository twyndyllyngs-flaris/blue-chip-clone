import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-primary': '#03193a', 
        'theme-secondary': '#12294a',
        'button-primary': "#12294a",
        'button-secondary': "#01af70",
        'text-secondary': '#cad3e1',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        'bottom-primary': '0 9px 35px rgba(3, 25, 58, 0.4)',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true, // Ensure preflight styles are included
  },
} satisfies Config;
