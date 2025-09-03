const plugin = require('tailwindcss/plugin'); 

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.7s ease-out forwards',
      },
      boxShadow: {
        'glow': '0 0 15px 0px rgba(255, 255, 255, 0.4)',
      },
      textShadow: {
        'glow': '0 0 5px rgba(255, 255, 255, 0.6), 0 0 20px rgba(255, 255, 255, 0.4)',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),

    plugin(function({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}