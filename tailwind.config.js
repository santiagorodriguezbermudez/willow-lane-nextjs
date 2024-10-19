/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        haboro: ['Haboro Contrast', 'serif'],
      },
      colors: {
        primary: '#094B30',
        secondary: '#297D56',
        accent: '#45A378',
      },
    },
  },
  plugins: [],
}