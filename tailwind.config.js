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
        'safe-top': 'calc(var(--tg-safe-area-inset-top, 0px) + var (--tg-content-safe-area-inset-top, 0px))',
        'safe-bottom': 'var(--tg-safe-area-inset-bottom)',
        'safe-left': 'var(--tg-safe-area-inset-left)',
        'safe-right': 'var(--tg-safe-area-inset-right)',
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