/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/components/*.{js,ts,jsx,tsx}',
    './src/pages/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        h1: '36px',
        h2: '24px',
        h3: '22px',
        h4: '20px',
        h5: '16px',
        h6: '12px',
      },
      listStyleType: {
        square: 'square',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        tahoma: ['Tahoma', 'sans-serif'],
      },
      keyframes: {
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
      animation: {
        slideinleft: '1s ease-out 0s 1 slideInLeft',
      },
    },
  },
  plugins: [],
};
