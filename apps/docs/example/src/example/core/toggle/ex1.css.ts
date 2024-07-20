import { vars } from '@theme/variable.ts'
import { style } from '@vanilla-extract/css'

export const wrapper_style = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '40%',
})

export const content_style = style({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  textAlign: 'center',
  color: vars.color.textPrimary,
})
