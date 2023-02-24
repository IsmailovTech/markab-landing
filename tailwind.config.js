/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          main: '#02AA7C',
        },
        gray: {
          line: '#DBDBDB',
        },
      },
    },
  },
  plugins: [],
}
