import { style } from '@vanilla-extract/css'

export const wrapper_style = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  height: '100%',
  width: '40%',
  padding: '1rem',
  boxSizing: 'border-box',
})

export const ul_style = style({
  flex: 1,
  listStyle: 'none',
  padding: 0,
  margin: 0,
})
