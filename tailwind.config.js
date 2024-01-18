/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        'gray': ('0px 20px 60.571px 0px #E5E9F6'),
        'purple':('0px 20px 50px 0px rgba(39, 0, 124, 0.50)'),
      },
      fontFamily:{
        'Jost': ('"Jost", sans-serif'),
        'Inter': ('Inter'),
        'Konexy': ['"Konexy Personal Use"'],
        'Gilroy-Light': ('Gilroy-Light'),
        'Gilroy-Bold': ('Gilroy-Bold'),
      }
    },
  },
  plugins: [],
}

