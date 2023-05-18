/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",'./index.html',],
  theme: {
    fontFamily: {
      sans: ['Red Hat Display', 'sans-serif'],
    },
    extend: {
      colors: {
        // Using modern `hsl`
        White: 'hsl(0, 0%, 100%)', 
        PaleBlue: 'hsl(225, 100%, 94%)',
        BrightBlue: 'hsl(245, 75%, 52%)',
        VeryPaleBlue: 'hsl(225, 100%, 98%)',
        DesaturatedBlue: 'hsl(224, 23%, 55%)',
        DarkBlue: 'hsl(223, 47%, 23%)',
      },
    },
  },
  plugins: [],
}