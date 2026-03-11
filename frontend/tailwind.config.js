/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#060d05',
          900: '#0e1a0c',
          800: '#1a2e17',
          700: '#263e22',
          600: '#3d5c35',
          500: '#4e6b42',
          400: '#6a8b5d',
          300: '#8aac7c',
          200: '#b3cca6',
          100: '#dce8d6',
          50:  '#f0f5ee',
        },
        cream: {
          50:  '#fdfcfa',
          100: '#f8f4ec',
          200: '#f2ebe0',
          300: '#e8dfd2',
          400: '#ddd1be',
          500: '#cdc0a8',
          600: '#b8a78b',
          700: '#9a8a6d',
          800: '#7a6e52',
          900: '#5a5238',
        },
        sand: '#c8bfae',
        charcoal: '#1a1a14',
        gold: {
          50:  '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#C9A84C',
          600: '#B8902A',
          700: '#92700A',
          800: '#713f12',
          900: '#422006',
        },
        building: {
          dark:  '#0a0a0a',
          gray:  '#1a1a1a',
          light: '#f5f5f0',
        }
      },
      fontFamily: {
        sans:    ['Inter', 'Noto Sans KR', 'system-ui', 'sans-serif'],
        serif:   ['Cormorant Garamond', 'Georgia', 'serif'],
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in':    'fadeIn 0.9s ease-in-out',
        'fade-up':    'fadeUp 0.9s ease-out',
        'slide-up':   'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.4s ease-out',
      },
      keyframes: {
        fadeIn:    { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        fadeUp:    { '0%': { transform: 'translateY(40px)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } },
        slideUp:   { '0%': { transform: 'translateY(30px)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } },
        slideDown: { '0%': { transform: 'translateY(-10px)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } },
      },
    },
  },
  plugins: [],
}
