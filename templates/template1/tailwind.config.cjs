/** @type {import('tailwindcss').Config} */

const config = require("./config.json");

// Set default DaisyUI theme to "light" in case of an invalid theme
switch (config.theme) {
  case "light":
  case "dark":
  case "cupcake":
  case "bumblebee":
  case "emerald":
  case "corporate":
  case "synthwave":
  case "retro":
  case "cyberpunk":
  case "valentine":
  case "halloween":
  case "garden":
  case "forest":
  case "aqua":
  case "lofi":
  case "pastel":
  case "fantasy":
  case "wireframe":
  case "black":
  case "luxury":
  case "dracula":
  case "cmyk":
  case "autumn":
  case "business":
  case "acid":
  case "lemonade":
  case "night":
  case "coffee":
  case "winter":
    break;

  default:
    config.theme = "light";
}

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [config.theme],
  },
};
