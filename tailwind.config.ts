import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'cgreendark': '#003B3E',
        'cgreenlight': '#01DC82',
      },
      fontFamily: {
        'inter-tight': ['var(--font-inter-tight)', ...(fontFamily.sans as string[])],
      },
    },
  },
  plugins: [], 
} satisfies Config;

export default config;