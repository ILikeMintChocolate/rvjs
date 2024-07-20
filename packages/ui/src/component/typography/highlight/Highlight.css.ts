import vars from '@theme/variable/vars.css.ts'
import { style } from '@vanilla-extract/css'

export const highlight_style = style({
  width: 'fit-content',
  height: 'fit-content',
  paddingLeft: vars.spacing['01'],
  paddingRight: vars.spacing['01'],
  background: `linear-gradient(90deg, #FFCB4499 0%, #FFCB44B3 80%, #FFCB44CC 100%)`,
})
