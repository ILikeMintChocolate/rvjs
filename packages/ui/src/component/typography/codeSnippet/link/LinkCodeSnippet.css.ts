import vars from '@theme/variable/vars.css.ts'
import { style } from '@vanilla-extract/css'

export const linkCodeSnippet_anchor_style = style({
  display: 'inline-flex',
  width: 'fit-content',
  height: vars.spacing['05'],
  cursor: 'pointer',
  border: 'none',
  borderRadius: vars.spacing['01'],
  backgroundColor: vars.color.layer01,
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

export const linkCodeSnippet_code_style = style({
  paddingRight: vars.spacing['02'],
  paddingLeft: vars.spacing['02'],
})
