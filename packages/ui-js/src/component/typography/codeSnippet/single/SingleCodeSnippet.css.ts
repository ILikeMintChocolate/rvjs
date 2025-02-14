import vars from '@theme/variable/vars.css.ts'
import { style } from '@vanilla-extract/css'

export const singleCodeSnippet_wrapper_style = style({
  maxWidth: '48rem',
  height: vars.spacing['08'],
  backgroundColor: vars.color.layer01,
})

export const singleCodeSnippet_codeWrapper_style = style({
  flex: 1,
  alignItems: 'center',
  paddingLeft: vars.spacing['05'],
  paddingRight: vars.spacing['09'],
  transition: `all ${vars.motion.productive}`,
  ':focus': {
    boxShadow: `inset 0 0 0 0.125rem ${vars.color.focus}`,
  },
  ':focus-visible': {
    outline: 'none',
  },
})
