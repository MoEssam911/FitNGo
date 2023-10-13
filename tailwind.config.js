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
      padding: {
        DEFAULT: "2rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
      center: true,
    },
    screens: {
      'sm': '640px',  // Small screens
      'md': '768px',  // Medium screens
      'lg': '1024px', // Large screens
      'xl': '1280px', // Extra-large screens
    },
  },
  plugins: [],
};
