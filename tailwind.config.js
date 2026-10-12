/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        chocolate: {
          DEFAULT: '#593820',
          dark: '#432916',
          light: '#6e472a',
        },
        teddy: {
          DEFAULT: '#805735',
          dark: '#684528',
          light: '#9b6c45',
        },
        champagne: {
          DEFAULT: '#C7AD93',
          dark: '#b39578',
          light: '#dfcfbe',
          hairline: 'rgba(199, 173, 147, 0.45)',
        },
        ivory: {
          DEFAULT: '#F7F2EA',
          dark: '#ede5d8',
          light: '#faf7f2',
        },
        cream: {
          DEFAULT: '#FFFCF7',
          pure: '#ffffff',
          warm: '#fbf7ee',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        editorial: '0.18em',
        tightest: '-0.03em',
      },
      boxShadow: {
        'warm-sm': '0 2px 10px rgba(89, 56, 32, 0.04)',
        'warm-md': '0 8px 30px rgba(89, 56, 32, 0.06)',
        'warm-lg': '0 16px 40px rgba(89, 56, 32, 0.08)',
        'warm-hover': '0 20px 45px rgba(89, 56, 32, 0.12)',
      },
    },
  },
  plugins: [],
}
