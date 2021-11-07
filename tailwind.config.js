module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        jetbrains: ["JetBrains Mono"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
