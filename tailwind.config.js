/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/index.html", "./src/templateScripts/*.js"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#162644",
        darkPurple: "#430751",
        grayBlue: "#97A2C9",
        darkLilac: "#63056D",
      },
      minWidth: {
        m150: "150px",
        m250: "250px",
      },
      height: {
        120: "120px",
      },
      screens: {
        sm: "500px",
        preLg: "900px"
      },
    },
  },
  plugins: [],
}
