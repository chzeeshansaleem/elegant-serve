/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#141414",
        foreground: "#272727",
        buttonColor: "#0484ac",
        textColor: "#b3b3b3",
        textSecondaryColor: "#d21257",
        blue: "#05799d"
      },
      dropShadow: {
        blue: '0 5px 20px rgba(5, 121, 157, 0.6)',
        white: '0 5px 10px rgba(225, 225, 225, 0.6)'
      },
      boxShadow: {
        white: '0 1px 10px rgba(225, 225, 225, 0.4)'
      },
      fontFamily: {
        sans: ['Gotham', 'sans-serif'],
      },
      keyframes: {
        fadeInDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-300px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        fadeInDown: 'fadeInDown 0.7s ease-out',
      },
    },
  },
  plugins: [],
};
