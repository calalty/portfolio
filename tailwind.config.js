/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.tsx",
    "./styles/**/*.ts",
  ],
  theme: {
    extend: {
      flex: {
        0: "0 0 100%",
      },
      backgroundImage: {
        hero: "url(../assets/cool-statue.png)",
        pulp: "url(../assets/pulp.png)",
        mates: "url(../assets/mates.png)",
      },
    },
    screens: {
      sm: { min: "640px" },
      md: { min: "876px" },
      lg: { min: "1024px" },
      xl: { min: "1200px" },
    },
  },
};
