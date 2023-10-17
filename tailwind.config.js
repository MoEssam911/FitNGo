/** @type {import('tailwindcss').Config} */
export default {

  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],

  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E60000",
        dark: "#3A3A3A",
        secondary: "#EEEEEE",
        'notify-color':'#D9D9D9',
      },
      transitionProperty: {
        width: "width",
      },
    },
    backgroundImage:{
'ourShop':"url('./src/assets/Images/08f1c52293c3de74e6874e9dbc83aceb.png')"
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
      margin:'1%',

    },
    screens: {
      'sm': '640.999999px',  // Small screens
      'md': '768.999999px',  // Medium screens
      'lg': '1024.999999px', // Large screens
      'xl': '1280.999999px', // Extra-large screens
      "2xl": "1536.999999px",
    },
  },

  // plugins: [
  //   require('flowbite/plugin')
  // ],

}



