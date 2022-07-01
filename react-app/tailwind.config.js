/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-mode="dark"]'],
  daisyui: {
    themes: [
      {
        mytheme: {
        "primary": "#1f2937",
        "secondary": "#6118ab",
        "accent": "#fa008e",
        "neutral": "#f3f4f6",
        "base-100": "#d1d5db",
        "info": "#04a9c9",
        "success": "#0cad27",
        "warning": "#edac07",
        "error": "#ad0309",
        },
      },
    ],
  },
  plugins: [require('autoprefixer'), require("daisyui")],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
}
