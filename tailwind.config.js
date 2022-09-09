/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      pinkRauschAir: '#ff5a5f',
      cyanAir: '00A699',
      orangeAir: 'FC642D',
      darkGrayAir: '484848',
      darkerGrayAir: '767676',
    },

    fontFamily: {
      Roboto: ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
}