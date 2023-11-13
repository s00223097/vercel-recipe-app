module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
    },
    colors: {
      background: "#16572a",
      primary: "#FFFFFF",
      secondary: "#9E9E9E",
      active: "#db8030",
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
