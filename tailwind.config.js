/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/sections/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary1: '#A663CC', // purple
        primary2: '#5d2f6a', // purple (darker a bit)
        light: 'rgba(220,180,255,0.12)',
      },
    },
  },
  plugins: [],
}
