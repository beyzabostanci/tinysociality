/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Raleway:['"Raleway"', "sans-serif"],
        Barlow:['"Barlow"', "sans-serif"],
      },
      colors: {
        green: "#3AC183",
        orange: "#F7BF38",
        backgr: "#858788",
        generalbg:"#F5F7F8",
        blues: "#8BC3F4",
        greys: "#ACACAC",
        errors: "#FB6450",
        menu: "#393D42",
        sidebar: "#2A2F33",
        pickedmenu: "#F55661",
        cardtext: "#959595",
        logo: "#31363B",
      },
    },
  },
  plugins: [],
}
