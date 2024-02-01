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
        "source-code-pro": ["Source Code Pro", "monospace"],
      },
      boxShadow: {
        blue: "0px 0px 100px 30px rgb(0,121,255, 0.7)",
      },
    },
  },
  plugins: [],
};
