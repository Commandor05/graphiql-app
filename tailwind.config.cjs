/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: '#e10098',
      'primary-background': '#171e26',
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
