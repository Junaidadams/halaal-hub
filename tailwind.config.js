/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        eggshell: "#F0EBD8",
        richBlack: "#0D1321",
        lakeBlue: "#748CAB",
        prussianBlue: "#1D2D44",
        paynesGrey: "#3E5C76",
        eerieBlack: "#1F201D",
      },
    },
  },
  plugins: [],
};
