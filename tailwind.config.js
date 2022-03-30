module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridAutoRows: {
        '500': '500px',
        '400': '400px',
        '300': '300px',
        '200': '200px',
        '150': '150px',
        '100': '100px',
      },
      boxShadow: {
        'cardInner': 'inset 0 0 0 4px rgba(255,255,255,.5)',
      },
      borderRadius: {
        '2rem': '2rem',
      },
      fontSize: {
        '10xl': '10rem',
        '20xl': '20rem',
      },
      height: {
        '100': '26rem',
        '102': '28rem',
        '900': '900px',
        '1000': '1000px',
      },
      width: {
        '100': '26rem',
        '102': '29rem',
      },
      scale: {
        '40': '0.4',
        '60': '0.6',
      },
      fontFamily: {
        'jakarta': ['Jakarta'],
      },
      maxHeight: {
        'modal': 'calc(100vh )',
      },
      extend: {
        backdropBlur: {
          xs: '100px',
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
