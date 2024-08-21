/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      rubik: ["Rubik", "sans-serif"],
      Helvetica: ["Helvetica", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [],
};
