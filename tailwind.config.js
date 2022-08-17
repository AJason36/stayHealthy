/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      // animation: {
      //   fade: "pulse 0.5s ease-in-out 1",
      // },
      keyframes: {
        'fade': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
      },
      animation: {
        'fade': 'fade 0.5s ease-out'
      },
    },
    backgroundImage: {
      bg: "url('/public/landing.png')",
    },
    
  },
  plugins: [],
};
