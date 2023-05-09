/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      bgPrimary: '#e6f5f2',
      bgBorder: '#c2cfce',
      bgHover: '#bae0ff',
      primaryHover: '#a7c2c1',
      primary: '#7fb5b5',
      primaryActive: '#5d8d8f',
      textColor: '#FFE8D5',
      white: '#fff',
      black: '#000',
      neutral: '#f5f5f5f5',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
