import { style } from '@vanilla-extract/css'

export const shell_wrapper_style = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100vw',
  margin: 0,
  padding: 0,
})

export const shell_bodyWrapper_style = style({
  display: 'flex',
  width: '100%',
  maxWidth: '90rem',
  marginInline: 'auto',
})

export const shell_body_style = style({
  display: 'flex',
  flex: '1',
})
