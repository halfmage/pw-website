const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./_site/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
          'sans': ['Compasse, system-ui, sans-serif'],
      },
      colors: {
        gray: colors.slate,
        text: '#003248',
        muted: '#4B798B',
        primary: '#009CD2',
        accent: '#FF7814'
      },
    },
    container: {
      center: true,
    }
  },
  plugins: [],
}