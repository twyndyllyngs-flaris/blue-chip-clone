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
      backgroundImage: {
        'violet-gradient': 'linear-gradient(180deg, #7b61ff, #8337ff 102.09%)',
      },
      screens: {
        'xsm': '520px',
        '2xsm': '480px',
        '3xsm': '360px',
      },
      scrollbar: {
        hide: {
          "scrollbar-width": "none",  // Hide the scrollbar
        },
      },
      gridTemplateColumns: {
        'auto-min': 'min-content',
      },
      keyframes: {
        ping: {
          '75%, 100%': {
            transform: 'scale(1.8)', // Custom scale
            opacity: '0',
          },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        ping: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        scroll: 'scroll 20s linear infinite',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true, // Ensure preflight styles are included
  },
} satisfies Config;
