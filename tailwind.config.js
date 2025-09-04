// eslint-disable-next-line no-undef
const plugin = require('tailwindcss/plugin'); 

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tic-tac': {
          'gold-light': '#f1d246', // rgba(241, 210, 70, 0.98)
          'gold': '#fab067',        // rgba(250, 176, 103, 0.87)
          'title': '#3f3b00',       // Title color
          'container-dark': '#383624', // Container gradient start
          'container-darker': '#282617', // Container gradient end
          'player-active': '#f6e35a',   // Active player border
          'player-hover': '#f8ca31',    // Hover color
          'player-text': '#c3ba78',     // Player button text
          'player-name': '#e1dec7',     // Player name color
          'player-input': '#46432f',    // Player input background
          'board-square': '#aca788',    // Game board squares
          'gameover-bg': 'rgba(40, 38, 23, 0.95)', // Game over background
          'gameover-title': '#fcd256',  // Game over title
          'gameover-text': '#e1dec7',   // Game over text
          'log-text': '#3f3b00',        // Log text color
          'log-bg': '#3f3b00',          // Log highlighted background
        }
      },
      fontFamily: {
        // === FONT ORIGINALI (ATTUALMENTE ATTIVI) ===
        'caprasimo': ['Caprasimo', 'cursive'],
        'roboto-slab': ['Roboto Slab', 'serif'],

        // === OPZIONE 1: INTER + JETBRAINS MONO (RACCOMANDATO) ===
        // Uncomment le righe sotto e commenta quelle sopra per usare Inter
        // 'sans': ['Inter', 'system-ui', 'sans-serif'],
        // 'mono': ['JetBrains Mono', 'Consolas', 'monospace'],
        // 'display': ['Inter', 'system-ui', 'sans-serif'], // Per titoli grandi

        // === OPZIONE 2: POPPINS + FIRA CODE (FRIENDLY & MODERNO) ===
        // Uncomment le righe sotto per usare Poppins
        // 'sans': ['Poppins', 'system-ui', 'sans-serif'],
        // 'mono': ['Fira Code', 'Consolas', 'monospace'],
        // 'display': ['Poppins', 'system-ui', 'sans-serif'], // Per titoli

        // === OPZIONE 3: DM SANS + SPACE MONO (CLEAN & PROFESSIONALE) ===
        // Uncomment le righe sotto per usare DM Sans
        // 'sans': ['DM Sans', 'system-ui', 'sans-serif'],
        // 'mono': ['Space Mono', 'Consolas', 'monospace'],
        // 'display': ['DM Sans', 'system-ui', 'sans-serif'], // Per titoli

        // === MAPPING PER UTILIZZO EASY ===
        // Uncomment le righe sotto per attivare i font mappati
        // 'heading': ['system-ui', 'sans-serif'],     // Per H1, H2, H3 
        // 'body': ['system-ui', 'sans-serif'],        // Per paragrafi 
        // 'nav': ['system-ui', 'sans-serif'],         // Per navigazione 
        // 'code': ['ui-monospace', 'monospace'],      // Per codice/tech 
        // 'display': ['system-ui', 'sans-serif'],     // Per titoli grandi

        // === VERSIONI ATTIVE CON I FONT ===
        // Per Inter: Decommenta e sostituisci le righe sopra
        'heading': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
        'nav': ['Inter', 'system-ui', 'sans-serif'], 
        'code': ['JetBrains Mono', 'Consolas', 'monospace'],
        'display': ['Inter', 'system-ui', 'sans-serif'],

        // Per Poppins: Decommenta e sostituisci le righe sopra
        // 'heading': ['Poppins', 'system-ui', 'sans-serif'],
        // 'body': ['Poppins', 'system-ui', 'sans-serif'],
        // 'nav': ['Poppins', 'system-ui', 'sans-serif'],
        // 'code': ['Fira Code', 'Consolas', 'monospace'],
        // 'display': ['Poppins', 'system-ui', 'sans-serif'],

        // Per DM Sans: Decommenta e sostituisci le righe sopra  
        // 'heading': ['DM Sans', 'system-ui', 'sans-serif'],
        // 'body': ['DM Sans', 'system-ui', 'sans-serif'],
        // 'nav': ['DM Sans', 'system-ui', 'sans-serif'],
        // 'code': ['Space Mono', 'Consolas', 'monospace'],
        // 'display': ['DM Sans', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'tic-tac-pattern': "radial-gradient(circle at top, rgba(241, 210, 70, 0.98), rgba(250, 176, 103, 0.87)), url('/bg-pattern-dark.png')",
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-from-left': {
          '0%': { opacity: '0', transform: 'translateX(-30%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'pulse-text': {
          '0%': { color: '#e1dec7' },
          '50%': { color: '#9f9d83' },
          '100%': { color: '#e1dec7' },
        },
        'pulse-text-size': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
        'pulse-border': {
          '0%': { borderColor: '#f6e35a', boxShadow: '0 0 0 0 rgba(246, 227, 90, 0.4)' },
          '50%': { borderColor: '#f8c031', boxShadow: '0 0 0 0.5rem rgba(248, 165, 49, 0)' },
          '100%': { borderColor: '#f6e35a', boxShadow: '0 0 0 0 rgba(246, 227, 90, 0)' },
        },
        'pop-in': {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '80%': { transform: 'scale(1.1)', opacity: '1' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.7s ease-out forwards',
        'slide-in-from-left': 'slide-in-from-left 1s cubic-bezier(0.075, 0.82, 0.165, 1) forwards',
        'pulse-text': 'pulse-text 2s infinite',
        'pulse-text-size': 'pulse-text-size 2s infinite ease-out',
        'pulse-border': 'pulse-border 2s infinite ease-in-out',
        'pop-in': 'pop-in 0.5s cubic-bezier(0.68, -0.55, 0.65, 0.52) forwards',
      },
      boxShadow: {
        'glow': '0 0 15px 0px rgba(255, 255, 255, 0.4)',
        'tic-tac-container': '0 0 20px rgba(0, 0, 0, 0.5)',
        'tic-tac-button': '0 0 8px rgba(255, 187, 0, 0.4)',
        'tic-tac-button-hover': '0 0 20px rgba(255, 187, 0, 0.8)',
      },
      textShadow: {
        'glow': '0 0 5px rgba(255, 255, 255, 0.6), 0 0 20px rgba(255, 255, 255, 0.4)',
        'tic-tac-title': '0 0 12px rgba(0, 0, 0, 0.7)',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
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