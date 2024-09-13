import { Prop } from '@rvjs/core'
import vars from '@theme/variable/vars.css.ts'
import { keyframes, style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export interface SpinnerStyleProps {
  size?: Prop<'sm' | 'lg'>
}

export const spinner_wrapper_style = style({
  width: 'fit-content',
  height: 'fit-content',
})

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
})

export const spinner_recipe = recipe({
  base: {
    borderRadius: '50%',
    boxSizing: 'border-box',
    animation: `${spin} 0.8s linear infinite`,
  },
  variants: {
    size: {
      sm: {
        width: vars.spacing['05'],
        height: vars.spacing['05'],
        border: `0.1875rem solid ${vars.color.layerAccent01}`,
        borderTop: `0.1875rem solid ${vars.color.interactive}`,
        borderLeft: `0.1875rem solid ${vars.color.interactive}`,
      },
      md: {
        width: vars.spacing['08'],
        height: vars.spacing['08'],
        border: `${vars.spacing['02']} solid transparent`,
        borderTop: `${vars.spacing['02']} solid ${vars.color.interactive}`,
        borderLeft: `${vars.spacing['02']} solid ${vars.color.interactive}`,
        borderBottom: `${vars.spacing['02']} solid ${vars.color.interactive}`,
      },
      lg: {
        width: vars.spacing['11'],
        height: vars.spacing['11'],
        border: `${vars.spacing['03']} solid transparent`,
        borderTop: `${vars.spacing['03']} solid ${vars.color.interactive}`,
        borderLeft: `${vars.spacing['03']} solid ${vars.color.interactive}`,
        borderBottom: `${vars.spacing['03']} solid ${vars.color.interactive}`,
      },
    },
  },
})
