/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        eggshell: "#F0EBD8",
        richBlack: "#0D1321",
        lakeBlue: "#748CAB",
        prussianBlue: "#1D2D44",
        paynesGrey: "#3E5C76",
      },
    },
  },
  plugins: [],
};
