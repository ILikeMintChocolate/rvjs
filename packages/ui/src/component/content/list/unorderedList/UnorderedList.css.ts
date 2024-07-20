import { createVar, style } from '@vanilla-extract/css'

export const unorderedList_listStyleType_var = createVar()

export const unorderedList_style = style({
  margin: 0,
  listStyleType: unorderedList_listStyleType_var,
})
