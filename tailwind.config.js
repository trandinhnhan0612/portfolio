/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#38bdf8",
        colorButton1: "#1fa2ff",
        colorButton2: "#12d8fa",
        headingColor: "#ffffff",
        smallTextColor: "#ffffff",
        hoverIconColor: "#0077B5",
      },
    },
  },
  plugins: [],
};
