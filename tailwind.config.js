// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#9955ff',
        secondary: '#00fff7',
        accent: '#ff4ecf',
        bgdark: '#0a0a0a',
        bggrad: '#1a1a2e',
      }
    },
  },
  plugins: [],
}
