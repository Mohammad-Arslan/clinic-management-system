import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f2f3ff",
          100: "#e8ebff",
          500: "#6f72ff",
          600: "#5e5ff0",
          900: "#1d1f52"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(96, 120, 200, 0.15)"
      }
    }
  },
  plugins: []
};

export default config;
