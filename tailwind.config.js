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
        haboro: ['Haboro Contrast', 'sans-serif'],
        'source-sans': ['"Source Sans 3"', 'sans-serif'],
      },
      fontSize: {
        'heading-lg': ['29.9px', { lineHeight: '1.2' }],
        'heading': ['24.7px', { lineHeight: '1.2' }],
        'body': ['27.3px', { lineHeight: '1.4' }],
        'doc': ['23.4px', { lineHeight: '1.3' }],
        'contact': ['26px', { lineHeight: '1.3' }],
        'heading-mobile': ['20px', { lineHeight: '1.2' }],
        'body-mobile': ['18px', { lineHeight: '1.4' }],
        'doc-mobile': ['16px', { lineHeight: '1.3' }],
        'contact-mobile': ['18px', { lineHeight: '1.3' }],
      },
      colors: {
        primary: '#094B30',
        secondary: '#297D56',
        accent: '#45A378',
        tertiary: '#64C79A',
        'gray-dark': "#464746",
        'gray-light': "#EFEFEF"
      },
    },
  },
  plugins: [],
}