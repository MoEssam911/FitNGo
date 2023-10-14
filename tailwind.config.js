/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
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
      center: true,
      padding: "2rem",
    },

  },
  plugins: [
    require('flowbite/plugin')
  ],
}

