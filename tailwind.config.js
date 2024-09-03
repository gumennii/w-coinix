import { fontFamily } from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";

const config = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",

      screens: {
        '2xl': '1536px',
      },
    },
    colors: {
      ...colors,
      blue: '#7ab9ed',
      white: '#ffffff',
      darkBlue: '#011424',
      semiDarkBlue: '#06243D',
    },
    fontSize: {
      base: ['1rem', '1.75rem'],
      lg: ['1.125rem', '2rem'],
      xl: ['1.25rem', '2rem'],
      '3xl': ['1.875rem', '2.75rem'],
      '4xl': ['2.25rem', '3rem'],
      '5xl': ['3rem', '1'],
      '7xl': ['4.5rem', '1'],
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      }
    },
  },
  plugins: [],
}

export default config;
