/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'gray-bar': '#EEE',
        'notify-color':'#D9D9D9',
        "primary": "#E60000",
        "secondary": "#EEEEEE",
      },
      transitionProperty: {
        'width': 'width'
    },

    },
    fontFamily: {
      Manrope: ["Manrope", "sans-serif"],
    },
    container: {
      center: true,
      margin:'1%',

    },
    screens: {
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
