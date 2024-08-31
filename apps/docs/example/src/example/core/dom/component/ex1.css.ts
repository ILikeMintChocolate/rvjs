import { style } from '@vanilla-extract/css'

export const wrapper_style = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100px',
  width: '150px',
})

export const contentWrapper_style = style({
  height: '50px',
})

export const content_style = style({
  textAlign: 'center',
})
