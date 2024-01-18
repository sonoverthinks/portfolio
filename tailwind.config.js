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
        primary: "#08D9D6",
        secondary: "#FF2E63",
        midnight: "#252A34",
        whisper: "#EAEAEA",

        neutral: {
          navy: "#1a202c",
          licorice: "#2d3748",
          lavenderGray: "#C1C3D2",
          gray: "#b3b3b3",
          nickel: "#727472",
        },
        typo: {
          bistre: "#372822",
        },

        lightBlue: "#4d5b7c",
        darkBlue1: "#24335a",
        darkBlue2: "#081b4b",
        darkBlue3: "hsl(240, 100%, 10%)",
        yellow: "#FFFF00",
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
