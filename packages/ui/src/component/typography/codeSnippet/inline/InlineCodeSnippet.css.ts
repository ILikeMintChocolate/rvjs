import vars from '@theme/variable/vars.css.ts'
import { style } from '@vanilla-extract/css'

export const inlineCodeSnippet_button_style = style({
  width: 'fit-content',
  height: vars.spacing['05'],
  cursor: 'pointer',
  border: 'none',
  borderRadius: vars.spacing['01'],
  backgroundColor: vars.color.layer01,
  padding: '0',
  ':hover': {
    backgroundColor: vars.color.layerHover01,
  },
  ':focus': {
    boxShadow: `0 0 0 0.125rem ${vars.color.focus}`,
  },
  ':active': {
    backgroundColor: vars.color.layerActive01,
  },
  ':focus-visible': {
    outline: 'none',
  },
})

export const inlineCodeSnippet_code_style = style({
  paddingRight: vars.spacing['03'],
  paddingLeft: vars.spacing['03'],
})
