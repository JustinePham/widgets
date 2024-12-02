/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,tsx,jsx}'],
  safelist: [
    {
      pattern:  /(bg|text|border)-(purple|cyan|orange|yellow|green|black|gray|blue|red|blue|white)/, // 👈  This includes bg of all colors and shades
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
