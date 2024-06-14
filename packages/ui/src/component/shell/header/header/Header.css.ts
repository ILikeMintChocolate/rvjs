import vars from '@theme/variable/vars.css.ts'
import { style } from '@vanilla-extract/css'

export const header_style = style({
  top: 0,
  width: '100vw',
  height: vars.spacing['09'],
  backgroundColor: vars.color.background,
  boxShadow: `inset 0 -0.0625rem 0 0 ${vars.color.borderSubtle00}`,
})
