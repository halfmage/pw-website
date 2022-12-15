const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: "class",
  content: ["./_site/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Compasse, system-ui, sans-serif'],
      },
      colors: {
        gray: colors.slate,
        text: '#4C545F',
        muted: '#4B798B',
        primary: '#009CD2',
        accent: '#FF7814',
        primaryLight: '#EFF6FF',
        primaryDark: "#00415A",
      },
    },
    container: {
      center: true,
    }
  },
  plugins: [],
}