import { style } from '@vanilla-extract/css'

export const iframe_wrapper_style = style({
  width: '48rem',
  height: '16rem',
  backgroundColor: '#f4f4f4',
  padding: '1rem',
  boxSizing: 'border-box',
  ':focus': {
    boxShadow: `inset 0 0 0 0.125rem #0f62fe`,
  },
  ':focus-visible': {
    outline: 'none',
  },
})

export const iframe_style = style({
  width: '100%',
  height: '100%',
  border: 'none',
  backgroundColor: '#ffffff',
})
