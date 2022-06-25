/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
        "primary": "#4689ab",
        "secondary": "#0b9be3",
        "accent": "#c7005d",
        "neutral": "#25384f",
        "base-100": "#283954",
        "info": "#04a9c9",
        "success": "#0cad27",
        "warning": "#edac07",
        "error": "#ad0309",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
}
