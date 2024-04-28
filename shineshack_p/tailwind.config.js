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
        highlight: '#ac472d', //red
        
        tbase: '#39492d', //green
        greenLight: '#6f9f9d', //blue/green
        greenlightbg: '#eaf1f0', //liiiiiight green for cards
        greenDefault: '#286F6C',
        
        
        text:'#1f1f1f',
        textlight:'#f5f5f5',
        cardBg:'#f5f5f5', //main bg
        bgBase: '#e3dfde ',
        greenDark: '#1c4f4d',

        tableBg:'#ece7da', //-
        buttons:'#b15147',
        mainbg:'#e2d6c9',
      },
    },
  },
  plugins: [],
};

// #63686f
//#ecebe7
//#AFBDB8
//#494d4c