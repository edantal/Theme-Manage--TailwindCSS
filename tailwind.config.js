/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    theme: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        themeRed: 'hsl(12, 88%, 59%)',
        themeRedLight: 'hsl(12, 88%, 69%)',
        themeRedLightAccent: 'hsl(12, 88%, 95%)',
        themeRedPale: 'hsl(12, 100%, 96%)',
        themeBlue: 'hsl(228, 39%, 23%)',
        themeBlueDark: 'hsl(233, 12%, 13%)',
        themeBlueGray: 'hsl(227, 12%, 61%)',
        themeGrayLight: 'hsl(0, 0%, 98%)',
      },
    },
    fontFamily: {
      righteous: ['Righteous, sans-serif'],
      mukta: ['Mukta, sans-serif'],
    },
  },
  plugins: [],
}
