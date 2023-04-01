/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#8873EF",
        headingColor: "#081E21",
        smallTextColor: "#193256",
        facebookColor: "#3B5998",
        githubColor: "#171515",
        linkedinColor: "#0077B5",
      },
    },
  },
  plugins: [],
};
