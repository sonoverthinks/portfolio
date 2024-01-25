/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      screens: {},
      colors: {
        light: {
          "ghost-white": "#f6f8ff",
          blue: "#0079ff",
          "teal-blue": "#4b6a9b",
          charcoal: "#2b3442",
        },
        dark: {
          blue: "#0079ff",
          "zodiac-blue": "#1e2a47",
          mirage: "#141d2f",
        },
        neutral: {
          whisper: "#EAEAEA",
          gray: "#b3b3b3",
          nickel: "#727472",
          bistre: "#372822",
        },
        typo: {},
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        "space-mono": ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
