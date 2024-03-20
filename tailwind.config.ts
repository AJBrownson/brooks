import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "big": "url('/gradient-bg.svg')",
        "small": "url('/grad.svg')",
      },
      fontFamily: {
        orbitron: ["var(--font-orbitron)"],
        space: ["var(--font-space_grotesk)"],
      },
    },
    animation: {
      'infinite-scroll': "infinite-scroll 80s linear infinite",
    },
    keyframes: {
      'infinite-scroll': {
        from: { transform: 'translateX(0)' },
        to: { transform: 'translateX(-100%)' },
      },
    },
  },
  plugins: [],
};
export default config;
