/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1DB954',
        'primary-dark': '#1ED760',
        background: '#121212',
        'card-bg': '#181818',
        'text-primary': '#ffffff',
        'text-secondary': '#b3b3b3',
        'hover-bg': '#282828',
      },
      fontFamily: {
        spotify: [
          'Circular',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          '"Open Sans"',
          '"Helvetica Neue"',
          'sans-serif',
        ],
      },
      boxShadow: {
        card: '0 4px 10px rgba(0, 0, 0, 0.3)',
      },
      borderRadius: {
        'xl': '0.75rem',
      },
    },
  },
  plugins: [],
};
