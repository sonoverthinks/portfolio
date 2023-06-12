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
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {},
      colors: {
        primary: "#08D9D6",
        secondary: "#FF2E63",
        midnight: "#252A34",
        whisper: "#EAEAEA",

        neutral: {
          navy: "#1a202c",
          gray: "#2d3748",
        },

        grayishBlue: "hsl(233, 8%, 79%)",
        lightBlue: "#4d5b7c",
        darkBlue1: "#24335a",
        darkBlue2: "#081b4b",
        darkBlue3: "hsl(240, 100%, 10%)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
