/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#3AC183",
        orange: "#87BF38",
        backgr: "#858788",
        greys: "#ACACAC",
        errors: "#FB6450",
        menu: "#393D42",
        sidebar: "#2A2F33",
        pickedmenu: "#F55661",
        cardtext: "#959595",
      },
    },
  },
  plugins: [],
}
