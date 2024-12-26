/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.tsx',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primaryGreen: '#0FD08B',
        backgroundGray: '#F9F5FE',
        notesGray: '#F7F7F7',
        disabledButton: '#0FD08B',
      },
    },
  },
  plugins: [],
};
