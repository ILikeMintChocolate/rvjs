import { style } from '@vanilla-extract/css'

export const noContentError_style = style({
  flex: '1',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  marginTop: '-10vh',
})

export const noContentError_image_style = style({
  width: '10rem',
})

export const noContentError_text_style = style({
  textAlign: 'center',
})
