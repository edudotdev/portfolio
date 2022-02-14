module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridAutoRows: {
        '500': '500px',
        '400': '400px',
        '300': '300px',
      },
      boxShadow: {
        'cardInner': 'inset 0 0 0 4px rgba(255,255,255,.5)',
      },
      borderRadius: {
        '2rem': '2rem',
      },
      fontSize: {
        '20xl': '20rem',
      },
      height: {
        '100': '26rem',
        '102': '28rem',
      },
      width: {
        '100': '26rem',
        '102': '29rem',
      },
      rotate: {
        '90g': '-90deg',
      },
      scale: {
        '60': '.6',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
