/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'ms': '720px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
