/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      // sm: '480px',
      // md: '768px',
      // lg: '976px',
      // xl: '1440px',
    },
    colors: {
      blue: '#7ab9ed',
      white: '#ffffff',
      darkBlue: '#011424',
    },
    fontFamily: {
      // sans: ['Graphik', 'sans-serif'],
      // serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        // '128': '32rem',
        // '144': '36rem',
      },
      borderRadius: {
        // '4xl': '2rem',
      }
    }
  },
  plugins: [],
}
