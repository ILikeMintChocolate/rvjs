import { vars } from '@theme/variable.ts'
import { style } from '@vanilla-extract/css'

export const web_style = style({
  position: 'relative',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
  height: '100%',
  backgroundColor: vars.color.background,
})

export const content_style = style({
  width: 'fit-content',
  height: 'fit-content',
  position: 'relative',
})
