const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      black: '#2b2929',
      indigo: {
        lighter: '#7396FE',
        default: '#275efe',
        darker: '#012FBA',
      },
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      gray: colors.trueGray,
      red: colors.rose,
      yellow: colors.amber,
      blue: colors.blue,
      green: colors.green,
      orange: colors.orange,
    },
    fontFamily: {
      display: ['Interstate', ...defaultTheme.fontFamily.sans],
      body: ['Interstate', ...defaultTheme.fontFamily.sans],
      sans: ['Interstate', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        'accent-1': '#333',
      },
    },
  },
  variants: {
    extend: {
      textOpacity: ['dark'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
};
