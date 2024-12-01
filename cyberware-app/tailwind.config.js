/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cybergray: '#323232', 
        cyberslate: '#2A2A2A',
        cyberorange: '#FF6F0F',
        cyberzinc: '#E6E6E6',
        cyberlightGray: '#A5A1A1'
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};