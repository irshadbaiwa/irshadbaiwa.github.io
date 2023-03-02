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
        primary1: '#A95FA7', // purple (light)
        primary2: '#7461B4', // purple (dark)
        light: 'rgba(220,180,255,0.12)',
      },
    },
  },
  plugins: [],
}
