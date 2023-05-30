/** @type {import('tailwindcss').Config} */
module.exports = {
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
        softOrange: "hsl(35,77%,62%)",
        softRed: "hsl(5,85%,63%)",
        offWhite: "hsl(36,100%,99%)",
        grayishBlue: "hsl(233, 8%, 79%)",
        darkGrayishBlue: "hsl(236,13%,42%)",
        darkBlue: "hsl(240, 100%, 5%)",
      },
    },
  },
  plugins: [],
};
