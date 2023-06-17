/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: [
    './src/**/*.{jsx,html }'
  ],
  theme: {
    extend: {fontFamily: {
      kanit: ['kanit', 'sans-serif'],
      bebasn: ['Bebas Neue', 'sans-serif'],
    },},
  },
     
  plugins: [],
}

