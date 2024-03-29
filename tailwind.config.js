/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        themeColor1: 'hsl(12, 88%, 59%)',
        themeColor1Light: 'hsl(12, 88%, 69%)',
        themeColor1LightAccent: 'hsl(12, 88%, 95%)',
        themeColor1Pale: 'hsl(12, 100%, 96%)',
        themeColor2: 'hsl(228, 39%, 23%)',
        themeColor2Dark: 'hsl(233, 12%, 13%)',
        themeColor2Gray: 'hsl(227, 12%, 61%)',
        themeGrayLight: 'hsl(0, 0%, 98%)',
      },
      backgroundImage: {
        body: "url('../dist/assets/images/bg-tablet-pattern.svg')",
        'cta-desktop':
          "url('../dist/assets/images/bg-simplify-section-desktop.svg')",
        'cta-mobile':
          "url('../dist/assets/images/bg-simplify-section-mobile.svg')",
      },
    },
    fontFamily: {
      montserrat: ['Montserrat, sans-serif'],
    },
  },
  plugins: [],
}
