/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"],
        cabinet: ["Cabinet Grotesk", "sans-serif"],
      },
      colors: {
        eggshell: "#f5f5f5",
        ghost: "#F8F8FF",
        richBlack: "#172D2D",
        lakeBlue: "#748CAB",
        prussianBlue: "#1D2D44",
        paynesGrey: "#3E5C76",
        eerieBlack: "#172D2D",
        mainLight: "#F5F5F5",
        mainDark: "#111827",
      },
    },
  },
  plugins: [],
};
