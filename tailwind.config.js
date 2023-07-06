/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Questrial', 'sans-serif'],
        logo: ['Caprasimo', 'cursive']
      },
      colors: {
        1: '#E5DECE',
        2: '#F0E7D6',
        3: '#F9E4C0',
        4: '#DCBDA1',
        5: '#CE9D73',
        6: '#F6DACA'
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true })
  ]
}
