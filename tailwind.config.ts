import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        'dark-cyan' : 'hsl(158, 36%, 37%)',
        'cream' : 'hsl(30, 38%, 92%)',
        'very-dark-blue' : 'hsl(212, 21%, 14%)',
        'dark-grayish-blue' : 'hsl(228, 12%, 48%)',
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        fraunces: ['Fraunces', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif']
      },
    },
  },
  plugins: [],
} satisfies Config;
