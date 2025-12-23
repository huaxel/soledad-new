/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./weddings.html",
    "./corporate.html",
    "./history.html",
    "./spaces.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cinzel"', 'serif'],
        sans: ['"Lato"', 'sans-serif'],
      },
      colors: {
        'hacienda-black': '#0a0a0a',
        'hacienda-dark': '#111111',
        'hacienda-gold': '#D4AF37', // Metallic gold
        'hacienda-gold-dim': '#8a7038',
        'hacienda-white': '#f5f5f5',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      letterSpacing: {
        'widest-xl': '0.3em',
      },
      fontSize: {
        '10xl': '10rem',
        'huge': '14rem',
      }
    },
  },
  plugins: [],
}
