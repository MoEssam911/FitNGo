/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E60000",
        dark: "#3A3A3A",  
        secondary: "#EEEEEE",
      },
      transitionProperty: {
        width: "width",
      },
    },
    fontFamily: {
      Manrope: ["Manrope", "sans-serif"],
    },
    container: {
      padding: "2rem",
      center: true,
    },
    screens: {
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
