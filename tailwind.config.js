/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        text: '#eaf5e0',
        background: '#000000',
        primary: '#90cc5c',
        secondary: '#070c04',
        accent: '#83c549',
        facebook: '#070c04',
        //2
        textLight: '#030812',
        backgroundLight: '#e4ecfb',
        primaryLight: '#b3b6c2',
        secondaryLight: '#ffffff',
        accentLight: '#947a7f',
        facebookLight: '#070c04',
      },
      fontFamily: {
        nunito: ['Nunito', 'system-ui'],
      },
      backgroundImage: {
        me: "url('./src/assets/images/me.png')",
        realMe: "url('./src/assets/images/me-nobg.png')",
        coder: "url('./src/assets/images/coder.png')",
      },
    },
  },
  plugins: [],
};
