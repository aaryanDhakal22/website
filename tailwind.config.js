/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "bprimary": '#373b41',
        "bsecondary":'#2b2f34',
        "fprimary":"#ac94f4",
        "fsecondary":'#9e9e9e',
        "kwhite":"#fcfcfd"
      },
      fontSize: {
        '2xs':"0.5rem"
      }
    },
  },
  plugins: [],
}
