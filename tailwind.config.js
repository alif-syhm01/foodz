/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors";

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...colors,
      primary: "#04B90B",
      "neutral-1": "#141416",
      "neutral-2": "#23262F",
      "neutral-3": "#353945",
      "neutral-4": "#777E90",
      "neutral-5": "#B1B5C3",
      "neutral-6": "#E6E8EC",
      "neutral-7": "#F4F5F6",
      "neutral-8": "#FCFCFD",
      "color-text-1": "#04B90B",
      "color-text-2": "#EA8484",
      "color-text-3": "#106AAB",
      "color-text-4": "#F25178",
      "color-text-5": "#8D31E9",
      "color-text-6": "#DA9F0A",
      "color-text-7": "#26ACA0",
      "color-text-8": "#3304B9",
      "color-background-1": "#D3F9D5",
      "color-background-2": "#FCF1F1",
      "color-background-3": "#F1F7FC",
      "color-background-4": "#FCE5E9",
      "color-background-5": "#F6EEFD",
      "color-background-6": "#FCF6D8",
      "color-background-7": "#EDFCFB",
      "color-background-8": "#F2EFFD",
    },
    fontFamily: {
      alice: ["Alice", "serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      content: {
        "desktop-hero-background":
          "url('./src/assets/hero/desktop/desktop-hero-background.png')",
        "desktop-hero-sugar":
          "url('./src/assets/hero/desktop/desktop-hero-sugar.png')",
        "desktop-hero-chopstick":
          "url('./src/assets/hero/desktop/desktop-hero-chopstick.png')",
      },
    },
  },
  plugins: [],
};
