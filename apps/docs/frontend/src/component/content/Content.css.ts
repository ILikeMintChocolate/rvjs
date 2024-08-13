import { style } from '@vanilla-extract/css'

export const content_outer_style = style({
  flexDirection: 'row',
  justifyContent: 'center',
  flex: '1',
  paddingBottom: '10rem',
  paddingTop: '2rem',
})

export const content_inner_style = style({
  flexDirection: 'column',
  width: '42rem',
})
