/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require('flowbite/plugin')],
};
