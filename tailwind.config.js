// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 1. Definiamo i fotogrammi chiave (keyframes) dell'animazione
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
      },
      // 2. Registriamo la nostra animazione per poterla usare come classe
      animation: {
        'fade-in-up': 'fade-in-up 0.7s ease-out forwards',
      },
    },
  },
  plugins: [],
}