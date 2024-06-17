import vars from '@theme/variable/vars.css.js'
import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const multiCodeSnippet_wrapper_style = style({
  width: 'fit-content',
  maxWidth: '48rem',
  backgroundColor: vars.color.layer01,
})

export const multiCodeSnippet_codeWrapper_style = style({
  flex: 1,
  alignItems: 'center',
  height: 'fit-content',
  boxSizing: 'border-box',
  paddingLeft: vars.spacing['05'],
  paddingTop: vars.spacing['05'],
  paddingBottom: vars.spacing['05'],
  transition: `all ${vars.motion.productive}`,
  ':focus': {
    boxShadow: `inset 0 0 0 0.125rem ${vars.color.focus}`,
  },
  ':focus-visible': {
    outline: 'none',
  },
})

export const multiCodeSnippet_pre_style = style({
  margin: 0,
  overflowY: 'hidden',
})

export const multiCodeSnippet_showMoreIcon_recipe = recipe({
  base: {
    // @ts-ignore
    '& svg': {
      transition: `all ${vars.motion.productive}`,
    },
  },
  variants: {
    showMore: {
      true: {
        // @ts-ignore
        '& svg': {
          transform: 'rotate(180deg)',
        },
      },
      false: {
        // @ts-ignore
        '& svg': {
          transform: 'rotate(0deg)',
        },
      },
    },
  },
})
