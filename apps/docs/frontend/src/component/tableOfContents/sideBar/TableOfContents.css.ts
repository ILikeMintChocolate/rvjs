import { style } from '@vanilla-extract/css'

export const tableOfContents_style = style({
  position: 'sticky',
  width: '16rem',
  height: `calc(100vh - 10rem)`,
  top: '4rem',
  flexDirection: 'column',
  backgroundColor: '#ffffff',
  marginTop: '1rem',
  marginBottom: '6rem',
  boxSizing: 'border-box',
  '@media': {
    'screen and (max-width: 89.9375rem)': {
      display: 'none !important',
    },
    'screen and (min-width: 90rem)': {
      display: 'flex !important',
    },
  },
})
