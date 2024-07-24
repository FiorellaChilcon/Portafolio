import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        ...colors,
        softBlue: {
          DEFAULT: '#ECF0F1',
          1: '#EAEDEE'
        },
      }
    },
  },
  plugins: [],
}
