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
        greenlightbg: '#eaf1f0', //liiiiiight green
        greenDefault: '#286F6C',
        
        
        text:'#1f1f1f',
        textlight:'#f5f5f5',
        cardBg:'#f5f5f5',
        bgBase: '#e3dfde ',
        greenDark: '#1c4f4d',

        tableBg:'#ece7da',
        buttons:'#b15147',
        mainbg:'#e2d6c9',

        //new collors
        //основной цвет
        r1: '#B15147',
        r2: '#854F49',
        r3: '#732017',
        r4: '#D88077',
        r5: '#D89891',

        //цвет А фиол
        v1: '#4B3879',
        v2: '#41365B',
        v3: '#24124F',
        v4: '#8771BC',
        v5: '#9585BC',

        //цвет В зелень
        g1: '#B1A147',
        g2: '#857C49',
        g3: '#736517',
        g4: '#D8C977',
        g5: '#D8CD91',
      },
    },
  },
  plugins: [],
};

// #63686f
//#ecebe7
//#AFBDB8
//#494d4c