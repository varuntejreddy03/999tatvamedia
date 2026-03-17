/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Clash Display"', 'sans-serif'],
        body:    ['"Cabinet Grotesk"', 'sans-serif'],
      },
      colors: {
        background: '#050505',
        surface:    '#080808',
        card:       '#0F0F0F',
        orange:     '#FF6B00',
        pink:       '#FF3CAC',
        purple:     '#784BA0',
        blue:       '#2B86C5',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #FF6B00 0%, #FF3CAC 40%, #784BA0 70%, #2B86C5 100%)',
      },
    },
  },
  plugins: [],
}
