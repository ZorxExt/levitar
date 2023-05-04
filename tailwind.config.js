/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cuteBlack: { DEFAULT: "#181a1b" },
        cuteWhite: { DEFAULT: "#e8e6e3" },
      },
    },
  },
  plugins: [],
};
