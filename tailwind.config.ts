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
        "presale": "url('/presale-bg.svg')",
        "blur": "url('/blur.svg')",
        "navBlur": "url('/nav-blur.png')",
      },
      gradientColorStops: theme => ({
        'custom-gradient': {
          '0': '#0099FF',
          '25': '#00BBFF',
          '50': '#00D5E9',
          '75': '#00E8B9',
          '100': '#96F589',
        },
      }),
      fontFamily: {
        orbitron: ["var(--font-orbitron)"],
        space: ["var(--font-space_grotesk)"],
      },
    },
    animation: {
      'infinite-scroll': "infinite-scroll 20s linear infinite",
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
