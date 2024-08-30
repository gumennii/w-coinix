import { fontFamily } from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";

const config = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    colors: {
      ...colors,
      blue: '#7ab9ed',
      white: '#ffffff',
      darkBlue: '#011424',
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
