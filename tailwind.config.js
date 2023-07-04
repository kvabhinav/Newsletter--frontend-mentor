/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ['400', '700']
      },
      colors: {
        tomato: '#FF6257',
        darkSlateGrey: '#242742',
        charcolGrey: '#36384E',
        grey: '#9294A0'
      }
    },
    screens: {
      sm: '375px',
      md: '960px',
      lg: '1440px'
    }
  },
  plugins: [],
}

