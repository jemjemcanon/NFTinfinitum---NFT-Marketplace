/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {
      colors: {
        'pale-sky': {
          DEFAULT: '#6B7280',
          50: '#E3E5E8',
          100: '#D8DADF',
          200: '#C2C5CC',
          300: '#ACB0BA',
          400: '#969BA7',
          500: '#7F8694',
          600: '#6B7280',
          700: '#515761',
          800: '#383C43',
          900: '#1E2024',
          950: '#121315'
        },
      }
    },
  },
  plugins: [],
}

