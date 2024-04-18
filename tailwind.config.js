/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-color": "#171720",
        "main-color": "#6751b9",
        "secondary-color": "rgb(4,255,74,100%)",
        "bg-cards": "#130f2a",
        tertiary: "#2b394c",
        pink: "#c75c9f",
      },
      screens: {
        tiny: "300px",
        pc: "2000px",
      },
    },
  },
  plugins: [],
};
