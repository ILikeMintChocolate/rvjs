import { style } from '@vanilla-extract/css'

export const wrapper_style = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
})

export const heading_style = style({
  margin: 0,
})

export const buttonWrapper_style = style({
  display: 'flex',
  justifyContent: 'center',
  gap: '0.5rem',
})

export const button_style = style({
  width: '3rem',
})
