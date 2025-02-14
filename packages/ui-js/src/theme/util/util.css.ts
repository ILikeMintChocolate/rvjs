import vars from '@theme/variable/vars.css.ts'
import { style } from '@vanilla-extract/css'

export const noDrag_style = style({
  msUserSelect: 'none',
  userSelect: 'none',
})

export const coolScrollBar_style = style({
  overflowY: 'scroll',
  '::-webkit-scrollbar': {
    width: '0.25rem',
  },
  '::-webkit-scrollbar-thumb': {
    backgroundColor: vars.color.borderStrong01,
  },
  '::-webkit-scrollbar-track': {
    backgroundColor: 'transparent',
  },
})
