/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'body': '#17171F',
        'selected-text': '#a3a3ff',
        'theme': '#3f3fff',
        'nav': '#4040f3',
        'secondary': '#9191a4',
        'badge': '#3f3f51',
        'input-border': '#565666',
        'input': '#2a2A35'
      },
      fontFamily: {
        'poppins': ["'Poppins'", 'sans-serif']
      }

    },
  },
  plugins: [],
}

