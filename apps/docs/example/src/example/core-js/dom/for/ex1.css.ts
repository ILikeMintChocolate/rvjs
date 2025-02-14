import { style } from '@vanilla-extract/css'

export const products_style = style({
  width: '200px',
  display: 'flex',
  flexDirection: 'column',
})

export const productsUl_style = style({
  height: '100px',
  overflowY: 'scroll',
})
