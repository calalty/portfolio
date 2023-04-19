/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.tsx"],
  theme: {
    extend: {
      flex: {
        0: "0 0 100%",
      },
    },
  },
};
