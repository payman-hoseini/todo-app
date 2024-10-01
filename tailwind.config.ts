import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "background": "var(--background)",
        "todo-back": "var(--todo-back)",
        "complete" : "var(--complete)",
        "text-one": "var(--text-one)",
        "input": "var(--input)",
        "text-two": "var(--text-two)",
        "todo": "var(--todo)",
      },
      fontFamily: {
        Josefin : ["Josefin"]
      }
    },
  },
  plugins: [],
};
export default config;
