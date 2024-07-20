import { createVar, style } from '@vanilla-extract/css'

export const orderedList_listStyleType_var = createVar()

export const orderedList_style = style({
  margin: 0,
  listStyleType: orderedList_listStyleType_var,
})
