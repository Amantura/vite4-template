// const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/**/*.{vue,js,jsx}',
    './index.html'
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#21222B',
      white: '#FFFFFF',
      accent: {
        1: '#FDCC36',
        2: '#FDD65D'
      },
      disable: '#C0C0C0'
    },
    extend: {},
  },
  plugins: [],
}
