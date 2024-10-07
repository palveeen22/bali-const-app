import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
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
};

export default config;