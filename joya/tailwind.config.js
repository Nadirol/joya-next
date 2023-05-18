/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'container': 'min(1200px, 100% - 2rem)',
        'header': 'min(1200px, 100%)',
        'paragraph': 'min(50rem, 100% - 4rem)',
        'sidenav': 'min(30rem, 100% - 4rem)',
        'input-field': 'min(320px, 100%)',
        'input-field-md': 'min(420px, 100%)',
        'form': 'min(570px, 100% - 4rem)',
        'price-chart': 'min(1080px, 100% - 4rem)',
      },
      fontFamily: {
        'plus-jakarta': "'Plus Jakarta Sans', sans-serif;"
      },
      colors: {
        ...colors,
        'primary-extra-light': 'rgba(208, 235, 242, 1)',
        'primary-light': 'rgba(149, 197, 209, 1)',
        'primary-regular': 'rgba(84, 132, 144, 1)',
        'primary-dark': 'rgba(60, 96, 105, 1)',

        'neutral-100': 'rgba(250, 250, 250, 1)',
        'neutral-300': 'rgba(240, 241, 242, 1)',
        'neutral-500': 'rgba(186, 194, 198, 1)',
        'neutral-600': 'rgba(154, 158, 166, 1)',
        'neutral-700': 'rgba(103, 105, 109, 1)',
        'neutral-800': 'rgba(72, 71, 71, 1)',
        
        'filter-dark': 'rgba(0, 0, 0, 0.4)',
        'filter-light': 'rgba(240, 240, 240, 0.1)',
      },
      boxShadow: {  
        'button': '0px 0px 2px rgba(0, 0, 0, 0.25)',
        'button-semibold': '1px 1px 4px rgba(0, 0, 0, 0.25)',
        'card': '1px 1px 1px rgba(0, 0, 0, 0.25)',
        'card-semibold': '1px 2px 2px rgba(0, 0, 0, 0.25)',
        'card-extrasemibold': '1px 2px 6px rgba(0, 0, 0, 0.25)',
        'card-bold': '0px 1px 6px rgba(0, 0, 0, 0.25)',
        'even': '0px 0px 3px rgba(0, 0, 0, 0.25)'
      },
      gridTemplateColumns: {
        'categories': '280px 1fr',
        'category-row-1': '420px 1fr',
        'category-row-2': '1fr 320px',
        'contact': '408px 1fr',
        'footer': '1fr 2fr',
        'details': '6fr 4fr',
        'details-md': '7fr 3fr'
      },
      screens: {
        '-xl': { 'max': '1279px' } ,
        '-md': { 'max': '767px' } ,
        '-xs': { 'max': '300px' } ,
      },
      aspectRatio: {
        '5/2': '5 / 2',
      },
      transitionProperty: {
        'navlink': 'width',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/line-clamp'),
    // ...
  ]
}
