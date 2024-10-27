import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        tablet: `${800}px`,
        // => @media (min-width: 800px) { ... }
        desktop: `${1024}px`,
        // => @media (min-width: 1024px) { ... }
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        mukta: "var(--font-mukta)",
        "albert-sans": "var(--font-albert-sans)",
      },
      fontSize: {
        "14": "var(--s-14)",
        "16": "var(--s-16)",
        "18": "var(--s-18)",
        "20": "var(--s-20)",
        "24": "var(--s-24)",
        "30": "var(--s-30)",
        "35": "var(--s-35)",
        "40": "var(--s-40)",
        "45": "var(--s-45)",
        "50": "var(--s-50)",
        "60": "var(--s-60)",
        "80": "var(--s-80)",
        "100": "var(--s-100)",
      },
    },
  },
  plugins: [],
}
export default config
