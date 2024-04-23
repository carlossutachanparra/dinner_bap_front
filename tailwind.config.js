
/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{html,js,ts,svelte}']
export const darkMode = 'class'
export const theme = {
  screens: {
    xs: '470px'
  },
  extend: {
    colors: {
      primary: '#6E7A00',
      secondary: '#3C373B'
    },
    fontFamily: {
      mulish: 'Mulish'
    },
    spacing: {
      100: '25rem',
      104: '26rem',
      112: '28rem',
      120: '30rem',
      128: '32rem',
      136: '34rem',
      144: '36rem'
    },
    pageBreak: {
      always: {
        'page-break-after': 'always'
      }
    }
  }
}
export const variants = {
  extend: {}
}
export const plugins = []
