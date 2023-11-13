import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding:{
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      }
    },
    extend: {
      backgroundImage: {
        'pattern-1': "url('/assets/images/bg/pattern-1.png')"
      },
      colors: {
        'main-50': '#e8eaf6',
        'main-100': '#c5cae9',
        'main-200': '#9fa8da',
        'main-300': '#7986cb',
        'main-400': '#5c6bc0',
        'main-500': '#3f51b5',
        'main-600': '#3949ab',
        'main-700': '#303f9f',
        'main-800': '#283593',
        'main-900': '#1a237e',
        'sec-500': '#fed188',
        'sec-600': '#efb352',
      }
    },
  },
  plugins: [],
}
export default config
