/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F7FBFC',
        secondary: '#D6E6F2',
        tertiary: '#a3c2d6',
        quaternary: '#769FCD',
      },
    },
  },
  plugins: [],
};
