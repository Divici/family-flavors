/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'black': '#0C0C0C',
        'grey': '#AAAAAA',
        'white': '#FFFFFF',
        'dark-bg': "#24272e",
        'dark-alt': '#2c2f38',
        'orange': "#fe7c3a"
      },
    },
  },
  plugins: [],
}

