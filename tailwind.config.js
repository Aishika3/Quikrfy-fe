/** @type {import('tailwindcss').Config} */
export default {
  content: ["/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#ddc8ff",
          normal: "#ba91ff",
          dark: "#871CCA",
        },
      },
      screens: {
        lg: { min: "1023px" },
      },
    },
  },
  plugins: [],
};
