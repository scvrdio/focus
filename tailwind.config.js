// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'screen-app': '400px',
      },
      fontFamily: {
        sans: ['CoFoWeather', 'sans-serif'],
        condensed: ['CoFoWeather Condensed', 'sans-serif'],
        normal: ['CoFoWeather Normal', 'sans-serif'],
      },
      padding: {
        'safe-top': 'env(--tg-safe-area-inset-top)',
        'safe-bottom': 'env(--tg-safe-area-inset-bottom)',
        'safe-left': 'env(--tg-safe-area-inset-left)',
        'safe-right': 'env(--tg-safe-area-inset-right)',
      },
    },
  },
  plugins: [function ({ addUtilities }) {
    addUtilities({
      '.no-scrollbar': {
        /* Hide scrollbar for Chrome, Safari and Opera */
        '&::-webkit-scrollbar': {
          display: 'none',
        },
        /* Hide scrollbar for IE, Edge and Firefox */
        '-ms-overflow-style': 'none',
        'scrollbar-width': 'none',
      },
    });
  },],
}