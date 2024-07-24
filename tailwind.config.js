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
        softBlack: {
          DEFAULT: '#4c4c4c',
          1: '#303030'
        }
      },
      boxShadow: {
        evenly: '1px -2px 22px -10px rgba(0,0,0,0.89)'
      }
    },
  },
  plugins: [],
}
