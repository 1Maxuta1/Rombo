/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: []
  },
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': 'inset 0 0 0 30px #ADD8E6',
      },
      fontFamily: {
        custom: ['Josefin Sans', 'Open Sans', 'sans'], 
      },
      colors: {
        'light-pink': '#f2f5eb',
        'light-purple': '#96a4c1',
        'medium-purple': '#624fa1',
        'dark-purple': '#322852',
      }
    },
  },
  plugins: [require("daisyui"), require('@tailwindcss/forms')],
}
