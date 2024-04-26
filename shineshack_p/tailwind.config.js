/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f5f5f5',
        highlight: '#39492d',
        bgBase: '#f5f5f5',
        tbase: '#39492d',
      },
    },
  },
  plugins: [],
};

// #63686f
//#ecebe7
//#AFBDB8
//#494d4c