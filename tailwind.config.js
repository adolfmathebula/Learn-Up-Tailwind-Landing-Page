/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      'sm': '480px',
      // => c { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '976px',
      'xl': '1440px',
      '2xl': '1536px',
     
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'back': '#000000',
      'main':'#1e293b',
      'mainlight':'#e2e8f0',
      'maintransparent': 'rgba(30, 41, 59, 0.7)',
      'mainhover': '#155e75',
      'blue': '#0284c7',
      'lightgray':'#a1a1a1',
      'orange':'#ff8c00',
      'red': "red",
      'darkred':'rgb(141, 22, 22)'

    },
    extend: {},
  },
  plugins: [],
}
