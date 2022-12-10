/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#162644",
      },
      minWidth: {
        m150: "150px",
      },
    },
  },
  plugins: [],
}
