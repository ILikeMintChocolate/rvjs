import vars from '@theme/variable/vars.css.ts'
import { style } from '@vanilla-extract/css'

export const iframe_wrapper_style = style({
  backgroundColor: vars.color.layer01,
  padding: vars.spacing['05'],
  boxSizing: 'border-box',
  ':focus': {
    boxShadow: `inset 0 0 0 0.125rem ${vars.color.focus}`,
  },
  ':focus-visible': {
    outline: 'none',
  },
})

export const iframe_style = style({
  width: '100%',
  height: '100%',
  // border: 'none',
  backgroundColor: vars.color.background,
})
