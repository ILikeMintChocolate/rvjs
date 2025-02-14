import vars from '@theme/variable/vars.css.ts'
import { style } from '@vanilla-extract/css'

export const headerHr_style = style({
  position: 'relative',
  top: '50%',
  width: '0.0625rem',
  height: vars.spacing['06'],
  backgroundColor: vars.color.borderSubtle00,
  transform: 'translateY(-50%)',
})
