import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#17201a",
        paper: "#f6f8f4",
        line: "#d8ded5",
        signal: "#157f62",
        amber: "#c47a1c",
        berry: "#9f3a55",
      },
      boxShadow: {
        soft: "0 18px 60px rgba(23, 32, 26, 0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
