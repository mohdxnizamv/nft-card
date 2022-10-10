/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        "soft-blue": "hsl(215, 51%, 70%)",
        cyan: "hsl(178, 100%, 50%)",
        "dark-blue": {
          "main-bg": "hsl(217, 54%, 11%)",
          "card-bg": "hsl(216, 50%, 16%)",
          line: "hsl(215, 32%, 27%)",
        },
      },
    },
  },
  plugins: [],
};
