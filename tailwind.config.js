/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#E60000",
        "secondary": "#EEEEEE",
      }
    },
    fontFamily: {
      Manrope: ['Manrope', 'sans-serif'],
    },
    container: {
      padding: "2rem",
      center: true,
    },

  },
  plugins: [],
}

