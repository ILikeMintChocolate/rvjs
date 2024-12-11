import vars from '@theme/variable/vars.css.ts'
import { style } from '@vanilla-extract/css'

export const header_wrapper_style = style({
  position: 'sticky',
  display: 'flex',
  top: 0,
  width: '100vw',
  height: vars.component.header.height,
  backgroundColor: vars.color.background,
  boxShadow: `inset 0 -0.0625rem 0 0 ${vars.color.borderSubtle00}`,
  justifyContent: 'center',
  zIndex: 100,
})

export const header_content_style = style({
  display: 'flex',
  top: 0,
  width: '90rem',
  height: vars.component.header.height,
  backgroundColor: vars.color.background,
  boxShadow: `inset 0 -0.0625rem 0 0 ${vars.color.borderSubtle00}`,
})
