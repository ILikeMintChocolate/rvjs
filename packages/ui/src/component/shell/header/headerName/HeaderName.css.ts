import vars from '@theme/variable/vars.css.ts'
import { style } from '@vanilla-extract/css'

export const headerName_style = style({
  height: '100%',
  display: 'flex',
  gap: vars.spacing['02'],
  paddingLeft: vars.spacing['07'],
  paddingRight: vars.spacing['07'],
  textDecoration: 'none',
  transition: `all ${vars.motion.productive}`,
  ':focus': {
    boxShadow: `inset 0 0 0 0.125rem ${vars.color.focus}`,
  },
  ':focus-visible': {
    outline: 'none',
  },
})
