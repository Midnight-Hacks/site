module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'charcoal-black': '#201c1c',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
