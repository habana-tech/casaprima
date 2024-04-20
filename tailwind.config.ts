import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    darkMode: false,
    extend: {

      colors: {
        // primary: '#5c6ac4',
        // secondary: '#ecc94b',
        pink: {
          50: '#FFFDFD',
          100: '#FFF7F6 ',
          200: '#FEEEEC',
          300: '#FEE1DD',
          400: '#FDCFC9',
          500: '#FCBBB2',
          600: '#FBA296',
          700: '#F98576',
          800: '#B81C08',
          900: '#530D03',
          950: '#310802'
        },
        red: {
          50: '#FFF5F5',
          100: '#FED7D7',
          200: '#FBB6B6',
          300: '#F68787',
          400: '#EF4444',
          500: '#DC2626',
          600: '#F8704B',
          700: '#F54514',
          800: '#8C2306    ',
          900: '#481203',
          950: '#310C02'
        },
        yellow: {
          50: '#FFFEFC',
          100: '#FFFBF3',
          200: '#FEF7E5',
          300: '#FDF0D0',
          400: '#FCE8B6',
          500: '#FBDE96',
          600: '#F9D271',
          700: '#F7C545',
          800: '#A27607 ',
          900: '#4D3803',
          950: '#312402'
        },
        green: {
          50: '#F9FFFD',
          100: '#E7FEF7',
          200: '#C9FDED',
          300: '#9FFCDE',
          400: '#69FACC',
          500: '#27F7B5',
          600: '#07C68A',
          700: '#046C4B',
          800: '#034B34',
          900: '#023827',
          950: '#023122'
        },
        blue: {
          50: '#F8F8FF',
          100: '#E3E3FE',
          200: '#C0C0FC',
          300: '#9090F9',
          400: '#5151F6',
          500: '#0C0CEA',
          600: '#08088F',
          700: '#020227',
          800: '#010111',
          900: '#000004',
          950: '#000000'
        },
        gray: {
          50: '#FBFBFB',
          100: '#EFEFEF',
          200: '#DBDBDB',
          300: '#BFBFBF',
          400: '#9B9B9B',
          500: '#707070',
          600: '#3C3C3C',
          700: '#3C3C3C',
          800: '#3C3C3C',
          900: '#3C3C3C',
          950: '#3C3C3C'
        },
        coolGray: {
          50: '#FBFBFB',
          100: '#EFEFEF',
          200: '#DBDBDB',
          300: '#BFBFBF',
          400: '#9B9B9B',
          500: '#707070',
          600: '#3C3C3C',
          700: '#3C3C3C',
          800: '#3C3C3C',
          900: '#3C3C3C',
          950: '#3C3C3C'
        },
      },
    },

    fontFamily: {
      'title': ['"Ivy Mode"', 'sans-serif'],
      'primary': ['Quicksand', 'serif'], // Ensure fonts with spaces have " " surrounding it.
      'sans': ['Quicksand', 'sans-serif'] // Ensure fonts with spaces have " " surrounding it.
    },
  }
}
