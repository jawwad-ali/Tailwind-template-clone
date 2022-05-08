const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ], 
  theme: {
    // colors: {
    //   "blueGray": "#334155 ",
    //   black: colors.black,
    //   white: colors.white,
    //   gray: colors.gray,
    //   emerald: colors.emerald,
    //   indigo: colors.indigo,
    //   yellow: colors.yellow,
    // },
    colors: {
      "blueGray": "#334155 ",
      ...colors,
    },
    extend: {},
  },
  plugins: [],
}