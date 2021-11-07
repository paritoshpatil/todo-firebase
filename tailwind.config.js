module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        jetbrains: ["JetBrains Mono", "monospace"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        lgray: {
          light: "#E9ECEF",
          dark: "#495057",
          darkest: "#343A40",
          DEFAULT: "#6C757D",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
