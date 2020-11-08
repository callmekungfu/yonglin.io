const defaultTheme = require('tailwindcss/defaultTheme');

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
    },
    fontFamily: {
      display: ['Interstate', ...defaultTheme.fontFamily.sans],
      body: ['Interstate', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        'accent-1': '#333',
      },
    },
  },
  variants: {},
  plugins: [],
};
