module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridAutoRows: {
        '500': '500px',
      },
      boxShadow: {
        'cardInner': 'inset 0 0 0 4px rgba(255,255,255,.5)',
      },
      borderRadius: {
        '2rem': '2rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
