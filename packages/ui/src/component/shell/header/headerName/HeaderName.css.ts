import vars from '@theme/variable/vars.css.ts'
import { recipe } from '@vanilla-extract/recipes'

export const headerName_recipe = recipe({
  base: {
    height: '100%',
    display: 'flex',
    gap: vars.spacing['02'],

    textDecoration: 'none',
    transition: `all ${vars.motion.productive}`,
    ':focus': {
      boxShadow: `inset 0 0 0 0.125rem ${vars.color.focus}`,
    },
    ':focus-visible': {
      outline: 'none',
    },
  },
  variants: {
    deviceType: {
      desktop: {
        paddingLeft: vars.spacing['07'],
        paddingRight: vars.spacing['07'],
      },
      mobile: {
        paddingLeft: vars.spacing['05'],
        paddingRight: vars.spacing['05'],
      },
    },
  },
})
